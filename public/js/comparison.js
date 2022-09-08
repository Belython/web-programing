var cartComp= [];
var cartComp1 = [];
var cartComp2 = [];
var cartComp3 = [];
var cartComp4 = [];
var cartComp5 = [];
var cartComp6 = [];
var cartComp7 = [];
var cartComp8 = [];
var cart= {};
var cart1 = {};
var cart2= {};
var cart3= {};
var cart4 = {};
var cart5 = {};
var cart6 = {};
var cart7 = {};
var cart8 = {};


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
        if($.isEmptyObject(cartComp) && $.isEmptyObject(cartComp1) && $.isEmptyObject(cartComp2) && $.isEmptyObject(cartComp3) && $.isEmptyObject(cartComp4) && $.isEmptyObject(cartComp5) && $.isEmptyObject(cartComp6) && $.isEmptyObject(cartComp7) && $.isEmptyObject(cartComp8))
        {
            out +='<h4 class="text-center">Для сравнение нет товаров</h4>';
            out +='<h5 class="text-center">Найдите то, что вам нужно в каталоге или при помощи поиска</h5>';
            out +='<form action="index.html" class="text-center">';
            out +='<button class="btn btn-outline-dark" style="background-color: #ff8000;">Вернуться к покупкам</button>';
            out +='</form>';
            $('#cart').html(out);
            document.getElementById('del').remove();
        }else {
            for (var key in cartComp){
                outSmarphon += '<div class="product" data_price="'+products[key]['price']+'" style="border: 2px #ff8000 solid; width: 408px">'
                outSmarphon += '<button data-art="'+key+'" class="delete btn btn-danger">x </button>';
                outSmarphon += '<div class="img_">';
                outSmarphon+= '<div style="display: flex; justify-content: space-around; align-items: center; height: 100%">';
                outSmarphon+='<img class="img-thumbnail post-itm" src="'+products[key]['img']+'"style="height: 220px;">';
                outSmarphon+='</div>';
                outSmarphon += '<a class="text-center" href="#" style="padding-bottom: 20px">'+products[key]['name']+'</a>';
                outSmarphon+='</div>';
                outSmarphon += '<br>'
                outSmarphon +='<div class="d-block mx-auto text-center">'
                outSmarphon+='</div>';
                outSmarphon += '<br>'
                outSmarphon += '<p class="text-center"> Итоговая цена за товар: '
                sum += cartComp[key] * products[key]['price'];
                outSmarphon+=cartComp[key] * products[key]['price'];
                outSmarphon += '</p>'
                outSmarphon += '<div class="form-row text-center"> <button data-art="'+key+'" class="add btn btn-info btn-sm ">Добавить в корзину </button> </div>';
                outSmarphon+='</div>';
            }
            for (var key in cartComp1){
                outSmarphon += '<div class="product" data_price="'+products[key]['price']+'"  style="border: 2px #ff8000 solid; width: 408px">'
                outSmarphon += '<button data-art="'+key+'" class="delete1 btn btn-danger">x </button>';
                outSmarphon += '<div class="img_">';
                outSmarphon+= '<div style="display: flex; justify-content: space-around; align-items: center; height: 100%">';
                outSmarphon+='<img class="img-thumbnail post-itm" src="'+products[key]['img']+'"style="height: 220px;">';
                outSmarphon+='</div>';
                outSmarphon += '<a class="text-center" href="#" style="padding-bottom: 20px">'+products[key]['name']+'</a>';
                outSmarphon+='</div>';
                outSmarphon += '<br>'
                outSmarphon +='<div class="d-block mx-auto text-center">'
                outSmarphon+='</div>';
                outSmarphon += '<br>'
                outSmarphon += '<p class="text-center"> Итоговая цена за товар: '
                sum +=cartComp1[key] * products[key]['price'];
                outSmarphon+=cartComp1[key] * products[key]['price'];
                outSmarphon += '</p>'
                outSmarphon += '<button data-art="'+key+'" class="add1 btn btn-info btn-sm ">Добавить в корзину </button>';
                outSmarphon+='</div>';
            }
            for (var key in cartComp2){
                outSmarphon += '<div class="product" data_price="'+products[key]['price']+'" style="border: 2px #ff8000 solid; width: 408px">'
                outSmarphon += '<button data-art="'+key+'" class="delete2 btn btn-danger">x </button>';
                outSmarphon += '<div class="img_">';
                outSmarphon+= '<div style="display: flex; justify-content: space-around; align-items: center; height: 100%">';
                outSmarphon+='<img class="img-thumbnail post-itm" src="'+products[key]['img']+'"style="height: 220px;">';
                outSmarphon+='</div>';
                outSmarphon += '<a class="text-center" href="#" style="padding-bottom: 20px">'+products[key]['name']+'</a>';
                outSmarphon+='</div>';
                outSmarphon += '<br>'
                outSmarphon +='<div class="d-block mx-auto text-center">'
                outSmarphon+='</div>';
                outSmarphon += '<br>'
                outSmarphon += '<p class="text-center"> Итоговая цена за товар: '
                sum += cartComp2[key] * products[key]['price'];
                outSmarphon+=cartComp2[key] * products[key]['price'];
                outSmarphon += '</p>'
                outSmarphon += '<button data-art="'+key+'" class="add2 btn btn-info btn-sm ">Добавить в корзину </button>';
                outSmarphon+='</div>';
            }
            for (var key in cartComp3){
                outPK += '<div class="product" data_price="'+products[key]['price']+'" style="border: 2px #ff8000 solid; width: 408px">'
                outPK += '<button data-art="'+key+'" class="delete3 btn btn-danger">x </button>';
                outPK += '<div class="img_">';
                outPK+= '<div style="display: flex; justify-content: space-around; align-items: center; height: 100%">';
                outPK+='<img class="img-thumbnail post-itm" src="'+products[key]['img']+'"style="height: 220px;">';
                outPK+='</div>';
                outPK += '<a class="text-center" href="#" style="padding-bottom: 20px">'+products[key]['name']+'</a>';
                outPK+='</div>';
                outPK += '<br>'
                outPK +='<div class="d-block mx-auto text-center">'
                outPK+='</div>';
                outPK += '<br>'
                outPK += '<p class="text-center"> Итоговая цена за товар: '
                sum += cartComp3[key] * products[key]['price'];
                outPK+=cartComp3[key] * products[key]['price'];
                outPK += '</p>'
                outPK += '<div class="form-row text-center"> <button data-art="'+key+'" class="add3 btn btn-info btn-sm ">Добавить в корзину </button> </div>';
                outPK+='</div>';
            }
            for (var key in cartComp4){
                outPK += '<div class="product" data_price="'+products[key]['price']+'" style="border: 2px #ff8000 solid; width: 408px">'
                outPK += '<button data-art="'+key+'" class="delete4 btn btn-danger">x </button>';
                outPK += '<div class="img_">';
                outPK+= '<div style="display: flex; justify-content: space-around; align-items: center; height: 100%">';
                outPK+='<img class="img-thumbnail post-itm" src="'+products[key]['img']+'"style="height: 220px;">';
                outPK+='</div>';
                outPK += '<a class="text-center" href="#" style="padding-bottom: 20px">'+products[key]['name']+'</a>';
                outPK+='</div>';
                outPK += '<br>'
                outPK +='<div class="d-block mx-auto text-center">'
                outPK +='</div>';
                outPK += '<br>'
                outPK += '<p class="text-center"> Итоговая цена за товар: '
                sum += cartComp4[key] * products[key]['price'];
                outPK+=cartComp4[key] * products[key]['price'];
                outPK += '</p>'
                outPK += '<div class="form-row text-center"> <button data-art="'+key+'" class="add4 btn btn-info btn-sm ">Добавить в корзину </button> </div>';
                outPK+='</div>';
            }
            for (var key in cartComp5){
                outPK += '<div class="product" data_price="'+products[key]['price']+'" style="border: 2px #ff8000 solid; width: 408px">'
                outPK += '<button data-art="'+key+'" class="delete5 btn btn-danger">x </button>';
                outPK += '<div class="img_">';
                outPK+= '<div style="display: flex; justify-content: space-around; align-items: center; height: 100%">';
                outPK+='<img class="img-thumbnail post-itm" src="'+products[key]['img']+'"style="height: 220px;">';
                outPK+='</div>';
                outPK += '<a class="text-center" href="#" style="padding-bottom: 20px">'+products[key]['name']+'</a>';
                outPK+='</div>';
                outPK += '<br>'
                outPK +='<div class="d-block mx-auto text-center">'
                outPK+='</div>';
                outPK += '<br>'
                outPK += '<p class="text-center"> Итоговая цена за товар: '
                sum += cartComp5[key] * products[key]['price'];
                outPK+=cartComp5[key] * products[key]['price'];
                outPK += '</p>'
                outPK += '<div class="form-row text-center"> <button data-art="'+key+'" class="add5 btn btn-info btn-sm ">Добавить в корзину </button> </div>';
                outPK+='</div>';
            }
            for (var key in cartComp6){
                outNote += '<div class="product" data_price="'+products[key]['price']+'" style="border: 2px #ff8000 solid; width: 408px">'
                outNote += '<button data-art="'+key+'" class="delete6 btn btn-danger">x </button>';
                outNote += '<div class="img_">';
                outNote+= '<div style="display: flex; justify-content: space-around; align-items: center; height: 100%">';
                outNote+='<img class="img-thumbnail post-itm" src="'+products[key]['img']+'"style="height: 220px;">';
                outNote+='</div>';
                outNote += '<a class="text-center" href="#" style="padding-bottom: 20px">'+products[key]['name']+'</a>';
                outNote+='</div>';
                outNote += '<br>'
                outNote +='<div class="d-block mx-auto text-center">'
                outNote+='</div>';
                outNote += '<br>'
                outNote += '<p class="text-center"> Итоговая цена за товар: '
                sum += cartComp6[key] * products[key]['price'];
                outNote+=cartComp6[key] * products[key]['price'];
                outNote += '</p>'
                outNote += '<div class="form-row text-center"> <button data-art="'+key+'" class="add6 btn btn-info btn-sm ">Добавить в корзину </button> </div>';
                outNote+='</div>';
            }
            for (var key in cartComp7){
                outNote += '<div class="product" data_price="'+products[key]['price']+'" style="border: 2px #ff8000 solid; width: 408px">'
                outNote += '<button data-art="'+key+'" class="delete7 btn btn-danger">x </button>';
                outNote += '<div class="img_">';
                outNote+= '<div style="display: flex; justify-content: space-around; align-items: center; height: 100%">';
                outNote+='<img class="img-thumbnail post-itm" src="'+products[key]['img']+'"style="height: 220px;">';
                outNote+='</div>';
                outNote += '<a class="text-center" href="#" style="padding-bottom: 20px">'+products[key]['name']+'</a>';
                outNote+='</div>';
                outNote += '<br>'
                outNote +='<div class="d-block mx-auto text-center">'
                outNote+='</div>';
                outNote += '<br>'
                outNote += '<p class="text-center"> Итоговая цена за товар: '
                sum += cartComp7[key] * products[key]['price'];
                outNote+=cartComp7[key] * products[key]['price'];
                outNote += '</p>'
                outNote += '<div class="form-row text-center"> <button data-art="'+key+'" class="add7 btn btn-info btn-sm ">Добавить в корзину </button> </div>';
                outNote+='</div>';
            }
            for (var key in cartComp8){
                outNote += '<div class="product" data_price="'+products[key]['price']+'" style="border: 2px #ff8000 solid; width: 408px">'
                outNote += '<button data-art="'+key+'" class="delete8 btn btn-danger">x </button>';
                outNote += '<div class="img_">';
                outNote+= '<div style="display: flex; justify-content: space-around; align-items: center; height: 100%">';
                outNote+='<img class="img-thumbnail post-itm" src="'+products[key]['img']+'"style="height: 220px;">';
                outNote+='</div>';
                outNote += '<a class="text-center" href="#" style="padding-bottom: 20px">'+products[key]['name']+'</a>';
                outNote+='</div>';
                outNote += '<br>'
                outNote +='<div class="d-block mx-auto text-center">'
                outNote+='</div>';
                outNote += '<br>'
                outNote += '<p class="text-center"> Итоговая цена за товар: '
                sum += cartComp8[key] * products[key]['price'];
                outNote+=cartComp8[key] * products[key]['price'];
                outNote += '</p>'
                outNote += '<div class="form-row text-center"> <button data-art="'+key+'" class="add8 btn btn-info btn-sm ">Добавить в корзину </button> </div>';
                outNote+='</div>';
            }
        }
        $('#cartSmarphon').html(outSmarphon);
        $('#cartPK').html(outPK);
        $('#cartNote').html(outNote);
        $('button.add').on('click', AddProduct);
        $('button.add1').on('click', AddProduct1);
        $('button.add2').on('click', AddProduct2);
        $('button.add3').on('click', AddProduct3);
        $('button.add4').on('click', AddProduct4);
        $('button.add5').on('click', AddProduct5);
        $('button.add6').on('click', AddProduct6);
        $('button.add7').on('click', AddProduct7);
        $('button.add8').on('click', AddProduct8);
        $('button.delete').on('click', deleteProduct);
        $('button.delete1').on('click', deleteProduct1);
        $('button.delete2').on('click', deleteProduct2);
        $('button.delete3').on('click', deleteProduct3);
        $('button.delete4').on('click', deleteProduct4);
        $('button.delete5').on('click', deleteProduct5);
        $('button.delete6').on('click', deleteProduct6);
        $('button.delete7').on('click', deleteProduct7);
        $('button.delete8').on('click', deleteProduct8);
    }
    function AddProduct(){
        var id = $(this).attr('data-art');
        if(cart[id] != undefined){
            cart[id] += 1;
        }else{
            cart[id] = 1;
        }
        localStorage.setItem('cart', JSON.stringify(cart));
    }
    function AddProduct1(){
        var id = $(this).attr('data-art');
        if(cart1[id] != undefined){
            cart1[id] += 1;
        }else{
            cart1[id] = 1;
        }
        localStorage.setItem('cart2', JSON.stringify(cart1));
    }
    function AddProduct2(){
        var id = $(this).attr('data-art');
        if(cart2[id] != undefined){
            cart2[id] += 1;
        }else{
            cart2[id] = 1;
        }
        localStorage.setItem('cart2', JSON.stringify(cart2));
    }
    function AddProduct3(){
        var id = $(this).attr('data-art');
        if(cart3[id] != undefined){
            cart3[id] += 1;
        }else{
            cart3[id] = 1;
        }
        localStorage.setItem('cart3', JSON.stringify(cart3));
    }
    function AddProduct4(){
        var id = $(this).attr('data-art');
        if(cart4[id] != undefined){
            cart4[id] += 1;
        }else{
            cart4[id] = 1;
        }
        localStorage.setItem('cart4', JSON.stringify(cart4));
    }
    function AddProduct5(){
        var id = $(this).attr('data-art');
        if(cart5[id] != undefined){
            cart5[id] += 1;
        }else{
            cart5[id] = 1;
        }
        localStorage.setItem('cart5', JSON.stringify(cart5));
    }
    function AddProduct6(){
        var id = $(this).attr('data-art');
        if(cart6[id] != undefined){
            cart6[id] += 1;
        }else{
            cart6[id] = 1;
        }
        localStorage.setItem('cart6', JSON.stringify(cart6));
    }
    function AddProduct7(){
        var id = $(this).attr('data-art');
        if(cart7[id] != undefined){
            cart7[id] += 1;
        }else{
            cart7[id] = 1;
        }
        localStorage.setItem('cart7', JSON.stringify(cart7));
    }
    function AddProduct8(){
        var id = $(this).attr('data-art');
        if(cart8[id] != undefined){
            cart8[id] += 1;
        }else{
            cart8[id] = 1;
        }
        localStorage.setItem('cart8', JSON.stringify(cart8));
    }
    function deleteProduct(){
        var id = $(this).attr('data-art');
        delete cartComp[id];
        localStorage.setItem('cartComp', JSON.stringify(cartComp));
        showCart();
    }

    function deleteProduct1(){
        var id = $(this).attr('data-art');
        delete cartComp1[id];
        localStorage.setItem('cartComp1', JSON.stringify(cartComp1));
        showCart();
    }


    function deleteProduct2(){
        var id = $(this).attr('data-art');
        delete cartComp2[id];
        localStorage.setItem('cartComp2', JSON.stringify(cartComp2));
        showCart();
    }


    function deleteProduct3(){
        var id = $(this).attr('data-art');
        delete cartComp3[id];
        localStorage.setItem('cartComp3', JSON.stringify(cartComp3));
        showCart();
    }



    function deleteProduct4(){
        var id = $(this).attr('data-art');
        delete cartComp4[id];
        localStorage.setItem('cartComp4', JSON.stringify(cartComp4));
        showCart();
    }


    function deleteProduct5(){
        var id = $(this).attr('data-art');
        delete cartComp5[id];
        localStorage.setItem('cartComp5', JSON.stringify(cartComp5));
        showCart();
    }


    function deleteProduct6(){
        var id = $(this).attr('data-art');
        delete cartComp6[id];
        localStorage.setItem('cartComp6', JSON.stringify(cartComp6));
        showCart();
    }


    function deleteProduct7(){
        var id = $(this).attr('data-art');
        delete cartComp7[id];
        localStorage.setItem('cartComp7', JSON.stringify(cartComp7));
        showCart();
    }


    function deleteProduct8(){
        var id = $(this).attr('data-art');
        delete cartComp8[id];
        localStorage.setItem('cartComp8', JSON.stringify(cartComp8));
        showCart();
    }
});

