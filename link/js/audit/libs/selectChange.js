/**
 * Created by bad4iz on 23.03.2017.
 */
var sel = [];
sel = document.body.querySelectorAll('select');

sel.forEach(item => item.onchange = selectChange(item));

function selectChange(select) {
    return function () {
        var id = select.selectedOptions[0].value;
        switch (id) {
            case '1':
                select.style = 'background-color:green; color: white; padding: 0;';
                break;
            case '2':
                select.style = 'background-color:red; color: white; padding: 0;';
                break;
            case '3':
                select.style = 'background-color: gray; color: white; padding: 0;';
                break;
            default:
                select.style = 'background-color: gray; color: white; padding: 0;';
        }
    }
}