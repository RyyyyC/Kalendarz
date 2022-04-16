document.getElementById("loginInUser").addEventListener("click", function(){
    fetch(`http://localhost/Kalendarz/api/login.php?login=${document.getElementById("userLogin").value}&password=${document.getElementById("userPassword").value}`)
        .then(response => response.json())
        .then(data => console.log(data));
});
document.getElementById("createNewUser").addEventListener("click", function(){
    fetch('http://localhost/Kalendarz/api/register.php', {
        method: "POST",
        headers: {'Content-Type' : 'application/json'}, 
        body: JSON.stringify({
            "login": document.getElementById("createUserLogin").value,
            "password": document.getElementById("createUserPassword").value
        })})
        .then(res => { console.log(res.statusText)})
        .then(res => res.statusText=='OK'?console.log(1):console.log(0));
});