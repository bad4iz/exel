/**
 * Created by bad4iz on 20.03.2017.
 */
import {Button} from "./button";
export class AddButton extends Button{
    constructor(){
        super('btn btn-success');
        this.iconClass = 'fa fa-plus';
        // this.iconClass = 'fa fa-trash-o';
    }

}
