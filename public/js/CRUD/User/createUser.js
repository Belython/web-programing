async function createUser() {
  let user = {
    Name: document.getElementById('inputNameReg').value,
    SecondName: document.getElementById('inputSecondNameReg').value,
    Email: document.getElementById('inputEmailReg').value,
    Password: document.getElementById('inputPasswordReg').value,
    DateBiethday: document.getElementById('date').value,
    City: document.getElementById('city').value,
    NumberPhone: document.getElementById('number').value,
  }
  const data = { name: user.Name , secondName: user.SecondName, email: user.Email,password: user.Password,
  numberPhone: user.NumberPhone, dateBirthday: user.DateBiethday, city: user.City};
  fetch('/user/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => console.log('Result:', data))
    .catch((error) => console.error('Error:', error));
}
