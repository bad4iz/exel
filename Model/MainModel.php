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

    function getAll(){
        $sql = "SELECT * FROM $this->table";
        $items = $this->db->selectAssoc($sql);
        return $items;
    }

    function createItem(){
        $timeCreate = time() ;

    }


}