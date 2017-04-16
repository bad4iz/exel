
/**
 * Created by bad4iz on 18.03.2017.
//  */
import {httpPost} from "./lib";


(function() {


 



  ///////////////////////    vvvv       /////////////////////////////



  function createAudit(obj) {
    let panel = document.createElement('div');
    panel.className = 'panel';
    let panelHeading = new PanelHeading(obj.theme, obj.theme_id);
    let panelCollapse = new PanelCollapse(obj.theme_id);
    let inputQustion = new InputForm();


    inputQustion.buttonAdd.onclick = function() {
      console.log('добавление вопроса');
    };


    // console.log(inputQustion.getThis());
    panelCollapse.body = inputQustion.getThis();
      // console.log(obj.questions);

    for (let key in obj.questions) {
      if(obj.questions[key].questions_id){
        console.log(obj.questions[key].questions_id);
        let question = new QuestionAudit(obj.questions[key]);
        panelCollapse.body = question.getThis();
      }
      // panelCollapse.appendChild((new QuestionAudit(obj.questions[key])).getThis())
    }


    panel.appendChild(panelHeading.getThis());
    panel.appendChild(panelCollapse.getThis());
    return panel;
  }






  //  запись селекта
  function writeSelect(answers) {
    let select = document.createElement('select');
    answers.forEach((item) => {
      let option = document.createElement('option');
      option.className = item.id;
      option.appendChild(document.createTextNode(item.answer));
      select.appendChild(option)
    });
    return select;
  }


  // // ДОрисовка таблицы
  // function drawingTable(item, parentElem, nextSibling) {
  //
  //   let tr = document.createElement('tr'),
  //      tdQuestion = document.createElement('td'),
  //      tdAnswer = document.createElement('td'),
  //      tdButton = document.createElement('td'),
  //      button = document.createElement('button');
  //
  //   tdQuestion.textContent = item.question;
  //   tdAnswer.textContent = item.answer;
  //   tr.className = '';
  //   button.className = 'delete';
  //   button.textContent = 'Удалить';
  //   button.onclick = function() {
  //     httpPost("app.php", 'deleteQuestion=' + JSON.stringify(item.id))
  //     .then(
  //        response => {
  //          if (response) {
  //            parentElem.removeChild(tr)
  //          }
  //        },
  //        error => console.log(`Rejected: ${error}`)
  //     )
  //   };
  //
  //   tdButton.appendChild(button);
  //   tr.appendChild(tdQuestion);
  //   tr.appendChild(tdAnswer);
  //   tr.appendChild(tdButton);
  //   parentElem.insertBefore(tr, nextSibling)
  //
  // }



  ////////////////     вызов      ////////////////////
  let audit = document.getElementById('audit');
  let inputForm = new InputForm();

  audit.appendChild(InputForm.getThis());


  httpPost("app", 'getGroupQuestionsOnTopics')
  .then(
     response => {
       console.log(JSON.parse(response));
       let resp = JSON.parse(response);
       for (let key in resp) {
         /* ... делать что-то с obj[key] ... */
         audit.appendChild(createAudit(resp[key]))
       }

     },
     error => console.log(`Rejected: ${error}`)
  );




}());
