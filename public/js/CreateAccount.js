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
    if (step == 1) {
        var $name = document.getElementById('account_name');
        var name = $name.value;
        $.get('/accountCreatName/' + name, setName);
    }
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
        var $pass = document.getElementById('account_password');
        var passText = $pass.value;
        if (passText.length < 4) {
            alert("Password is too short! Please at least include 4 characters!")
            $pass.value = '';
            prev();
        } else {
            $perviousDisplay.addClass("finishDisplay");
            $currentDisplay.removeClass("finishDisplay");
            $rm3.text("Finish!");
            document.getElementById("account_password_again").focus();
        }
    }
    if (step == 4) {
        var $user = document.getElementById('account_name');
        var $pass = document.getElementById('account_password');
        var $passAgain = document.getElementById('account_password_again');
        var userName = $user.value;
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
            $.get('/accountCreated/' + userName + '/' + passText);
            window.location.href = "/";
        }
    }

}

function setName(result) {
    if (result == -1) {
        prev();
        alert("User name has been used! Change another one!");
        var $name = document.getElementById('account_name');
        $name.value = '';
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