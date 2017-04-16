/**
 * Created by bad4iz on 20.03.2017.
 */
import {httpPost} from "../libs/lib";
import {createAudit} from "../app";

// добавление темы
export function addThemeAudit(theme, parent) {
    httpPost("app", 'addThemeAudit=' + JSON.stringify(theme))
        .then(
            response => {
                let themeQuestionsItem = {
                    theme: theme,
                    theme_id: response
                };
                parent.appendChild(createAudit(themeQuestionsItem));
            },
            error => console.log(`Rejected: ${error}`)
        );
}
