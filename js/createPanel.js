$(document).ready(function(){
    $form = $('form');

    //load users stored files
    $.getJSON("../php/createPanel.php", function(data){
        console.log(data);
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