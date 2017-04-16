/**
 * Created by bad4iz on 21.03.2017.
 */
import {httpPost} from "../../../libs/lib";
import {QuestionAudit} from "./QuestionAudit";
export class QuestionAuditCollection {

    constructor(questions) {
        this.div = document.createElement('div');
        this.div.className = 'QuestionAuditCollection';
        let id;
            for (let key in questions) {
                if (questions[key].questions_id) {
                  id =  questions[key].questions_id;
                  let item = questions[key].questionText;
                  this.question = new QuestionAudit(item);
                  this.question.id = questions[key].questions_id;
                  let div = this.div;
                  this.question.deleteButton.onclick = this.deleteQuestion(questions[key].questions_id);
                    this.div.appendChild(this.question.getThis());
                }
            }
    }
    getThis() {
        return this.div;
    }
    deleteQuestion(id) {
      let question = this.question.getThis();
      let div = this.div;
      return function(){
    if(confirm("Вы действительно хотите удалить")){
      httpPost("app", 'deleteQuestion=' + JSON.stringify(id))
      .then(
         response => {
           div.removeChild(question);
         },
         error => console.log(`Rejected: ${error}`)
      );
    }
  }}
    addQuestion(theme_id, question) {
        let text = {
            theme_id: theme_id,
            question: question
        };
        let div = this.div;
        httpPost("app", 'addInTheme=' + JSON.stringify(text))
            .then(
                response => {
                    console.log(response);
                  this.question = new QuestionAudit(question);
                  this.question.id = response;
  
                  this.question.deleteButton.onclick = this.deleteQuestion(response);
                    div.appendChild(this.question.getThis());
                },
                error => console.log(`Rejected: ${error}`)
            );
    }
}
