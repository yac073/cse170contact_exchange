function add() {
    var success = 0;
    var url = window.location.href;
    var index = url.indexOf("/edit-profile/");
    var idStr = url.substring(index + 14);
    var title = document.getElementById('title');
    if (title.value.length == 0) {
        alert("Title cannot be empty!")
    } else {
        var sub = document.getElementById('sub');
        if (sub.value.length == 0) {
            alert("Subtitle cannot be empty!")
        } else {
            var con = document.getElementById('con');
            if (con.value.length == 0) {
                alert("Content cannot be empty!")
            } else {
                $.get('/edit-profile/' + idStr + '/' + title.value + '/' + sub.value + '/' + con.value, review);
            }
        }
    }    
}

function review(result) {
    if (result == 1) {
        alert("Add successful!")
    }
}

function backToIndex() {
    var url = window.location.href;
    var index = url.indexOf("/edit-profile/");
    var idStr = url.substring(index + 14);
    console.log(idStr);
    window.location.href = "../my-profile/" + idStr;
}
