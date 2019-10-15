<?php

    // header();
    $dbusr = "link";
    $servername = "localhost";
    $dbpasswd = "1007";
    $dbname = "demo";
    
    $conn = new mysqli($servername, $dbusr, $dbpasswd, $dbname);
    if ($conn->connect_error) {
        die("连接失败: " . $conn->connect_error);
    } 
    echo "连接成功";


    $sql_fetch_data = "select * from studentmanager";
    $result = $conn->query($sql_fetch_data);
    if($result->num_rows > 0){
        while($temp = $result->fetch_assoc()){
            var_dump($temp);
        }
    }


    $conn->close();
?>