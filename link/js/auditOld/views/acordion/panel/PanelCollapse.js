/**
 * Created by bad4iz on 20.03.2017.
 */
/**
 * <div id="collapseOne" class="panel-collapse collapse" style="height: 0px;">
 <div class="panel-body">
 look real.
 </div>
 </div>
 */
export class PanelCollapse {
    constructor(id) {
        this.panelCollapse = document.createElement('div');
        this._body = document.createElement('div');

        this.panelCollapse.className = 'panel-collapse collapse';
        this.panelCollapse.id = 'collapse' + id;
        this.panelCollapse.style.height = '0px';

        this._body.className = "panel-body";
        this.panelCollapse.appendChild(this._body);
    }

    getThis() {
        return this.panelCollapse;
    }

    pushBody(element) {
        this._body.appendChild(element);
    }
}