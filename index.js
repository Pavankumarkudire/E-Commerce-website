document.addEventListener("DOMContentLoaded", function() {
    var usernameInput = document.getElementById("userName");
    var passwordInput = document.getElementById("userPassword");
    var submitBtn = document.getElementById("button");

    submitBtn.addEventListener('click',function(e){
        e.preventDefault();
        
        var usernamePattren = /^[a-zA-Z\-]+$/;
        if(!usernamePattren.test(usernameInput.value)){
            alert("invalid Name");
            return;
        }

        var passwordPattren =/^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        if(!passwordPattren.test(passwordInput.value)){
            alert("inavlid Password");
            return;
        }
        var userData = {
            username:usernameInput.value,
            password:passwordInput.value
        };
        localStorage.setItem('userData',JSON.stringify(userData))
        alert("signUp Sucussfully completed");

        window.location.href='Login-Form.html';

    });

});


