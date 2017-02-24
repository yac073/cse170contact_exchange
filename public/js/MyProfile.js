
$(document).ready(function() {
    initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {

	$("#phone").click(showPhone);
	$("#email").click(showEmail);
    $("#fb").click(showFB);  
}

function showPhone(event){
    $(this).append("<p>123-456-789</p>");
    var btn_pub = document.createElement("BUTTON");        
    var btn_del = document.createElement("BUTTON");
	var t = document.createTextNode("Public");       
	var s = document.createTextNode("Delete");
	btn_pub.appendChild(t);  
	btn_del.appendChild(s);

	var foo = document.getElementById("phone");
	foo.appendChild(btn_pub); 
	foo.appendChild(btn_del);
  }

function showEmail(event){
	$(this).append("<p>xxx@ucsd.edu</p>");
	var btn_pub = document.createElement("BUTTON");        
    var btn_del = document.createElement("BUTTON");
	var t = document.createTextNode("Public");       
	var s = document.createTextNode("Delete");
	btn_pub.appendChild(t);  
	btn_del.appendChild(s);

	var foo = document.getElementById("email");
	foo.appendChild(btn_pub); 
	foo.appendChild(btn_del);

}

function showFB(event){
	$(this).append("<a href=https://www.facebook.com/><p> link to FB</p></a>");
}

function backToIndex() {
    var url = window.location.href;
    var index = url.indexOf("/my-profile/");
    var idStr = url.substring(index + 12);
    window.location.href = "/?id=" + idStr;
}

function editProfile() {
    var url = window.location.href;
    var index = url.indexOf("/my-profile/");
    var idStr = url.substring(index + 12);    
    window.location.href = "../edit-profile/" + idStr;
}

function infoClick(elem) {

}

function togglePublic(elem) {
    var $buttonClicked = $(elem);
    var id = $buttonClicked.attr("id");
    var url = window.location.href;
    var index = url.indexOf("/my-profile/");
    var idStr = url.substring(index + 12);
    if ($buttonClicked.text() == "public") {
        $buttonClicked.text("private");
        $.get('/togglePublicGeneral/' + id + '/' + idStr);
    } else {
        $buttonClicked.text("public");
        $.get('/togglePublicGeneral/' + id + '/' + idStr);
    }
}

function remove(elem) {
    var $buttonClicked = $(elem);
    var id = $buttonClicked.attr("id");
    var url = window.location.href;
    var index = url.indexOf("/my-profile/");
    var idStr = url.substring(index + 12);
    var lis = document.querySelectorAll('#buttonContainer');
    for (var i = 0; i < lis.length; i++) {
        if ($(lis[i]).attr(id) == id) {
            lis[i].parentNode.removeChild(lis[i]);
            break;
        }
    }
}