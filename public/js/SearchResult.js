function backToAddNewContactPage() {
    //window.location.href = "add-new-account";
    var url = window.location.href;
    console.log(url);
    var index = url.indexOf("ount/");
    console.log(index);
    //var idStr = url.substring(index + 5);
    console.log(idStr);
    //window.location.href = "/?id=" + idStr;
    var idStr = index + 5;
    window.location.href = "/?id=" + idStr;
}

function selectInfoToSend() {
    window.location.href = "select_info";
}

//$.getJSON("people.json", function (data) {
//    console.log(data);
//    var i;
//    var url = window.location.href;
//    var index = url.indexOf("?name=");
//    var name = url.substring(index + 6);
//    for (i = 0; i < data.person.length; i++) {
//        if (data.person[i].name.toLowerCase().includes(name.toLowerCase())) {
//            $("#result_list").append(
//                '<li class="contact_item"><button id="' + data.person[i].id + '" onclick="requestAddToContact(this)"><img  class="contact_img" src="' + data.person[i].imageURL + '"><strong>' + data.person[i].name + '</strong></button></li>'
//            );
//        }
//    }
//});
function requestAddToContact(elem) {
    var $buttonClicked = $(elem);
    var id = $buttonClicked.attr("id");
    window.location.href = "add-contact.html?id=" + id;
}