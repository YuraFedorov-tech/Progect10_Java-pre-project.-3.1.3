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

        });
    });
});


function succsess(data) {
   // console.log(status);
    $('#someTabs a[href="#mainTab"]').tab('show');
    $('.table.table-striped tr:last').after(insidUser(data));
}


function insidUser(data) {
    var deleteBtn = $('.table.table-striped tr:last td:last');
    alert('insidUser');
    console.log(data.roles[0]);
    var ans =
        '<tr>' +
        '<td><span>' + data.id + '</span></td> ' +
        '<td><span>' + data.firstName + '</span></td> ' +
        '<td><span>' + data.lastName + '</span></td> ' +
        '<td><span>' + data.age + '</span></td> ' +
        '<td><span>' + data.email + '</span></td> ' +
        '<td><span>' + data.password + '</span></td> ' +
        '<td><span>' + findOneRoleByIdes(data.roles) + '</span></td> ' +
        '<td>' + findBtnEdit(data) + '</td> ' +
        '<td><span>' + findBtnDelete(data) + '</span></td> ' +
        '</tr>';
    return ans;
};

function findBtnDelete(data) {
    ans = '                                        <div class="form-row text-center">\n' +
        '                                            <div class="col-12">\n' +
        '                                                <button class="btn btn-danger " ' +
        'data-age=' + data.age + ' + ' +
        'data-email=' + data.email + ' + ' +
        'data-firstname=' + data.firstName + ' + ' +
        'data-id=' + data.id + ' + ' +
        'data-lastname=' + data.lastName + ' + ' +
        'data-password=' + data.password + ' + ' +
        'data-roles=' + data.roles + ' + ' +
        '                                                        data-target="#myModalDelete" data-toggle="modal"' +
        '                                                        type="button">Delete' +
        '                                                </button>' +
        '                                            </div>' +
        '                                        </div>';
    return ans;
};


function findBtnEdit(data) {
    ans = '         <div class="form-row text-center">\n' +
        '                                            <div class="col-12">\n' +
        '                                                <button class="btn btn-primary " ' +
        'data-age=' + data.age + ' + ' +
        'data-email=' + email.email + ' + ' +
        'data-firstname=' + data.firstName + ' + ' +
        'data-id=' + data.id + ' + ' +
        'data-lastname=' + data.lastName + ' + ' +
        'data-password=' + data.password + ' + ' +
        'data-roles=' + data.roles + ' + ' +
        '                                                        data-target="#myModal" data-toggle="modal"\n' +
        '                                                        type="button">Edit\n' +
        '                                                </button>\n' +
        '                                            </div>\n' +
        '                                        </div>';

    return ans;
};


function findOneRoleByIdes(roles) {
    console.log(roles);
    var ans = "";
    $.each(roles, function (index, role) {
        ans = ans + findOneRoleById(role.id);
        ans = ans + " ";
        console.log(ans);
    });
    return ans;
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


