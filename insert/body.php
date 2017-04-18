<?
 $menedger ;

foreach($mains as $main){

    ?>
<tr>
    <td>1</td>
    <td class="entryInputData"><?= $main['dateMain'] ?></td>
    <td class="entryInputTime"><?= $main['dateMain']?></td>

    <td >
        <?
        if ($admin) {
            echo '<input type="text" class="entryInput" value="'.$main["name"] .'">';
        }else echo $main["name"];
        ?>
        </td>
    <td>
        <?
        if ($admin) {
            echo '<textarea name="desc">'.$main["desc"] .'</textarea>';
        }else echo $main["desc"];
        ?>
       </td>
    <td>
        <?if ($admin){
            $selectMeneger->view();
        } else{
            echo $main['meneger_name'];
        }?>

    </td>
    <td >
        <?if($m == $main['menegers_id']){?>
            <div  class="switchHide">
            <input data-main_id="<?=$main['main_id']?>" style="display:none;" type="text" class="numberKPInput" value="<?=$main['number_kp']?>">
            <p><?=$main['number_kp']?$main['number_kp']:'незадан'?></p>
            </div>
        <?}else{
            echo $main["number_kp"];
        }
        ?>
    </td>
    <td class="dataMeneger"><?=$main["date_kp"]?></td>
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
<script src="/js/meneger.js">

</script>