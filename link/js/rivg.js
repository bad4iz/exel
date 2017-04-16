$("#text-sender-user").keyup(function(event){
    if(event.keyCode == 13){
        alert(preg_replace('/[^0-9]/', '', this.ID));
        my_friends(IDFriends,4,IDUser,this.test());
        event.preventDefault();
    }
});

/*All service*/
$(function(){
    shag_case=0;
    if(typeof IDChat =="undefined"){IDChat = null;}
    textsend='Chat=Chat&IDChat='+IDChat;
setInterval(function() {
   // console.log(shag_case);
$.ajax({
    type: "POST",
    url: "/core/controller/form/Service.php",
    data:textsend,
    cache: false,
    success: function(data, textStatus){
        shag_case++;
        if (shag_case>1) {shag_case=0;}
    
                          
      switch (shag_case){
                 case 0: //сообщение
                  if (data!=''){
                  $("#chat-messages").prepend(data);
                  //var view = $("#chat-messages")[0];
                  //view.scrollTop = view.scrollHeight;
                  }
                  textsend='MsgUser=MsgUser';
                 break;
                 
                 case 1: //чат
                 if (data!=''){
                  $("#messages-menu").append(data);
                  console.log(data);
                  shag_case=0;}
                  textsend='Chat=Chat&IDChat='+IDChat;
                 break;
                 }
        opov();       
        }

        });
}, 3000);

});

function cl(e) {
e = e || window.event;
 if (e.keyCode === 13) { 
    var el = e.target || e.srcElement;
    console.log(el.value);
     my_friends(el.id.replace(/[^-0-9]/gim,''),4,el.value);
     $('#textsenderuser'+el.id.replace(/[^-0-9]/gim,'')).css('display','none');
     $('#textsenderbutton'+el.id.replace(/[^-0-9]/gim,'')).css('display','block'); 
     $('#textsenderuser'+el.id.replace(/[^-0-9]/gim,'')).val('');    
    }
 return false;}
 
function okmsg(e) {
e = e || window.event;
    var el = e.target || e.srcElement;
    my_friends(el.id.replace(/[^-0-9]/gim,''),5,0);
 return false;}


function save_wizard(Town,xpos,IDaddress,Name_Project,ID_CPU) {

    if((Town!="")&&(xpos!="")&&(IDaddress!="")&&(Name_Project!="")&&(ID_CPU!="")){
     $.ajax({
        type: "POST",
        url: '/core/view/frame/save_wizard.php',  
        data:'Town='+Town+'&xpos='+xpos+'&IDaddress='+IDaddress+'&Name_Project='+Name_Project+'&ID_CPU='+ID_CPU,
        dataType : "text",                   
        success: function (data, textStatus) { 
        
        $("body").append(data);
       // console.log(data);
     }});
    }
}


function msg_clise(IDMsg) {
    if((IDMsg!="")){
        $.ajax({
                type:'POST',
                url:'/core/view/form/msg.php',
                data:'page=2&IDMsg='+IDMsg,
                cache:false               
            });
    }
}

function my_friends(IDFriends,Index,IDUser) {
    if (Index==1){
    if((IDFriends!="")){
        $("#add-user-friends"+IDFriends).remove();
        $.ajax({
                type:'POST',
                url:'/core/view/frame/IDFriends.php',
                data:'IDFriends='+IDFriends,
                dataType : "text", 
                success: function (data, textStatus){
                    // console.log(data);                    
                 $("#my_friends-div"+IDFriends).append(data);   
                }               
            });
    }}
    if (Index==2){
    if((IDFriends!="")){
      //  $("#add-user-friends"+IDFriends).remove();
        $.ajax({
                type:'POST',
                url:'/core/view/frame/IDFriendsok.php',
                data:'IDFriends='+IDFriends+'&IDUser='+IDUser,
                dataType : "text", 
                success: function (data, textStatus){
                    $("#li-delete-msg-rivg"+IDFriends).remove();  
                    fun_dec = $("#msg-count-rivg").html()-1;
                    $("#msg-count-rivg").html(fun_dec);
                }               
            });
    }}
    
  if (Index==3){
   if((IDFriends!="")){
        $.ajax({
                type:'POST',
                url:'/core/view/frame/IDFriendsok.php',
                data:'IDFriends='+IDFriends+'&IDUser='+IDUser+"&page=3",
                dataType : "text", 
                success: function (data, textStatus){
                  $("#li-delete-msg-rivg"+IDFriends).remove();
                  
                    fun_dec = $("#msg-count-rivg").html()-1;
                    $("#msg-count-rivg").html(fun_dec);
                }               
            });
    }}   
    
  if (Index==4){
   if((IDFriends!="")){
        $.ajax({
                type:'POST',
                url:'/core/view/frame/UserMessangers.php',
                data:'IDFriends='+IDFriends+'&Text='+IDUser+"&page=1",
                dataType : "text", 
                success: function (data, textStatus){ console.log(data);
                }               
            });
    }}    
  if (Index==5){
    //console.log('ID='+IDFriends+'&page=2');
   if((IDFriends!="")){
        $.ajax({
                type:'POST',
                url:'/core/view/frame/UserMessangers.php',
                data:'IDFriends='+IDFriends+"&page=2",
                dataType : "text", 
                success: function (data, textStatus){
                    $("#nameli"+IDFriends).remove(); 
//                 console.log(data);
                    opov();
                }               
            });
    }}           
}
function opov(){
  if($("li").is("#messages-menu li") == true){
    $('#mescom').css('color','red');
  }
  else{
    $('#mescom').css('color','rgba(0,0,0,0.3)');
  }
}
opov();