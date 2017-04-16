/**
 * Created by bad4iz on 07.04.2017.
 */

window.onload = function () {
    var open = document.getElementById('myTabContentLeft'); // получаем
    open.childNodes[1].className += " active in"; // делаем активную первую вкладку


    audit.question.addQuestionVisibleClickCollections(); // инициализируем скрытие\отображение добавления вопросов
    audit.question.addQuestionsClick(); // инициализируем добавление вопросов
    audit.question.deleteQuestionsClick();  // инициализация кнопки удаления questions
    audit.question.updateAllClick(); // инициализация кнопки перезаписи вопроса

    audit.theme.addThemeInGroupClick(); // инициализация добавления темы в группу
    audit.theme.deleteThemesClick();  // инициализация кнопки удаления темы
    audit.theme.updateAllClick() // инициализация кнопки перезаписи темы

    audit.entireBill.aClick();

};