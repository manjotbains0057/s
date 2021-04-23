$(document).ready(function(){
    //get the query string from the url
    var params = new URLSearchParams(window.location.search);

    //get the name of the panel
    $panelname = params.get('panelname');
   
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
        
        $jsondata = JSON.parse(data);
        $($jsondata).each(function(i, row){
            $(row).each(function(i, r){
                if(i == 0){
                    $("#mydiv").append("<h2 id='"+r+"'>"+r+"</h2>");
                }
                else {
                    $("#mydiv").append("<p id='"+r+"'>"+r+"</p>");
                }
            });
        });
    });
});