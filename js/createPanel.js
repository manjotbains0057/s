$(document).ready(function(){
    $('form').submit(function(e){
        e.preventDefault();

        var name = document.getElementById('panelname').value.trim();
        var myData = {panelname: name};
        $.ajax(
        {
            type: 'post',
            url: '../php/createPanel.php',
            dataType: 'json',
            data: {json: JSON.stringify(myData)},
        },
        function(datarec){
            alert(datarec);
        });
        e.preventDefault();
    });
});