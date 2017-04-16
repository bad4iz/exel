function open_modal(data){//Открытие модального окна с загрузкой контента.
	$('.all_modal').html(data);
    $('.wind-1').css('display','flex');
    $('.head_modal').prepend('<div class="btn btn-xs btn-danger pull-right exit_modal" onclick="exit_modal();"><i class="fa fa-times"></i></div>');
    text=$('.help').text();
    if(text){
    	$('.head_modal').prepend('<div class="btn btn-xs btn-info pull-left info_modal"><i class="fa eicon-help"></i></div>');
    	$('.info_modal').attr('onclick','message(\''+text+'\');');
    }
}
function exit_modal(){//закрытие и очищение модального окна.
    $('.wind-1').css('display','none');
    $('.all_modal').html('');
}
function message(data){//вывод оповещений/предупреждений
    $('.message').html(data);
    $('.wind-2').css('display','flex');
    setTimeout(function() {
        $('.wind-2').css('display','none');
        $('.message').html('');
    }, 2000);
}
            
//     <div class="head_modal">Заголовок окна!</div>
//     <div class="modal_body">
//           <label>Наименование:</br><input type="text" placeholder="Название"></label>
//     </div>
//     <div class="foot_modal"><div class="btn btn-info btn-sm">Сохранить</div></div>
//     <div class="help">Подсказка</div>


