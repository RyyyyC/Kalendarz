sessionStorage.clear()
var id;

//#region Login
document.getElementById("loginUser").addEventListener("click", function(){
    if(document.getElementById("userPassword").value == "" && document.getElementById("userLogin").value == "")
        return alert("Wszystkie pola muszą być uzupełnione")
    fetch(`http://localhost/Kalendarz/api/login.php?login=${document.getElementById("userLogin").value}&password=${document.getElementById("userPassword").value}`)
    .then(response => response.status==200?loginOK(response):alert("Ups!\nZły login lub hasło!"));
});

function loginOK(response){
    response.json().then((data) => {
        setIdUser(data["id"]);
    });
    document.getElementById("loginForm").style = "display:none;";
    document.getElementById("addEventForm").style = "display:block;";
}

function setIdUser(idUser){
    id = idUser;
    console.log(id)
}
//#endregion

//#region Register
document.getElementById("createNewUser").addEventListener("click", function(){
    if(document.getElementById("createUserPassword").value != document.getElementById("repeatUserPassword").value)
        return alert("Hasła nie są takie same!");
    if(document.getElementById("createUserPassword").value == "" || document.getElementById("repeatUserPassword").value == "" || document.getElementById("createUserLogin").value == "")
        return alert("Wszystkie pola muszą być uzupełnione")
    fetch(`http://localhost/Kalendarz/api/register.php`,{
        method: "POST",
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify({
            "login" :document.getElementById("createUserLogin").value,
            "password": document.getElementById("createUserPassword").value
        })})
    .then(response => response.status==200?registerOK(response ,document.getElementById("createUserPassword").value):alert("Ups!\nTakie konto już istnieje!"));
});

function registerOK(response, password){
    response.json().then((data) =>{
        fetch(`http://localhost/Kalendarz/api/login.php?login=${data["login"]}&password=${password}`)
        .then(response => response.json())
        .then(data => setIdUser(data["id"]))
    })
    document.getElementById("registerForm").style = "display:none;";
    document.getElementById("addEventForm").style = "display:block;";
}
//#endregion

//#region Logout
document.getElementById("logout").addEventListener("click", function(){
    window.location.reload();
});
//#endregion

//#region Add Events
document.getElementById("addEvent").addEventListener("click", function(){
    if(document.getElementById("eventName").value.length > 0)
    {
        fetch(`http://localhost/Kalendarz/api/events/addEvent.php`, {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                "idUser" : id,
                "name" : document.getElementById("eventName").value,
                "color" : document.getElementById("eventColor").value,
                "date" : document.getElementById("eventDate").value
            })
        })
        document.getElementById("eventName").value = "";
        alert("Dodano wydarzenie!")

    }
    else
    {
        alert("Brak nazwy wydarzenia!")
    }
})
//#endregion