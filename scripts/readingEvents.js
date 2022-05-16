function loadEvents(id){
    fetch(`http://localhost/Kalendarz/api/events/read.php?idUser=${id}`)
    .then(response => response.json())
    .then(data => readEvents(data))
}

function readEvents(data){
    data = data["data"]
    data.forEach(element => {
        date = new Date(element["date"])
        name = element["name"]
        document.querySelector(`#monthView.${monthsIndex[date.getMonth()]}>tbody>tr>#${monthsIndex[date.getMonth()]}Day${date.getDate()}>div`).innerHTML += `<div id='eventCircle' style="background-color: ${element["color"]}; width:30px; height: 30px; border-radius: 50%; text-align: center; line-height: 25px;">${name[0]}</div>`
    });
}