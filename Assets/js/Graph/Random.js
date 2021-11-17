function Graph() {
    var inputs_array = document.getElementById("inputs");
    var array = inputs_array.value.split(" ");
    var frame = document.getElementById("nFrames").valueAsNumber;
    var ctx = document.getElementById("myChart");
    ctx.style.display = "block";
    var f_random = 0; // frame incresing from 0 to frame you g ****
    var page_fault = 0; // page_fault you find by algo ***
    var Hit = 0; // hit you find by algo ******
    var tempForRandom = []; // array we work in algo  ***
    var page_fault_Random = 0; //page_fault_Random when you update  f_random  ***
    var List_Random = []; // store array of final ans of tempForRandom  *** 
    var Random = [] // array which store page fault
    var d = []; // number of frame 
    var index; // index which we are add new number
    for (k = 0; k < frame; k++) {
        d[k] = k + 1
    }
    for (f_random = 1; f_random <= frame;) {
        for (var i = 0; i < array.length; i++) {
            if (tempForRandom.length == 0) {
                tempForRandom.push(array[i]);
                page_fault += 1;
            } else if (tempForRandom.includes(array[i])) {
                Hit += 1
            } else if (tempForRandom.length < f_random) {
                tempForRandom.push(array[i]);
                page_fault += 1;
            } else if (tempForRandom.length >= f_random) {
                index = Math.floor(Math.random() * parseInt(f_random));
                tempForRandom[index] = array[i];
                page_fault += 1;
            }
        }
        List_Random = tempForRandom;
        page_fault_Random = page_fault;
        Random.push(page_fault);
        f_random += 1;
        page_fault = 0;
        tempForRandom = [];
    }
    console.log(Random)
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: d,
            datasets: [{
                label: " Page Fault(Random) :-",
                data: Random,
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