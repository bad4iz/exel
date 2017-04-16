/**
 * Created by bad4iz on 20.03.2017.
 */
    import {Button} from "./button";
    import {ModalWindow} from "./../folder/modalWindow";
export class DeleteButton extends Button{
    constructor(){
        super('btn btn-danger');
        this.iconClass = 'fa fa-trash-o';
        this.onclick = function () {
         console.log('удалить ')
        }
    }
}