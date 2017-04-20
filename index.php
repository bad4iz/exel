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
         header('Location: ' . $_SERVER['HTTP_HOST']);
     }

} else if (isset($_GET['meneger'])) {
    $user = ['who' => 'meneger', 'id' => $_GET['meneger']];
    $str = base64_encode(serialize($user));

    setcookie("user", $str, time()+3600);
     header('Location: ' . $_SERVER['HTTP_HOST']);

 } else if (isset($_GET['admin'])) {
    $user = ['who' => 'admin', 'id' => $_GET['admin']];
    $str = base64_encode(serialize($user));
    setcookie("user", $str, time()+3600);
    $admin = true;
     header('Location: ' . $_SERVER['HTTP_HOST']);

 } else exit();

d($_SERVER);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link href="css/application.min.css" rel="stylesheet">
    <link href="/css/hc_slider.css" rel="stylesheet">


    <link href="/css/myCss.css" rel="stylesheet">
    <title>Title</title>
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

                <div class="body">
                    <table class="table table-striped">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Дата поступления заявки</th>
                            <th>Время поступления заявки</th>
                            <th>Наименование контрагента</th>
                            <th>Краткое содежание заявки</th>
                            <th>ФИО ответственого лица</th>
                            <th>Номер КП</th>
                            <th>Дата внесения КП</th>
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


<!-- jquery and friends -->
<script src="link/lib/jquery/jquery-2.0.3.min.js"></script>

<!-- bootstrap default plugins -->
<script src="link/lib/bootstrap/dropdown.js"></script>

<!-- bootstrap custom plugins -->
<script src="link/lib/bootstrap-datepicker.js"></script>
<script src="link/lib/bootstrap-select/bootstrap-select.js"></script>

<!-- page specific -->
<script src="link/js/forms-article.js"></script>


<script src="js/lib/lib.js"></script>
<script src="js/meneger.js"></script>
</body>
</html>