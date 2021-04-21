<?php
    //if access via submit button
    if(isset($_POST['submit'])){
        //return to sign up page with success query
        header("location: ../html/signUp.html?success");
        exit();
    }
    else {
        //return to sign up page
        header("location: ../html/signUp.html");
        exit();
    }
?>