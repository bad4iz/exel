/**
 * Created by bad4iz on 07.04.2017.
 */
var audit = audit || {};

audit.question = {
  
  addQuestionVisibleClickCollections: function() { // функция отображения и скрытия поля добавления вопроса
    var butts = document.querySelectorAll('.formAddQuestionVisibleClick');
    butts.forEach(item => {
      item.onclick = function() {
        audit.question.formVisibleAll(item);
      }
    })
  },
  
  formVisibleAll: function(item) {
    var display = item.parentNode.parentNode.querySelector('.formAddQuestionVisible').style.display;
    if (display === 'none') {
      item.parentNode.parentNode.querySelector('.formAddQuestionVisible').style.display = "block";
    } else {
      item.parentNode.parentNode.querySelector('.formAddQuestionVisible').style.display = "none";
    }
  },
  
  formVisible: function(id) {
    var block = document.getElementById('formAddQuestion' + id);
    if (!block) {
      return
    }
    ;
    var display = block.style.display;
    if (display === 'none') {
      block.style.display = "block";
    } else {
      block.style.display = "none";
    }
  },
  deleteQuestionsClick: function() { // инициализация кнопок удаления вопроса
    var deleteButtons = document.querySelectorAll('.buttonDeleteQuestion');
    deleteButtons.forEach(deleteButton => {
      var id = deleteButton.parentNode.id.split('_')[1];
      deleteButton.onclick = function() {
        audit.question.deleteQuestion(id)
      }
    });
  },
  deleteQuestion: function(id) {// обработчик на онклик кнопки удаления вопроса
    if (confirm("Вы действительно хотите удалить?")) {
      var tr = document.getElementById('trQuestion_' + id);
      httpPost("app", 'deleteQuestion=' + JSON.stringify(id), function(it) {
        removeDom(tr);
      })
    }
  },
  addQuestion: function(text) {
    httpPost("app", 'addInTheme=' + JSON.stringify(text), function(it) {
      audit.question.drawinqQuestion(it, text);
      console.log('прорисовка вопроса ' + it);
      console.log(text);
    })
  },
  addQuestionsClick: function() {
    var addQuestionButtons = document.querySelectorAll('.addQuestionButton');
    addQuestionButtons.forEach(addQuestionButton => {
      addQuestionButton.onclick = function() {
        var text;
        var grandFather = addQuestionButton.parentNode.parentNode;
        var score = grandFather.querySelector('input[name="score"]');
        var answerSimple_id = grandFather.querySelector('select');
        var textQuestion = grandFather.querySelector('input[name="text"]');
        var theme_id = grandFather.querySelector('input[name="theme_id"]');
        
        if (textQuestion.value && score.value && theme_id.value && answerSimple_id.value) {
          text = {
            theme_id: theme_id.value,
            question: textQuestion.value,
            answerSimple_id: answerSimple_id.value,
            score: score.value
          };
          textQuestion.value = '';
          score.value = '';
          audit.question.addQuestion(text);
        }
      }
    })
  },
  getAnswerQuestion: function(id) {
    var classSpan, answer;
    switch (id) {
      case '1':
        classSpan = 'badge-success';
        answer = 'да';
        break;
      case '2':
        classSpan = 'badge-danger';
        answer = 'нет';
        break;
      case '3':
        classSpan = '';
        answer = 'н/а';
        break;
    }return {classSpan:classSpan, answer:answer}
  },
  drawinqQuestion: function(id, text) {
    var a = this.getAnswerQuestion(text.answerSimple_id);
    var classSpan = a.classSpan , answer = a.answer;
   
    var parent = document.getElementById('tbodyTheme_' + text.theme_id);
    html = '<tr id="trQuestion_' + id + '">' +
       '<td>' + text.question + '</td>' +
       ' <td style="width: 50px">' + text.score + '</td>' +
       ' <td style="width: 20px">' +
       '<span class="badge ' + classSpan + ' ">' + answer + '</span>' +
       '</td>' +
       '<td style="width: 20px" id="deleteQuestionButton_' + id + '">' +
       '  <button type="button"  class="btn btn-danger buttonDeleteQuestion">' +
       '<i class="fa fa-trash-o"></i>' +
       '</button>' +
       '</td>' +
       '</tr>';
    parent.innerHTML += html;
    audit.question.deleteQuestionsClick()
  },
  updateAllClick: function() { // инициализация кнопки перезаписи вопроса
    var buttons = document.querySelectorAll('.updateQuestionButton');
    buttons.forEach(button => {
      button.onclick = function() {
        var parent = button.parentNode.parentNode.parentNode;
        
        var score = parent.querySelector('input[name="score"]');
        var answerSimple_id = parent.querySelector('select');
        var question = parent.querySelector('input[name="text"]');
        var id = parent.querySelector('input[name="question_id"]');
        
        if (score.value && answerSimple_id.value && question.value) {
          var textQuestion = {
            question: question.value,
            answerSimple_id: answerSimple_id.value,
            score: score.value,
            id: id.value
          };
          httpPost("app", 'updateQuestionAudit=' + JSON.stringify(textQuestion), function(it) {
            var tr = document.getElementById('trQuestion_' + id.value).children;
            tr[0].textContent = question.value;
            tr[1].textContent = score.value;
            var a = audit.question.getAnswerQuestion(answerSimple_id.value);
            var classSpan = a.classSpan , answer = a.answer;
            tr[2].innerHTML = '<span class="badge ' + classSpan + ' ">' + answer + '</span>';
            var parent = document.getElementById('updateQuestion' + id.value);
            var close = parent.querySelector('.close');
            close.click();
          })
        }
      }
    })
  }
  
};


