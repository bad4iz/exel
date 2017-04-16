/**
 * Created by bad4iz on 21.03.2017.
 */
export class ModalWindow{
    constructor(){
        this.modal = document.createElement('div');
        // modal.className = 'modal' ;
        // modal.style="position: relative; top: auto; right: auto; left: auto; bottom: auto; z-index: 1; display: block; overflow: hidden;" ;
        // let modalDialog = document.creareElement('div');
        // modalDialog.className = 'modal-dialog' ;
        // modalDialog.style="width: auto; padding: 0;";
        let html = `<div class="modal" style="position: relative; top: auto; right: auto; left: auto; bottom: auto; z-index: 1; display: block; overflow: hidden;">
                            <div class="modal-dialog" style="width: auto; padding: 0;">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                        <h4 class="modal-title">Modal title</h4>
                                    </div>
                                    <div class="modal-body">
                                        <p>One fine body…</p>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary">Save changes</button>
                                    </div>
                                </div><!-- /.modal-content -->
                            </div><!-- /.modal-dialog -->
                        </div>`;
        this.modal  = html;

    }
    getThis(){
        return this.modal;
    }
    close(){

    }
}