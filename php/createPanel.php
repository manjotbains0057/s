<?php
    include_once "./databaseConnect.php";

    $panelname = $_POST['panelname'];

    $files = array();
    //store the file names in an array
    foreach ($_POST['tables'] as $table_val) {
        array_push($files, strtolower($table_val));
    }

    // Check connection
    if ($conn->connect_error) {
        echo "error connecting to database";
    }
    else{
        $jsarr = array();
        foreach($files as $key => $val){
            $sql = "SHOW COLUMNS FROM ".$files[$key];
            $result = mysqli_query($conn, $sql);
    
            $arr = array();
            $arr[] = $files[$key];
            while($row = mysqli_fetch_assoc($result)){
                $arr[] = $row['Field'];
            }
            $jsarr[] = $arr;
        }

        echo json_encode($jsarr);
    }
?>