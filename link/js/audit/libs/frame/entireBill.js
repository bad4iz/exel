/**
 * Created by bad4iz on 10.04.2017.
 */
var audit = audit || {};

audit.entireBill = {

    frame: document.getElementById('frameAudit'),
    fieldentireBill: document.getElementById('entireBill'),

    aClick: function () { // генерация кликов на а
     var arr = document.querySelectorAll('a[href^="#collapseTheme"]');
        arr.forEach(a=>{
            a.onclick = function () {
                if(audit.entireBill.frame.style.display === 'none'){audit.entireBill.frame.style.display = '';}
                console.log(audit.entireBill.frame.style.display);
                audit.entireBill.fieldentireBill.textContent = a.dataset.score;
                // console.log(a);
            }
        })
    },

};

