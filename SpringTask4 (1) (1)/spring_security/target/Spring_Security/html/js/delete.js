$(function ($) {

    $('#btnDelete').click(function (e) {
        e.preventDefault();
        var message= "unsuccess";
        var result = $('.js-dataDelete').serializeArray();
        $.ajax({
            url: "/admin/delete",
            type: 'POST',
            data: result,
            context: document.getElementById('#ajax'),
            success: function (data) {
                succsess2(data);
                message = 'succsess';
            }
        });
        alert(message);
        $('#myModalDelete').modal('hide');
    });
});

function succsess2(result) {
    $('.js-tableUsers tr td:first-child  span').each(function () {
        var ans = $(this).text();
        console.log(result.id);
        if (ans == result.id) {
            $(this).parent().parent().remove();
        }
    });
}

