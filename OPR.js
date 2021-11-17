function Graph() {
    var inputs_array = document.getElementById("inputs");
    var array = inputs_array.value.split(" ");
    var frame = document.getElementById("nFrames").valueAsNumber;
    var ctx = document.getElementById("myChart");
    ctx.style.display = "block";
    var tempforopr = [];
    var list_OPT = [];
    var OPT = [];
    var Page_fault_OPT = 0;
    var d = [];
    for (var x = 0; x < frame; x++) {
        d[x] = x + 1;
    }
    for (var i = 1; i <= frame;) {
        for (var k = 0; k < array.length; k++) {
            if (tempforopr.length === 0) {
                tempforopr.push(array[k]);
                console.log(tempforopr);
                list_OPT = tempforopr;
                console.log(list_OPT);
                Page_fault_OPT++;
                console.log(Page_fault_OPT);
            } else if ((tempforopr.length >= i) && !(tempforopr.includes(array[k]))) {
                var sarr = array.slice(array.indexOf(array[k]), array.length);
                console.log(sarr);
                var y = [];
                var b = 0;
                for (a = 0; a < sarr.length; a++) {
                    if (b < tempforopr.length - 1) {
                        for (c = 0; c < tempforopr.length; c++) {
                            if (sarr[a] == tempforopr[c] && !(y.includes(tempforopr[c]))) {
                                y.push(tempforopr[c]);
                                b++;
                                console.log(b);
                                break;
                            }
                        }
                    } else {
                        break;
                    }
                }
                tempforopr = y;
                tempforopr.push(array[k]);
                console.log('y');
                console.log(tempforopr);
                list_OPT = tempforopr;
                Page_fault_OPT++;
            } else if (!tempforopr.includes(array[k])) {
                tempforopr.push(array[k]);
                Page_fault_OPT++;
                list_OPT = tempforopr;
                console.log(list_OPT);
            } else if (tempforopr.includes(array[k])) {
                list_OPT = tempforopr;
                console.log(list_OPT);
            }
            list_OPT = tempforopr;
            console.log(Page_fault_OPT);
        }
        OPT.push(Page_fault_OPT);
        console.log(OPT);
        tempforopr = [];
        list_OPT = [];
        Page_fault_OPT = 0;
        i++;
        console.log(i);
    }
    console.log(OPT);
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: d,
            datasets: [{
                label: "Page Fault(OPR) :-",
                data: OPT,
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