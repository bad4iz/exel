/**
 * Created by bad4iz on 16.04.2017.
 */
window.onload = function () {

    switchHide();
    updateMenegerClick()
};


function switchHide() { // переключатель визибл
    const toggles = document.querySelectorAll('.switchHide');
    toggles.forEach(toggle => {
        toggle.ondblclick = function () {
            const [one, two] = toggle.children;
            one.style.display = '';
            two.style.display = 'none';
            one.focus();
            one.onblur = function () {
                one.style.display = 'none';
                two.style.display = '';
                switch (one.name) {
                    case "numberKPInput":
                        if (isNaN(one.value)) {
                            one.style.backgroundColor = "red";
                            return;
                        }
                        one.style.backgroundColor = "";
                        if (one.value != two.textContent) {
                            setNumberKP(one.dataset.main_id, one.value);
                        }
                        break;
                    case "desc":
                        if (one.value != two.textContent) {
                            updateDesc(this);
                        }
                        break;
                }
            }
        }
    });
}


function setNumberKP(idMine, number_kp) { // пишем в базу номер кп
    const text = {
        id: idMine,
        number_kp: number_kp
    };
    httpPost("Router/menegerRouter.php", 'addKp=' + JSON.stringify(text), function (it) {
        location.reload()
    })

}

function updateMenegerClick() {
    const selects = document.querySelectorAll('.updateMeneger');
    selects.forEach(select => {
        select.onchange = function () {
            updateMeneger(this);
        }
    })
}
function updateMeneger(that) {
    const text = {
        id: that.dataset.main_id,
        meneger_id: that.value
    };
    httpPost("Router/menegerRouter.php", 'updateMeneger=' + JSON.stringify(text), function (it) {
        location.reload()
    })
}

function updateDesc(that) {

    const text = {
        id: that.dataset.main_id,
        desc: that.value
    };
    console.log(text);
    httpPost("Router/menegerRouter.php", 'updateDesc=' + JSON.stringify(text), function (it) {
        console.log(it);
        // location.reload()
    })
}