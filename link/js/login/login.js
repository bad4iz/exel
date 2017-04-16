$("form").submit(function() {
            var form_data = $(this).serialize();
            $.ajax({
            type: "POST",
            url: "/login",
            data: form_data,
            cache:false,
            dataType:"text",
                success: function(data) {
                    if(data==false){
                        alert('Извините, введённый вами логин или пароль неверный!');
                        $(':input','form')
                        .not(':button, :submit, :reset, :hidden')
                        .val('')
                        .removeAttr('checked')
                        .removeAttr('selected');
                    }
                    else{
                        location.replace(data);
                    }
                },
                error: function() {
                   alert("Возникла ошибка при отправке формы. Попробуйте еще раз...");
                }
            });
        return false;
});