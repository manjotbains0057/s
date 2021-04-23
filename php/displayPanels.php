<?php
        include_once "./databaseConnect.php";

        //insert query
        $sql = "SELECT paneldata FROM panels";
        $result = mysqli_query($conn, $sql);

        while ($row = $result->fetch_assoc()) {
            echo print_r($row);
        }
?>