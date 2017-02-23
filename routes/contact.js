var data = require('../people.json');

exports.viewContact = function (req, res) {
	var name = req.params.name;
	console.log("The contact name is: " + name);

//	for (i = 0; i < data.person.length; i++){
//        if (data.person[i].name == name){
//        		$(".contact_info").append(data.person[i].name);
//        }
//    }
    res.render('contact');
};