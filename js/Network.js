
$('button.loadNameButton').on('click', addLK);
const inLK = document.location.href.endsWith("pages/lk.html");
if (inLK) {
    addLK();
}

function addLK(){


    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => loadJSON(data))
        .catch((e) => {
            var out = '';
            out += '<p> ⚠ Что-то пошло не так</p>';
            $('#loadName').html(out)
        });
    document.getElementById('preloader').remove();
}


function loadJSON(data){
    if (!inLK) {
        document.getElementById('preloader').remove();;
    }
    let randomFor;
    let randomTo;
    if (sessionStorage.getItem('rand') === '1') {
        randomFor = 4;
        randomTo = data.length;
        if (randomFor > data.length) {
            randomFor = data.length;
        }
        sessionStorage.removeItem('rand')
    } else {
        if (sessionStorage.getItem('rand') == null) {
            sessionStorage.setItem('rand', '1');
            randomFor = 0;
            randomTo = data.length - 5;
            if (randomTo > data.length || randomTo < 0) {
                randomTo = data.length;
            }
        }
    }
    let lk_field = document.getElementById('LK');
    let out = '';
    for (let item = randomFor; item < randomTo; item++) {
        out += '<p class="alert alert-primary">ID: ' + data[item].id + '</p>';
        out += '<p class="alert alert-primary">Username: ' + data[item].username + '</p>';
        out += '<p class="alert alert-primary">Email: : ' + data[item].email + '</p>';
        out += '<p class="alert alert-primary">Address: city: ' + data[item].address.city +
            '; street: ' + data[item].address.street + '</p>';
        out += '<p class="alert alert-primary">Website: : ' + data[item].website + '</p>';
        out += '<p class="alert alert-primary">Phone: ' + data[item].phone + '</p>';
        out += '<p class="alert alert-primary">Company: : ' + data[item].company.name + '</p>';
    }
    lk_field.innerHTML = out;
    $('#LK').html(out)
}
