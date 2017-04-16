function modal_file(){
  $.ajax({
      type:'POST',
      url:'/brigade/modal',
      data:'modal_file',
      cache:false,
      dataType:'text',
      success: function(data){
        open_modal(data);
        $('#nom_brig').select2();
      }
  });
}
function load_file_skr(){
  if($('#nom_brig').val()!='' && $('#name_file').val()!='' && $('#date_job').val()!=''){
    var brigade = $('#nom_brig').val();
    var formData = new FormData();
    jQuery.each($('#file_scr')[0].files, function(i, file) {
        formData.append('file_scr', file);
    });
    formData.append('name_file', $('#name_file').val());
    formData.append('date_job', $('#date_job').val());
    $.ajax({
        url:'/brigade/'+brigade,
        type: "POST",
        cache: false,
        contentType: false,
        processData: false,         
        data: formData,
        dataType : "text",
        success: function(data){
          console.log(data);
          if(data!=false){
            exit_modal();
            message('Файл загружен!');
          }
          else{
            message('Загрузите файл!');
          }
        }
    });
  }
  else{
    message('Заполните все поля!');
  }
}
function show_skr_file(){
  var brigade = $('#nom_select').val();
  var date_job = $('#date_file_skr').val();
  if(brigade!='' && date_job!=''){
    $("#files_skr").html('<img width="15px" src="/core/view/frame/Org_chart/img/loading.gif">');
    $.ajax({
        type:'POST',
        url:'/brigade/'+brigade,
        data:'date_job='+date_job+'&show_file',
        cache:false,
        dataType:'text',
        success: function(data){
          //console.log(data);
          $("#files_skr").html(data);
        }
    });
  }
  else{
    message('Заполните все поля!');
  }
}