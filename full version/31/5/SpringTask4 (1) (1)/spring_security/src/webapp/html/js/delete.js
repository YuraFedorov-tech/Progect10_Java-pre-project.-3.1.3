$(function ($) {
    $('#btnDelete').click(function (e) {
        alert('btnDelete');
        e.preventDefault();
        $('#dataDelete').click(function (e) {
            alert('btnDelete work begin');
            $('#ajax').html('<span>Send</span>').fadeIn(1000, function () {
                var result = $('#dataAdd').serializeArray();
                console.log(result);
                var block = $(this);
                $(this).find('span').fadeOut(1000, function () {
                    $(this).text('added').fadeIn(1000);
                });
                $(this).delay(500).fadeOut(500);

            });
        });
        // $('#ajax').html('<span>Send</span>').fadeIn(1000, function () {
        //     var result = $('#dataDelete').serializeArray();
        //     const button = $(e.relatedTarget);
        //     const idDelete = button.data('id');
        //     const modal = $(this);
        //
        //     console.log(result);
        //     console.log(idDelete);
        //     $(this).find('span').fadeOut(1000, function () {
        //         $(this).text('added').fadeIn(1000);
        //     });
        //     $(this).delay(500).fadeOut(500);
        //
        //     // $.ajax({
        //     //     url: "/admin/add",
        //     //     type: 'POST',
        //     //     data: result,
        //     //     // dataType: 'json',
        //     //     context: document.getElementById('#ajax'),
        //     //
        //     //     success: function (data) {
        //     //         alert('2');
        //     //         succsess(data);
        //     //     }
        //     // });
        // });
    });
});