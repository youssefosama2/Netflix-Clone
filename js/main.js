submitBtn = document.getElementById("submitBtn")
submitBtn.disabled = true;
function valid() {
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    emailError = document.getElementById("emailError");
    passwordError = document.getElementById("passwordError");
    if (email.indexOf('@') == -1 || email.length < 0) {
        emailError.innerHTML = "Please enter a valid email";
        document.getElementById("email").style.border = "1px solid red";
        submitBtn.disabled = true;
    }
    else if (email.indexOf('@') > -1 && email.length > 0) {
        document.getElementById("email").style.border = "1px solid rgb(148, 146, 146)";
        emailError.innerHTML = "";
    }
    if (password.length < 4 || password.length > 60) {
        document.getElementById("password").style.border = "1px solid red";
        passwordError.innerHTML = "Your password must contain between 4 and 60 characters.";
        submitBtn.disabled = true;
    }
    else if (password.length > 4 && password.length < 60) {
        document.getElementById("password").style.border = "1px solid rgb(148, 146, 146)";
        passwordError.innerHTML = ""
    }
    if (email.indexOf('@') > -1 && email.length > 0 && password.length > 4 && password.length < 60) {
        submitBtn.disabled = false;
    }
}


// end login page





function toggleDisplay(selectId){
    var language = document.getElementById(selectId).value;
    var ArabicText = document.getElementById("Arabic");
    var EnglishText = document.getElementById("English");
    var SelectEnglish = document.getElementById("languageSelectEnglish").value;
    if(language === "English"){
        ArabicText.classList.add("hidden")
        EnglishText.classList.remove("hidden")
        document.querySelector("body").style.direction = "ltr";
    }else if(language === "Arabic"){
        ArabicText.classList.remove("hidden")
        EnglishText.classList.add("hidden")
        document.querySelector("body").style.direction = "rtl";
    }
}
