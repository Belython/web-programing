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
    let outrole = '';
    outrole += user.Role;
    document.getElementById('role').innerHTML = outrole;
    if (user.Role == 'delivery') {
        document.getElementById('shopkipper').innerHTML = '';
        document.getElementById('user').innerHTML = '';
    }
    if (user.Role == 'shopkipper') {
        document.getElementById('delivery').innerHTML = '';
        document.getElementById('user').innerHTML = '';}

    if (user.Role == 'user') {
        document.getElementById('shopkipper').innerHTML = '';
        document.getElementById('delivery').innerHTML = '';}
}