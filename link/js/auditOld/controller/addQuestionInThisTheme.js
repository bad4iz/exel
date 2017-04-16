/**
 * Created by bad4iz on 21.03.2017.
 */
import {httpPost} from "../libs/lib";
import {createAudit} from "../app";

// добавление темы
export function addQuestionInThisTheme(theme_id, question, collection) {
    let text = {
        theme_id: theme_id,
        question: question
    };
    httpPost("app", 'addInTheme=' + JSON.stringify(text))
        .then(
            response => {
               collection.addQuestionInThisTheme(themeQuestionsItem);
            },
            error => console.log(`Rejected: ${error}`)
        );
}
