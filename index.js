const entryForm = document.getElementById("log-input");
const tableRef = document.getElementById("log-table")
const distance = document.getElementById("dist");
const time = document.getElementById("time");

let i = 0;

let log = localStorage.log;
// initialize log in localStorage if it doesn't exist
if (!log){
    localStorage.log = JSON.stringify([]);
    log = [];
} else {
    log = JSON.parse(localStorage.log);
    log.forEach(entry => {
        const newRow = tableRef.insertRow(-1);
        const cellDate = newRow.insertCell(0);
        const dateText = document.createTextNode(entry.today);
        cellDate.appendChild(dateText);
        const cellDist = newRow.insertCell(1);
        const distText = document.createTextNode(entry.distance);
        cellDist.appendChild(distText);
        const cellTime = newRow.insertCell(2);
        const timeText = document.createTextNode(entry.time);
        cellTime.appendChild(timeText);
        const cellPace = newRow.insertCell(3);
        let paceText = document.createTextNode(entry.pace);
        cellPace.appendChild(paceText);
    })
}

entryForm.addEventListener("submit", addEntryToDOM);

function addEntryToDOM(event) {
    event.preventDefault();
    const newRow = tableRef.insertRow(-1);
    // insert date
    const cellDate = newRow.insertCell(0);
    let today = new Date();
    i += 1;
    today.setDate(today.getDate() + i);
    today = today.toLocaleDateString("en-US");
    const dateText = document.createTextNode(today);
    cellDate.appendChild(dateText);
    // insert distance
    const cellDist = newRow.insertCell(1);
    const distText = document.createTextNode(distance.value);
    cellDist.appendChild(distText);
    // insert time
    const cellTime = newRow.insertCell(2);
    const timeText = document.createTextNode(time.value);
    cellTime.appendChild(timeText);
    // insert pace
    const cellPace = newRow.insertCell(3);
    let pace = Math.round(time.value / distance.value * 100) / 100;
    let paceText = document.createTextNode(pace);
    cellPace.appendChild(paceText);
    log.push({today: today, distance: distance.value, time: time.value, pace: pace});
    localStorage.log = JSON.stringify(log);
    // clear out input fields
    distance.value = "";
    time.value = "";

}
