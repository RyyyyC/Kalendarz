sessionStorage.clear()

//#region Login
document.getElementById("loginInUser").addEventListener("click", function(){
    fetch(`http://localhost/Kalendarz/api/login.php?login=${document.getElementById("userLogin").value}&password=${document.getElementById("userPassword").value}`)
    .then(response => response.status==200?loginOK(response):alert("Ups!\nZły login lub hasło!"));
});

function loginOK(response){
    
    response.json().then((data) => {
        sessionStorage.setItem('idUser', data["id"])
    });
    document.getElementById("loginForm").style = "display:none;";
    document.getElementById("addEventForm").style = "display:block;";
    console.log(sessionStorage.getItem('idUser'));
}
//#endregion

//#regtion Register
document.getElementById("createNewUser").addEventListener("click", function(){
    if(document.getElementById("createUserPassword").value != document.getElementById("repeatUserPassword").value)
        return alert("Hasła nie są takie same!");
    fetch(`http://localhost/Kalendarz/api/register.php`,{
        method: "POST",
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify({
            "login" :document.getElementById("createUserLogin").value,
            "password": document.getElementById("createUserPassword").value
        })})
    .then(response => response.status==200?registerOK():alert("Ups!\nTakie konto już istnieje!"));
});

function registerOK(){
    document.getElementById("registerForm").style = "display:none;";
    document.getElementById("addEventForm").style = "display:block;";
}
//#endregion

//#region Add Events
document.getElementById("addEvent").addEventListener("click", function(){
    sessionStorage.getItem("idUser");
    fetch(`http://localhost/Kalendarz/api/events/addEvent.php`, {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            "idUser" : 1,
            "name" : document.getElementById("").value,
            "color" : document.getElementById("").value,
            "date" : document.getElementById("").value
        })
    })
})
//#endregion