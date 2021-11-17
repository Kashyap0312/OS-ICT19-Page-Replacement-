function opt() {
    var inputs = document.getElementById("inputs");
    var arr = inputs.value.split(" ");
    var frames = document.getElementById("nFrames").valueAsNumber;
    var list = [];
    var temp = [];
    var fault = 0;
    var hit = 0;
    var table = document.getElementById("tab");
    table.style.display = "table";
    var rowReq = document.getElementById("req");
    if (arr.length > 16) {
        alert(" please Enter maximum 16 number ")
    } else {
        for (var i = 0; i < arr.length; i++) {
            var column = rowReq.insertCell(-1);
            column.innerHTML = arr[i];
        }
        for (var i = 1; i <= frames; i++) {
            var rowrow = table.insertRow(-1);
            rowrow.setAttribute("id", "frame" + i)
            var cell1 = rowrow.insertCell(-1);
            cell1.innerHTML += "Frame " + (i) + ": ";
            cell1.setAttribute("id", "arr" + i);
            for (var j = 1; j <= arr.length; j++) {
                var rowTemp = document.getElementById("frame" + i);
                var column = rowTemp.insertCell(-1);
                column.setAttribute("id", "col" + j)
                if (temp[i - 1] == null)
                    column.innerHTML = "";
            }
        }
        for (i = 0; i < arr.length; i++) {
            if (temp.length == 0) {
                temp.push(arr[i]);
                console.log(temp);
                console.log(" array lenth is 0")
                list = temp;
                fault++;
            } else if ((temp.length >= frames) && !(temp.includes(arr[i]))) {
                temp.pop();
                console.log(" array lenth is 1")
                temp.push(arr[i])
                list = temp;
                fault++;
            } else if ((temp.length >= frames) && (temp.includes(arr[i]))) {
                var index = temp.findIndex((e) => e == arr[i]);
                var sl = temp.splice(index, 1);
                var pp = sl.pop();
                temp.push(pp);
                console.log(" array lenth is 2")
                list = temp;
                hit++;
            } else if (!temp.includes(arr[i])) {
                fault++;
                console.log(" array lenth is 3")
                temp.push(arr[i]);
                console.log(temp);
                list = temp;
            } else if (temp.includes(arr[i])) {
                var findI = temp.findIndex((q) => q == arr[i]);
                var mm = temp.splice(findI, 1);
                var a = mm.pop();
                temp.push(a);
                console.log(" array lenth is 4")
                console.log(temp);
                list = temp;
                hit++;
            }
            list = temp;
            for (j = 1; j < list.length + 1; j++) {
                table.rows[j].cells[i + 1].innerHTML = list[j - 1];
            }
        }
        var rate = (fault / arr.length);
        var rate1 = (hit / arr.length);
        document.getElementById("faults").innerHTML += fault;
        document.getElementById("faultrate").innerHTML += rate.toFixed(2);
        document.getElementById("hits").innerHTML += hit;
        document.getElementById("hitrate").innerHTML += rate1.toFixed(2);
        document.getElementById("nums").style.display = "block";
        document.getElementById("nums2").style.display = "block";
    }
}

function reset() {
    location.reload();
}