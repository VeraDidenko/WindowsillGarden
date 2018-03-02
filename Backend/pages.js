exports.homePage = function(req, res) {
    res.render('homePage', {
        pageTitle: 'Windowsill Garden'
    });
};

exports.tutorialsPage = function(req, res) {
    res.render('tutorialsPage', {
        pageTitle: 'Tutorials'
    });
};

exports.testPage = function(req, res) {
    res.render('testPage', {
        pageTitle: 'Flower Test'
    });
};

exports.explorePage = function(req, res) {
    res.render('explorePage', {
        pageTitle: 'Types of Gardens'
    });
};

exports.succulentPage = function(req, res) {
    res.render('succulentPage', {
        pageTitle: 'Succulent Garden'
    });
};

exports.herbPage = function(req, res) {
    res.render('herbPage', {
        pageTitle: 'Herb Garden'
    });
};

exports.flowerPage = function(req, res) {
    res.render('flowerPage', {
        pageTitle: 'Flower Garden'
    });
};