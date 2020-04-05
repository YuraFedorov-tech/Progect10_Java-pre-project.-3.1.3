$(function ($) {

    $('#btnDelete').click(function (e) {
        alert('btnDelete');
        e.preventDefault();
        alert('btnDelete work begin');


        $('#ajax').html('<span>Send</span>').fadeIn(1000, function () {
            var result = $('.js-dataDelete').serializeArray();
            console.log(result);
            console.log(result[0].value);
            $(this).find('span').fadeOut(1000, function () {
                $(this).text('added').fadeIn(1000);
            });
            $(this).delay(500).fadeOut(500);
            var newResult = result[0].value;
            alert(newResult);
            $.ajax({
                url: "/admin/delete",
                type: 'POST',
                data: result,
                // dataType: 'json',
                context: document.getElementById('#ajax'),

                success: function (status) {
                    alert('1');
                    succsess2(status);
                }
            });

            // alert('1');
            // succsess2("ok");


        });
    });

});

function succsess2(status) {
    console.log('succsess2');
    $('#myModalDelete').modal('hide');
    //  $('#someTabs a[href="#mainTab"]').tab('show');
    // $('.table.table-striped tr:last').after(insidUser(data));
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


