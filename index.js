const entryForm = document.getElementById("log-input");
const tableRef = document.getElementById("log-table")
const distance = document.getElementById("dist");
const time = document.getElementById("time");

entryForm.addEventListener("submit", addEntryToDOM);

function addEntryToDOM(event) {
    event.preventDefault();
    const newRow = tableRef.insertRow(-1);
    const cellDate = newRow.insertCell(0);
    // insert date
    let today = new Date();
    const dateText = document.createTextNode(today.toLocaleDateString("en-US"));
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
    let paceText = document.createTextNode(Math.round(time.value / distance.value * 100) / 100);
    cellPace.appendChild(paceText);

}
