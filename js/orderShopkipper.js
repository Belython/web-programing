if (localStorage.getItem('order') != null) {
    let orders = JSON.parse(localStorage.getItem('order'));
    let out = '';
    $.getJSON('../JSON/product.json', function (data) {
        for (let item in orders) {
            let user = JSON.parse(localStorage.getItem('login'));
            if (user.Role == 'shopkipper') {
                document.getElementById('delivery').innerHTML = '';
                document.getElementById('user').innerHTML = '';
                var products = [];
                for (let key in orders[item].Carts) {
                    if (key % 2 == 0) {
                        products += orders[item].Carts[key]['name'];
                    } else {
                        products += '  Количество - ' + orders[item].Carts[key] + '<br>';
                    }
                }
                out += ' <div class="text-left">\n' +
                    '                    <h3 class="p-3 text-center">Номер заказа:' + item + '</h3>\n' +
                    '                    <table class="table table-striped">\n' +
                    '                        <tbody>\n' +
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