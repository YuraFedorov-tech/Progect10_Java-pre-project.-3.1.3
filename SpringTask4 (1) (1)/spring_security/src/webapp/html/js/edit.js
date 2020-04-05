$(function ($) {

    $('#btnEdit').click(function (e) {
        e.preventDefault();
        var message = "unsuccess";
        var result = $('.js-dataEdit').serializeArray();
        $.ajax({
            url: "/admin/update",
            type: 'POST',
            data: result,
            context: document.getElementById('#ajax'),
            success: function (data) {
                succsess3(data);
                message = "succsess";
            }
        });
        alert(message);
        $('#myModal').modal('hide');
    });
});

function succsess3(result) {
    console.log(111);
    console.log(result);
    $('.js-usesrsFromMainTable  span').each(function () {
        var ans = $(this).text();
        console.log(result.id);
        if (ans == result.id) {
         //   $(this).parent().parent().css({border: '2px solid green'});
            var block= $(this).parent().parent();
         changeData(result ,block);
        }
    });
}

function changeData(result,block) {
    alert('find' );
    $(block).css({border: '2px solid red'});
    succsess2(result);
    succsess(result);
}
