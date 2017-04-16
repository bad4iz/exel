import {DeleteButton} from "./../../button/deleteButton"
/**
 * Created by bad4iz on 20.03.2017.
 */
/**
 *
 <div class="panel-heading">
 <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapseOne">
 Collapsible Group Item #1
 </a>
 </div>
 */
export class PanelHeading {
    constructor(header, id) {

        this.panelHeading = document.createElement('div');
        let panelHeading = this.panelHeading;
        let a = document.createElement('a');

        this.groupBtn = document.createElement('div');
        this.groupBtn.className = 'input-group-btn';

        this.panelHeading.className = 'panel-heading input-group';
        a.className = "accordion-toggle";
        a.href = '#collapse' + id;
        a.setAttribute('data-toggle', 'collapse');
        a.setAttribute('data-parent', '#audit');
        a.textContent = header;

        this.buttonDelete  =  new DeleteButton();
        this.buttonDelete.onclick  =  function () {
            console.log("PanelHeading")
        };

        this.groupBtn.appendChild(this.buttonDelete.getThis());

        this.panelHeading.appendChild(a);
        this.panelHeading.appendChild(this.groupBtn);

    }

    getThis() {
        return this.panelHeading;
    }
}