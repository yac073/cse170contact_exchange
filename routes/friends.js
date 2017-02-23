var friends = require('../people.json');

exports.getFriends = function (req, res) {
    res.json(friends);
}