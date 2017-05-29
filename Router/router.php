<?php
//Router / menegerRouter . php

include($_SERVER['DOCUMENT_ROOT'] . "/table_orders/bootstrap.php");

switch ($routes[2]) {
    case "menegerRouter":
        include($_SERVER['DOCUMENT_ROOT'] . "/table_orders/Router/menegerRouter.php");
        break;
    case "":
        
        $title = 'Заказчики FJV';
        include($_SERVER['DOCUMENT_ROOT'] . "/core/view/pages/header.php");
        include($_SERVER['DOCUMENT_ROOT'] . "/table_orders/index.php");
//        echo $myFuter;
        break;

    default:
        not_found::show();
        break;
}
