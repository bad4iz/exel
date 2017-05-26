<?
use exel\model\MainModel;
use exel\model\MenegerModel;
use exel\VIews\Select;

$admin = false;
//
//if ($_COOKIE["user"]) {
//
//    $user = unserialize(base64_decode($_COOKIE["user"]));
//
//    switch ($user['who']) {
//        case 'admin':
//            $admin = true;
//            break;
//        case 'meneger':
//            $m = (int)$user['id'];
//            break;
//    }
//
//    if (isset($_GET['delete'])) {
//        setcookie("user", "", time()-3600);
//        header('Location: /');
//        unset($_GET);
//    }
//
//
//} else if (isset($_GET['meneger'])) {
//    $user = ['who' => 'meneger', 'id' => $_GET['meneger']];
//    $str = base64_encode(serialize($user));
//    setcookie("user", $str, time()+9999999);
//
//} else if (isset($_GET['admin'])) {
//    $user = ['who' => 'admin', 'id' => $_GET['admin']];
//    $str = base64_encode(serialize($user));
//    setcookie("user", $str, time()+9999999);
//    
//
//}

if ($_SESSION['access'] == 6) {
    $admin = true;
} else if ($_SESSION['access'] == 10) {
    {
        $m = $_SESSION['IDUser'];
    }
}

//print_r($_SESSION);
$mainModel = new MainModel();
$menegerModel = new MenegerModel();


$mains = $mainModel->getAll();
$menegers = $menegerModel->getAll();


//d($_SESSION);



?>

<div class="femaly_name"> 
<h5> <?= $_SESSION['name']. ' '. $_SESSION['femaly']  ?></h5>
</div>

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
                        <div style="text-align: end">
                            <?
                            
                            if ($admin) { ?>
                                <p>Добавить сторку <span id="addTr" class="badge badge-success"><i class="fa fa-plus"></i></span></p>
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
                <div style="text-align: end">
                    <?
                    if ($admin) { ?>
                        <p>Добавить сторку <span id="addTr" class="badge badge-success"><i class="fa fa-plus"></i></span></p>
                    <? } ?>
                </div>
            </section>
        </div>
    </div>
</div>
<?
$myFuter = '
<?//d($_SERVER)?>
<!-- jquery and friends -->
<script src="link/lib/jquery/jquery-2.0.3.min.js"></script>

<!--<script src="link/lib/select2.js"></script>-->
<script src="link/lib/jquery.dataTables.min.js"></script>

<script src="https://cdn.datatables.net/1.10.15/css/jquery.dataTables.min.css"></script>
<script src="https://cdn.datatables.net/1.10.15/js/jquery.dataTables.min.js"></script>

<script>
    $(document).ready(function(){
        $(\'#myTable\').DataTable({
        "pageLength": 25,
            "order": [[ 1, "desc" ]]
    });
    });
</script>



<script src="table_orders/js/lib/lib.js"></script>
<script src="table_orders/js/meneger.js"></script>

';