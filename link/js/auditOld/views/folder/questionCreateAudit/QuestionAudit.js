/**
 * Created by bad4iz on 20.03.2017.
 */
import {DeleteButton} from "./../../button/deleteButton";

export class QuestionAudit {

    constructor(item) {
        this._item = item;
        this.itemDiv = document.createElement('div');
        this.groupBtn = document.createElement('div');
        //
        this.deleteButton = new DeleteButton();
        this.itemDiv.className = 'input-group question';
        this.itemDiv.style.padding = '5px';
        this.itemDiv.style.marginBottom = ' 5px';
        this.itemDiv.textContent = this.item;
        this.groupBtn.className = 'input-group-btn';

        this.groupBtn.appendChild(this.deleteButton.getThis());
        this.itemDiv.appendChild(this.groupBtn)
    }

    get item() {
        return this._item;
    }

    set item(item) {
        this._item = item;
    }

    getThis() {
        return this.itemDiv;

    }

    set id(id) {
        console.log('QuestionAudit= ' +id);
      this.itemDiv.id = 'question_' + id;
    }

    get id() {
        return this._id;
    }
}
