$(document).ready(function(){

    $.post("../php/displayPanels.php", function(data){
        $("#displayPanels").append($("<div></div><br/>")).append(data);
    });
});