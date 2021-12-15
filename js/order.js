// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()

var cart = [];
var cart1 = [];
var cart2 = [];
var cart3 = [];
var cart4 = [];
var cart5 = [];
var cart6 = [];
var cart7 = [];
var cart8 = [];
var carts =[];
var Summ = '';

$.getJSON('../JSON/product.json', function (data){
  var products = data;
  checkCart();
  showCart();

  function showCart(){
    var out ='';
    var sum = 0;
    var count = 0;
      for (var key in cart){
        out += products[key]['name'] + " - " + cart[key] + '<br>';
        sum += cart[key] * products[key]['price'];
        count += cart[key];
        carts.push(products[key], cart[key]);
      }
      for (var key in cart1){
        out += products[key]['name'] + " - " + cart1[key] + '<br>';
        sum += cart1[key] * products[key]['price'];
        count += cart1[key];
        carts.push(products[key], cart1[key]) ;
      }
      for (var key in cart2){
        out += products[key]['name'] + " - " + cart2[key] + '<br>';
        sum += cart2[key] * products[key]['price'];
        count += cart2[key];
        carts.push(products[key], cart2[key]) ;
      }
      for (var key in cart3){
        out += products[key]['name'] + " - " + cart3[key] + '<br>';
        sum += cart3[key] * products[key]['price'];
        count += cart3[key];
        carts.push(products[key], cart3[key]) ;
      }
      for (var key in cart4){
        out += products[key]['name'] + " - " + cart4[key] + '<br>';
        sum += cart4[key] * products[key]['price'];
        count += cart4[key];
        carts.push(products[key], cart4[key]) ;
      }
      for (var key in cart5){
        out += products[key]['name'] + " - " + cart5[key] + '<br>';
        sum += cart5[key] * products[key]['price'];
        count += cart5[key];
        carts.push(products[key], cart5[key]) ;
      }
      for (var key in cart6){
        out += products[key]['name'] + " - " + cart6[key] + '<br>';
        sum += cart6[key] * products[key]['price'];
        count += cart6[key];
        carts.push(products[key], cart6[key]) ;
      }
      for (var key in cart7){
        out += products[key]['name'] + " - " + cart7[key] + '<br>';
        sum += cart7[key] * products[key]['price'];
        count += cart7[key];
        carts.push(products[key], cart7[key]) ;
      }
      for (var key in cart8){
        out += products[key]['name'] + " - " + cart8[key] + '<br>';
        sum += cart8[key] * products[key]['price'];
        count += cart8[key];
        carts.push(products[key], cart8[key]) ;
      }
      out +='<br>';
      out +='<h5 class="text-center">Итоговая сумма: '+sum+'</h5>';
      var outCount ='';
      outCount = '<span class="badge bg-primary rounded-pill" id="countCart">'+count+'</span>';
      Summ = sum;
      $('#cart').html(out);
    $('#countCart').html(outCount);
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

var isPayment = new Boolean(false);
var isDelivery = new Boolean(false);

document.getElementById("delivery").addEventListener('click', function (event) {
    let out ='';
    out += '<div class="col-12">\n' +
        '              <label for="address" class="form-label">Адрес</label>\n' +
        '              <input type="text" class="form-control" id="address" placeholder="улица Пушкина дом Калотушкина" required>\n' +
        '              <div class="invalid-feedback">\n' +
        '                Please enter your shipping address.\n' +
        '              </div>\n' +
        '            </div>\n' +
        '\n' +
        '            <div class="col-md-5">\n' +
        '              <label for="country" class="form-label">Страна</label>\n' +
        '              <select class="form-select" id="country" required>\n' +
        '                <option value="">Выберите</option>\n' +
        '                <option>РОССИЙСКАЯ ФЕДЕРАЦИЯ(УРА! УРА! УРА!)</option>\n' +
        '              </select>\n' +
        '              <div class="invalid-feedback">\n' +
        '                Please select a valid country.\n' +
        '              </div>\n' +
        '            </div>\n' +
        '\n' +
        '            <div class="col-md-4">\n' +
        '              <label for="state" class="form-label">Город</label>\n' +
        '              <select class="form-select" id="state" required>\n' +
        '                <option value="">Выберите</option>\n' +
        '                <option>Санкт-Петербург</option>\n' +
        '                <option>москва</option>\n' +
        '                <option>КРЫЖОПОЛЬ</option>\n' +
        '              </select>\n' +
        '              <div class="invalid-feedback">\n' +
        '                Please provide a valid state.\n' +
        '              </div>\n' +
        '            </div>';
    $('#addDelivery').html(out);
    isDelivery = true;
});

  document.getElementById("selfdelivery").addEventListener('click', function (event) {
  let out ='';
  out +=
      '            <div class="col-md-4">\n' +
      '              <label for="state" class="form-label">Магазины</label>\n' +
      '              <select class="form-select" id="shop" required>\n' +
      '                <option value="">Выберите</option>\n' +
      '                <option>г Санкт-Петербург, Вяземский пер., 5/7</option>\n' +
      '                <option>г Москва, Московский Кремль</option>\n' +
      '                <option>г КРЫЖОПОЛЬ улица Ленина дом 6</option>\n' +
      '              </select>\n' +
      '              <div class="invalid-feedback">\n' +
      '                Please provide a valid state.\n' +
      '              </div>\n' +
      '            </div>';
  $('#addDelivery').html(out);
  isDelivery = false;
});

document.getElementById("credit").addEventListener('click', function (event) {
  let out ='';
  out += ' <div class="row gy-3">\n' +
      '\n' +
      '            <div class="col-md-6">\n' +
      '              <label for="cc-number" class="form-label">Номер карты</label>\n' +
      '              <input type="text" class="form-control" id="cc-number" placeholder="" required>\n' +
      '              <div class="invalid-feedback">\n' +
      '                Credit card number is required\n' +
      '              </div>\n' +
      '            </div>\n' +
      '\n' +
      '            <div class="col-md-3">\n' +
      '              <label for="cc-expiration" class="form-label">Срок действия</label>\n' +
      '              <input type="text" class="form-control" id="cc-expiration" placeholder="" required>\n' +
      '              <div class="invalid-feedback">\n' +
      '                Expiration date required\n' +
      '              </div>\n' +
      '            </div>\n' +
      '\n' +
      '            <div class="col-md-3">\n' +
      '              <label for="cc-cvv" class="form-label">CVV</label>\n' +
      '              <input type="text" class="form-control" id="cc-cvv" placeholder="" required>\n' +
      '              <div class="invalid-feedback">\n' +
      '                Security code required\n' +
      '              </div>\n' +
      '            </div>\n' +
      '          </div>';

  $('#chekout').html(out);
  isPayment = true;
});

document.getElementById("debit").addEventListener('click', function (event) {
  let out ='';
  $('#chekout').html(out);
  isPayment = false;
});


document.getElementById("orderss").addEventListener('click', function (event) {

  var a = new Date();
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
  let orders =[]
  var del ='';
  if(isDelivery == true){
    del += document.getElementById('country').value + " ";
    del += document.getElementById('state').value + " ";
    del += document.getElementById('address').value;
  } else{
    del = document.getElementById('shop').value;
  }
  if(localStorage.getItem('order') != null){
    orders = JSON.parse(localStorage.getItem('order'));
  }
  let login = JSON.parse(localStorage.getItem('login'));
  let order = {
    Name: document.getElementById('firstName').value,
    SecondName: document.getElementById('lastName').value,
    Email: document.getElementById('email').value,
    Number: document.getElementById('number').value,
    Delivery:  del,
    Payment: isPayment,
    Carts: carts,
    Login: login.Email,
    IsDelivery: isDelivery,
    Sum: Summ,
    Time: time,
  }
  orders.push(order);
  localStorage.setItem("order", JSON.stringify(orders));
});