function checkCart(){
    if(localStorage.getItem('cartComp') != null){
        cartComp= JSON.parse(localStorage.getItem('cartComp'));
    }
    if(localStorage.getItem('cartComp1') != null){
        cartComp1 = JSON.parse(localStorage.getItem('cartComp1'));
    }
    if(localStorage.getItem('cartComp2') != null){
        cartComp2 = JSON.parse(localStorage.getItem('cartComp2'));
    }
    if(localStorage.getItem('cartComp3') != null){
        cartComp3 = JSON.parse(localStorage.getItem('cartComp3'));
    }
    if(localStorage.getItem('cartComp4') != null){
        cartComp4 = JSON.parse(localStorage.getItem('cartComp4'));
    }
    if(localStorage.getItem('cartComp5') != null){
        cartComp5 = JSON.parse(localStorage.getItem('cartComp5'));
    }
    if(localStorage.getItem('cartComp6') != null){
        cartComp6 = JSON.parse(localStorage.getItem('cartComp6'));
    }
    if(localStorage.getItem('cartComp7') != null){
        cartComp7 = JSON.parse(localStorage.getItem('cartComp7'));
    }
    if(localStorage.getItem('cartComp8') != null){
        cartComp8 = JSON.parse(localStorage.getItem('cartComp8'));
    }
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


