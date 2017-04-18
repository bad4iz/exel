<?php
/**
 * Created by PhpStorm.
 * User: bad4iz
 * Date: 18.04.2017
 * Time: 16:13
 */

use exel\model\MainModel;
require_once '../bootstrap.php';
$post = $_POST;

$mains = new MainModel();

foreach ($_POST  as $key => $value){
    switch ($key){
        case 'addKp':
            $mains
            print $value;
    }
}
