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
            var allData = {
                id,
                name,
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