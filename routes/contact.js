exports.viewContact = function (req, res) {
	var name = req.params.name;
	console.log("The contact name is: " + name);
    res.render('contact', {
  	'contactName': name
  });
};