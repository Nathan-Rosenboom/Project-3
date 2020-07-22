const { Park } = require('../models');

exports.list = async function list(req, res) {
  try {
      const parks = await Park.find({});
      res.json(parks);
  } catch (e) {
      res.status(500);
  }
};

exports.add = async function add(req, res) {
    const park = await Park.create(req.body);
    res.json(park);
};
