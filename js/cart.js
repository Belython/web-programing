var cart = [];


$.getJSON('/JSON/product.json', function (data){
    var products = data;
    checkCart();
    showCart();

    function showCart(){
        var out = '';
        if($.isEmptyObject(cart)){
            out +='<h4 class="text-center">В корзине нет товаров</h4>';
            out +='<h5 class="text-center">Найдите то, что вам нужно в каталоге или при помощи поиска</h5>';
            out +='<form action="../index.html" class="text-center">';
            out +='<button class="btn btn-outline-dark" style="background-color: #ff8000;">Вернуться к покупкам</button>';
            out +='</form>';
        }else{
            for (var key in cart){
                out += '<div style="border: 2px #ff8000 solid; width: 408px">'
                out += '<button data-art="'+key+'" class="delete btn btn-danger">x </button>';
                out += '<div class="img_">';
                out+= '<div style="display: flex; justify-content: space-around; align-items: center; height: 100%">';
                out+='<img class="img-thumbnail post-itm" src="'+products[key]['img']+'"style="height: 220px;">';
                out+='</div>';
                out += '<a class="text-center" href="#" style="padding-bottom: 20px">'+products[key]['name']+'</a>';
                out+='</div>';
                out += '<br>'
                out +='<div class="d-block mx-auto text-center">'
                out += '<button data-art="'+key+'" class="minus btn btn-info">- </button>';
                out+=cart[key];
                out += '<button data-art="'+key+'" class="plus btn btn-info">+ </button>';
                out+='</div>';
                out += '<br>'
                out += '<p class="text-center"> Итоговая цена за товар: '
                out+=cart[key] * products[key]['price'];
                out += '</p>'
                out+='</div>';
            }
        }
        $('#cart').html(out);
        $('button.plus').on('click', plusProduct);
        $('button.minus').on('click', minusProduct);
        $('button.delete').on('click', deleteProduct);
    }

    function plusProduct(){
        var id = $(this).attr('data-art');
        cart[id] += 1;
        localStorage.setItem('cart', JSON.stringify(cart));
        showCart();
    }

    function minusProduct(){
        var id = $(this).attr('data-art');
        if(cart[id] > 1) {
            cart[id] -= 1;
        }else{
            delete cart[id];
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        showCart();
    }

    function deleteProduct(){
        var id = $(this).attr('data-art');
        delete cart[id];
        localStorage.setItem('cart', JSON.stringify(cart));
        showCart();
    }
});

function checkCart(){
    if(localStorage.getItem('cart') != null){
        cart = JSON.parse(localStorage.getItem('cart'));
    }
}