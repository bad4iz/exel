/**
 * Created by bad4iz on 16.04.2017.
 */
window.onload = function() {
    switchHide();
    updateMenegerClick();
    addTrClick();
    updateSumClick();
};


function switchHide() { // переключатель визибл
    const toggles = document.querySelectorAll('.switchHide');
    toggles.forEach(toggle => {
        toggle.ondblclick = function() {
            const [one, two] = toggle.children;
            one.style.display = '';
            two.style.display = 'none';
            one.focus();


            document.onkeyup = function(e) {
                e = e || window.event;
                if (e.keyCode === 13) {
                    job();
                }
                return false;
            };

            one.onblur = job;

            function job() {
                switch (one.name) {
                    case 'numberKPInput':
                        if (one.value.length < 10) {
                            two.style.display = '';
                            one.style.display = 'none';
                            if (one.value != two.textContent) {
                                setNumberKP(one.dataset.main_id, one.value);
                            }
                        }
                        break;
                    case 'sum':
                    if (one.value.length < 10) {
                        two.style.display = '';
                        one.style.display = 'none';
                        if (one.value != two.textContent) {
                            updateSum(one.dataset.main_id, one.value);
                        }
                    }
                    break;
                    case 'desc':
                        two.style.display = '';
                        one.style.display = 'none';
                        if (one.value != two.textContent) {
                            updateDesc(this);
                        }
                        break;
                    case 'name':
                        two.style.display = '';
                        one.style.display = 'none';
                        if (one.value != two.textContent) {
                            updateName(this);
                        }
                        break;
                    case 'descKp':
                        two.style.display = '';
                        one.style.display = 'none';
                        if (one.value != two.textContent) {
                            updateDescKp(this);
                        }
                        break;
                }
            }
        };
    });
}


function setNumberKP(idMine, number_kp) { // пишем в базу номер кп
    const text = {
        id: idMine,
        number_kp: number_kp
    };
    httpPost('table-orders/menegerRouter', 'addKp=' + JSON.stringify(text), function(it) {
        location.reload();
    });
}

function updateSum(idMine, sum) { // пишем в базу сумму
    const text = {
        id: idMine,
        sum: sum
    };
    console.log(text);
    httpPost('table-orders/menegerRouter', 'updateSum=' + JSON.stringify(text), function(it) {
        // console.log(it);
        location.reload();
    });
}

function updateSumClick() {
    const selects = document.querySelectorAll('.sum');
    selects.forEach(select => {
        select.onchange = function() {
            updateSum(this);
        };
    });
}

function updateMenegerClick() {
    const selects = document.querySelectorAll('.updateMeneger');
    selects.forEach(select => {
        select.onchange = function() {
            updateMeneger(this);
        };
    });
}

function updateMeneger(that) {
    const text = {
        id: that.dataset.main_id,
        meneger_id: that.value
    };
    httpPost('table-orders/menegerRouter', 'updateMeneger=' + JSON.stringify(text), function(it) {
        console.log(it);
        // location.reload()
    });
}

function updateDesc(that) {
    const text = {
        id: that.dataset.main_id,
        desc: that.value
    };
    console.log(text);
    httpPost('table-orders/menegerRouter', 'updateDesc=' + JSON.stringify(text), function(it) {
        console.log(it);
        location.reload();
    });
}

function updateName(that) {
    const text = {
        id: that.dataset.main_id,
        name: that.value
    };
    // console.log(text);
    httpPost('table-orders/menegerRouter', 'updateName=' + JSON.stringify(text), function(it) {
        // console.log(it);
        location.reload();
    });
}

function updateDescKp(that) {
    const text = {
        id: that.dataset.main_id,
        descKp: that.value
    };
    // console.log(text);
    httpPost('table-orders/menegerRouter', 'updateDescKp=' + JSON.stringify(text), function(it) {
        // console.log(it);
        location.reload();
    });
}

function addTrClick() {
    button = document.getElementById('addTr');
    if (button) {
        button.onclick = function() {
            httpPost('table-orders/menegerRouter', 'createItem=' + JSON.stringify('createItem'), function(it) {
                // console.log(it);
                location.reload();
            });
        };
    }
}
