var fs = require('fs');

exports.view = function (req, res) {
    res.render('edit-profile');
};

exports.add = function (req, res) {    
    var idStr = req.params.id;
    var title = req.params.title;
    var sub = req.params.sub;
    var con = req.params.con;
    var fileName = "../" + idStr + ".json";
    var fileName2 = idStr + ".json";
    var userFile = require(fileName);
    var id = userFile.selfInfos.length + 1;
    userFile.selfInfos.push({ Title: title, Subtitle: sub, content: con, public: "public", deleted: "0",id:id });
    console.log(userFile);
    var json = JSON.stringify(userFile);
    fs.writeFile(fileName2, json, 'utf8', function errorCallback(err) {
        console.log("write");
        if (err) {            
            console.log("wrong");
        } else {
            res.json(1);
        }
    });
}