const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 4000;
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const apiRoutes = express.Router();

let Park = require("./models/park");

// Define middleware here
app.use(cors());
app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here

apiRoutes.route('/').get(function(req, res) {
  Park.find(function(err, parks) {
      if (err) {
          console.log(err);
      } else {
          res.json(parks);
      }
  });
});
apiRoutes.route('/:id').get(function(req, res) {
  let id = req.params.id;
  Park.findById(id, function(err, park) {
      res.json(park);
  });
});
apiRoutes.route('/update/:id').post(function(req, res) {
  Park.findById(req.params.id, function(err, park) {
      if (!park)
          res.status(404).send("data is not found");
      else
          park.park_name = req.body.park_name;
          park.park_description = req.body.park_description;
          park.park_address = req.body.park_address;
          park.park_playground = req.body.park_playground;
          park.park_toilets = req.body.park_toilets;
          park.park_exerciseFacilities = req.body.park_exerciseFacilities;
          park.park_petsAllowed = req.body.park_petsAllowed;
          park.save().then(park => {
              res.json('Park info updated!');
          })
          .catch(err => {
              res.status(400).send("Update not possible");
          });
  });
});
apiRoutes.route('/add').post(function(req, res) {
  let park = new Park(req.body);
  park.save()
      .then(park => {
          res.status(200).json({'park': 'Park added successfully'});
      })
      .catch(err => {
          res.status(400).send('adding new park failed');
      });
});

app.use('/api/parks', apiRoutes);
// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

mongoose.connect(process.env.MONGODB_URI || "mongodb://firstUser:magneticDog2000@ds139428.mlab.com:39428/heroku_k2fvfw0g",
{ useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
