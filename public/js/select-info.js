function backToAddNewContactPage() {
    //window.location.href = "add-new-account";
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

function confirmPage() {
    window.location.href = "confirm";
}