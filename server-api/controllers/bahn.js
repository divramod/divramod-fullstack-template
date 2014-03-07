var _ =           require('underscore')
    , Bahn =      require('../models/Bahn.js')
    , userRoles = require('../../client/src/js/routingConfig').userRoles;

module.exports = {
    index: function(req, res) {
        Bahn.list(req, res);
    }
    , create: function(req, res) {
        Bahn.create(req, res);
    }
    , delete: function(req, res) {
        Bahn.delete(req, res);
    }
};
