var cart = {};
var cartComp2 ={};

$('document').ready(function (){
    loadProduct();
});

function loadProduct(){
    $.getJSON('../JSON/pushphone.json', function (data){
        var out = '';
        for (var key in data){
            out += '<div class="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 text-center rounded float-left img_ js-cart" style="border: 2px #ff8000 solid; width: 408px">';
            out+= '<div style="display: flex; justify-content: space-around; align-items: center; height: 100%">';
            out+= '<img class="img-thumbnail post-itm" src="'+data[key]['img']+'"style="height: 220px;">';
            out+='</div>';
            out += '<a className="text-center" href="#" style="padding-bottom: 20px">'+data[key]['name']+'</a>';
            out += '<a> Цена: '+data[key]['price']+'</a>';
            out += '<button data-art="'+key+'" class="add btn btn-info btn-sm ">Добавить в корзину </button> <br>';
            out += '<button data-art="'+key+'" class="addComp btn btn-info btn-sm ">Добавить для сравнения </button>';
            out+='</div>';
        }
        $('#product').html(out);
        $('button.add').on('click', addToCart);
        $('button.addComp').on('click', addToComp);
    });
}

function addToCart(){
    var id = $(this).attr('data-art');
    if(cart[id] != undefined){
        cart[id] += 1;
    }else{
        cart[id] = 1;
    }
    localStorage.setItem('cart2', JSON.stringify(cart));
}

function addToComp(){
    var id = $(this).attr('data-art');
    if(cartComp2[id] != undefined){
        cartComp2[id] += 1;
    }else{
        cartComp2[id] = 1;
    }
    localStorage.setItem('cartComp2', JSON.stringify(cartComp2));
}