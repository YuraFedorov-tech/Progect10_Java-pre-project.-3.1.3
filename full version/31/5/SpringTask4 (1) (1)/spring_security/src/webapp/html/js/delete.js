// $(function ($) {
//     $('#btnDelete').click(function (e) {
//         alert('btnDelete');
//         e.preventDefault();
//         $('#dataDelete').click(function (e) {
//             alert('btnDelete work begin');
//
//
//             $('#ajax').html('<span>Send</span>').fadeIn(1000, function () {
//                 var result = $('.js-dataDelete').serializeArray();
//                 console.log(result);
//                 console.log(result[0].value);
//                 //         var block = $(this);
//                 // $(#ajax).find('span').remove();
//                 // $(#ajax).find('span').fadeOut(1000, function () {
//                 //     $(#ajax).text('added').fadeIn(1000);
//                 // });
//                 // $(#ajax).delay(500).fadeOut(500);
//                 $.ajax({
//                     url: "/admin/delete",
//                     type: 'GET',
//                     data: result[0].value,
//                     // dataType: 'json',
//                     context: document.getElementById('#ajax'),
//
//                     success: function (data, status) {
//                         alert('2');
//                         succsess(data, status);
//                     }
//                 });
//
//
//             });
//
//
//         });
//         // $('#ajax').html('<span>Send</span>').fadeIn(1000, function () {
//         //     var result = $('#dataDelete').serializeArray();
//         //     const button = $(e.relatedTarget);
//         //     const idDelete = button.data('id');
//         //     const modal = $(this);
//         //
//         //     console.log(result);
//         //     console.log(idDelete);
//         //     $(this).find('span').fadeOut(1000, function () {
//         //         $(this).text('added').fadeIn(1000);
//         //     });
//         //     $(this).delay(500).fadeOut(500);
//         //
//         //     // $.ajax({
//         //     //     url: "/admin/add",
//         //     //     type: 'POST',
//         //     //     data: result,
//         //     //     // dataType: 'json',
//         //     //     context: document.getElementById('#ajax'),
//         //     //
//         //     //     success: function (data) {
//         //     //         alert('2');
//         //     //         succsess(data);
//         //     //     }
//         //     // });
//         // });
//     });
// });
//
// function succsess(data, status) {
//     alert('succsess');
// }