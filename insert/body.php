<?
use exel\VIews\Select;

$menedger;
$selectMeneger = [];
foreach ($mains as $main) {
    $dateMain = new DateTime($main['dateMain']);

    if ($main['date_kp']) {
        $dateKp = new DateTime($main['date_kp']);
        $dateKp = $dateKp->Format('Y-m-d');
    } else {
        $dateKp = '';
    }
    ?>


    <tr>
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

                $selectMeneger[$main['main_id']]->setAttr('menegers_id', 'meneger_name');

                $selectMeneger[$main['main_id']]->view("data-main_id=" . $main['main_id']);
            } else {
                echo $main['meneger_name'];
            } ?>

        </td>
        <td class="center">
            <? if ($user['id'] === $main['menegers_id']) {
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
        <td style="max-width: 300px;">
            <? if ($user['id'] === $main['menegers_id']) {
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
<script src="/js/meneger.js">

</script>