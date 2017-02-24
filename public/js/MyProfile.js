
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
    window.location.href = "/";
}

function editProfile() {
    window.location.href = "edit-profile";
}