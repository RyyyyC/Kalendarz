document.getElementById("registerClick").addEventListener("click", function(){
    document.getElementById("loginForm").style = "display:none;";
    document.getElementById("registerForm").style = "display:block;";
})

document.getElementById("loginClick").addEventListener("click", function(){
    document.getElementById("loginForm").style = "display:block;";
    document.getElementById("registerForm").style = "display:none;";
})