/* 
 * Глобальные функции применяемые не в одной странице
 */


function getXmlHttp() {
    var xmlhttp;
    try {
        xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
        try {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (E) {
            xmlhttp = false;
        }
    }
    if (!xmlhttp && typeof XMLHttpRequest != 'undefined') {
        xmlhttp = new XMLHttpRequest();
    }
    return xmlhttp;
}

function sendAjsx_standart(url_sender) {

    var xmlhttp = getXmlHttp()
    xmlhttp.open('GET', url_sender, false);//Выполняем асинхронный запрос
    xmlhttp.send(null);//Не передаем дополнительных параметров
    if (xmlhttp.status == 200) {//Если ответ удачный выводим alert
        alert(xmlhttp.responseText);
    }
}