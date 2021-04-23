<?php
include_once "./databaseConnect.php";

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

    echo json_encode($arr);
}
?>