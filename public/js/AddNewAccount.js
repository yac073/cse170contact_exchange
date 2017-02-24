function backToAddContactPage() {
    var url = window.location.href;
    var index = url.indexOf("ount/");
    var idStr = url.substring(index + 5);
    window.location.href = "/?id=" + idStr;
}
function searchResult() {
    var $buttonClicked = document.getElementById('search_str');
    var name = $buttonClicked.value;
    console.log($buttonClicked.value);
    window.location.href = "../search-result?name=" + name;
}