<?php
/**
 * Created by PhpStorm.
 * User: bad4iz
 * Date: 18.04.2017
 * Time: 10:31
 */
function myAutoLoad($className) {
    $className = str_replace('\\', '/', $className);
    $ind = strpos($className, '/');
    if ($ind) {
        $className = substr($className, $ind + 1);

    }
    //    $className = 'Model/MainModel';


    echo $className . '<br>';
    require_once $className . '.php';
}

spl_autoload_register('myAutoLoad');

require_once 'vendor/autoload.php';
