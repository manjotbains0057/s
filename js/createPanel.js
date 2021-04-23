$(document).ready(function(){
    $form = $('form');

    //load users stored files
    $.getJSON("../php/createPanelQuery.php", function(data){
        //display all files and options
        $(data).each(function(i, row){
            $("#allfiles")
                .append("<p>"+row.filename+"</p>")
                .append("<input type='checkbox' id='use' name='"+row.tablename+"'/>")
                .append("<label for'use'>use</label><br/><br/>");
        });
    });

    $form.submit(function(e){
        //stop form from submitting
        e.preventDefault();

        //get the users input for panel name
        var name = document.getElementById('panelname');
        var checked = $('input:checkbox:checked').length;

        //check if panel name is empty or null
        if(name.value.trim() == '' || name.value.trim() == null){
            alert('Panel must have a name');
            name.focus();
        }
        else if(checked == 0){ //check if no streams selected
            alert('Panel must have at least one stream');
        }
        else{
            //submit form
            $form.off().submit();
        }
    });
});