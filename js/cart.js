var cart = [];
var cart1 = [];
var cart2 = [];
var cart3 = [];
var cart4 = [];
var cart5 = [];
var cart6 = [];
var cart7 = [];
var cart8 = [];


$.getJSON('../JSON/product.json', function (data){
    var products = data;
    checkCart();
    showCart();

    function showCart(){

        var out = '';
        var outSmarphon ='';
        var outPK ='';
        var outNote ='';
        var sum = 0;
        if($.isEmptyObject(cart) && $.isEmptyObject(cart1) && $.isEmptyObject(cart2) && $.isEmptyObject(cart3) && $.isEmptyObject(cart4) && $.isEmptyObject(cart5) && $.isEmptyObject(cart6) && $.isEmptyObject(cart7) && $.isEmptyObject(cart8))
        {
            out +='<h4 class="text-center">В корзине нет товаров</h4>';
            out +='<h5 class="text-center">Найдите то, что вам нужно в каталоге или при помощи поиска</h5>';
            out +='<form action="../pages/index.html" class="text-center">';
            out +='<button class="btn btn-outline-dark" style="background-color: #ff8000;">Вернуться к покупкам</button>';
            out +='</form>';
            document.getElementById('del').remove();
        }else {
            for (var key in cart){
                outSmarphon += '<div style="border: 2px #ff8000 solid; width: 408px">'
                outSmarphon+= '<button data-art="'+key+'" class="delete btn btn-danger">x </button>';
                outSmarphon += '<div class="img_">';
                outSmarphon+= '<div style="display: flex; justify-content: space-around; align-items: center; height: 100%">';
                outSmarphon+='<img class="img-thumbnail post-itm" src="'+products[key]['img']+'"style="height: 220px;">';
                outSmarphon+='</div>';
                outSmarphon += '<a class="text-center" href="#" style="padding-bottom: 20px">'+products[key]['name']+'</a>';
                outSmarphon+='</div>';
                outSmarphon += '<br>'
                outSmarphon +='<div class="d-block mx-auto text-center">'
                outSmarphon += '<button data-art="'+key+'" class="minus btn btn-info">- </button>';
                outSmarphon+=cart[key];
                outSmarphon += '<button data-art="'+key+'" class="plus btn btn-info">+ </button>';
                outSmarphon+='</div>';
                outSmarphon += '<br>'
                outSmarphon += '<p class="text-center"> Итоговая цена за товар: '
                sum += cart[key] * products[key]['price'];
                outSmarphon+=cart[key] * products[key]['price'];
                outSmarphon += '</p>'
                outSmarphon+='</div>';
            }
            for (var key in cart1){
                outSmarphon+= '<div style="border: 2px #ff8000 solid; width: 408px">'
                outSmarphon += '<button data-art="'+key+'" class="delete1 btn btn-danger">x </button>';
                outSmarphon+= '<div class="img_">';
                outSmarphon+= '<div style="display: flex; justify-content: space-around; align-items: center; height: 100%">';
                outSmarphon+='<img class="img-thumbnail post-itm" src="'+products[key]['img']+'"style="height: 220px;">';
                outSmarphon+='</div>';
                outSmarphon += '<a class="text-center" href="#" style="padding-bottom: 20px">'+products[key]['name']+'</a>';
                outSmarphon+='</div>';
                outSmarphon += '<br>'
                outSmarphon +='<div class="d-block mx-auto text-center">'
                outSmarphon += '<button data-art="'+key+'" class="minus1 btn btn-info">- </button>';
                outSmarphon+=cart1[key];
                outSmarphon += '<button data-art="'+key+'" class="plus1 btn btn-info">+ </button>';
                outSmarphon+='</div>';
                outSmarphon += '<br>'
                outSmarphon += '<p class="text-center"> Итоговая цена за товар: '
                sum +=cart1[key] * products[key]['price'];
                outSmarphon+=cart1[key] * products[key]['price'];
                outSmarphon += '</p>'
                outSmarphon+='</div>';
            }
            for (var key in cart2){
                outSmarphon += '<div style="border: 2px #ff8000 solid; width: 408px">'
                outSmarphon += '<button data-art="'+key+'" class="delete2 btn btn-danger">x </button>';
                outSmarphon+= '<div class="img_">';
                outSmarphon+= '<div style="display: flex; justify-content: space-around; align-items: center; height: 100%">';
                outSmarphon+='<img class="img-thumbnail post-itm" src="'+products[key]['img']+'"style="height: 220px;">';
                outSmarphon+='</div>';
                outSmarphon += '<a class="text-center" href="#" style="padding-bottom: 20px">'+products[key]['name']+'</a>';
                outSmarphon+='</div>';
                outSmarphon += '<br>'
                outSmarphon +='<div class="d-block mx-auto text-center">'
                outSmarphon += '<button data-art="'+key+'" class="minus2 btn btn-info">- </button>';
                outSmarphon+=cart2[key];
                outSmarphon += '<button data-art="'+key+'" class="plus2 btn btn-info">+ </button>';
                outSmarphon+='</div>';
                outSmarphon += '<br>'
                outSmarphon += '<p class="text-center"> Итоговая цена за товар: '
                sum += cart2[key] * products[key]['price'];
                outSmarphon+=cart2[key] * products[key]['price'];
                outSmarphon += '</p>'
                outSmarphon+='</div>';
            }
            for (var key in cart3){
                outPK += '<div style="border: 2px #ff8000 solid; width: 408px">'
                outPK += '<button data-art="'+key+'" class="delete3 btn btn-danger">x </button>';
                outPK += '<div class="img_">';
                outPK+= '<div style="display: flex; justify-content: space-around; align-items: center; height: 100%">';
                outPK+='<img class="img-thumbnail post-itm" src="'+products[key]['img']+'"style="height: 220px;">';
                outPK+='</div>';
                outPK += '<a class="text-center" href="#" style="padding-bottom: 20px">'+products[key]['name']+'</a>';
                outPK+='</div>';
                outPK += '<br>'
                outPK +='<div class="d-block mx-auto text-center">'
                outPK += '<button data-art="'+key+'" class="minus3 btn btn-info">- </button>';
                outPK+=cart3[key];
                outPK += '<button data-art="'+key+'" class="plus3 btn btn-info">+ </button>';
                outPK+='</div>';
                outPK += '<br>'
                outPK += '<p class="text-center"> Итоговая цена за товар: '
                sum += cart3[key] * products[key]['price'];
                outPK+=cart3[key] * products[key]['price'];
                outPK += '</p>'
                outPK+='</div>';
            }
            for (var key in cart4){
                outPK += '<div style="border: 2px #ff8000 solid; width: 408px">'
                outPK += '<button data-art="'+key+'" class="delete4 btn btn-danger">x </button>';
                outPK+= '<div class="img_">';
                outPK+= '<div style="display: flex; justify-content: space-around; align-items: center; height: 100%">';
                outPK+='<img class="img-thumbnail post-itm" src="'+products[key]['img']+'"style="height: 220px;">';
                outPK+='</div>';
                outPK += '<a class="text-center" href="#" style="padding-bottom: 20px">'+products[key]['name']+'</a>';
                outPK+='</div>';
                outPK += '<br>'
                outPK +='<div class="d-block mx-auto text-center">'
                outPK += '<button data-art="'+key+'" class="minus4 btn btn-info">- </button>';
                outPK+=cart4[key];
                outPK += '<button data-art="'+key+'" class="plus4 btn btn-info">+ </button>';
                outPK+='</div>';
                outPK+= '<br>'
                outPK += '<p class="text-center"> Итоговая цена за товар: '
                sum += cart4[key] * products[key]['price'];
                outPK+=cart4[key] * products[key]['price'];
                outPK += '</p>'
                outPK+='</div>';
            }
            for (var key in cart5){
                outPK += '<div style="border: 2px #ff8000 solid; width: 408px">'
                outPK += '<button data-art="'+key+'" class="delete5 btn btn-danger">x </button>';
                outPK += '<div class="img_">';
                outPK+= '<div style="display: flex; justify-content: space-around; align-items: center; height: 100%">';
                outPK+='<img class="img-thumbnail post-itm" src="'+products[key]['img']+'"style="height: 220px;">';
                outPK+='</div>';
                outPK += '<a class="text-center" href="#" style="padding-bottom: 20px">'+products[key]['name']+'</a>';
                outPK+='</div>';
                outPK+= '<br>'
                outPK +='<div class="d-block mx-auto text-center">'
                outPK += '<button data-art="'+key+'" class="minus5 btn btn-info">- </button>';
                outPK+=cart5[key];
                outPK += '<button data-art="'+key+'" class="plus5 btn btn-info">+ </button>';
                outPK+='</div>';
                outPK += '<br>'
                outPK += '<p class="text-center"> Итоговая цена за товар: '
                sum += cart5[key] * products[key]['price'];
                outPK+=cart5[key] * products[key]['price'];
                outPK += '</p>'
                outPK+='</div>';
            }
            for (var key in cart6){
                outNote += '<div style="border: 2px #ff8000 solid; width: 408px">'
                outNote += '<button data-art="'+key+'" class="delete6 btn btn-danger">x </button>';
                outNote += '<div class="img_">';
                outNote+= '<div style="display: flex; justify-content: space-around; align-items: center; height: 100%">';
                outNote+='<img class="img-thumbnail post-itm" src="'+products[key]['img']+'"style="height: 220px;">';
                outNote+='</div>';
                outNote += '<a class="text-center" href="#" style="padding-bottom: 20px">'+products[key]['name']+'</a>';
                outNote+='</div>';
                outNote += '<br>'
                outNote +='<div class="d-block mx-auto text-center">'
                outNote += '<button data-art="'+key+'" class="minus6 btn btn-info">- </button>';
                outNote+=cart6[key];
                outNote += '<button data-art="'+key+'" class="plus6 btn btn-info">+ </button>';
                outNote+='</div>';
                outNote += '<br>'
                outNote += '<p class="text-center"> Итоговая цена за товар: '
                sum += cart6[key] * products[key]['price'];
                outNote+=cart6[key] * products[key]['price'];
                outNote += '</p>'
                outNote+='</div>';
            }
            for (var key in cart7){
                outNote+= '<div style="border: 2px #ff8000 solid; width: 408px">'
                outNote += '<button data-art="'+key+'" class="delete7 btn btn-danger">x </button>';
                outNote += '<div class="img_">';
                outNote+= '<div style="display: flex; justify-content: space-around; align-items: center; height: 100%">';
                outNote+='<img class="img-thumbnail post-itm" src="'+products[key]['img']+'"style="height: 220px;">';
                outNote+='</div>';
                outNote+= '<a class="text-center" href="#" style="padding-bottom: 20px">'+products[key]['name']+'</a>';
                outNote+='</div>';
                outNote += '<br>'
                outNote +='<div class="d-block mx-auto text-center">'
                outNote += '<button data-art="'+key+'" class="minus7 btn btn-info">- </button>';
                outNote+=cart7[key];
                outNote += '<button data-art="'+key+'" class="plus7 btn btn-info">+ </button>';
                outNote+='</div>';
                outNote += '<br>'
                outNote += '<p class="text-center"> Итоговая цена за товар: '
                sum += cart7[key] * products[key]['price'];
                outNote+=cart7[key] * products[key]['price'];
                outNote += '</p>'
                outNote+='</div>';
            }
            for (var key in cart8){
                outNote += '<div style="border: 2px #ff8000 solid; width: 408px">'
                outNote += '<button data-art="'+key+'" class="delete8 btn btn-danger">x </button>';
                outNote += '<div class="img_">';
                outNote+= '<div style="display: flex; justify-content: space-around; align-items: center; height: 100%">';
                outNote+='<img class="img-thumbnail post-itm" src="'+products[key]['img']+'"style="height: 220px;">';
                outNote+='</div>';
                outNote += '<a class="text-center" href="#" style="padding-bottom: 20px">'+products[key]['name']+'</a>';
                outNote+='</div>';
                outNote += '<br>'
                outNote +='<div class="d-block mx-auto text-center">'
                outNote += '<button data-art="'+key+'" class="minus8 btn btn-info">- </button>';
                outNote+=cart8[key];
                outNote += '<button data-art="'+key+'" class="plus8 btn btn-info">+ </button>';
                outNote+='</div>';
                outNote += '<br>'
                outNote += '<p class="text-center"> Итоговая цена за товар: '
                sum += cart8[key] * products[key]['price'];
                outNote+=cart8[key] * products[key]['price'];
                outNote += '</p>'
                outNote+='</div>';
            }
            out +='<br>';
            out +='<h2 class="text-center">Итоговая сумма: '+sum+'</h2>';
            out +='<div class="form-row text-center">'
            out +='<button class="text-center btn btn-primary" onclick="window.location=\'order.html\'"> Оформить заказ </button>';
            out +='</div>'
        }

        $('#cartSmarphon').html(outSmarphon);
        $('#cartPK').html(outPK);
        $('#cartNote').html(outNote);
        $('#cart').html(out);
        $('button.plus').on('click', plusProduct);
        $('button.minus').on('click', minusProduct);
        $('button.delete').on('click', deleteProduct);
        $('button.plus1').on('click', plusProduct1);
        $('button.minus1').on('click', minusProduct1);
        $('button.delete1').on('click', deleteProduct1);
        $('button.plus2').on('click', plusProduct2);
        $('button.minus2').on('click', minusProduct2);
        $('button.delete2').on('click', deleteProduct2);
        $('button.plus3').on('click', plusProduct3);
        $('button.minus3').on('click', minusProduct3);
        $('button.delete3').on('click', deleteProduct3);
        $('button.plus4').on('click', plusProduct4);
        $('button.minus4').on('click', minusProduct4);
        $('button.delete4').on('click', deleteProduct4);
        $('button.plus5').on('click', plusProduct5);
        $('button.minus5').on('click', minusProduct5);
        $('button.delete5').on('click', deleteProduct5);
        $('button.plus6').on('click', plusProduct6);
        $('button.minus6').on('click', minusProduct6);
        $('button.delete6').on('click', deleteProduct6);
        $('button.plus7').on('click', plusProduct7);
        $('button.minus7').on('click', minusProduct7);
        $('button.delete7').on('click', deleteProduct7);
        $('button.plus8').on('click', plusProduct8);
        $('button.minus8').on('click', minusProduct8);
        $('button.delete8').on('click', deleteProduct8);
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
    function plusProduct1(){
        var id = $(this).attr('data-art');
        cart1[id] += 1;
        localStorage.setItem('cart1', JSON.stringify(cart1));
        showCart();
    }

    function minusProduct1(){
        var id = $(this).attr('data-art');
        if(cart1[id] > 1) {
            cart1[id] -= 1;
        }else{
            delete cart1[id];
        }
        localStorage.setItem('cart1', JSON.stringify(cart1));
        showCart();
    }

    function deleteProduct1(){
        var id = $(this).attr('data-art');
        delete cart1[id];
        localStorage.setItem('cart1', JSON.stringify(cart1));
        showCart();
    }
    function plusProduct2(){
        var id = $(this).attr('data-art');
        cart2[id] += 1;
        localStorage.setItem('cart2', JSON.stringify(cart2));
        showCart();
    }

    function minusProduct2(){
        var id = $(this).attr('data-art');
        if(cart2[id] > 1) {
            cart2[id] -= 1;
        }else{
            delete cart2[id];
        }
        localStorage.setItem('cart2', JSON.stringify(cart2));
        showCart();
    }

    function deleteProduct2(){
        var id = $(this).attr('data-art');
        delete cart2[id];
        localStorage.setItem('cart2', JSON.stringify(cart2));
        showCart();
    }
    function plusProduct3(){
        var id = $(this).attr('data-art');
        cart3[id] += 1;
        localStorage.setItem('cart3', JSON.stringify(cart3));
        showCart();
    }

    function minusProduct3(){
        var id = $(this).attr('data-art');
        if(cart3[id] > 1) {
            cart3[id] -= 1;
        }else{
            delete cart3[id];
        }
        localStorage.setItem('cart3', JSON.stringify(cart3));
        showCart();
    }

    function deleteProduct3(){
        var id = $(this).attr('data-art');
        delete cart3[id];
        localStorage.setItem('cart3', JSON.stringify(cart3));
        showCart();
    }

    function plusProduct4(){
        var id = $(this).attr('data-art');
        cart4[id] += 1;
        localStorage.setItem('cart4', JSON.stringify(cart4));
        showCart();
    }

    function minusProduct4(){
        var id = $(this).attr('data-art');
        if(cart4[id] > 1) {
            cart4[id] -= 1;
        }else{
            delete cart4[id];
        }
        localStorage.setItem('cart4', JSON.stringify(cart4));
        showCart();
    }

    function deleteProduct4(){
        var id = $(this).attr('data-art');
        delete cart4[id];
        localStorage.setItem('cart4', JSON.stringify(cart4));
        showCart();
    }
    function plusProduct5(){
        var id = $(this).attr('data-art');
        cart5[id] += 1;
        localStorage.setItem('cart5', JSON.stringify(cart5));
        showCart();
    }

    function minusProduct5(){
        var id = $(this).attr('data-art');
        if(cart5[id] > 1) {
            cart5[id] -= 1;
        }else{
            delete cart5[id];
        }
        localStorage.setItem('cart5', JSON.stringify(cart5));
        showCart();
    }

    function deleteProduct5(){
        var id = $(this).attr('data-art');
        delete cart5[id];
        localStorage.setItem('cart5', JSON.stringify(cart5));
        showCart();
    }
    function plusProduct6(){
        var id = $(this).attr('data-art');
        cart6[id] += 1;
        localStorage.setItem('cart6', JSON.stringify(cart6));
        showCart();
    }

    function minusProduct6(){
        var id = $(this).attr('data-art');
        if(cart6[id] > 1) {
            cart6[id] -= 1;
        }else{
            delete cart6[id];
        }
        localStorage.setItem('cart6', JSON.stringify(cart6));
        showCart();
    }

    function deleteProduct6(){
        var id = $(this).attr('data-art');
        delete cart6[id];
        localStorage.setItem('cart6', JSON.stringify(cart6));
        showCart();
    }
    function plusProduct7(){
        var id = $(this).attr('data-art');
        cart7[id] += 1;
        localStorage.setItem('cart7', JSON.stringify(cart7));
        showCart();
    }

    function minusProduct7(){
        var id = $(this).attr('data-art');
        if(cart7[id] > 1) {
            cart7[id] -= 1;
        }else{
            delete cart7[id];
        }
        localStorage.setItem('cart7', JSON.stringify(cart7));
        showCart();
    }

    function deleteProduct7(){
        var id = $(this).attr('data-art');
        delete cart7[id];
        localStorage.setItem('cart7', JSON.stringify(cart7));
        showCart();
    }
    function plusProduct8(){
        var id = $(this).attr('data-art');
        cart8[id] += 1;
        localStorage.setItem('cart8', JSON.stringify(cart8));
        showCart();
    }

    function minusProduct8(){
        var id = $(this).attr('data-art');
        if(cart8[id] > 1) {
            cart8[id] -= 1;
        }else{
            delete cart8[id];
        }
        localStorage.setItem('cart8', JSON.stringify(cart8));
        showCart();
    }

    function deleteProduct8(){
        var id = $(this).attr('data-art');
        delete cart8[id];
        localStorage.setItem('cart8', JSON.stringify(cart8));
        showCart();
    }
});

function checkCart(){
    if(localStorage.getItem('cart') != null){
        cart = JSON.parse(localStorage.getItem('cart'));
    }
    if(localStorage.getItem('cart1') != null){
        cart1 = JSON.parse(localStorage.getItem('cart1'));
    }
    if(localStorage.getItem('cart2') != null){
        cart2 = JSON.parse(localStorage.getItem('cart2'));
    }
    if(localStorage.getItem('cart3') != null){
        cart3 = JSON.parse(localStorage.getItem('cart3'));
    }
    if(localStorage.getItem('cart4') != null){
        cart4 = JSON.parse(localStorage.getItem('cart4'));
    }
    if(localStorage.getItem('cart5') != null){
        cart5 = JSON.parse(localStorage.getItem('cart5'));
    }
    if(localStorage.getItem('cart6') != null){
        cart6 = JSON.parse(localStorage.getItem('cart6'));
    }
    if(localStorage.getItem('cart7') != null){
        cart7 = JSON.parse(localStorage.getItem('cart7'));
    }
    if(localStorage.getItem('cart8') != null){
        cart8 = JSON.parse(localStorage.getItem('cart8'));
    }

}
