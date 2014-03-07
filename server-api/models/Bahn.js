var MongoClient = require('mongodb').MongoClient
    , ObjectID = require('mongodb').ObjectID
    , config = require('../config.js')
    , format = require('util').format
    , dbname = config.dbname
    , collectionName = "bahn";

exports.update = function(req, res) {
    MongoClient.connect(dbname, function(err, db) {
        if (err) throw err;
        var entityId = req.body._id;
        delete req.body._id;
        var col = db.collection(collectionName);
        col.update({
            _id: ObjectID(entityId)
        }, req.body, function(err, data) {
            if (err) throw err;
            console.log("data: " + data);
            res.json({
                status: data
            });
        })
    });
}

exports.create = function(req, res) {
    MongoClient.connect(dbname, function(err, db) {
        if (err) throw err;
        var col = db.collection();
        //console.log(req.body);
        col.insert(req.body, function(err, docs) {
            col.find(req.body, {
                //_id: 1,
                //email: 1,
                //kurz: 1,
                //beschreibung: 1
            }).toArray(function(err, entity) {
                db.close();
                res.json(entity[0]);
            });
        });
    });
}

// TODO: find by critria
exports.list = function(req, res) {
    console.log("list bahnen");
    MongoClient.connect(dbname, function(err, db) {
        if (err) throw err;
        var col = db.collection(collectionName);
        col.find().toArray(function(err, entity) {
            res.json(entity);
            db.close();
        });
    });
}

exports.find = function(req, res) {
    console.log("find");
    MongoClient.connect(dbname, function(err, db) {
        if (err) throw err;
        var col = db.collection(collectionName);
        //console.log(collectionName);
        //console.log(req.body._id);
        col.find({
            _id: ObjectID(req.body._id)
        }).toArray(function(err, entity) {
            //console.log(entity);
            res.json(entity[0]);
            db.close();
        });
    });
}

exports.delete = function(req, res) {
    MongoClient.connect(dbname, function(err, db) {
        console.log(req.body.id);
        if (err) throw err;
        var col = db.collection(collectionName);
        col.remove({
            _id: ObjectID(req.body.id)
        }, function(err, data) {
            if (err) throw err;
            db.close();
            res.json({
                status: data
            });
        })
    });
}
