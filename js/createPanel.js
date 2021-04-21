function btnreset() {
    document.getElementById('newpanel').reset();

    var s = document.getElementById("source");
    s.value = "csv";

    sourceChange();
}

function sourceChange() {
    var s = document.getElementById("source").value;
    var f = document.getElementById("infile");
    var n = document.getElementById("function");
    var l = document.getElementById("livesource");

    if(s == 'csv' || s == 'image' || s == 'text'){
        f.hidden = false;
        n.hidden = true;
        l.hidden = true;
    }
    else if(s == 'numeric'){
        f.hidden = true;
        n.hidden = false;
        l.hidden = true;
    }
    else{
        f.hidden = true;
        n.hidden = true;
        l.hidden = false;
    }
}

function addSource() {
    var s = document.getElementById("source").value;
    var f = document.getElementById("infile");
    var n = document.getElementById("function");
    var l = document.getElementById("livesource");
    var table = document.getElementById('sourcetable');

    table.hidden = false;

    if(s == 'csv' || s == 'image' || s == 'text'){
        var row = table.insertRow();

        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = s;
        cell2.innerHTML = f.value;
    }
    else if(s == 'numeric'){
        var row = table.insertRow();

        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = s;
        cell2.innerHTML = n.value;
    }
    else{
        var row = table.insertRow();

        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = s;
        cell2.innerHTML = l.value;
    }

}