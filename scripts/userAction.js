document.getElementById("loginInUser").addEventListener("click", function(){
    fetch(`http://localhost/Kalendarz/api/login.php?login=${document.getElementById("userLogin").value}&password=${document.getElementById("userPassword").value}`)
        .then(response => response.statusText == "OK"
        ?loginOK()
        :alert("Ups!\nZły login lub hasło!"));
});


document.getElementById("createNewUser").addEventListener("click", function(){
    if(document.getElementById("createUserPassword").value != document.getElementById("repeatUserPassword").value){
        return alert("Hasła nie są takie same!");
    }
        
    fetch(`http://localhost/Kalendarz/api/checkExistingAccount.php?login=${document.getElementById("createUserLogin").value}`)
    .then(response => checkIfExists(response.statusText));
    
    fetch('http://localhost/Kalendarz/api/register.php', {
        method: "POST",
        headers: {'Content-Type' : 'application/json'}, 
        body: JSON.stringify({
            "login": document.getElementById("createUserLogin").value,
            "password": document.getElementById("createUserPassword").value
        })})
        .then(response => response.statusText == "OK"
        ?registerOK()
        :alert("Ups!\nCoś poszło nie tak!"));
    
});

function checkIfExists(){
    responseGet = true;
    if(responseGet == "OK"){
        console.log(responseGet)
        return true;
    }
    console.log(responseGet)
    return false;
}

function loginOK(){
    document.getElementById("loginForm").style = "display:none;"
    document.getElementById("addEventForm").style = "display:block;"
}

function registerOK(){
    document.getElementById("registerForm").style = "display:none;";
    document.getElementById("addEventForm").style = "display:block;"
}