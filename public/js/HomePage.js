function toggleSidebar() {
    var $sideBar = $("#side_bar");
    var $sideBarMask = $("#side_bar_mask");
    var $topBar = $("#top_bar");
    var $topBarMask = $("#top_bar_mask");
    if ($sideBar.hasClass("active")) {
        $sideBar.removeClass("active");
        $sideBarMask.fadeOut("fast");
    } else {
        if ($topBar.hasClass("active")) {
            $topBar.removeClass("active");
            $topBarMask.fadeOut("fast");
        }
        $sideBar.addClass("active");
        $sideBarMask.fadeIn("fast");
    }
}

function toggleNewContact() {
    var $sideBar = $("#side_bar");
    var $sideBarMask = $("#side_bar_mask");
    var $topBar = $("#top_bar");
    var $topBarMask = $("#top_bar_mask");
    if ($topBar.hasClass("active")) {
        $topBar.removeClass("active");
        $topBarMask.fadeOut("fast");
    } else {
        if ($sideBar.hasClass("active")) {
            $sideBar.removeClass("active");
            $sideBarMask.fadeOut("fast");
        }
        $topBar.addClass("active");
        $topBarMask.fadeIn("fast");
    }
}

function changePageToAdd() {
    window.location.href = "add-new-account";
}

function changePageToMyProfile() {
    window.location.href = "my-profile";
}

function changePageToGroups() {
    window.location.href = "groups";
}

function changePageToSettings() {
    window.location.href = "setting";
}

function logOff() {
    window.location.href = "log-off";
}
function changePageToContact(elem) {
    var $buttonClicked = $(elem);
    var id = $buttonClicked.attr("id");
    window.location.href = "contact.html?id=" + id;
}


//$.getJSON("../../people.json", function (data) {
//    var i;
//    for (i = 0; i < data.person.length; i++) {
//        $("#contact_list").append(
//            '<li class="contact_item"><button id="' + data.person[i].id + '" onclick="changePageToContact(this)"><img  class="contact_img" src="' + data.person[i].imageURL + '"><strong>' + data.person[i].name + '</strong></button></li>'
//        );
//    }
//});