function Graph() {
    var inputs_array = document.getElementById("inputs");
    var array = inputs_array.value.split(" ");
    var frame = document.getElementById("nFrames").valueAsNumber;
    var ctx = document.getElementById("myChart");
    ctx.style.display = "block";
    var all = [];

    var tempforFifo = [];
    var tempForLifo = [];
    var tempForLru = [];
    var tempForMru = [];
    var list_FIFO = [];
    var tempForRandom = [];
    var tempforopr = [];

    var fault_FIFO = 0;
    var page_fault_LRU = 0;
    var page_fault_Lifo = 0;
    var page_fault_MRU = 0;
    var page_fault_Random = 0;
    var Page_fault_OPT = 0;
    /*---------------------------------------------------------------------------FIFO---------------------------------------------------------*/
    for (var L_FIFO = 0; L_FIFO < array.length; L_FIFO++) {
        if (tempforFifo.length === 0) {
            tempforFifo.push(array[L_FIFO]);
            fault_FIFO++;
        } else if ((tempforFifo.length >= frame) && !(tempforFifo.includes(array[L_FIFO]))) {
            tempforFifo.shift();
            tempforFifo.push(array[L_FIFO]);
            fault_FIFO++;
        } else if (!tempforFifo.includes(array[L_FIFO])) {
            tempforFifo.push(array[L_FIFO]);
            fault_FIFO++;
        } else if (tempforFifo.includes(array[L_FIFO])) {
            list_FIFO = tempforFifo;
        }
        list_FIFO = tempforFifo;
    }
    all.push(fault_FIFO)
        /*---------------------------------------------------------------------------LIFO---------------------------------------------------------*/
    for (var i_Lifo = 0; i_Lifo < array.length; i_Lifo++) {
        if (tempForLifo.length == 0) {
            tempForLifo.push(array[i_Lifo]);
            page_fault_Lifo += 1;
        } else if (tempForLifo.includes(array[i_Lifo])) {

        } else if (tempForLifo.length < frame) {
            tempForLifo.push(array[i_Lifo]);
            page_fault_Lifo += 1;
        } else if (tempForLifo.length >= frame) {
            tempForLifo.pop();
            tempForLifo.push(array[i_Lifo]);
            page_fault_Lifo += 1;
        }
    }
    all.push(page_fault_Lifo);
    /*---------------------------------------------------------------------------LRU---------------------------------------------------------*/
    for (var i_LRU = 0; i_LRU < array.length; i_LRU++) {
        var v = array[i_LRU];
        if (tempForLru.length == 0) {
            tempForLru.push(v);
            page_fault_LRU += 1;
        } else if (tempForLru.includes(v)) {
            var index = tempForLru.findIndex((e) => e == v);
            var arr_remove_number = tempForLru.splice(index, 1);
            var add_number = arr_remove_number.pop();
            tempForLru.push(add_number);
        } else if (tempForLru.length < frame) {
            tempForLru.push(v);
            page_fault_LRU += 1;
        } else if (tempForLru.length >= frame) {
            tempForLru.shift();
            tempForLru.push(v);
            page_fault_LRU += 1;
        }
    }
    all.push(page_fault_LRU);
    /*---------------------------------------------------------------------------MRU---------------------------------------------------------*/
    for (var i_MRU = 0; i_MRU < array.length; i_MRU++) {
        if (tempForMru.length == 0) {
            tempForMru.push(array[i_MRU]);
            page_fault_MRU += 1;
        } else if (tempForMru.includes(array[i_MRU])) {} else if (tempForMru.length < frame) {
            tempForMru.push(array[i_MRU]);
            page_fault_MRU += 1;
        } else if (tempForMru.length >= frame) {
            for (var index = 0; index < tempForMru.length; index++) {
                if (tempForMru[index] === array[i_MRU - 1]) {
                    tempForMru[index] = array[i_MRU];
                    page_fault_MRU += 1;
                } else if (tempForMru.length > frame) {
                    tempForMru.pop();
                    tempForMru.push(array[i_MRU]);
                    page_fault_MRU += 1;
                }
            }
        }
    }
    all.push(page_fault_MRU);
    /*---------------------------------------------------------------------------Random---------------------------------------------------------*/
    for (var i = 0; i < array.length; i++) {
        if (tempForRandom.length == 0) {
            tempForRandom.push(array[i]);
            page_fault_Random += 1;
        } else if (tempForRandom.includes(array[i])) {

        } else if (tempForRandom.length < frame) {
            tempForRandom.push(array[i]);
            page_fault_Random += 1;
        } else if (tempForRandom.length >= frame) {
            index = Math.floor(Math.random() * parseInt(frame));
            tempForRandom[index] = array[i];
            page_fault_Random += 1;
        }
    }
    all.push(page_fault_Random);
    /*---------------------------------------------------------------------------OPR---------------------------------------------------------*/
    for (var k = 0; k < array.length; k++) {
        if (tempforopr.length === 0) {
            tempforopr.push(array[k]);
            console.log(tempforopr);
            list_OPT = tempforopr;
            console.log(list_OPT);
            Page_fault_OPT++;
            console.log(Page_fault_OPT);
        } else if ((tempforopr.length >= frame) && !(tempforopr.includes(array[k]))) {
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
    all.push(Page_fault_OPT);
    /*---------------------------------------------------------------------------Graph---------------------------------------------------------*/
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["FIFO", "LIFO", "LRU", "MRU", "Random", "OPR"],
            datasets: [{
                label: "Page Fault :-",
                data: all,
                backgroundColor: ['rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)'
                ],

                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)'
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