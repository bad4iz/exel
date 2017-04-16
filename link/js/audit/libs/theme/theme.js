/**
 * Created by bad4iz on 07.04.2017.
 */
var audit = audit || {};

audit.theme = {
  addTheme: function(id, nameTheme, parent) { // вставка в дом
    var panel = document.createElement('div');
    panel.className = 'panel ';
    panel.id = 'panel_' + id;
    var heading = '<div class="panel-heading input-group ">' +
       '<a class="accordion-toggle list-group-item" data-toggle="collapse" data-parent="#accordionTheme" href="#collapseTheme' + id + '">' + nameTheme + '</a>' +
       '<div class="input-group-btn" id="deletetheme_' + id + '">' +
       '<button type="button" class="btn btn-danger buttonDeleteTheme"><i class="fa fa-trash-o"></i></button></div></div>';
    var collapse = '<div id="collapseTheme' + id + '" class="panel-collapse in" style="height: auto;">' +
       '<div class="panel-body">' +
       '<p style="text-align: end"><span class="badge formAddQuestionVisibleClick"><i class="fa fa-plus"></i><i class="fa  fa-question"></i></span></p>' +
       '<div id="formAddQuestion' + id + '" class="formAddQuestionVisible" style="display: none;">' +
       '<div>' +
       '<div class="form-group ">' +
       '<div class="input-group">' +
       '  <input type="text" required="" class="form-control" placeholder="вопрос" name="text">' +
       '  <div class="input-group-btn">' +
       '    <select id="phone-type" class="selectpicker" name="question_select" data-style="btn-primary" style="display: none;"><option value="1"> да</option><option value="2"> нет</option><option value="3"> n/a</option></select><div class="btn-group bootstrap-select"><button class="btn dropdown-toggle clearfix btn-primary" data-toggle="dropdown" id="phone-type"><span class="filter-option"> да</span>&nbsp;<i class="fa fa-caret-down"></i></button><ul class="dropdown-menu" role="menu" style="max-height: 573.8px; overflow-y: auto; min-height: 60px;"><li rel="0"><a tabindex="-1" href="#" class=""> да</a></li><li rel="1"><a tabindex="-1" href="#" class=""> нет</a></li><li rel="2"><a tabindex="-1" href="#" class=""> n/a</a></li></ul></div></div>' +
       ' </div>' +
       ' </div> <p style="text-align: end"> <input type="number" required="" placeholder="очки " style="color: #3a3a3a;width: 100px;" name="score"></p>' +
       '  <input hidden="" type="number" name="theme_id" value="' + id + '">' +
       ' <p style="text-align: end">' +
       '<button id="addQuestion_' + id + '" type="button" class="btn btn-success addQuestionButton" data-placement="top" data-original-title=".btn .btn-success">' +
       ' Сохранить </button> </p> </div>' +
       '<table class="table table-striped"> <tbody id="tbodyTheme_' + id + '"> </tbody></table>' +
       '</div> </div></div>';
    var theme = heading + collapse;
    panel.innerHTML = theme;
    parent.appendChild(panel);
    
    audit.question.addQuestionVisibleClickCollections(); // инициализируем скрытие\отображение добавления вопросов
    audit.question.addQuestionsClick(); // инициализируем добавление вопросов
    audit.theme.deleteThemesClick();  // инициализация кнопки удаления темы
    audit.question.deleteQuestionsClick();  // инициализация кнопки удаления questions
    
  },
  
  addThemeInGroupClick: function() { // добавление темы обработчик нажатия кнопки
    var parents = document.querySelectorAll('.addThemeInGroup');
    parents.forEach(parent => {
      var panelGroup = parent.parentNode.querySelector('.panel-group'); // получаем panel-group
      var button = parent.querySelector('button'); // получаем кнопку
      var inputText = parent.querySelector('input'); // получаем инпут
      
      button.onclick = function() {
        var themeName = inputText.value;
        var group_id = parent.id.split('_')[1];
        var theme = {theme: themeName, group_id: group_id};
        if (themeName) {
          httpPost("app", 'addThemeAudit=' + JSON.stringify(theme), function(it) {
            audit.theme.addTheme(it, themeName, panelGroup);
          });
          inputText.value = '';
        }
      }
    });
  },
  deleteThemesClick: function() { // инициализация кнопок удаления темы
    var deleteButtons = document.querySelectorAll('.buttonDeleteTheme');
    deleteButtons.forEach(deleteButton => {
      var id = deleteButton.parentNode.id.split('_')[1];
      deleteButton.onclick = function() {
        if (confirm("Вы действительно хотите удалить?")) {
          audit.theme.deleteTheme(id)
        }
      }
    });
  },
  deleteTheme: function(id) {// обработчик на онклик кнопки удаления темы
    var panel = document.getElementById('panel_' + id);
    httpPost("app", 'deleteTheme=' + JSON.stringify(id), function(it) {
      removeDom(panel);
    })
  },
  updateAllClick: function() { // инициализация кнопки перезаписи темы
    var buttons = document.querySelectorAll('.updateTheme');
    buttons.forEach(button => {
      button.onclick = function() {
      var parent = button.parentNode.parentNode;
      var theme = parent.querySelector('input[name="theme"]');
      var theme_id = parent.querySelector('input[name="theme_id"]');
        if (theme.value && theme_id.value) {
          var textTheme = {theme_id: theme_id.value, theme: theme.value};
          httpPost("app", 'updateThemeAudit=' + JSON.stringify(textTheme), function(it) {
            document.querySelector('a[href="#collapseTheme'+ textTheme.theme_id +'"]').text = textTheme.theme;
            var parent = document.getElementById('updateTheme' + textTheme.theme_id);
            var close = parent.querySelector('.close');
            close.click();
          })
        }
      }
    })
  }
  
  
};