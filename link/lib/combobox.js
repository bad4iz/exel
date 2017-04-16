$(function(){
    if($('select').is('.combobox')){
        var i=0;
        $('.combobox').each(function(){
            i++;
            $(this).attr('id','select_'+i);
            var name = $('#select_'+i).attr('name');
            var onchange = $('#select_'+i).attr('onchange');
            $('#select_'+i).after([
                '<div id="combobox_'+i+'" class="comb">',
                    '<input class="combo_text" type="text" name="'+name+'" id="combo_text_'+i+'" onkeyup="search('+i+');" onchange="'+onchange+'" AUTOCOMPLETE="off">',
                    '<div class="combo_strel"></div>',
                    '<div id="combo_box_'+i+'" class="combo_box"></div>',
                '</div>'].join(''));
            if($(this).attr('required')){
                $('#combo_text_'+i).attr('required','required');
            }
            $('#select_'+i+' option').each(function(){
                var data = $(this).text();
                $('#combo_box_'+i).append('<option onclick="'+onchange+'" value="'+data+'">'+data+'</option>');
                if($(this).attr('selected')){
                    $('#combo_text_'+i).val(data);
                }
            });
        });
        $('.combobox').remove();
    }
});
function search(i){
    var data = $('#combo_text_'+i).val();
    var box = document.getElementById('combobox_'+i);
    var coord = box.getBoundingClientRect();
    var height = $(window).height();

    if(data != ''){
        $('#combo_box_'+i+' option').hide();
        $('#combo_box_'+i+' option').each(function(){
            var cell = $(this).text();
            data = data.toLowerCase();
            cell = cell.toLowerCase();
            if(cell.indexOf(data) == 0){
                $(this).show();
            }
        });
    }
    else{
        $('#combo_box_'+i+' option').show();
    }

    var h = parseInt($('#combo_box_'+i).css('height'));
    if((height-coord.bottom)<=h){
        $('#combo_box_'+i).css('top',coord.top-h);
    }
    else{
        $('#combo_box_'+i).css('top',coord.top+30);
    }
}
function click_option(){
    $('.combo_box option').click(function(){
        var change = $(this).text();
        var comb = this.parentNode.parentNode;
        var text = $(comb).children('.combo_text');
        $(text).val(change);
    });
}
click_option();
$(document).ready(function(){
    $('.comb').click(function(){
        var box = $(this).children('.combo_box');
        $('.combo_box:not(#'+$(box).attr('id')+')').hide();
        if($('option').is('#'+this.id+' .combo_box option')){
            if (box.css('display') != 'block') {
                var coord = this.getBoundingClientRect();
                var height = $(window).height();
                var h = parseInt($(box).css('height'));
                var w = parseInt($(this).css('width'));
                if((height-coord.bottom)<=h){
                    box.css('top',coord.top-h);
                }
                else{
                    box.css('top',coord.top+30);
                }
                box.css('left',coord.left);
                box.css('width',w);
                box.show();
            }
            else{
                box.hide();
            }
        }
        else{
            box.hide();
        }
    });
    $(document).click(function(e){
        if ($(e.target).closest(".comb").length) return;
        $('.combo_box').hide();
        e.stopPropagation();
    });
    $('*:not(.combo_box)').scroll(function(){$('.combo_box').hide();});
    $(window).scroll(function(){$('.combo_box').hide();});
    $(window).resize(function(){$('.combo_box').hide();});
});