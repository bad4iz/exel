<?
use exel\model\MainModel;
use exel\model\MenegerModel;
use exel\VIews\Select;

require_once 'vendor/autoload.php';


$admin = false;

$mainModel = new MainModel();
$menegerModel = new MenegerModel();


$mains = $mainModel->getAll();
$menegers = $menegerModel->getAllMenegerKom();


$chartManger = [];
$tableAnalystArr = [];
foreach ($mains as $main) {
    $chartManger[$main['meneger_femaly']]['count'] += 1;
    $tableAnalystArr[$main['meneger_femaly']]['countOrders'] += 1;
    
    $tableAnalystArr[$main['meneger_femaly']]['sum'] += $main['sum'];
    
    if ($main['date_kp']) {
        $tableAnalystArr[$main['meneger_femaly']]['countAnswer'] += 1;
    } else {
        $tableAnalystArr[$main['meneger_femaly']]['countNoAnswer'] += 1;
    }
    if (!$main['number_kp']){
        $tableAnalystArr[$main['meneger_femaly']]['noneNumberKp'] += 1;
    }
}

////  chart Manger
$chartMangerString = '[[\'Task\', \'Hours per Day\']';
foreach ($chartManger as $key => $main) {
    $chartMangerString .= ",['" . $key . "'," . $main['count'] . "]";
}
$chartMangerString .= ']';
//    

foreach ($mains as $key => $main) {
   
}


if ($_SESSION['access'] == 6) {
    $admin = true;
} else if ($_SESSION['access'] == 10) {
    {
        $m = $_SESSION['IDUser'];
    }
}


if ($_SESSION['auth_admin_login'] == "bad4iz") {
    d($_SESSION);

    d($mains);

    ///////////////////////////////////////////////////////
    ///   видно только мне 
    /// ----------------------------------------------
    /// 
    /// 

    /**
     *
     * main_id
     * dateMain
     * name
     * desc
     * menegers_id
     * meneger_name
     * meneger_femaly
     * number_kp
     * desc_kp
     * date_kp
     */

    d($tableAnalystArr);
    ?>

    <?

    /// ----------------------------------------------
    ///   видно только мне 
    ///////////////////////////////////////////////////////
}
?>


    <link href="link/qw/jquery-ui.min.css" rel="stylesheet">
    <link href="link/qw/jquery-ui.theme.min.css" rel="stylesheet">
    <link href="https://jquery-ui-bootstrap.github.io/jquery-ui-bootstrap/css/custom-theme/jquery-ui-1.10.3.custom.css"
          rel="stylesheet">
    <style>
        .ui-datepicker.ui-datepicker-multi {
            width: auto;
            margin: auto;
        }
    </style>

    <div class="femaly_name">
    </div>

    <div class="content container">

        <div class="row">
            <div class="col-md-12">
                <h2 class="page-title"><i class="fa fa-list-alt"></i> Таблица Ордера </h2>
            </div>

        </div>
        <div class="panel-group" id="accordion2">
            <div class="panel">
                <div class="panel-heading">
                    <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapseOne">
                        Фильтр по датам
                    </a>
                </div>

                <div id="collapseOne" class="panel-collapse collapse" style="height: auto;">
                    <div class="panel-body">
                        <div id="date_range"></div>
                    <div class="col-md-3" style="margin: auto; float: none">
                        <button class="btn btn-lg btn-warning btn-block" onclick="resetDate()">
                            Сбросить
                        </button>
                    </div>
                    </div>
                </div>
            </div>
            <div class="panel">
                <div class="panel-heading">
                    <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#analyst">
                        Аналитика
                    </a>
                </div>
                <div id="analyst" class="panel-collapse collapse">
                    <div class="panel-body">

                    <div id="piechart" style="width: 100%; height: 400px"></div>
                    <div id="table-analyst">
                        <table id="tableAnalyst" class="table table-striped">
                            <thead>
                            <tr>
                                <th>Фамилия</th>
                                <th>Назначено заявок</th>
                                <th>Обработано заявок</th>
                                <th>Заявки без номера КП</th>
                                <th>Не принято заявок</th>
                                <th>Сумма</th>
                            </tr>
                            </thead>
                            <tbody>
                            <?
                                foreach ($tableAnalystArr as $key => $value) {
                                    ?>
                                    <tr>
                                        <td><?=$key?></td>
                                        <td><?=$value['countOrders']?></td>
                                        <td><?=$value['countAnswer']?></td>
                                        <td><?=$value['noneNumberKp'] - $value['countNoAnswer']?></td>
                                        <td><?=$value['countNoAnswer']?></td>
                                        <td><?=$value['sum']?></td>
                                    </tr>
                                    <?
                                }
                            ?>

                            </tbody>
                        </table>

                    </div>
                    </div>


                </div>
            </div>
        </div>
        <div class="row">

            <div class="col-md-12">
                <section class="widget">
                    <header>
                        <h4>
                            <div style="text-align: end">
                                <?

                                if ($admin) { ?>
                                    <p>Добавить сторку <span id="addTr" class="badge badge-success"><i
                                                    class="fa fa-plus"></i></span></p>
                                <? } ?>
                            </div>

                            <!--                        <a href="?delete="> Выйти</a>-->
                        </h4>
                    </header>
                    <style>
                        select, textarea {
                            color: initial;
                            font: inherit;
                            margin: 0;
                        }
                    </style>
                    <div class="body">
                        <?
                        rsort($mains);
                        //                    d($mains);

                        ?>
                        <table id="myTable" class="table table-striped">
                            <thead>
                            <tr>
                                <th class="no-sort">#</th>
                                <th style="max-width: 100px !important; text-align: center;">Дата заявки</th>
                                <th style="text-align: center;">Наименование контрагента</th>
                                <th style="text-align: center;">Краткое содежание заявки</th>
                                <th style="text-align: center;">Ответственое лицо</th>
                                <th style="text-align: center;">Номер КП</th>
                                <th style="text-align: center;">Сумма</th>
                                <th style="text-align: center;">Комментарий КП</th>
                                <th style="text-align: center;">Дата внесения КП</th>
                            </tr>
                            </thead>
                            <tbody>
                            <? include 'insert/body.php'; ?>

                            </tbody>
                        </table>
                        <blockquote>
                            сноска сюда что нибудь вставить
                        </blockquote>
                    </div>
                    <div style="text-align: end">
                        <?
                        if ($admin) { ?>
                            <p>Добавить сторку <span id="addTr" class="badge badge-success"><i
                                            class="fa fa-plus"></i></span></p>
                        <? } ?>
                    </div>
                </section>
            </div>
        </div>
    </div>


