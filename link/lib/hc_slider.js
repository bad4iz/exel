$(document).ready(function(){
var sl=0;
var timeinc=[];
$('.contain_hc_slider').each(function(){
  sl++;
  $(this).addClass('contain_hc_slider_'+sl);
  $('.contain_hc_slider_'+sl).append('<span class="contain_circ"></span>');
  i=0;
  $('.contain_hc_slider_'+sl+' div').each(function(){
	  i++;
	  active='';
    vis='';
	  if(i==1){active='active';}
	  url=$(this).attr('url');
	  $(this).replaceWith('<div data-num="'+i+'" class="slide_hc slide_'+i+' '+active+'" style="background:url('+url+')no-repeat center center;background-size:cover;"></div>');
    $('.contain_hc_slider_'+sl+' .contain_circ').append('<div data-sl="'+sl+'" data-num="'+i+'" class="circ_hc circ_'+i+' '+active+'"></div>');
  });
  if(i<2){
    $('.contain_hc_slider_'+sl+' .contain_circ').hide();
  }else{
    $('.contain_hc_slider_'+sl).append([
     '<span class="prev_hc" data-sl="'+sl+'"></span>',
     '<span class="next_hc" data-sl="'+sl+'"></span>'
    ]);
    animate=$(this).attr('animate');
    $('.contain_hc_slider_'+sl+' .slide_hc').css('animation-duration',animate+'s');
  }
  timeinc[sl]=1;
});
setInterval(function(){
  var sl=0;
  $('.contain_hc_slider').each(function(){ 
  var time = $(this).attr('time');
  if(time==undefined || time==''){time=5}
  sl++;
    if (timeinc[sl]>=time){next_hc(sl);timeinc[sl]=0;}
    timeinc[sl]++;
  });
}, 1000);
$('.circ_hc').click(function(){
  var sl = $(this).data('sl');
	next=$('.contain_hc_slider_'+sl+'>.active').data('num');
	active=$(this).data('num');
  if(next!=active){slide_hc(sl,active,next,'right');timeinc[sl]=1;}
});
$('.next_hc').click(function(){
    var sl = $(this).data('sl');
	  next_hc(sl);
    timeinc[sl]=1;
});
$('.prev_hc').click(function(){
  var sl = $(this).data('sl');
  next=$('.contain_hc_slider_'+sl+'>.active').data('num');
  active=(next-1);
  last=$('.contain_hc_slider_'+sl+' .slide_hc:last-of-type').data('num');
  if($('div').is('.contain_hc_slider_'+sl+' .slide_'+active)==false){active=last}
  slide_hc(sl,active,next,'left');
  timeinc[sl]=1;
});
function next_hc(sl){
   next=$('.contain_hc_slider_'+sl+'>.active').data('num');
   active=(next+1);
   if($('div').is('.contain_hc_slider_'+sl+' .slide_'+active)==false){active=1}
   if(next!=active){slide_hc(sl,active,next,'right');}
}
function slide_hc(sl,active,next,where){
  var effect = $('.contain_hc_slider_'+sl).attr('effect');
  if(effect==undefined || effect==''){effect='list'}
  $('.contain_hc_slider_'+sl+' .circ_hc').removeClass('active');
  $('.contain_hc_slider_'+sl+' .slide_hc').removeClass('active');
  $('.contain_hc_slider_'+sl+' .circ_'+active).addClass('active');
  $('.contain_hc_slider_'+sl+' .slide_'+active).addClass('active');
  $('.contain_hc_slider_'+sl+' .slide_hc').removeClass('vis_'+effect+' next_'+effect+' vis_back_'+effect+' next_back_'+effect);
  if(where=='right'){
      $('.contain_hc_slider_'+sl+' .slide_'+active).addClass('vis_'+effect);
      $('.contain_hc_slider_'+sl+' .slide_'+next).addClass('next_'+effect);
  }else{
      $('.contain_hc_slider_'+sl+' .slide_'+active).addClass('next_back_'+effect);
      $('.contain_hc_slider_'+sl+' .slide_'+next).addClass('vis_back_'+effect);
  }
}
});