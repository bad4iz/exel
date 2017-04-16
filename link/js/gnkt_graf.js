function grafic(brig){
	var year = $('#god_'+brig).val();
	$.ajax({
    type:'POST',
    url:'/core/controller/form/grafic.php',
    data:'year='+year+'&brig='+brig,
    cache:false,
    dataType:'text',
    success: function(data){
        $('#block_'+brig).html(data);
    }
    });
}
function grafic_all(){
    var year = $('#god_all').val();
    $.ajax({
    type:'POST',
    url:'/core/controller/form/grafic_all.php',
    data:'year='+year,
    cache:false,
    dataType:'text',
    success: function(data){
        $('#over_all').html(data);
    }
    });
}
function modal_compare(nom_brig){
    $.ajax({
        type:'POST',
        url:'/core/view/frame/modal_compare.php',
        data:'nom_brig='+nom_brig,
        cache:false,
        dataType:'text',
        success: function(data){
            open_modal(data);   
        }
    });
}
function change_op(op){//запрос на выбор подразделения.
    $('.change').html('<img width="15px" src="/core/view/frame/Org_chart/img/loading.gif">');
    $.ajax({
        type:'POST',
        url:'/core/view/frame/output_brig.php',
        data:'op='+op,
        cache:false,
        dataType:'text',
        success: function(data){
            $('.change').html(data);
        }
    });
    return false;
}
function compare(brig){
    var nom_brig = $('#nom_brig_change').val();
    var year = $('#year_change').val();
    $.ajax({
        type:'POST',
        url:'/core/controller/form/compare_grafic.php',
        data:'year='+year+'&nom_brig='+nom_brig+'&brig='+brig,
        cache:false,
        dataType:'text',
        success: function(data){
            exit_modal();
            $('#compare_'+brig).html(data);
        }
    });
}
function exit_compare(brig){
    $('#compare_'+brig).html('');
}
function modal_filter(brig,year,element){
    //var year = $('#god_'+brig).val();
    $.ajax({
        type:'POST',
        url:'/core/view/frame/modal_filter.php',
        data:'brig='+brig+'&year='+year+'&element='+element,
        cache:false,
        dataType:'text',
        success: function(data){
            open_modal(data);  
        }
    });
}
function filter(brig,element){
    var s = $('#s_mes_change').val();
    var po = $('#po_mes_change').val();
    $('#'+element+'_'+brig+' .month_graf').show();
    for(i=1;i<=12;i++){
        if(i<s){
            $('#'+element+'_'+brig+' div[data-mes="'+i+'"]').hide();
        }
        if(i>po){
            $('#'+element+'_'+brig+' div[data-mes="'+i+'"]').hide();
        }
    }
    exit_modal();
}
function change_month(month,year){
    $('.change').html('<img width="15px" src="/frame/Org_chart/img/loading.gif">');
    $.ajax({
        type:'POST',
        url:'/core/view/frame/output_month.php',
        data:'month='+month+'&year='+year,
        cache:false,
        dataType:'text',
        success: function(data){
            $('.change').html(data);
        }
    });
    return false;
}