<?


include($_SERVER['DOCUMENT_ROOT'] . "/core/view/pages/default_scripts.php");

$myFuter = '
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="link/qw/jquery-ui.min.js"></script>
    <script src="https://rawgit.com/Artemeey/5ebc39370e568c34f03dce1639cabee8/raw/8de40b26479c406ee9cd6f9b4b3f4ad05370a024/jquery.datepicker.extension.range.min.js"></script>
  

    <script src="https://cdn.datatables.net/1.10.15/js/jquery.dataTables.min.js"></script>



    <script src="table_orders/js/lib/lib.js"></script>
    <script src="table_orders/js/meneger.js"></script>

    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
<script >


    var table = $(\'#myTable\').DataTable({
        "pageLength": 100, "order": [[ 1, "desc" ]]
    }).on( "draw", function () { switchHide();} );
    

      $(\'#date_range\').datepicker({
        range: \'period\', // режим - выбор периода
        numberOfMonths: 2,
        onSelect: function(dateText, inst, extensionRange, caused) { // метод выполняется когда изменился выбор дат
             table.draw();
        }
      });

      function isUndef(x) {
        return x === undefined;
      }
    var extensionRange = $("#date_range").datepicker("widget").data("datepickerExtensionRange"); // 
    
    $.fn.dataTable.ext.search.push(
        
        function( settings, data, dataIndex) {

            var minTmp = extensionRange.startDateText  || " ";
            var date = data[1].split(" ")[0] || ""; // use data for the age column
            var tmpMin = minTmp.split( "/" );
            var min = tmpMin[2] + "-" + tmpMin[0] +"-" + tmpMin[1];
                        
            var maxTmp = extensionRange.endDateText || " ";
            var tmpMax = maxTmp.split( "/" );
            var max = tmpMax[2] + "-" + tmpMax[0] +"-" + tmpMax[1];
            
            if ( ( isUndef( min ) && isUndef( max ) ) || ( isUndef( min ) && date <= max ) ||
                 ( min <= date   && isUndef( max ) ) ||  ( min <= date   && date <= max ) )  {
                return true;
            }
            return false;
        }
    );
    
    function resetDate() {
        extensionRange.startDateText = "01/01/01";
        extensionRange.endDateText = "01/01/99";
         table.draw();
    }

    resetDate(); // сбросили фильтр

      google.charts.load(\'current\', {\'packages\':[\'corechart\']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable(' . $chartMangerString . ');

        var options = {
            title: \'Распределение заявок\',
            backgroundColor: \'#666968\',
            tooltip: {
                textStyle: {
                    color: \'#666968\'
                    }, 
                showColorCode: true
            },
            height: 400,
            width: 900
        };

        var chart = new google.visualization.PieChart(document.getElementById(\'piechart\'));

        chart.draw(data, options);
      }
      
     ////////////////////
    

</script>';
