months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
days = ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]

date = new Date();
document.getElementsByClassName("currentDate")[0].innerHTML = `<h1>${months[date.getMonth()]}</h1><h1>${date.getDate()}</h1><p>${days[date.getDay()<0?0:date.getDay() - 1]}</p>`;


setInterval(function(){
    date = new Date();
    document.getElementsByClassName("currentDate")[0].innerHTML = `<h1>${months[date.getMonth()]}</h1><h1>${date.getDate()}</h1><p>${days[date.getDay()<0?0:date.getDay() - 1]}</p>`
}, 60*60*1000);

document.getElementById("eventDate").min = new Date().toISOString().split("T")[0];
document.getElementById("eventDate").value = new Date().toISOString().split("T")[0];