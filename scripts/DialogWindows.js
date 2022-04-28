(function() {    
    var dialog = document.getElementById('Days');
    document.querySelectorAll("#ShowDay").forEach(element => {
        element.myParam = element.className
        element.addEventListener("click", function(e) {
            dialog = document.getElementById("Days");
            dialog.querySelector("#Month").innerHTML = e.currentTarget.className;
            dialog.show();    
        }, false);    
    });
     document.getElementById('Close').onclick = function() {    
        dialog.close();    
    };   
})
();   