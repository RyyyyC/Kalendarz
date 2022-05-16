(function() {    
    var dialog = document.getElementById('Days');
    document.querySelectorAll("#ShowDay").forEach(element => {
        element.myParam = element.className
        element.addEventListener("click", function(e) {
            dialog = document.getElementById("Days"); // Wazne
            //dialog.querySelector("#Month").innerHTML = e.currentTarget.className; // Wazne
            dialog.innerHTML ="";
            CreateTable(e.currentTarget.className, dialog);
            dialog.show();    
        }, false);    
    }); 
})
();

function CreateTable(month, dialog){
    monthNumber = {
        "Jan": 0,
        "Feb": 1,
        "Mar": 2,
        "Apr": 3,
        "May": 4,
        "Jun": 5,
        "Jul": 6,
        "Aug": 7,
        "Sep": 8,
        "Oct": 9,
        "Nov": 10,
        "Dec": 11
    }

    dialog.innerHTML += `<button id="Close"></button>`
    dialog.innerHTML += `<table id="monthView" class="${month}"><thead><tr><h1 id="Month">${month}</h1></tr></thead><tbody id="${month}"></tbody></table>`
    document.querySelector(`#${month}`).innerHTML += '<tr><td class="mon" id="1">Mon</td><td class="thu" id="2">Thu</td><td class="wed" id="3">Wed</td><td class="thur" id="4">Thur</td><td class="fri" id="5">Fri</td><td class="sat" id="6">Sat</td><td class="sun" id="7">Sun</td></tr>';
    dialog.innerHTML+='<p id="Wydarzenie">Dodaj wydarzenie!</p>'
    dialog.innerHTML+='<input type="text" id="eventName" required><br />'
    dialog.innerHTML+='<input type="date" id="eventDate" required min="today"><br />'
    dialog.innerHTML+='<input type="color" id="eventColor" required><br />'
    dialog.innerHTML+='<input type="button" id="addEvent" value="Dodaj wydarzenie!"><br/>'
    week=0
    newDate = new Date(year, monthNumber[month])
    day = newDate.getDay();
    for(j=0;j != months[month];j++){
        if(j==0 || day ==1){
            dialog.querySelector(`#${month}`).innerHTML += `<tr style="margin-left:10px;"id=${month+week}></tr>`
            week++
        }
        if(day==7)
            day=0
        day++
    }
    
    week=0;
    newDate = new Date(year, monthNumber[month])
    day = newDate.getDay();
    for(j=0;j!=months[month];j++){
        if(day < 7 && week==0 && day > 0 ){
            for(x = day; x != 1; x--){
                dialog.querySelector(`#${month}${week}`).innerHTML += `<td></td>`
            }
        }
        if(day == 0 && week == 0){
            for(x = 6; x != 1; x--){
                dialog.querySelector(`#${month}${week}`).innerHTML += `<td></td>`
            }
        }

        if(j==0 || day==1)
            week++
            dialog.querySelector(`#${month}${week-1}`).innerHTML += `<td style="text-align:right; margin-left:30px" id='${month}Day${j+1}'>${j+1}<div>*</div></td>`
        tempArray[month].push(days[day-1])
        if(day==7)
            day=0
        day++
    }
    if(week == monthsHTML[month].children.length - 1){
        numberOfItems = dialog.querySelector(`#${month+(week-1)}`).children.length
        for(j = 0; j != 7 - numberOfItems; j++)
        dialog.querySelector(`#${month+(week-1)}`).innerHTML += `<td></td>`
    }

    document.getElementById('Close').addEventListener("click", function() {
        dialog.close();    
    });  
}