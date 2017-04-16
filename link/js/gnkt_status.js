function record(day,month,year,brig){
  if($('#input1_'+day+'_'+brig).val() != 0 && $('#input2_'+day+'_'+brig).val() != 0 && $('#input3_'+day+'_'+brig).val() != '' && $('#input4_'+day+'_'+brig).val() != ''){
    var input1 = $('#input1_'+day+'_'+brig).val();
    var input2 = $('#input2_'+day+'_'+brig).val();
    var input3 = $('#input3_'+day+'_'+brig).val();
    var input4 = $('#input4_'+day+'_'+brig).val();
    $('.day_'+day+'_'+brig).html('<img width="30" src="/frame/Org_chart/img/loading.gif">');
    $.ajax({
    type:'POST',
    url:'/core/view/frame/GNKTlog.php',
    data:'brig='+brig+'&day='+day+'&month='+month+'&year='+year+'&input1='+input1+'&input2='+input2+'&input3='+input3+'&input4='+input4+'&page=1',
    cache:false,
    dataType:'text',
    success: function(data){
    	$('.color_'+day+'_'+brig+' a').css('color','rgba(0,0,0,0.6)');
        $('.color_'+day+'_'+brig+' a').css('text-shadow','1px 1px 0px rgba(255,255,255,0.4)');
        $('.day_'+day+'_'+brig).html(data);
    }
    });
  }
  else{
    alert('Заполните все поля!');
  }
}

function interval_modal(brig,i){
    $.ajax({
        type:'POST',
        url:'/core/view/frame/client/controller/modal_interval.php',
        data:'brig='+brig+'&i='+i,
        cache:false,
        dataType:'text',
        success: function(data){
            open_modal(data);
        }
    });
}
function change_year(){
    var year = $('#year_log').val();
    $('#month_log').replaceWith('<div id="month_log"><img width="15px" src="/core/view/frame/Org_chart/img/loading.gif"></div>');
    $.ajax({
        type:'POST',
        url:'/core/view/frame/client/controller/modal_interval.php',
        data:'year='+year,
        cache:false,
        dataType:'text',
        success: function(data){
            $('#month_log').replaceWith(data);
        }
    });
}
function interval_change(brig,i){
    var year = $('#year_log').val();
    var month = $('#month_log').val();
    exit_modal();
    $('#month_'+brig).replaceWith('<div id="month_'+brig+'" class="panel" style="padding:10px"><img width="15px" src="/core/view/frame/Org_chart/img/loading.gif"></div>');
    $.ajax({
        type:'POST',
        url:'/core/view/frame/client/controller/change_interval.php',
        data:'year='+year+'&month='+month+'&brig='+brig+'&i='+i,
        cache:false,
        dataType:'text',
        success: function(data){
            $('#month_'+brig).replaceWith(data);
        }
    });
}