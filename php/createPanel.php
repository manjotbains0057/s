<?php
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

    echo json_encode($arr);
}
?>