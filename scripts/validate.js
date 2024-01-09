var errorBoxes = document.getElementsByClassName('erorr-line')
function reset(){
    for (let i = 0; i < errorBoxes.length; i++) {
        errorBoxes[i].innerText = "";
    }
}

function checkName(name){
    var error = errorBoxes[0];
    if(name == ""){
        error.innerText = "Full Name must not be empty!";
        return false;
    }
    return true;
}

function checkEmail(email){
    var error = errorBoxes[1];
    
    let emailSplit = email.split('@')
    let domain = emailSplit[1]
    
    // console.log(email);
    if (email == "") {
        error.innerText = "Email must not be empty!"
        return false;
    }
    if (domain != "gmail.com") {
        error.innerText = "Domain email must end with @gmail.com"
        return false;
    }

    return true;
}

function checkPass(pass, confpass){
    var error = errorBoxes[2];
    let hasLowercase = false
    let hasUppercase = false
    let hasNumber = false
    
    
    for(let i = 0; i < pass.length; i++){
        if(pass[i] >= 'A' && pass[i] <= 'Z'){
            hasUppercase = true
        }
        else if(pass[i] >= 'a' && pass[i] <='z'){
            hasLowercase = true
        }
        else if(pass[i] >= '0' && pass[i] <= '9') {
            hasNumber = true
        }
    }
    
    // console.log(pass)
    // console.log(confpass)
    if (pass == "") {
        error.innerText = "Password must not be empty!"
        return false;
    }
    
    
    if (pass.length < 8) {
        error.innerText = "Password must contain at least 8 characters!"
        return false;
    }
    
    if (hasUppercase == false) {
        error.innerText = "Password must have at least 1 uppercase letter!"
        return false;
    }
    
    if (hasLowercase == false) {
        error.innerText = "Password must have at least 1 lowercase letter!"
        return false;
    }
    
    if (hasNumber == false) {
        error.innerText = "Password must have at least 1 number!"
        return false;
    }
    
    if (pass !== confpass){
        error.innerText = "Password must be the same"
        errorBoxes[3].innerText = "Password must be the same"
        return false;
    }

    return true;
}


function checkRadio(male, female){
    var error = errorBoxes[4];

    if (male.checked == false && female.checked == false) {
        error.innerText = "Gender must not be empty!"
        return false;
    }
    return true;
}

function checkBox(t_c){
    if(t_c.checked == false){
        alert("Accept the Terms & Conditions!")
        return false;
    }
    return true;
}


function validate(e){
    e.preventDefault();
    reset()
    
    var name = document.getElementById("full-name").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;
    var confpass = document.getElementById("confirm-pw").value;
    var male = document.getElementById("male");
    var female = document.getElementById("female");
    var t_c = document.getElementById("agree");
    
    
    let nameCorrect = checkName(name)
    let emailCorrect = checkEmail(email)
    let passCorrect = checkPass(pass, confpass)
    let radioCorrect = checkRadio(male, female)
    let boxCorrect = checkBox(t_c)
    
    if(nameCorrect && emailCorrect && passCorrect && radioCorrect && boxCorrect){
        alert("Successful register!");
        window.location.replace("../index.html");
    }
}

reset()