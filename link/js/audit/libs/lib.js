function httpPost(url, body, calback) {
        let xhr = new XMLHttpRequest();
        xhr.open('POST', url, true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onload = function () {
            if (this.status == 200) {
                calback(this.response);
            } else {
                let error = new Error(this.statusText);
                error.code = this.status;
                console.log(error);
            }
        };
        xhr.onerror = function () {
            reject(new Error("Network Error"));
        };
        xhr.send(body);
}

 function removeDom(elem){
  elem.parentNode.removeChild(elem);
}


function modal(){

   var html = `
<div id="changeQuestion" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="changeQuestionLabel" aria-hidden="true" style="display: none;">
     <div class="modal-dialog">
     <div class="modal-content">
     
     <div class="modal-header">
     <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
  <h4 class="modal-title" id="changeQuestionLabel">Изменить вопрос</h4>
  </div>
  <div class="modal-body">
     argdfgdfgd
     </div>
     <div class="modal-footer">
     <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
     <button type="button" class="btn btn-primary">Save changes</button>
  </div>
  
  </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
  </div>
  
  
  <button type="button" class="btn btn-danger btn-lg btn-block"        data-toggle="modal" data-target="#changeQuestion">Launch modal</button>
  `
}