$(document).ready(function(){
    //get the query string from the url
    var params = new URLSearchParams(window.location.search);

    //get the name of the panel
    $panelname = params.get('panelname');
    $('h1').text($panelname);
   
    //get an array of all of the table names
    var array = [];
    var keys = params.keys();
    for(var key of keys){
        if(key != 'panelname')
            array.push(key.toLowerCase());
    }

    //display all values
    $.post("../php/createPanel.php", 
    {
        panelname: $panelname,
        tables: array
    }, function(data){
        
        //create a table for user to enter data
        $jsondata = JSON.parse(data);
        $($jsondata).each(function(i, row){
            $("#mydiv").append("<h2>"+ row[0] +"</h2>");
            $table = $("#mydiv").append("<table id="+row[0]+"></table>");
            $($table).append("<tr></tr>").append("<th>Data</th>")
            .append("<th>Min Range</th>")
            .append("<th>Max Range</th>")
            .append("<th>Nominal</th>")
            .append("<th>Add to panel</th>");
            $(row).each(function(i, r){
                if(i != 0){
                    $table.append("<tr id="+r+" name="+r+"></tr>")
                    .append("<td id="+r+"_name name="+r+">"+r+"</td>")
                    .append("<td><input type=text id="+r+"_min name="+r+"></></td>")
                    .append("<td><input type=text id="+r+"_max name="+r+"></></td>")
                    .append("<td><input type=text id="+r+"_nominal name="+r+"></></td>")
                    .append("<td><input type=checkbox id="+r+"_use name="+r+"></></td>");
                }
            });
        });
    });

    //when submit is clicked
    $('form').submit(function(e){
        //prevent submit
        e.preventDefault();
        var checked = $('input:checkbox:checked').length;
        
        if(checked == 0){
            alert('Please select data to add to the panel');
        }
        else{
            var finished = false;

            //array to hold each rows data
            var jsonarray = [];

            //for each row that is selected
            $('input:checkbox:checked').each(function(i, n){
                $name = n.name;
                var min = document.getElementById($name+"_min");
                var max = document.getElementById($name+"_max");
                var nom = document.getElementById($name+"_nominal");

                //if min is empty
                if(min.value.trim() == '' || min.value.trim() == null){
                    alert('please enter a minimum value');
                    min.focus();
                }
                else if(max.value.trim() == '' || max.value.trim() == null){ //if max is empty
                    alert('please enter a maximum value');
                    max.focus();
                }
                else if(nom.value.trim() == '' || nom.value.trim() == null){ //if nom is empty
                    alert('please enter nominal value/s');
                    nom.focus();
                }
                else{
                    //get input values and make into json string
                    $str = {name: $name, 
                        values: {
                        min: min.value.trim(),
                        max: max.value.trim(),
                        nominal: nom.value.trim() }
                    };

                    //add values to panel json string
                    jsonarray.push($str);

                    finished = true;
                }
            });

            if(finished == true){
                //create json array for panel data
                $jsonstr = {
                    panelname: $panelname,
                    data: jsonarray
                };

                //send json to php file
                $.post("../php/addPanelToDB", {
                    json: JSON.stringify($jsonstr)
                }, function(data){
                    console.log(data);
                });

                //submit form
                $('form').off().submit();
            }
        }
    });
});