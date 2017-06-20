<?php
/**
 * Created by PhpStorm.
 * User: bad4iz
 * Date: 18.04.2017
 * Time: 16:13
 */

use exel\model\MainModel;

$post = $_POST;

$mains = new MainModel();

foreach ($_POST as $key => $value) {
    switch ($key) {
        case 'addKp':
            $resp = json_decode($value);
            print $mains->addKp($resp->id, $resp->number_kp);
            //            print $value;
            break;
        case 'updateMeneger':
            $resp = json_decode($value);
            print $mains->updateMeneger($resp->id, $resp->meneger_id);
//                        print $value;
            break;
        case 'updateDesc':
            $resp = json_decode($value);
            print $mains->updateDesc($resp->id, $resp->desc);
            //            print $value;
            break;
        case 'updateName':
            $resp = json_decode($value);
            print $mains->updateName($resp->id, $resp->name);
            //            print $value;
            break;
        case 'updateDescKp':
            $resp = json_decode($value);
            print $mains->updateDeskKp($resp->id, $resp->descKp);
            break;
        case 'createItem':
            print $mains->createItem();
            //            print $value;
            break;
        case 'updateSum':
            $resp = json_decode($value);
            print $mains->updateSum($resp->id, $resp->sum);
            break;
    }
}
exit();