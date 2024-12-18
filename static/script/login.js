var LoginForm = document.getElementById("LoginForm");
var RegForm = document.getElementById("RegForm");
var Indicator = document.getElementById("Indicator");

function register() {
    RegForm.style.transform = "translateX(0px)";
    LoginForm.style.transform = "translatex(0px)";
    Indicator.style.transform = "translatex(100px)";
}
function login() {
    RegForm.style.transform = "translateX(300px)";
    LoginForm.style.transform = "translatex(300px)";
    Indicator.style.transform = "translatex(0px)";
}

function togglePasswordVisibility(inputId) {
    var input = document.getElementById(inputId);
    var type = input.type === 'password' ? 'text' : 'password';
    input.type = type;
}