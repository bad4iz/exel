/**
 * Created by bad4iz on 16.04.2017.
 */
window.onload = function () {
    setDate('.numberKPInput', '.dataMeneger', formatDate);
    setDate('.entryInput', '.entryInputData', formatDate, '.entryInputTime', formatTime);
};






function formatDate(date) {

    var dd = date.getDate();
    if (dd < 10) dd = '0' + dd;

    var mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;

    var yy = date.getFullYear() % 100;
    if (yy < 10) yy = '0' + yy;

    return dd + '.' + mm + '.' + yy;
}

function formatTime(date) {

    var hh = date.getHours() + 1;
    if (hh < 10) hh = '0' + hh;

    var mm = date.getMinutes() + 1;
    if (mm < 10) mm = '0' + mm;

    return hh + ':' + mm ;
}


function setDate(classInput, classOutput, callback, classOutput2, callback2) {
    let inputs = document.querySelectorAll(classInput);
    inputs.forEach(input => {
        input.onchange = function () {
            let nows = new Date();
            input.parentNode.parentNode.querySelector(classOutput).textContent = callback(nows);
            input.parentNode.parentNode.querySelector(classOutput2).textContent = callback2(nows);
        }
    });
}