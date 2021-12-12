
if (localStorage.getItem('order') != null) {
    let orders = JSON.parse(localStorage.getItem('order'));
    let out = '';
    $.getJSON('../JSON/product.json', function (data) {
        var products = data;
        for (let item in orders) {
            out += orders[item].Name + orders[item].SecondName;
            // out += '<div class="img_">' +
            //     '<div style="display: flex; justify-content: space-around; align-items: center; height: 100%">' +
            //     '<img class="img-thumbnail post-itm" src="'+orders[item].Carts[]+'"style="height: 220px;">' +
            //     '</div>' +
            //     '<a class="text-center" href="#" style="padding-bottom: 20px">'+orders[item].Carts[]+'</a>' +
            //     '</div>';
        }
    $('#orders').html(out);
    });
}