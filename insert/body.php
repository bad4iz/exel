<?
use exel\VIews\Select;

$menedger ;
$selectMeneger = [];
foreach($mains as $main){
    $dateMain = new DateTime($main['dateMain']);

    if($main['date_kp']){
        $dateKp = new DateTime($main['date_kp']);
        $dateKp = $dateKp->Format('Y-m-d');
    }else{
        $dateKp = '';
    }
    ?>




<tr>
    <td ><?= $main['main_id'] ?></td>
    <td class="center entryInputData">
        <?= $dateMain->Format('Y-m-d'); ?>
    </td>
    <td class="center entryInputTime"><?= $dateMain->Format('H:i')?></td>

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
    <td class="select">
        <?if ($admin){
            $selectMeneger[$main['main_id']] = new Select($menegers);
            $selectMeneger[$main['main_id']]->selected($main['menegers_id']);

            $selectMeneger[$main['main_id']]->setAttr('menegers_id', 'meneger_name');

            $selectMeneger[$main['main_id']]->view("data-main_id=".$main['main_id']);
        } else{
            echo $main['meneger_name'];
        }?>

    </td>
    <td class="center">
        <?if($m === $main['menegers_id']){?>
            <div  class="switchHide">
            <input data-main_id="<?=$main['main_id']?>" style="display:none;" type="text" class="numberKPInput" value="<?=$main['number_kp']?>">
            <p style="border-bottom: 1px solid #3a3a3a"><?=$main['number_kp']?$main['number_kp']:'незадан'?></p>
            </div>
        <?}else{
            echo $main["number_kp"];
        }
        ?>
    </td class="center">
    <td class="dataMeneger"><?=$dateKp ?></td>
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