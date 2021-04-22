$(document).ready(function(){
    $form = $('form');

    //load users stored files
    $.getJSON("../php/createPanel.php", function(data){
        //display all files and options
        $(data).each(function(i, row){
            $("#allfiles")
                .append("<p>"+row.filename+"</p>")
                .append("<input type='radio' id='use' name='"+row.tablename+"' checked/>")
                .append("<label for'use'>use</label><br/>")
                .append("<input type='radio' id='disregard' name='"+row.tablename+"'/>")
                .append("<label for'disregard'>disregard</label><br/><br/>");
        });
    });

    $form.submit(function(e){
        //stop form from submitting
        e.preventDefault();

        //get the users input for panel name
        var name = document.getElementById('panelname');

        //check if panel name is empty or null
        if(name.value.trim() == '' || name.value.trim() == null){
            alert('Panel must have a name');
            name.focus();
        }
        else{
            //submit form
            $form.off().submit();
        }
    });
});