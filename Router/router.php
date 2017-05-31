<?php
//Router / menegerRouter . php

include($_SERVER['DOCUMENT_ROOT'] . "/table_orders/bootstrap.php");

switch ($routes[2]) {
    case "menegerRouter":
        $title = 'Зак';
        include($_SERVER['DOCUMENT_ROOT'] . "/core/view/pages/header.php");
        include($_SERVER['DOCUMENT_ROOT'] . "/table_orders/Router/menegerRouter.php");
        break;   
    case "icon":
        include($_SERVER['DOCUMENT_ROOT'] . "/table_orders/ui_icons.php");
        break;
    case "":
        
        $title = ' Таблица Ордера';
        include($_SERVER['DOCUMENT_ROOT'] . "/core/view/pages/header.php");
        include($_SERVER['DOCUMENT_ROOT'] . "/table_orders/index.php");
//        echo $myFuter;
        break;

    default:
        not_found::show();
        break;
}
