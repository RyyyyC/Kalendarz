months = {
    "Jan": 31,
    "Feb": 28,
    "Mar": 31,
    "Apr": 30,
    "May": 31,
    "Jun": 30,
    "Jul": 31,
    "Aug": 31,
    "Sep": 30,
    "Oct": 31,
    "Nov": 30,
    "Dec": 31
}

days = ["MON", "TUE", "WED", "THUR", "FRI", "SAT", "SUN"]
monthsIndex = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

monthsHTML = {
    "Jan": document.getElementById("Jan"),
    "Feb": document.getElementById("Feb"),
    "Mar": document.getElementById("Mar"),
    "Apr": document.getElementById("Apr"),
    "May": document.getElementById("May"),
    "Jun": document.getElementById("Jun"),
    "Jul": document.getElementById("Jul"),
    "Aug": document.getElementById("Aug"),
    "Sep": document.getElementById("Sep"),
    "Oct": document.getElementById("Oct"),
    "Nov": document.getElementById("Nov"),
    "Dec": document.getElementById("Dec")
}

tempArray = {
    "Jan": [],
    "Feb": [],
    "Mar": [],
    "Apr": [],
    "May": [],
    "Jun": [],
    "Jul": [],
    "Aug": [],
    "Sep": [],
    "Oct": [],
    "Nov": [],
    "Dec": []
}

date = new Date()

year = date.getFullYear();

document.onkeydown = (e) =>{
    e = e || window.event;
    if(e.keyCode == '37'){
        console.log("left")
        clearMonths(year, months);
        makeTr(year);
        makeTd(year);
        document.getElementsByClassName("currentYear")[0].innerHTML = `<h1>${year}</h1>`;
        year--;
    }
    if(e.keyCode == '39'){
        console.log("right")
        clearMonths(year, months);
        makeTr(year);
        makeTd(year);
        document.getElementsByClassName("currentYear")[0].innerHTML = `<h1>${year}</h1>`;
        year++;
    }
}

document.getElementsByClassName("currentYear")[0].innerHTML = `<h1>${year}</h1>`;

makeTr(year);

function makeTr(yearPass){
    for(i=0;i!=12;i++)
        monthsHTML[monthsIndex[i]].innerHTML += '<tr><td class="mon" id="1">Mon</td><td class="thu" id="2">Thu</td><td class="wed" id="3">Wed</td><td class="thur" id="4">Thur</td><td class="fri" id="5">Fri</td><td class="sat" id="6">Sat</td><td class="sun" id="7">Sun</td></tr>';
    for(i=0;i!=12;i++){
        newDate = new Date(yearPass, i)
        day = newDate.getDay();
        week=0
        for(j=0;j != months[monthsIndex[i]];j++){
            if(j==0 || day ==1){
                monthsHTML[monthsIndex[i]].innerHTML += `<tr id=${monthsIndex[i]+week}></tr>`
                week++
            }
            if(day==7){
                day=0
            }
            day++
        }
    }
}

makeTd(year)
function makeTd(yearPass){
    for(i=0;i!=12;i++){
        newDate = new Date(yearPass, i)
        day = newDate.getDay();
        week=0;
        
        for(j=0;j!=months[monthsIndex[i]];j++){
            if(day < 7 && week==0 && day > 0 ){
                for(x = day; x != 1; x--){
                    document.querySelector(`#${monthsIndex[i]}${week}`).innerHTML += `<td>&nbsp;</td>`
                }
            }
            if(day == 0 && week == 0){
                for(x = 6; x != 1; x--){
                    document.querySelector(`#${monthsIndex[i]}${week}`).innerHTML += `<td>&nbsp;</td>`
                }
            }
    
            if(j==0 || day==1)
                week++
            document.querySelector(`#${monthsIndex[i]}${week-1}`).innerHTML += `<td>${j+1}</td>`
            tempArray[monthsIndex[i]].push(days[day-1])
            if(day==7)
                day=0
            day++
        }
        if(week == monthsHTML[monthsIndex[i]].children.length - 1){
            numberOfItems = document.querySelector(`#${monthsIndex[i]+(week-1)}`).children.length
            for(j = 0; j != 7 - numberOfItems; j++)
                document.querySelector(`#${monthsIndex[i]+(week-1)}`).innerHTML += `<td>&nbsp;</td>`
        }
    }
}



function clearMonths(yearPass){
    months = {
        "Jan": 31,
        "Feb": 28,
        "Mar": 31,
        "Apr": 30,
        "May": 31,
        "Jun": 30,
        "Jul": 31,
        "Aug": 31,
        "Sep": 30,
        "Oct": 31,
        "Nov": 30,
        "Dec": 31
    }
    for(i=0;i!=12;i++){
        newDate = new Date(yearPass, i)
        day = newDate.getDay();
        week=0
        for(j=0;j != months[monthsIndex[i]];j++){
            if(j==0 || day ==1){
                monthsHTML[monthsIndex[i]].innerHTML = ``
                week++
            }
            if(day==7){
                day=0
            }
            day++
        }
    }
}