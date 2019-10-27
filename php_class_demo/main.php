<?php

    function autoload_1($name){
        require ('php.class/' .$name .'.php');
    }
    function autoload_2($name){
        require ('php.class/' .$name .'.php');
        echo "autoload_2 was run </br>";
    }
    spl_autoload_register("autoload_2");
    spl_autoload_register("autoload_2");

    $foo1 = new first();
    $foo2 = new second();
    $foo3 = new first();
    $foo4 = new second();
    $foo5 = new third();

?>
