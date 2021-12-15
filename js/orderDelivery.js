if (localStorage.getItem('order') != null) {
    let orders = JSON.parse(localStorage.getItem('order'));
    let out = '';
    $.getJSON('../JSON/product.json', function (data) {
        for (let item in orders) {
            let user = JSON.parse(localStorage.getItem('login'));
            if (user.Role == 'delivery') {
                document.getElementById('shopkipper').innerHTML = '';
                document.getElementById('user').innerHTML = '';
                var products = [];
                for (let key in orders[item].Carts) {
                    if (key % 2 == 0) {
                        products += orders[item].Carts[key]['name'];
                    } else {
                        products += '  Количество - ' + orders[item].Carts[key] + '<br>';
                    }
                }
                let chekout = '';
                if (orders[item].Payment == true) {
                    chekout = 'Оплаченно';
                } else {
                    chekout = 'Неоплаченно';
                }
                if (orders[item].IsDelivery == true) {
                    out += ' <div id="delorder'+item+'" data-art="'+item+'" class="text-left">\n' +
                        '                    <h3 class="p-3 text-center">Номер заказа:' + item + '</h3>\n' +
                        '                    <table class="table table-striped">\n' +
                        '                        <tbody>\n' +
                        '                        <tr>\n' +
                        '                            <td colspan="1">ФИО получателя</td>\n' +
                        '                            <td id="dateBirhday">' + orders[item].Name + " " + orders[item].SecondName + '</td>\n' +
                        '                        </tr>\n' +
                        '                        <tr>\n' +
                        '                            <td colspan="1">Номер получателя</td>\n' +
                        '                            <td id="dateBirhday">' + orders[item].Number + '</td>\n' +
                        '                        </tr>\n' +
                        '                        <tr>\n' +
                        '                            <td colspan="1">Адресс получателя</td>\n' +
                        '                            <td id="dateBirhday">' + orders[item].Delivery + '</td>\n' +
                        '                        </tr>\n' +
                        '                        <tr>\n' +
                        '                            <td colspan="1">Статус оплаты</td>\n' +
                        '                            <td id="dateBirhday">' + chekout + '</td>\n' +
                        '                        </tr>\n' +
                        '                        <tr>\n' +
                        '                            <td colspan="1">Товары</td>\n' +
                        '                            <td id="dateBirhday">' + products + '</td>\n' +
                        '                        </tr>\n' +
                        '                        </tbody>\n' +
                        '                    </table>\n' +
                        '                </div>'
                }
            }
        }
        $('#orders').html(out);
    });

}