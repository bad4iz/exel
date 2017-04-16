/**
 * Created by bad4iz on 20.03.2017.
 */
import {httpPost} from "./libs/lib";
import {PanelHeading} from "./views/acordion/panel/PanelHeading";
import {PanelCollapse} from "./views/acordion/panel/PanelCollapse";
import {InputForm} from "./views/form/InputForm";
import {QuestionAuditCollection} from "./views/folder/questionCreateAudit/questionCollection";
import {AddButton} from "./views/button/addButton";
import {addThemeAudit} from "./controller/addThemeAudit";
import {deleteThemeAndQuestion} from "./controller/deleteTheme";
import {addQuestionInThisTheme} from "./controller/addQuestionInThisTheme";

////////////////     вызов      ////////////////////
let audit = document.getElementById('audit');
let inputThemeAudit = new InputForm();

// кнопка добавления темы заголовка
let addButton = new AddButton();
addButton.onclick = function () {
    if( inputThemeAudit.value ) {
        addThemeAudit(inputThemeAudit.value, audit);
        inputThemeAudit.value = '';
    }
};

inputThemeAudit.addButtons(addButton.getThis()); // добавили в форму

audit.appendChild(inputThemeAudit.getThis()); // добавили форму на страницу

httpPost("app", 'getGroupQuestionsOnTopics')
    .then(
        response => {
            let resp = JSON.parse(response);
            for (let key in resp) {
                audit.appendChild(createAudit(resp[key]))
            }
        },
        error => console.log(`Rejected: ${error}`)
    );


/////////////////////       сборка             \\\\\\\\\\\\\\\\\\\\\\\\

export function createAudit(obj) {
    let panel = document.createElement('div');
    panel.className = 'panel';
    let panelHeading = new PanelHeading(obj.theme, obj.theme_id); // шапка панели
    let panelCollapse = new PanelCollapse(obj.theme_id); // скрытая панель
    let questionsCollection = new QuestionAuditCollection(obj.questions); // коллекция вопросов

    panelHeading.buttonDelete.onclick = function () {
        if(!panelCollapse._body.childNodes[1].childElementCount){
          deleteThemeAndQuestion(obj.theme_id, panel);
        }
    };
    let inputQuestion = new InputForm();

    let addQuestion = new AddButton(); // кнопочка добавления вопроса
    addQuestion.onclick = function(){
        if( inputQuestion.value){
            questionsCollection.addQuestion(obj.theme_id, inputQuestion.value);
            inputQuestion.value = ""
        }
    };

    //это сама программа
    inputQuestion.addButtons(addQuestion.getThis()); // добавили в форму
    panelCollapse.pushBody(inputQuestion.getThis());

    panelCollapse.pushBody(questionsCollection.getThis());

    panel.appendChild(panelHeading.getThis());
    panel.appendChild(panelCollapse.getThis());
    return panel;
}