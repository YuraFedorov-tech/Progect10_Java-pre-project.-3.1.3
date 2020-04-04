$(function ($) {
    // $('#sendDataAdd').css({border: '1px solid red'});
    $('#btnAdd').click(function (e) {
        alert('btnAdd work begin');
        e.preventDefault();
        $('#ajax').html('<span>Send</span>').fadeIn(1000, function () {
            var result = $('#dataAdd').serializeArray();
            console.log(result);
            var block = $(this);
            $(this).find('span').fadeOut(1000, function () {
                $(this).text('added').fadeIn(1000);
            });
            $(this).delay(500).fadeOut(500);
            // $.ajax({
            //     type: "POST",
            //     url: url,
            //     data: data,
            //     success: sdf,
            //     dataType: dataType
            // });
            $.ajax({
                // alert('1');
                url: "/admin/add",
                type: 'POST',
                data: result,
                dataType: 'json',
                context: document.getElementById('#ajax'),

                success : function (data, status) {
                    alert('2');
                    succsess(data);
                }
            });


        });
    });


});

function succsess(data) {
    alert('1');
    console.log(data);
    $('#someTabs a[href="#mainTab"]').tab('show');
    //  последний блок в таблице
    var lastElement = $('.table.table-striped  tr').last();
    lastElement.css({border: '1px solid blue'});

    $('.table.table-striped tr:last').after(insidUser(data));
}


function insidUser(result) {
    var deleteBtn = $('.table.table-striped tr:last td:last');

    var ans =
        '<tr>' +
        '<td><span>' + findResultByName(result, "id") + '</span></td> ' +
        '<td><span>' + findResultByName(result, "firstName") + '</span></td> ' +
        '<td><span>' + findResultByName(result, "lastName") + '</span></td> ' +
        '<td><span>' + findResultByName(result, "age") + '</span></td> ' +
        '<td><span>' + findResultByName(result, "email") + '</span></td> ' +
        '<td><span>' + findResultByName(result, "password") + '</span></td> ' +
        '<td><span>' + findOneRoleByIdes(result[5].value) + '</span></td> ' +

        '<td>' + findBtnEdit(result) + '</td> ' +   //  btn  Delete
        '<td><span>' + findBtnDelete(result) + '</span></td> ' +
        '</tr>';
    return ans;
};

function findBtnDelete(result) {
    ans = '                                        <div class="form-row text-center">\n' +
        '                                            <div class="col-12">\n' +
        '                                                <button class="btn btn-danger " ' +
        'data-age=' + findResultByName(result, "age") + ' + ' +
        'data-email=' + findResultByName(result, "email") + ' + ' +
        'data-firstname=' + findResultByName(result, "firstName") + ' + ' +
        'data-id=' + findResultByName(result, "id") + ' + ' +
        'data-lastname=' + findResultByName(result, "lastName") + ' + ' +
        'data-password=' + findResultByName(result, "password") + ' + ' +
        //  'data-roles="[Role{role=\'GUEST\'}]"' +
        'data-roles="[Role{role=\'GUEST\'}]"' +
        '                                                        data-target="#myModalDelete" data-toggle="modal"' +
        '                                                        type="button">Delete' +
        '                                                </button>' +
        '                                            </div>' +
        '                                        </div>';

    return ans;
};


function findBtnEdit(result) {
    ans = '         <div class="form-row text-center">\n' +
        '                                            <div class="col-12">\n' +
        '                                                <button class="btn btn-primary " ' +
        'data-age=' + findResultByName(result, "age") + ' + ' +
        'data-email=' + findResultByName(result, "email") + ' + ' +
        'data-firstname=' + findResultByName(result, "firstName") + ' + ' +
        'data-id=' + findResultByName(result, "id") + ' + ' +
        'data-lastname=' + findResultByName(result, "lastName") + ' + ' +
        'data-password=' + findResultByName(result, "password") + ' + ' +
        //  'data-roles="[Role{role=\'GUEST\'}]"' +
        'data-roles="[Role{role=\'GUEST\'}]"' +
        '                                                        data-target="#myModal" data-toggle="modal"\n' +
        '                                                        type="button">Edit\n' +
        '                                                </button>\n' +
        '                                            </div>\n' +
        '                                        </div>';

    return ans;
};


function findOneRoleByIdes(ids) {

    if (ids.constructor == Array) {
        var ans;
        // var arr = ['Автомобиль', 'Грузовик', 'Автобус'];
        // $.each(arr, function (index, value) {
        //     alert(index);
        //     console.log('Индекс: ' + index + '; Значение: ' + value);
        // });
        return ans; // если ролей много
    }
    return findOneRoleById(ids);  // если всего одна роль
};

function findOneRoleById(id) {
    if (id == 463) {
        return 'SUPERADMIN';
    }
    if (id == 459) {
        return 'USER';
    }
    if (id == 458) {
        return 'ADMIN';
    }
    return 'GUEST';
};


findResultByName = function (result, name) {
    var ans;
    result.forEach(function (item, i) {
        if (name == item.name) {
            ans = item.value;
        }
    });
    return ans;
};