if (localStorage.getItem('order') != null) {
    let orders = JSON.parse(localStorage.getItem('order'));
    let out = '';
    $.getJSON('../JSON/product.json', function (data) {
        for (let item in orders) {
            var products = [];
            for (let key in orders[item].Carts) {
                products += orders[item].Carts[key]['name'] + '<br>';
            }
            let chekout = '';
            if(orders[item].Payment == true)
            {
                chekout = 'Оплаченно';
            }
            else {
                chekout = 'Неоплаченно';
            }
            if(orders[item].IsDelivery == true) {
                out += ' <div class="text-left">\n' +
                    '                    <h3 class="p-3 text-center">Номер заказа:' + item + '</h3>\n' +
                    '                    <table class="table table-striped">\n' +
                    '                        <tbody>\n' +
                    '                        <tr>\n' +
                    '                            <td colspan="1">ФИО получателя</td>\n' +
                    '                            <td id="dateBirhday">' + orders[item].name + " " + orders[item].SecondName + '</td>\n' +
                    '                        </tr>\n' +
                    '                        <tr>\n' +
                    '                            <td colspan="1">Номер получателя</td>\n' +
                    '                            <td id="dateBirhday">' + orders[item].Number + '</td>\n' +
                    '                        </tr>\n' +
                    '                        <tr>\n' +
                    '                            <td colspan="1">Адресс получателя</td>\n' +
                    '                            <td id="dateBirhday">' + 'э' + '</td>\n' +
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
        $('#orders').html(out);
    });
}