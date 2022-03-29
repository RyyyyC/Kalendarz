months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
days = ["MON", "TUE", "WED", "THUR", "FRI", "SAT", "SUN"]

date = new Date();
document.getElementsByClassName("currentDate")[0].innerHTML = `<h1>${months[date.getMonth()]}</h1><h1>${date.getDate()}</h1><p>${days[date.getDay()<0?0:date.getDay() - 1]}</p>`;


setInterval(function(){
    date = new Date();
    document.getElementsByClassName("currentDate")[0].innerHTML = `<h1>${months[date.getMonth()]}</h1><h1>${date.getDate()}</h1><p>${days[date.getDay()<0?0:date.getDay() - 1]}</p>`
}, 60*60*1000);