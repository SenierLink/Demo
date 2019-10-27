<?php


class first
{
    private $private1;

    public function echoHello(){
        echo "hello world";
    }
    public function echoName(){
        echo $this->private1;
    }
}