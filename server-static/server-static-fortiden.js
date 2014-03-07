var express =       require('express')
    , http =        require('http')
    , path =        require('path');

var app = module.exports = express();

app.set('views', __dirname + '/../client/src/views');
app.set('view engine', 'jade');
app.use(express.logger('dev'))
app.use(express.cookieParser());
app.use(express.bodyParser());
app.use(express.methodOverride());
//app.use(express.static(path.resolve(__dirname + '../client'), {maxAge: 100}));
app.use(express.static(path.join(__dirname, '/../client/src')));

require('./routes.js')(app);
app.set('port', process.env.PORT || 3017);
http.createServer(app).listen(app.get('port'), function(){
    console.log(__dirname);
    console.log(app.get ('views'));
    console.log("Fortiden STATIC server listening on port " + app.get('port'));
});
