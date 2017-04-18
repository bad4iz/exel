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
        $sql = "SELECT main.id as main_id, main.dateMain, main.name, main.desc, menegers.id as menegers_id, menegers.name as meneger_name,   main.number_kp, main.date_kp
                                        FROM main
                      LEFT JOIN menegers ON  ($this->table.meneger_id =  menegers.id)";
        $items = $this->db->selectAssoc($sql);
        return $items;
    }

    function createItem() {
        $sql = "INSERT INTO $this->table (dateMain) VALUES (NOW())";
        $id = $this->db->addAndGetId($sql);
        return $id;
    }




}