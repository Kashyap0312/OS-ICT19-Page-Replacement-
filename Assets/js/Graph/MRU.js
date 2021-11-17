function Graph() {
    var inputs_array = document.getElementById("inputs");
    var array = inputs_array.value.split(" ");
    var frame = document.getElementById("nFrames").valueAsNumber;
    var ctx = document.getElementById("myChart");
    ctx.style.display = "block";
    var f_MRU = 0; // frame incresing from 0 to frame you get
    var page_fault = 0; // page_fault you find by algo
    var Hit = 0; // hit you find by algo
    var tempForMru = []; // array we work in algo
    var page_fault_MRU = 0; //page_fault_MRU when you update  f_MRU 
    var sec_array = []; // store array of final ans of tempForMru 
    var MRU = [] // array which store page fault
    var v; // push number in tempForMru one bu one
    var d = []; // number of frame 
    for (k = 0; k < frame; k++) {
        d[k] = k + 1
    }
    console.log(d);
    for (f_MRU = 1; f_MRU <= frame;) {
        for (var i_MRU = 0; i_MRU < array.length; i_MRU++) {
            v = array[i_MRU];
            if (tempForMru.length == 0) {
                tempForMru.push(v);
                page_fault += 1;
            } else if (tempForMru.includes(v)) {
                Hit += 1
            } else if (tempForMru.length < f_MRU) {
                tempForMru.push(v);
                page_fault += 1;
            } else if (tempForMru.length >= f_MRU) {

                for (var index = 0; index < tempForMru.length; index++) {
                    if (tempForMru[index] === array[i_MRU - 1]) {
                        tempForMru[index] = array[i_MRU];
                        page_fault += 1;

                    } else if (tempForMru.length > f_MRU) {
                        tempForMru.pop();
                        tempForMru.push(v);
                        page_fault += 1;
                    }
                }
            }
        }
        sec_array = tempForMru;
        page_fault_MRU = page_fault;
        MRU.push(page_fault);
        f_MRU += 1;
        page_fault = 0;
        tempForMru = [];
    }
    console.log(sec_array);
    console.log(MRU)

    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: d,
            datasets: [{
                label: "Page Fault(MRU) :-",
                data: MRU,
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