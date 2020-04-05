$(function ($) {

    $('#btnDelete').click(function (e) {
        alert('btnDelete');
        e.preventDefault();
        alert('btnDelete work begin');
        var result = $('.js-dataDelete').serializeArray();
        $.ajax({
            url: "/admin/delete",
            type: 'POST',
            data: result,
            context: document.getElementById('#ajax'),
            success: function (status) {
                alert('succsess');
            }
        });
        succsess2(result);


    });


});

function succsess2(result) {
    $('#myModalDelete').modal('hide');
    $('.js-tableUsers tr td:first-child  span').each(function () {
        var ans = $(this).text();

        console.log(result[0].value);
        if (ans == result[0].value) {
            $(this).parent().parent().remove();
        }


    });


    alert(3);
}

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