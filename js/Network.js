
$('button.loadNameButton').on('click', addLK);
const inLK = document.location.href.endsWith("pages/lk.html");
if (inLK) {
    addLK();
}

function addLK(){
    if (!inLK) {
        document.getElementById('loadNameButton').remove();
        document.getElementById('reg').remove();
        var out = '';
        out += '<li class="nav-item">';
        out += '<a href="pages/Buy.html" class="nav-link" data-id-nav="Buy">Корзина</a>';
        out += '</li>';
        out += '<li class="nav-item">';
        out += '<a href="pages/delivery.html" class="nav-link" data-id-nav="Delivery">Доставка</a>';
        out += '</li>';
        out += '<li class="nav-item">';
        out += '<a href="pages/Shops.html" class="nav-link" data-id-nav="Shops">Магазины</a>';
        out += '</li>';
        out += '<li class="nav-item">';
        out += '<a href="pages/Form.html" class="nav-link">Комментарии</a>';
        out += '</li>';
        out += '<li class="nav-item">';
        out += '<a href="pages/lk.html" class="nav-link">Личный кабинет</a>';
        out += '</li>';
        $('#addLK').html(out);
    }

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => loadJSON(data))
        .catch((e) => {
            var out = '';
            out += '<p> ⚠ Что-то пошло не так</p>';
            $('#loadName').html(out)
        });
}


function loadJSON(data){
    if (!inLK) {
        let preloader = document.getElementById('preloader');
        preloader.classList.add('hide-preloader');
    }
    var out = '';
    //console.log(count);
    data.forEach(function(obj){
            if( obj.id > 5) {
                out += '<p class="alert alert-primary">Имя: ' + obj.name + '</p>';
                out += '<p class="alert alert-primary">Email: : ' + obj.email + '</p>';
                out += '<p class="alert alert-primary">ID: ' + obj.id + '</p>';
            } else {
                out += '<p class="alert alert-primary">Имя: ' + obj.name + '</p>';
                out += '<p class="alert alert-primary">Email: : ' + obj.email + '</p>';
                out += '<p class="alert alert-primary">ID: ' + obj.id + '</p>';
            }
    });
    $('#lk').html(out)
}