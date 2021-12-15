let a = [];

if (localStorage.getItem('login') != null) {
    let user = JSON.parse(localStorage.getItem('login'));
    document.getElementById('modal_auth').remove();
    let modal_user = document.getElementById('modal_user');
    let out = '';
    out += '<li class="nav-item dropdown" id="user_info"><a class="nav-link dropdown-toggle"' +
        ' href="#" id="lkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">'
        + user.Name + " " + user.SecondName +
        '</a><ul class="dropdown-menu" aria-labelledby="lkDropdownMenuLink"><li>' +
        '<a class="dropdown-item" href="myAccount.html" id="lk">Личный кабинет</a></li>' +
        '<a class="dropdown-item" href="comparison.html" id="lk">Сравнение товаров</a></li>' +
        '<a class="dropdown-item" id="exit">Выйти</a></li>' +
        '<a class="dropdown-item" href="lk.html" id="lk">Личный кабинет(старое)</a></li></ul></li>';
    modal_user.innerHTML = out;
}

document.getElementById("exit").addEventListener('click', function (event) {
    let modal_user = document.getElementById('modal_user');
    let exit = document.getElementById('menu');
    exit.innerHTML = '<li id="exit"></li>';
    modal_user.innerHTML = '<a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Личный кабинет</a><ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink"><li><a class="dropdown-item btn btn-primary" data-bs-toggle="modal" data-bs-target="#authorization">Войти</a></li><li><a class="dropdown-item btn btn-primary" data-bs-toggle="modal" data-bs-target="#registration">Регистрация</a></li></ul>\n'
    localStorage.removeItem("login")
    window.location.reload();
});

document.getElementById("reg").addEventListener('click', function (event) {
    let role = '';
    Array.from(document.querySelectorAll("input[type='radio']")).forEach(x =>{if (x.checked) role = x.value});
    let user = {
        Name: document.getElementById('inputNameReg').value,
        SecondName: document.getElementById('inputSecondNameReg').value,
        Email: document.getElementById('inputEmailReg').value,
        Password: document.getElementById('inputPasswordReg').value,
        DateBiethday: document.getElementById('date').value,
        City: document.getElementById('city').value,
        NumberPhone: document.getElementById('number').value,
        Role: role,
    }

    if (localStorage.getItem("users") !== null) {
        a = JSON.parse(localStorage.getItem('users'));
    }
    a.push(user);
    localStorage.setItem("users", JSON.stringify(a));
});

document.getElementById("login").addEventListener('click', function (event) {
    let username = document.getElementById("inputEmailLogin").value;
    let password = document.getElementById("inputPasswordLogin").value;
    let appointments = JSON.parse(localStorage.getItem('users'));
    console.log(username);
    console.log(password);
    for (let item in appointments) {
        if (appointments[item].Email === username) {
            console.log('Логин найден');
            if (appointments[item].Password !== password) {
                console.log('неверный пароль');
            } else {
                let login = {
                    Name: appointments[item].Name,
                    SecondName: appointments[item].SecondName,
                    Email: appointments[item].Email,
                    DateBiethday: appointments[item].DateBiethday,
                    City: appointments[item].City,
                    NumberPhone: appointments[item].NumberPhone,
                    Role: appointments[item].Role,
                };
                localStorage.setItem("login", JSON.stringify(login));
                console.log('верный пароль');
                let modal_auth = document.getElementById('modal_auth');
                modal_auth.innerHTML = '';
                document.getElementById('exit').remove();
                let modal_user = document.getElementById('modal_user');
                modal_user.innerHTML = '<li class="nav-item dropdown" id="user_info"><a class="nav-link dropdown-toggle"' +
                    ' href="#" id="lkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">'
                    + appointments[item].Name +
                    '</a><ul class="dropdown-menu" aria-labelledby="lkDropdownMenuLink"><li>' +
                    '<a class="dropdown-item" href="myAccount.html" id="lk">Личный кабинет</a></li>' +
                    '<a class="dropdown-item" href="comparison.html" id="lk">Сравнение товаров</a></li>' +
                    '<a class="dropdown-item" id="exit">Выйти</a></li></ul></li>' +
                    '<a class="dropdown-item" href="lk.html" id="lk">Личный кабинет(старое)</a></li></ul></li>';
            }
            break;
        }
    }
});