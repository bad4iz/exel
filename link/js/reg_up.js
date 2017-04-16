function del_field(id_field,name_field){//удаление обязательного поля.
	$.ajax({
            type:'POST',
            url:'/core/view/frame/reg/controller/del_field.php',
            data:'id_field='+id_field+'&name_field='+name_field,
            cache:false,
            dataType:'text',
            success: function(data){
                message(data);
                $('.field_'+id_field).remove();   
            }
            });
            return false;
}
function change_sect(id_class,id){//запрос на выбор подразделения.
    var type = $('#option_'+id).data('type');
    var department = [
    "Подразделение", 
    "Филиал",
    "Департамент", 
    "Подразделение", 
    "Отдел", 
    "Участок", 
    "Бригада",
    "Бригада",
    "Рабочая группа"];
    $('.change_'+id_class).html('<img width="15px" src="/core/view/frame/Org_chart/img/loading.gif">');
    if(id == id_class){
        $('#header_'+id_class).html(department[0]);
    }
    else{
        $('#header_'+id_class).html(department[type]);
    }
    $.ajax({
        type:'POST',
        url:'/core/view/frame/reg/controller/output_sect.php',
        data:'id='+id+'&id_sr='+id_class,
        cache:false,
        dataType:'text',
        success: function(data){
            $('.change_'+id_class).html(data);   
        }
    });
    return false;
}
function modal_create_pos(id,id_class,sect,brig,city,post){//вызов модального окна создания должности.
    $.ajax({
        type:'POST',
        url:'/core/view/frame/post/controller/modal_create_pos_post.php',
        data:'id_class='+id_class+'&id='+id+'&sect='+sect+'&brig='+brig+'&city='+city+'&post='+post,
        cache:false,
        dataType:'text',
        success: function(data){
            open_modal(data);   
        }
    });
}
function create_pos(id,id_class,sect,brig,city,post){//создание должности.
  if($('#pos').val() !=''){
    var position = $('#pos').val().toLowerCase();
    var post = post.toLowerCase();
    if(post.indexOf(position) != 0){
    var pos = $('#pos').val();
    var smen = $('#smen').val();
    var vaht = $('#vaht').is(':checked');
    if(vaht==false){vaht=1;}else{vaht=2;}
    $.ajax({
    type:'POST',
    url:'/core/view/frame/post/controller/create_pos.php',
    data:'id_boss='+id+'&sect='+sect+'&pos='+pos+'&vaht='+vaht+'&smen='+smen+'&brig='+brig+'&city='+city,
    cache:false,
    dataType:'text',
    success: function(data){
        exit_modal();
        change_sect(id_class,id);
        message('Вы создали новую должность!');
    }
    });
    }
    else{
        message('Название должности совпадает с должностью начальника!');
    }
  }
  else{
    message('Укажите название должности!');
  }
}
function modal_create_sect(id,id_boss,parent,brig,city){//вызов модального окна создания подразделения.
    $.ajax({
        type:'POST',
        url:'/core/view/frame/post/controller/modal_create_sect.php',
        data:'id='+id+'&id_boss='+id_boss+'&city='+city+'&brig='+brig+'&parent='+parent,
        cache:false,
        dataType:'text',
        success: function(data){
            open_modal(data);   
        }
    });
}
function create_sect(id,id_boss,parent){//создание подразделения.
  var required=true;
  $('#create_sect .required').each(function(){
    if($(this).val()==''){
        required=false;
    }
  });
  if(required==true && $('#type_sect').val()!=0){
    var sect = $('#sect').val().toLowerCase();
    var parent = parent.toLowerCase();
    if(parent.indexOf(sect) != 0){
    var formData = new FormData();
    formData.append('sect', $('#sect').val());
    formData.append('pos', $('#pos').val());
    formData.append('type_sect', $('#type_sect').val());
    var vaht = $('#vaht').is(':checked');
    if(vaht==false){vaht=1;}else{vaht=2;}
    formData.append('vaht', vaht);
    formData.append('smen', $('#smen').val());
    formData.append('city', $('#city').val());
    formData.append('brig', $('#brig').val());
    formData.append('id_boss', id);
    $.ajax({
        type:'POST',
        url:'/core/view/frame/post/controller/create_pos.php',
        data:formData,
        cache:false,
        contentType: false,
        processData: false,
        dataType:'text',
        success: function(data){
            if(data==1){
                exit_modal();
                change_sect(id_boss,id);
                message('Вы создали новое подразделение!');
            }
            if(data==2){
                message('Филиал в городе "'+$('#city').val()+'" уже существует!');
            }
            if(data==3){
                message('Бригада №"'+$('#brig').val()+'" уже существует!');
            }
        }
    });
    }
    else{
        message('Название подразделения совпадает с родительским!');
    }
  }
  else{
    message('Заполните пустые поля!');
  }
}
function change_type(){
    $('.hid_type').hide();
    $('.hid_type .dop').removeClass('required');
    if($('#type_sect option[value="1"]').is('option')){
        $('.city_show .dop').val('');
    }
    if($('#type_sect option[value="6"]').is('option')){
        $('.brig_show .dop').val('');
    }
    var type = $('#type_sect').val();
    if(type==1){
        $('.city_show').show();
        $('.city_show .dop').addClass('required');
    }
    if(type==6 || type==7){
        $('.brig_show').show();
        $('.brig_show .dop').addClass('required');
    }
}
function output(){
    $('.output').html('<img width="15px" src="/core/view/frame/Org_chart/img/loading.gif">');
    $.ajax({
        url:'/core/view/frame/reg/controller/output_post.php',
        cache:false,
        dataType:'text',
        success: function(data){
            $('.output').html(data);  
        }
    });
}
function modal_create_company(){//вызов модального окна создания компании.
    $.ajax({
        url:'/core/view/frame/post/controller/modal_create_company.php',
        cache:false,
        dataType:'text',
        success: function(data){
            open_modal(data);    
        }
    });
}
function create_company(){//создание компании.
  if($('#sect').val() !='' && $('#pos').val() !=''){
    var sect = $('#sect').val();
    var pos = $('#pos').val();
    $.ajax({
    type:'POST',
    url:'/core/view/frame/post/controller/create_pos.php',
    data:'id_boss=0&sect='+sect+'&pos='+pos,
    cache:false,
    dataType:'text',
    success: function(data){
        exit_modal();
        output();
        message('Вы создали компанию!');
    }
    });
  }
  else{
    message('заполните пустые поля!');
  }
}
function create_field(){
    var name = $('#new_field').val();
    if(name!=''){
    $.ajax({
    type:'POST',
    url:'/core/view/frame/reg/controller/create_field.php',
    data:'name='+name,
    cache:false,
    dataType:'text',
        success: function(data){
            $('#fields').append(data);
            $('#new_field').val('');
        }
    });
    }
    else{
        message('укажите название поля!');
    }
}