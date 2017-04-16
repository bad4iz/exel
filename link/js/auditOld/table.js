/**
 * Created by bad4iz on 18.03.2017.
 */
(function() {
  
  let test = document.getElementById('test');
  // выборка класса селекта
  let selectedAnswer = document.querySelectorAll('.selectedAnswer');
  
  httpPost("app", 'themeQuestions')
  .then(
     response => {
       console.log(response);
       let resp = JSON.parse(response);
       resp.themeQuestions.forEach(item => {
         test.appendChild(createTable(item, resp))
       });
     },
     error => console.log(`Rejected: ${error}`)
  );
  
  
  function createTable(themeQuestionsItem, resp) {
    let table = document.createElement('table'),
       caption = document.createElement('caption');
    caption.textContent = themeQuestionsItem.theme;
    
    let trth = document.createElement('tr'),
       thQuestion = document.createElement('th'),
       thAnswer = document.createElement('th');
    thQuestion.textContent = "Вопрос";
    thAnswer.textContent = "Ответ";
    trth.appendChild(thQuestion);
    trth.appendChild(thAnswer);
    table.appendChild(trth);
    
    let tr = document.createElement('tr'),
       tdInputText = document.createElement('td'),
       tdSelectedAnswer = document.createElement('td'),
       tdButton = document.createElement('td'),
       input = document.createElement('input'),
       select = writeSelect(resp.answerSimples),
       button = document.createElement('button');
    
    tr.id = 'themeQuestionsItem_' + themeQuestionsItem.id;
    input.type = 'text';
    button.textContent = 'Добавить';
    button.onclick = function() {
      let index = select.options.selectedIndex,
         text = {};
      text['question'] = input.value;
      input.value = '';
      text['answer_id'] = select[index].className;
      text['themeQuestionsItem_id'] = themeQuestionsItem.id;
      httpPost("app", 'text=' + JSON.stringify(text))
      .then(
         response => {
           console.log(JSON.parse(response));
           JSON.parse(response).forEach(item=>drawingTable(item, table, tr));
         },
         error => console.log(`Rejected: ${error}`)
      )
    };
    tdInputText.appendChild(input);
    tdSelectedAnswer.appendChild(select);
    tdButton.appendChild(button);
    
    tr.appendChild(tdInputText);
    tr.appendChild(tdSelectedAnswer);
    tr.appendChild(tdButton);
    
    httpPost("app", 'getAllInTheme=' + JSON.stringify(themeQuestionsItem.id))
    .then(
       response => {
         console.log(JSON.parse(response));
         JSON.parse(response).forEach(item=>drawingTable(item, table, tr));
       },
       error => console.log(`Rejected: ${error}`)
    );
    table.appendChild(tr);
    table.appendChild(tr);
    table.appendChild(caption);
    return table;
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
  
  
  // ДОрисовка таблицы
  function drawingTable(item, parentElem, nextSibling) {
    
      let tr = document.createElement('tr'),
         tdQuestion = document.createElement('td'),
         tdAnswer = document.createElement('td'),
         tdButton = document.createElement('td'),
         button = document.createElement('button');
      
      tdQuestion.textContent = item.question;
      tdAnswer.textContent = item.answer;
      tr.className = '';
      button.className = 'delete';
      button.textContent = 'Удалить';
      button.onclick = function() {
        httpPost("app.php", 'deleteQuestion=' + JSON.stringify(item.id))
        .then(
           response => {
             if(response){
               parentElem.removeChild(tr)
             }
           },
           error => console.log(`Rejected: ${error}`)
        )
      };
      
      tdButton.appendChild(button);
      tr.appendChild(tdQuestion);
      tr.appendChild(tdAnswer);
      tr.appendChild(tdButton);
      parentElem.insertBefore(tr, nextSibling)
    
  }
  
  
}());
