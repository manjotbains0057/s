<?php
    //get the name of the panel
    $panelname = $_POST['panelname'];
    
    $files = array();
    //store the file names in an array
    foreach ($_POST as $param_name => $param_val) {
        if($param_name != 'panelname'){
            array_push($files, strtolower($param_name));
        }
    }

    echo $panelname;
    echo '<pre>';
    print_r($files);
    echo '</pre>';

    $servername = "127.0.0.1";
    $username = "ryan";
    $password = "Angusdraper2";
    $db = "my_db";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $db);

    // Check connection
    if ($conn->connect_error) {
    echo "error connecting to database";
    }
    else{
        $sql = "SELECT tablename, filename FROM files";
        $result = mysqli_query($conn, $sql);

        $arr = array();

        while($row = mysqli_fetch_assoc($result)){
            $arr[] = $row;
        }

        echo $arr;
    }
?>