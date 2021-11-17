function Graph() {
    var inputs_array = document.getElementById("inputs");
    var array = inputs_array.value.split(" ");
    var frame = document.getElementById("nFrames").valueAsNumber;
    var ctx = document.getElementById("myChart");
    ctx.style.display = "block";
    var page_fault_Lifo = 0; // page_fault_Lifo you find by algo
    var Hit = 0; // hit you find by algo
    var tempForLifo = []; // array we work in algo
    var Lifo = 0; //Lifo when you update  f_lifo 
    var List_Lifo = []; // store array of final ans of tempForLifo 
    var LIFO_A = [] // array which store page fault
    var d = []; // number of frame 
    for (k = 0; k < frame; k++) {
        d[k] = k + 1
    }
    for (var f_lifo = 1; f_lifo <= frame;) {
        for (var i_Lifo = 0; i_Lifo < array.length; i_Lifo++) {
            if (tempForLifo.length == 0) {
                tempForLifo.push(array[i_Lifo]);
                page_fault_Lifo += 1;
            } else if (tempForLifo.includes(array[i_Lifo])) {
                Hit += 1
            } else if (tempForLifo.length < f_lifo) {
                tempForLifo.push(array[i_Lifo]);
                page_fault_Lifo += 1;
            } else if (tempForLifo.length >= f_lifo) {
                tempForLifo.pop();
                tempForLifo.push(array[i_Lifo]);
                page_fault_Lifo += 1;
            }
        }
        List_Lifo = tempForLifo;
        Lifo = page_fault_Lifo;
        LIFO_A.push(page_fault_Lifo);
        f_lifo += 1;
        page_fault_Lifo = 0;
        tempForLifo = [];
    }
    console.log(List_Lifo);
    console.log(LIFO_A)
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: d,
            datasets: [{
                label: "Page Fault(LIFO) :-",
                data: LIFO_A,
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