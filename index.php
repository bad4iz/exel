<?
use exel\model\MainModel;
use exel\model\MenegerModel;
use exel\VIews\Select;

require_once 'bootstrap.php';

$mainModel = new MainModel();
$menegerModel = new MenegerModel();


$mains = $mainModel->getAll();
$menegers = $menegerModel->getAll();



if ($_COOKIE["user"]) {

    $user = unserialize(base64_decode($_COOKIE["user"]));

    switch ($user['who']) {
        case 'admin':
            $admin = true;
            break;
        case 'meneger':
            $m = (int)$user['id'];
            break;
    }

    if (isset($_GET['delete'])) {
        setcookie("user", "", time()-3600);
        header('Location: /');
        unset($_GET);
    }


} else if (isset($_GET['meneger'])) {
    $user = ['who' => 'meneger', 'id' => $_GET['meneger']];
    $str = base64_encode(serialize($user));
    setcookie("user", $str, time()+9999999);

} else if (isset($_GET['admin'])) {
    $user = ['who' => 'admin', 'id' => $_GET['admin']];
    $str = base64_encode(serialize($user));
        setcookie("user", $str, time()+9999999);
    $admin = true;

}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link href="css/application.min.css" rel="stylesheet">
    <link href="/css/hc_slider.css" rel="stylesheet">


    <link href="/css/myCss.css" rel="stylesheet">
    <title>Заявки с ордерa</title>
</head>
<body>
<div class="content container">
    <div class="row">
        <div class="col-md-12">
            <h2 class="page-title"><i class="fa fa-list-alt"></i> Таблица Ордера
                <!--                <small>Different variations</small>-->
            </h2>
        </div>
    </div>

    <div class="row">

        <div class="col-md-12">
            <section class="widget">
                <header>
                    <h4>

                        <a href="?delete="> Выйти</a>
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
                    d($mains);

                    ?>
                    <table id="datatable-table" class="table table-striped">
                        <thead>
                        <tr>
                            <th class="no-sort">#</th>
                            <th  style="max-width: 100px !important; text-align: center;">Дата заявки</th>
                            <th style="text-align: center;">Наименование контрагента</th>
                            <th style="text-align: center;">Краткое содежание заявки</th>
                            <th style="text-align: center;">Ответственое лицо</th>
                            <th style="text-align: center;">Номер КП</th>
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
            </section>
        </div>
    </div>
</div>

<?//d($_SERVER)?>
<!-- jquery and friends -->
<script src="link/lib/jquery/jquery-2.0.3.min.js"></script>

<!-- bootstrap default plugins -->
<!--<script src="link/lib/bootstrap/dropdown.js"></script>-->

<!-- bootstrap custom plugins -->
<!--<script src="link/lib/bootstrap-datepicker.js"></script>-->
<!--<script src="link/lib/bootstrap-select/bootstrap-select.js"></script>-->


<!-- jquery plugins -->
<!--<script src="link/lib/jquery-maskedinput/jquery.maskedinput.js"></script>-->
<!--<script src="link/lib/parsley/parsley.js"> </script>-->
<!--<script src="link/lib/icheck.js/jquery.icheck.js"></script>-->
<!--<script src="link/lib/select2.js"></script>-->
<script src="link/lib/jquery.dataTables.min.js"></script>

<!--backbone and friends -->
<!--<script src="link/lib/backbone/underscore-min.js"></script>-->
<!--<script src="link/lib/backbone/backbone-min.js"></script>-->
<!--<script src="link/lib/backbone/backbone-pageable.js"></script>-->
<!--<script src="link/lib/backgrid/backgrid.js"></script>-->
<!--<script src="link/lib/backgrid/backgrid-paginator.js"></script>-->
<!---->
<!-- bootstrap default plugins -->
<!--<script src="link/lib/bootstrap/transition.js"></script>-->
<!--<script src="link/lib/bootstrap/collapse.js"></script>-->
<!--<script src="link/lib/bootstrap/alert.js"></script>-->
<!--<script src="link/lib/bootstrap/tooltip.js"></script>-->
<!--<script src="link/lib/bootstrap/popover.js"></script>-->
<!--<script src="link/lib/bootstrap/button.js"></script>-->
<!--<script src="link/lib/bootstrap/dropdown.js"></script>-->
<!--<script src="link/lib/bootstrap/modal.js"></script>-->
<!--<script src="link/lib/bootstrap/tab.js"> </script>-->

<!-- basic application js-->
<!--<script src="link/js/app.js"></script>-->
<!--<script src="link/js/settings.js"></script>-->

<!-- page-specific js -->
<!--<script src="link/js/forms-article.js"></script>-->
<script src="link/js/tables-dynamic.js"></script>





<script src="js/lib/lib.js"></script>
<script src="js/meneger.js"></script>


</body>
</html>