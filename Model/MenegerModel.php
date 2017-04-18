<?php
/**
 * Created by PhpStorm.
 * User: bad4iz
 * Date: 18.04.2017
 * Time: 13:21
 */

namespace exel\model;


class MenegerModel extends ExelDb {
    private $table = 'menegers';

    function getAll() {
        $sql = "SELECT id as menegers_id, menegers.name as meneger_name  FROM $this->table";
        $items = $this->db->selectAssoc($sql);
        return $items;
    }

    function createItem($name) {
        $sql = "INSERT INTO $this->table (name) VALUES ('$name')";
        $id = $this->db->addAndGetId($sql);
        return $id;
    }


}