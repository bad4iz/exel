function formatDate(date) {
  var y = date.getFullYear();
  var m = date.getMonth() + 1;
  if (m < 10) m = '0' + m;
  var d = date.getDate();
  if (d < 10) d = '0' + d;
  var h = date.getHours();
  if (h < 10) h = '0' + h;
  var min = date.getMinutes();
  if (min < 10) min = '0' + min;
  var s = date.getSeconds();
  if (s < 10) s = '0' + s;
  return y+'-'+(m)+'-'+d+' '+h+':'+min+':'+s;
}
function create_news(){
  if($('#text_news').val() != 0){
    var id_user = $('#user_id').val();
    var image = $('#image_user').val();
    var name = $('#user_name').val();
    var fam = $('#user_fam').val();
    var date = new Date();
    var text = $('#text_news').val();
    var icon = $('#img_icon').val();
    var iso = 0;
    if(icon != ''){
        iso = '<i class="'+icon+'"></i>';
    }
    else{
        if(image){
        iso = '<img width="30" style="border-radius:50%;" src="/link/img/user_'+id_user+'.'+image+'">';
        }
        else{
        iso = '<img width="30" style="border-radius:50%;" src="/link/img/no_photo.png">';   
        }
    }
    $('#text_news').val('');
    $('#new_news').prepend('<section class="feed-item"><div class="icon pull-left">'+iso+'</div><div class="feed-item-body"><div class="text"><a href="/core/view/pages/form_account.php?IDUser='+id_user+'">'+name+' '+fam+'<br></a>'+text+'</div><div class="time pull-left">'+formatDate(date)+'</div></div></section>');
    $.ajax({
    type:'POST',
    url:'/core/view/frame/news.php',
    data:'text='+text+'&icon='+icon+'&page=1',
    cache:false
    });
  }
  else{
    message('Введите текст новости!');
  }
}
$(document).ready(function(){
$('#btn_icon').click(function(){
    if ($('#icon').css('height') == '0px'){
        $('#icon').css('height','80px');
        $('.ex-icon').css('display','block');
    }
    else{
        $('#icon').css('height','0px');
        $('.ex-icon').css('display','none');
    }
});
$('#icon i').each(function(i){
    $(this).click(function(){
        $('#icon').css('height','0px');
        $('.ex-icon').css('display','none');
        var icon = $(this).attr('class');
        $('#img_icon').val(icon);
        $('#cont_icon').html("<i class='"+icon+"'></i>");
    });
});
$('.ex-icon').click(function(){
    $('#icon').css('height','0px');
    $('.ex-icon').css('display','none');
});
});
function clear_icon(num){
    var image = $('#image_user').val();
    if(image){
        $('#cont_icon').html("<img width='20' style='border-radius:50%;' src='/link/img/user_"+num+"."+image+"'>");
    }
    else{
        $('#cont_icon').html("<img width='20' style='border-radius:50%;' src='/link/img/no_photo.png'>");
    }
    $('#icon').css('height','0px');
    $('#img_icon').val('');
    $('.ex-icon').css('display','none');
}
function all_news(){
    $('#all').detach();
    $('#content_news').append('<img width="20px" src="/core/view/frame/Org_chart/img/loading.gif">');
    $.ajax({
    type:'POST',
    url:'/core/view/frame/news.php',
    data:'page=2',
    cache:false,
    dataType:'text',
    success: function(data){
        $('#new_news').html('');
        $('#content_news').html(data);
    }
    });
}
setInterval(function(){
    var id_news = $('#id_news').val();
    $.ajax({
    type:'POST',
    url:'/core/view/frame/news.php',
    data:'id_news='+id_news+'&page=3',
    cache:false,
    dataType:'text',
    success: function(data){
        $('#new_news').html(data);
    }
    });
},30000);