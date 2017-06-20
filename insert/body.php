<?
use exel\VIews\Select;

function nextWorkDay($day){
    $tmpN = date('N', strtotime('+1 day', strtotime($day)));
    $tmp = strtotime('+1 day', strtotime($day));
    switch ($tmpN) {
        case 6:
            $tmp = strtotime('+1 day', $tmp);
        case 7:
            $tmp = strtotime('+1 day', $tmp);
    }
    return $tmp; 
}

$selectMeneger = [];
foreach ($mains as $main) {
    $dateMain = new DateTime($main['dateMain']);

//    print "<script>console.log(". $dateMain .")</script>";
    
    if ($main['date_kp']) {
        $dateKp = new DateTime($main['date_kp']);
        $dateKp = $dateKp->Format('Y-m-d');
    } else {
        $dateKp = '';
    } 
    ?>


 
    <tr 
       style="<?
            if(!$dateKp){
                mysql_query('INSERT INTO `rivg_messages_only_user` (`IDmessanges`, `IDUser`, `IDUser_Sender`, `id_doc`, `Status`, `Text`, `visible`) VALUES (NULL, "'.$main[menegers_id].'", "1", "'. $main['main_id'] .'", "0", "У вас имеется не заполненое поле", "0");');
                $dateNext =  nextWorkDay($main['dateMain']);
                if ($dateNext< time()){
                    echo 'border: 1px solid #fb0909;';
                }
            }
        ?>"
    >
        <td><?= $main['main_id'] ?></td>
        <td class="center entryInputData max50" style="max-width: 100px !important; ">
            <?= $dateMain->Format('Y-m-d'); ?> <?= $dateMain->Format('H:i') ?>
        </td>

        <td>
            <?= $admin?'<div class="switchHide">':'' ?>
            <?= $admin?'<input data-main_id='.$main['main_id'].' type="text" class="entryInput" value="'. $main["name"] .'" name="name" style="display:none;">':'' ?>
            <div><?= $main["name"]?$main["name"]:'......'?></div>
            <?= $admin?"</div>":"" ?>

        </td>
        <td style="max-width: 300px;">
            <?= $admin?"<div  style=\"max-width: 300px\" class=\"switchHide\">":"" ?>
            <?= $admin?"<textarea data-main_id=".$main['main_id']." name=\"desc\" style=\"display:none;\">". $main["desc"]."</textarea>":"" ?>
                <div  style="word-wrap: break-word;"><?= $main["desc"]?$main["desc"]:'......' ?></div>
            <?= $admin?"</div>":"" ?>

        </td>
        <td class="select">
            <? if ($admin) {
                $selectMeneger[$main['main_id']] = new Select($menegers);
                $selectMeneger[$main['main_id']]->selected($main['menegers_id']);

                $selectMeneger[$main['main_id']]->setAttr('menegers_id', 'meneger_femaly' );

                $selectMeneger[$main['main_id']]->view("data-main_id=" . $main['main_id']);
            } else {
                echo  $main['meneger_femaly'] . ' ' . $main['meneger_name'];
            } ?>

        </td>
        
                
        <!--        номер кп-->
        <td class="center">
            <? if (($m === $main['menegers_id'])) {
                ?>
                <div class="switchHide">
                    <input maxlength="10" data-main_id="<?= $main['main_id'] ?>" style="display:none;" type="text"
                           class="numberKPInput" value="<?= $main['number_kp'] ?>" name="numberKPInput">
                    <p style="border-bottom: 1px solid #3a3a3a"><?= $main['number_kp'] ? $main['number_kp'] : '......' ?></p>
                </div>
            <?
            } else {
                echo $main["number_kp"];
            }
            ?>
        </td >
        <!--      /  номер кп-->
        
        <!--        сумма-->
        <td class="center">
            <? if (($m === $main['menegers_id'])) {
                ?>
                <div class="switchHide">
                    <input maxlength="10" data-main_id="<?= $main['main_id'] ?>" style="display:none;" type="text"
                           class="sum" value="<?= $main['sum'] ?>" name="sum">
                    <p style="border-bottom: 1px solid #3a3a3a"><?= $main['sum'] ? $main['sum'] : '......' ?></p>
                </div>
            <?
            } else {
                echo $main["sum"];
            }
            ?>
        </td >
        <!--       / сумма-->
        
        <td style="max-width: 300px;">
            <? if ($m === $main['menegers_id']) {
                ?>
                <div class="switchHide" style="max-width: 300px">
                    <textarea  data-main_id="<?= $main['main_id'] ?>" style="display:none;" type="text"
                              class="descKp"  name="descKp"><?= $main['desc_kp'] ?></textarea>
                    <p style="border-bottom: 1px solid #3a3a3a; word-wrap: break-word;"><?= $main['desc_kp'] ? $main['desc_kp'] : '......' ?></p>
                </div>
            <?
            } else {?>
             <div style="word-wrap: break-word;"> <?= $main["desc_kp"];?></div>

            <?}
            ?>
        </td >
        <td class="dataMeneger"><?= $dateKp ?></td>
    </tr>
<? } // конец for

if ($admin) { ?>
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td><span id="addTr" class="badge badge-success"><i class="fa fa-plus"></i></span></td>
    </tr>
<? } ?>
