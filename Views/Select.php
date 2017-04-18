<?php
/**
 * Created by PhpStorm.
 * User: bad4iz
 * Date: 18.04.2017
 * Time: 14:10
 */

namespace exel\VIews;


class Select implements View {
    private $models;
    private $nameId;
    private $nameValue;
    function __construct($arr) {
        $this->models = $arr;
    }
    /**
     * указываем селекту по каким параметрам выводить
     * @param $nameId
     * @param $nameValue
     */
    function setAttr($nameId, $nameValue){
        $this->nameValue = $nameValue;
        $this->nameId = $nameId;
    }

    function view() {
        echo '<div class="controls form-group">
            <select id="article-language" name="article-language" data-style="btn-success" class="selectpicker">';
            foreach ($this->models as $model){
            echo '<option value="'.$model[$this->nameId].'">'.$model[$this->nameValue].'</option>';
            }
         echo '</select>
        </div>';
    }
}