Chart.defaults.global.elements.line.fill = false;
let ctx = document.getElementById("myChart").getContext("2d");

const updateChart = event => {
    const rawData = JSON.parse(localStorage.log);
    const labels = rawData.map(d => d.today);
    const dist = rawData.map(d => d.distance);
    let myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: "distance",
                borderColor: "#38ac9a",
                data: dist
            }]
        }
    });
}

updateChart();
entryForm.addEventListener("submit", updateChart);
