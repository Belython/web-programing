if (localStorage.getItem('order') != null) {
    let orders = JSON.parse(localStorage.getItem('order'));
    let out = '';
    $.getJSON('../JSON/product.json', function (data) {
        for (let item in orders) {
            let user = JSON.parse(localStorage.getItem('login'));
            if(user.Email == orders[item].Login) {
                var products = '';
                for (let key in orders[item].Carts) {
                    if ( key % 2 == 0) {
                        products += '<div class="product" style="width: 204px">';
                        products += '<div class="img_">';
                        products += '<div  style="display: flex; justify-content: space-around; align-items: center; height: 100%">';
                        products += '<img class="img-thumbnail post-itm" src="' + orders[item].Carts[key]['img'] + '"style="height: 110px;">';
                        products += '</div>';
                        products += '</div>';
                        products += '</div>';
                        products += '<a class="text-center" href="#" style="padding-bottom: 20px">' + orders[item].Carts[key]['name'] + '</a>';
                    }else{
                        products += '  Количество - ' + orders[item].Carts[key];
                    }
                }
                let chekout = '';
                if(orders[item].Payment == true)
                {
                    chekout = 'Оплаченно';
                }
                else {
                    chekout = 'Неоплаченно';
                }
                out += ' <div class="text-left">\n' +
                    '                    <h3 class="p-3 text-center">Номер заказа:' + item + '</h3>\n' +
                    '                    <table class="table table-striped">\n' +
                    '                        <tbody>\n' +
                    '                        <tr>\n' +
                    '                            <td colspan="1">Товары</td>\n' +
                    '                            <td>' + products + '</td>\n' +
                    '                        </tr>\n' +
                    '                        <tr>\n' +
                    '                            <td colspan="1">Сумма заказа</td>\n' +
                    '                            <td>' + orders[item].Sum + '</td>\n' +
                    '                        </tr>\n' +
                    '                        <tr>\n' +
                    '                            <td colspan="1">Статус оплаты</td>\n' +
                    '                            <td>' + chekout + '</td>\n' +
                    '                        </tr>\n' +
                    '                        <tr>\n' +
                    '                            <td colspan="1">Доставка</td>\n' +
                    '                            <td>' + orders[item].Delivery + '</td>\n' +
                    '                        </tr>\n' +
                    '                        </tbody>\n' +
                    '                    </table>\n' +
                    '                </div>'
            }
        }
        $('#orders').html(out);
    });
}