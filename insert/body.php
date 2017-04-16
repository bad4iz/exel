<?for ($i=1; $i<10; $i++){
    $menedger = rand ( 1 , 4 )
    ?>
<tr>
    <td>1</td>
    <td>15.03.17</td>
    <td>15:03</td>

    <td >
        <?
        if ($admin) {
            echo "<input type=\"text\" class=\"numberKPInput\" value=\"Создать таблицу\" onchange=\"function () {
  console.log(55555);
}\">";
        }else echo "Создать таблицу"
        ?>
        </td>
    <td>
        <?
        if ($admin) {
            echo "<input type=\"text\" class=\"numberKPInput\" value=\" Создать таблицу заполнения менеджарами\" >";
        }else echo " Создать таблицу заполнения менеджарами"
        ?>
       </td>
    <td>
        <?if ($admin){?>
        <div class="controls form-group">
            <select id="article-language" name="article-language"
                    data-style="btn-success"
                    class="selectpicker">
                <option value="0">Первый менеджер</option>
                <option value="1">Второй менеджер</option>
                <option value="2">третий менеджер</option>
            </select>
        </div>
        <?} else{
            echo $name;
        }?>

    </td>
    <td>
        <?if($m == $menedger){
            echo "<input type=\"text\" class=\"numberKPInput\" value=\"задание\">";
        }else{
            echo "задание";
        }
        ?>



    </td>
    <td>10,02,17</td>
</tr>
<?} // конец for

if ($admin) {?>
<tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td><span class="badge badge-success"><i class="fa fa-plus"></i></span></td>
</tr>
<?}?>
<script src="/meneger.js">

</script>