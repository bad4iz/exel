<?php
/**
 * Created by PhpStorm.
 * User: bad4iz
 * Date: 18.04.2017
 * Time: 10:44
 */

namespace exel\model;


class MainModel extends ExelDb {
    private $table = 'main';

    function getAll() {
        $sql = "SELECT main.id as main_id, main.dateMain, main.name, main.desc, user.IDUser as menegers_id, 
                        user.name as meneger_name, user.femaly as meneger_femaly,   main.number_kp, main.desc_kp, main.date_kp
                                        FROM main
                     LEFT JOIN geo.user as user ON  (main.meneger_id =  user.IDUser)";
        $items = $this->db->selectAssoc($sql);
        return $items;
    }

    function createItem() {
        $sql = "INSERT INTO $this->table (dateMain) VALUES (NOW())";
        $id = $this->db->addAndGetId($sql);
        return $id;
    }
    function addKp($id, $num){
        $sql = "UPDATE `main` SET `number_kp`='$num',`date_kp`=now() WHERE id=$id";
        $id = $this->db->addAndGetId($sql);
        return $id;
    }
    function updateMeneger($id, $desc){
        $sql = "UPDATE `main` SET `meneger_id`='$desc' WHERE id=$id";
        $id = $this->db->addAndGetId($sql);
        return $id;
    }
   function updateDesc($id, $desc){
        $sql = "UPDATE `main` SET `desc`='$desc' WHERE id=$id";
        $id = $this->db->addAndGetId($sql);
        return $id;
    }

    function updateName($id, $name){
        $sql = "UPDATE `main` SET `name`='$name',`dateMain`=now() WHERE id=$id";
        $id = $this->db->addAndGetId($sql);
        return $id;
    }
   function updateDeskKp($id, $desc){
        $sql = "UPDATE `main` SET `desc_kp`='$desc',`date_kp`=now() WHERE id=$id";
        $id = $this->db->addAndGetId($sql);
        return $id;
    }



}
//UPDATE `main` SET `number_kp`=6,`date_kp`=7 WHERE id=1
