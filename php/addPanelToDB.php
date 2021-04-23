<?php
    include_once "./databaseConnect.php";

    //panel data as json decoded
    $var = json_decode($_POST['json'], true);
    $name = $var['panelname'];

    //insert query
    $sql = "INSERT INTO panels(panelname, paneldata) VALUES($name, $var)";
    mysqli_query($conn, $sql);
?>