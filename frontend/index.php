<?php
session_start();

//TESTING ONLY
$_SESSION["logged"]=true;

if(isset($_GET["code"])){

}


if($_SESSION["logged"]){
    require('pages/timetable.php');
} else {
    require('pages/landing.php');
}

?>