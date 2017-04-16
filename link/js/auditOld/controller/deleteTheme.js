/**
 * Created by bad4iz on 21.03.2017.
 */
import {httpPost} from "../libs/lib";

export function deleteThemeAndQuestion(id, parent) {
    httpPost("app", 'deleteTheme=' + JSON.stringify(id))
        .then(
            response => {
                console.log(response);
                parent.parentNode.removeChild(parent);
                if(id === response){
                }
            },
            error => console.log(`Rejected: ${error}`)
        )
}

