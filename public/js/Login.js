function gotoMainPage() {
    var $user_name = document.getElementById('user_name');
    var $user_pass = document.getElementById('user_pass');
    var name = $user_name.value;
    var pass = $user_pass.value;
    if (name.length == 0) {
        alert("User name cannot be empty!");
        $user_pass.value = '';
    }
    $.get('/loginProcess/' + name + '/' + pass, loginResult);
}

function loginResult(result) {    
    if (result == -1) {
        alert("User name or password is incorrect, please re-enter");
        var $user_pass = document.getElementById('user_pass');
        $user_pass.value = '';
    } else {        
        window.location.href = "/?id="+result;
    }
}
function gotoCreatePage() {
    window.location.href = "create-account";
}