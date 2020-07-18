const { Park } = require('../models/park');

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

exports.edit = async function edit(req, res) {
    const { _id } = req.params;
    const parkEdit = await Park.updateOne(req.body).where({ _id }) ;
    res.json(parkEdit);
};