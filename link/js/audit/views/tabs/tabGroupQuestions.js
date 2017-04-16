/**
 * Created by bad4iz on 04.04.2017.
 */
import {Tab} from "../../components/tabs/tab";
import {exit_modal, open_modal} from "../../components/modal/modal";
import {httpPost} from "../../../../../dist/link/js/audit/lib";

export class TabGroupQuestions extends Tab{
    constructor(group){
        super(group);
        this.header = 'Группы вопросов разбитые по темам';
        
        this.button.class =  'btn ffffffffff btn-success';
        this.button.setAttribute = {name:'data-toggle', value:'modal'};
        this.button.setAttribute = {name:'data-target', value:'#myModal'};
        let that = this;
        this.button.onclick = function () {
            let answer = prompt("введите тему");
            httpPost("app/setGroupQuestions", 'setGroupQuestions=' + answer)
                .then(
                    response => {
                        console.log(response);
                       
                    },
                    error => console.log(`Rejected: ${error}`)
                );

        }
    }

}


