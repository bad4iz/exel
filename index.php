<?
$insert ='';
if (isset($_GET['m'])) {
    $insert = 'insert/menegers.php';
} else if (isset($_GET['a'])) {
    $insert = 'insert/admin.php';
    $admin = true;

} else exit();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link href="css/application.min.css" rel="stylesheet">
    <link href="/css/hc_slider.css" rel="stylesheet">
    <title>Title</title>
</head>
<body>
<div class="content container">
    <div class="row">
        <div class="col-md-12">
            <h2 class="page-title">Static Tables
                <small>Different variations</small>
            </h2>
        </div>
    </div>

    <div class="row">

        <div class="col-md-12">
            <section class="widget">
                <header>
                    <h4>
                        <i class="fa fa-list-alt"></i>
                        Таблица Exel
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
                       <? include $insert;
                       include 'insert/body.php';
                       ?>

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
</body>
</html>