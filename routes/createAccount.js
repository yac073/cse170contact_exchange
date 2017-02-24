var allUser = require('../allUserEmPa.json');
var fs = require('fs');


exports.view = function (req, res) {
    res.render('create-account');
};

exports.addAccount = function (req, res) {    
    var name = req.params.userName;
    var pa = req.params.pa;
    var userNum = allUser.user.length;
    fs.readFile('allUserEmPa.json', 'utf8', function readFileCallback(err, data) {
        if (err) {
            console.log(err);
        } else {
            userNum += 1;
            allUser.user.push({ id: userNum, na: name, pa: pa });
            var json = JSON.stringify(allUser);
            fs.writeFile('allUserEmPa.json', json, 'utf8', function errorCallback(err) {
                if (err) {
                    console.log(err);
                }
            });
            var userJsonFileName = userNum.toString() + ".json";
            var id = userNum;
            var userName = name;
            var allData = {
                id,
                name,
                userName,
                selfInfos: {
                    info: []
                },
                contacts: {
                    contact: []
                }
            };
            var json2 = JSON.stringify(allData);
            fs.writeFile(userJsonFileName, json2, 'utf8', function errorCallback(err) {
                if (err) {
                    console.log(err);
                }
            });
        }
    })
};

exports.checkName = function (req, res) {
    var name = req.params.userName;
    var i;
    var result = 0;
    for (i = 0; i < allUser.user.length; i++) {
        if (allUser.user[i].na == name) {
            result = -1;
            res.json(result);
        }
    }
    if (result == 0) {
        res.json(0);
    }
}