function Graph() {
    var inputs_array = document.getElementById("inputs");
    var array = inputs_array.value.split(" ");
    var frame = document.getElementById("nFrames").valueAsNumber;
    var ctx = document.getElementById("myChart");
    ctx.style.display = "block";
    var tempforFifo = [];
    var list_FIFO = [];
    var FIFO = [];
    var fault_FIFO = 0;
    var d = [];
    for (var x = 0; x < frame; x++) {
        d[x] = x + 1;
    }
    for (var i = 1; i <= frame;) {
        for (var k = 0; k < array.length; k++) {
            if (tempforFifo.length === 0) {
                tempforFifo.push(array[k]);
                fault_FIFO++;

            } else if ((tempforFifo.length >= i) && !(tempforFifo.includes(array[k]))) {
                tempforFifo.shift();
                tempforFifo.push(array[k]);
                fault_FIFO++;
            } else if (!tempforFifo.includes(array[k])) {
                tempforFifo.push(array[k]);
                fault_FIFO++;
            } else if (tempforFifo.includes(array[k])) {
                list_FIFO = tempforFifo;
                console.log(list_FIFO);
            }
            list_FIFO = tempforFifo;
            console.log(fault_FIFO);
        }
        FIFO.push(fault_FIFO);
        console.log(FIFO);
        tempforFifo = [];
        list_FIFO = [];
        fault_FIFO = 0;
        i++;
        console.log(i);
    }
    console.log(FIFO);
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: d,
            datasets: [{
                label: "Page Fault(FIFO) :-",
                data: FIFO,
                backgroundColor: ['rgba(54, 162, 235, 0.9)',
                    'rgba(54, 162, 235, 0.9)',
                    'rgba(54, 162, 235, 0.9)',
                    'rgba(54, 162, 235, 0.9)',
                    'rgba(54, 162, 235, 0.9)',
                    'rgba(54, 162, 235, 0.9)',
                    'rgba(54, 162, 235, 0.9)',
                    'rgba(54, 162, 235, 0.9)',
                    'rgba(54, 162, 235, 0.9)',
                    'rgba(54, 162, 235, 0.9)',
                    'rgba(54, 162, 235, 0.9)',
                    'rgba(54, 162, 235, 0.9)',
                    'rgba(54, 162, 235, 0.9)',
                    'rgba(54, 162, 235, 0.9)',
                    'rgba(54, 162, 235, 0.9)',
                    'rgba(54, 162, 235, 0.9)'
                ],

                borderColor: [
                    'rgba(54, 162, 235, 0.9)',
                    'rgba(54, 162, 235, 0.9)',
                    'rgba(54, 162, 235, 0.9)',
                    'rgba(54, 162, 235, 0.9)',
                    'rgba(54, 162, 235, 0.9)',
                    'rgba(54, 162, 235, 0.9)',
                    'rgba(54, 162, 235, 0.9)',
                    'rgba(54, 162, 235, 0.9)',
                    'rgba(54, 162, 235, 0.9)',
                    'rgba(54, 162, 235, 0.9)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

function reset() {
    location.reload();
}