function Graph() {
    var inputs_array = document.getElementById("inputs");
    var array = inputs_array.value.split(" ");
    var frame = document.getElementById("nFrames").valueAsNumber;
    var ctx = document.getElementById("myChart");
    ctx.style.display = "block";
    var tempForLru = [];
    var page_fault = 0;
    var hit = 0;
    var lru = [];
    var sec_array = [];
    var d = [];
    var v = 0;
    for (k = 0; k < frame; k++) {
        d[k] = k + 1
    }
    for (var f_LRU = 1; f_LRU <= frame;) {
        for (var i_LRU = 0; i_LRU < array.length; i_LRU++) {
            v = array[i_LRU];

            if (tempForLru.length == 0) {
                tempForLru.push(v);
                page_fault += 1;
            } else if (tempForLru.includes(v)) {
                var index = tempForLru.findIndex((e) => e == v);
                var arr_remove_number = tempForLru.splice(index, 1);
                var add_number = arr_remove_number.pop();
                tempForLru.push(add_number);
                hit += 1;
            } else if (tempForLru.length < f_LRU) {
                tempForLru.push(v);
                page_fault += 1;
            } else if (tempForLru.length >= f_LRU) {
                tempForLru.shift();
                tempForLru.push(v);
                page_fault += 1;
            }
        }
        sec_array = tempForLru;
        lru.push(page_fault);
        f_LRU++;
        page_fault = 0;
        tempForLru = [];

    }
    console.log(d);
    console.log(lru);
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: d,
            datasets: [{
                label: "Page Fault(LRU) :-",
                data: lru,
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