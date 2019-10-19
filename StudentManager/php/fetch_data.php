<?php

    header('Content-Type:application/json; charset=utf-8');
    $dbusr = "link";
    $servername = "localhost";
    $dbpasswd = "1007";
    $dbname = "demo";
    
    
    $conn = new mysqli($servername, $dbusr, $dbpasswd, $dbname);
    if ($conn->connect_error) {
        die("连接失败: " . $conn->connect_error);
    } 


    $sql_fetch_data = "select * from studentmanager";
    $result = $conn->query($sql_fetch_data);
    if($result->num_rows > 0){
        $arr = array();
        while($row = $result->fetch_assoc()){
            // var_dump($temp);
            $arr[count($arr)] = $row;
        }
        echo json_encode($arr);
    }


    $conn->close();
?>