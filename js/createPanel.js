$(document).ready(function(){
    $('#add').click(function(){
        var s = document.getElementById("source").value;
        var f = document.getElementById("infile");
        var n = document.getElementById("function");
        var l = document.getElementById("livesource");
        var table = document.getElementById('sourcetable');
    
        if(s == 'csv' || s == 'image' || s == 'text'){
            if(f.value == ''){
                alert('Please choose file');
                f.focus();
            }
            else{
                var row = table.insertRow();
    
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                cell1.innerHTML = s;
                cell2.innerHTML = f.value;
            }
        }
        else if(s == 'numeric'){
            var row = table.insertRow();
    
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            cell1.innerHTML = s;
            cell2.innerHTML = n.value;
        }
        else{
            if(l.value.trim() == ''){
                alert('please add data to field');
                l.focus();
            }
            else {
                var row = table.insertRow();
    
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                cell1.innerHTML = s;
                cell2.innerHTML = l.value;
            }
        }
    });

    $('#source').change(function(){
        var s = document.getElementById("source").value;
        var f = document.getElementById("infile");
        var n = document.getElementById("function");
        var l = document.getElementById("livesource");
    
        f.value = '';
        l.value = '';

        //if source is changed to csv, image, or text
        if(s == 'csv' || s == 'image' || s == 'text'){
            f.hidden = false;
            n.hidden = true;
            l.hidden = true;
        }
        else if(s == 'numeric'){ //if source is changed to numeric
            f.hidden = true;
            n.hidden = false;
            l.hidden = true;
        }
        else{ //if source is changed to live
            f.hidden = true;
            n.hidden = true;
            l.hidden = false;
        }
    });

    $('#newpanel').submit(function(e){
        //stop for submitting
        e.preventDefault();
    
        var table = document.getElementById('sourcetable');
        var length = table.rows.length;
        var name = document.getElementById('panelname');
    
        if(name.value.trim() == '' || name.value.trim() == null){
            alert('Please enter a name for the panel');
            name.focus();
        }
        else if(length == 1){
            alert('Cannot create panel without data sources');
        }
        else {
            $('#newpanel').off().submit();
        }
    });

    $('#reset').click(function(){
        document.getElementById('panelname').innerHTML = '';
        $("#source").val('csv').trigger('change');
    });
});