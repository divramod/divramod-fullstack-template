var _ = require('underscore')
    , userRoles = require('../client/src/js/routingConfig').userRoles
    , path = require('path');

var routes = [

    // Views
    {
        path: '/partials/*',
        httpMethod: 'GET',
        middleware: [
            function(req, res) {
                var requestedView = path.join('./', req.url);
                res.render(requestedView);
            }
        ]
    },

    // CSS
    {
        path: '/css/*',
        httpMethod: 'GET',
        middleware: [
            function(req, res) {
                var requestedView = path.join('./', req.url);
                res.send(requestedView);
            }
        ]
    },

    // All other get requests should be handled by AngularJS's client-side routing system
    {
        path: '/*',
        httpMethod: 'GET',
        middleware: [function(req, res) {
            var role = userRoles.public, username = '';
            if(req.user) {
                role = req.user.role;
                username = req.user.username;
            }
            res.cookie('user', JSON.stringify({
                'username': username,
                'role': role
            }));
            //res.render('index');
            res.render('index');
            // TODO --> send 
        }]
    }

];

module.exports = function(app) {

    _.each(routes, function(route) {
        var args = _.flatten([route.path, route.middleware]);

        switch (route.httpMethod.toUpperCase()) {
            case 'GET':
                app.get.apply(app, args);
                break;
            case 'POST':
                app.post.apply(app, args);
                break;
            case 'PUT':
                app.put.apply(app, args);
                break;
            case 'DELETE':
                app.delete.apply(app, args);
                break;
            default:
                throw new Error('Invalid HTTP method specified for route ' + route.path);
                break;
        }
    });
}
