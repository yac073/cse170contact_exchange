exports.view = function (req, res) {
    res.render('my-profile');
    var id = req.params.id.toString();  
    var userProfile = require('../' + id + '.json');
    console.log(userProfile);
};