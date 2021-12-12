if (localStorage.getItem('login') != null) {
    let user = JSON.parse(localStorage.getItem('login'));
    let outName = '';
    outName += user.Name + " " + user.SecondName;
    document.getElementById('Name').innerHTML = outName;
    let outEmail = '';
    outEmail += user.Email;
    document.getElementById('email').innerHTML = outEmail;
    let outPhone = '';
    outPhone += user.NumberPhone;
    document.getElementById('phone').innerHTML = outPhone;
    let outCity = '';
    outCity += user.City;
    document.getElementById('city1').innerHTML = outCity;
    let outdate = '';
    outdate += user.DateBiethday;
    document.getElementById('dateBirhday').innerHTML = outdate;
}