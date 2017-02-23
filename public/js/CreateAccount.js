var step = 1;
function backToWelcome() {
    window.location.href = "login";
}
function preprocess() {
    var $rm1 = $("#account_password_again");
    var $rm2 = $("#account_password");
    var $rm3 = $("#prev_button");
    $rm1.addClass("finishDisplay");
    $rm2.addClass("finishDisplay");
    $rm3.fadeOut(0);
    document.getElementById("account_name").focus();
}
window.onpaint = preprocess();
function next() {
    step++;
    if (step == 2) {
        var $rm3 = $("#prev_button");
        var $perviousDisplay = $("#account_name");
        var $currentDisplay = $("#account_password");
        $perviousDisplay.addClass("finishDisplay");
        $currentDisplay.removeClass("finishDisplay");
        $rm3.fadeIn();
        document.getElementById("account_password").focus();
    }
    if (step == 3) {
        var $perviousDisplay = $("#account_password");
        var $currentDisplay = $("#account_password_again");
        var $rm3 = $("#next_text");
        $perviousDisplay.addClass("finishDisplay");
        $currentDisplay.removeClass("finishDisplay");
        $rm3.text("Finish!");
        document.getElementById("account_password_again").focus();
    }
    if (step == 4) {
        var $pass = document.getElementById('account_password');
        var $passAgain = document.getElementById('account_password_again');
        var passText = $pass.value;        
        var passAgainText = $passAgain.value;        
        if (!(passText == passAgainText)) {
            console.log("pass not match");
            alert("Password does not match! Please re-enter your password");
            $pass.value = '';
            $passAgain.value = '';
            step = 3;
            prev();
        } else {
            window.location.href = "/";
        }
    }

}
function prev() {
    step--;
    if (step == 2) {
        var $perviousDisplay = $("#account_password");
        var $currentDisplay = $("#account_password_again");
        var $rm3 = $("#next_text");
        $perviousDisplay.removeClass("finishDisplay");
        $currentDisplay.addClass("finishDisplay");
        $rm3.text("Next");
        document.getElementById("account_password").focus();
    }
    if (step == 1) {
        var $rm3 = $("#prev_button");
        var $perviousDisplay = $("#account_name");
        var $currentDisplay = $("#account_password");
        $perviousDisplay.removeClass("finishDisplay");
        $currentDisplay.addClass("finishDisplay");
        $rm3.fadeOut();
        document.getElementById("account_name").focus();
    }
}