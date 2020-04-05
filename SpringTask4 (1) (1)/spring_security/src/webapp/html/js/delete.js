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
            // $.ajax({
            //     url: "/admin/delete",
            //     type: 'POST',
            //     data: result,
            //     // dataType: 'json',
            //     context: document.getElementById('#ajax'),
            //
            //     success: function (status) {
            //         alert('1');
            //         succsess2(status);
            //     }
            // });

            alert('1');
            succsess2(result);


        });
    });

});

function succsess2(result) {
    $('#myModalDelete').modal('hide');
    $('.navbar-nav.mr-auto li').each(function () {
        $(this).css({border: '1px solid red'});

    });


    //   $('.js-tableUsers').css({border: '1px solid red'});//.remove();
//    $('.js-tableUsers').find('tr').find('span').css({border: '1px solid red'});
    $('.js-tableUsers tr td:first-child  span').each(function () {
        $(this).css({border: '1px solid red'});
        var ans = $(this).text();
        alert(ans);
        console.log(result[0].value);
        if(ans==result[0].value){
            $(this).parent().parent().remove();
        //    $(this).parent().parent().parent().remove();
        }


    });

    // $('.js-tableUsers tr:first-child').css({border: '1px solid blue'});
    // alert('2');
    // $('.js-tableUsers tr').each(function (index) {
    //     if(index==2){
    //         alert('return');
    //         $(this).css({border: '1px solid gold'});//строка tr
    //         return;
    //     }
    //    $(this  ).find('span' , function () {
    //             $('span').css({border: '1px solid red'});
    //     })
    //

    // });

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


