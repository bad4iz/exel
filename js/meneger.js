

function setNumberKP(idMine, numberKp) { // пишем в базу номер кп
    const text = {
        id: idMine,
        numberKp: numberKp
    };
    httpPost('Router/menegerRouter.php', 'addKp=' + JSON.stringify(text), function() {
        location.reload();
    });
}

function updateMeneger(that) {
    const text = {
        id: that.dataset.main_id,
        menegerId: that.value
    };
    httpPost('Router/menegerRouter.php', 'updateMeneger=' + JSON.stringify(text), function() {
        location.reload();
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

function updateDesc(that) {
    const text = {
        id: that.dataset.main_id,
        desc: that.value
    };
    httpPost('Router/menegerRouter.php', 'updateDesc=' + JSON.stringify(text), function() {
        location.reload();
    });
}
function updateName(that) {
    const text = {
        id: that.dataset.main_id,
        name: that.value
    };
    httpPost('Router/menegerRouter.php', 'updateName=' + JSON.stringify(text), function() {
        location.reload();
    });
}

function updateDescKp(that) {
    const text = {
        id: that.dataset.main_id,
        descKp: that.value
    };
    httpPost('Router/menegerRouter.php', 'updateDescKp=' + JSON.stringify(text), function() {
        location.reload();
    });
}

function addTrClick() {
    const button = document.getElementById('addTr');
    if (button) {
        button.onclick = function() {
            httpPost('Router/menegerRouter.php', 'createItem=' + JSON.stringify('createItem'), function() {
                location.reload();
            });
        };
    }
}

function switchHide() { // переключатель визибл
    const toggles = document.querySelectorAll('.switchHide');
    toggles.forEach(toggle => {
        toggle.ondblclick = function() {
            const [one, two] = toggle.children;
            one.style.display = '';
            two.style.display = 'none';
            one.focus();
            function job() {
                switch (one.name) {
                    case 'numberKPInput':
                        if (one.value.length < 10) {
                            two.style.display = '';
                            one.style.display = 'none';
                            if (one.value !== two.textContent) {
                                setNumberKP(one.dataset.main_id, one.value);
                            }
                        }
                        break;
                    case 'desc':
                        two.style.display = '';
                        one.style.display = 'none';
                        if (one.value !== two.textContent) {
                            updateDesc(this);
                        }
                        break;
                    case 'name':
                        two.style.display = '';
                        one.style.display = 'none';
                        if (one.value !== two.textContent) {
                            updateName(this);
                        }
                        break;
                    case 'descKp':
                        two.style.display = '';
                        one.style.display = 'none';
                        if (one.value !== two.textContent) {
                            updateDescKp(this);
                        }
                        break;
                    default :
                }
            }
            document.onkeyup = function(event) {
                const e = event || window.event;
                if (e.keyCode === 13) {
                    job();
                }
                return false;
            };
            one.onblur = job;
        };
    });
}


window.onload = function() {
    switchHide();
    updateMenegerClick();
    addTrClick();
};
