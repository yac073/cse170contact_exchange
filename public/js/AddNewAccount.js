function backToAddContactPage() {
    window.location.href = "/";
}
function searchResult() {
    var $buttonClicked = document.getElementById('search_str');
    var name = $buttonClicked.value;
    console.log($buttonClicked.value);
    window.location.href = "search-result?name=" + name;
}