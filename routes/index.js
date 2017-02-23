var friends = require('../people.json');

/*
 * GET home page.
 */

exports.view = function (req, res) {
    res.render('index', friends);
};
