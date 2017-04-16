function loadphp_page(name_div,name_php_load) {
	// console.log(name_div +' '+name_php_load);
	 if (name_div!='No page'){$("#"+name_div+"_temp").append('<i class="fa fa-spinner fa-spin"></i>');}
 $.ajax({
        type: "POST",
        url: '/zerkalo/'+name_php_load,  
        data:'Town=',
        dataType : "text",                   
        success: function (data, textStatus) { 
		if (name_div!='No page'){
			$("#"+name_div+"_temp").remove();
			$("#"+name_div).append('<div id="'+name_div+'_temp">'+data+'</div>');}
		//#panel_group_zerkalo
        //console.log(data);
     }});
 }

function loadphp_nodelete_page(name_div,name_php_load) {

 $.ajax({
        type: "POST",
        url: '/zerkalo/'+name_php_load,  
        data:'Town=',
        dataType : "text",                   
        success: function (data, textStatus) { 

			$("#"+name_div).append(data);

     }});
 }