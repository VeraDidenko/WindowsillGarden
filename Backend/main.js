var express = require('express');
var path = require('path');
var morgan = require('morgan');

function configureEndpoints(app) {
    var pages = require('./pages');

    app.get('/', pages.homePage);

    app.get('/tutorials.html', pages.tutorialsPage);

    app.get('/test.html', pages.testPage);

    app.get('/explore.html', pages.explorePage);

    app.get('/succulent.html', pages.succulentPage);

    app.get('/herb.html', pages.herbPage);

    app.get('/flower.html', pages.flowerPage);

    app.use(express.static(path.join(__dirname, '../Frontend/www')));
}

function startServer(port) {
    var app = express();

    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'ejs');

    app.use(morgan('dev'));

    configureEndpoints(app);

    app.listen(port, function () {
        console.log('My Application Running on http://localhost:'+port+'/');
    });
}

exports.startServer = startServer;