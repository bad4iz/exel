/**
 * Created by bad4iz on 20.03.2017.
 */
import {addThemeAudit} from "../../controller/addThemeAudit";
/**
 *
 * форма добавления темы аудита
 *
 <div class="input-group">
 <input type="text" class="form-control" id="bar">
 <div class="input-group-btn">
 <button type="button" class="btn btn-danger"><i class="fa fa-pencil"></i></button>
 <button type="button" class="btn btn-warning"><i class="fa fa-plus"></i></button>
 <button type="button" class="btn btn-success"><i class="fa fa-refresh"></i></button>
 </div>
 </div>
 */
export class InputForm {
    constructor() {
        this._input = document.createElement('input');

        this.inputForm = document.createElement('div');
        this.groupBtn = document.createElement('div');

        this.inputForm.className = 'input-group';
        this.inputForm.style.marginBottom =  '10px';
        this._input.className = 'form-control';
        this._input.id = 'bar';
        this._input.type = 'text';

        this.groupBtn.className = 'input-group-btn';

        this.inputForm.appendChild(this._input);
        this.inputForm.appendChild(this.groupBtn);
    }

    getThis() {
        return this.inputForm;
    }
    addButtons(but){
        this.groupBtn.appendChild(but);
    }
    get value(){
        return this._input.value;
    }
    set value(text){
        this._input.value = text;
    }
}
