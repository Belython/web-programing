async function createProduct() {
  let product = {
    title: document.getElementById('inputTitleReg').value,
    price: document.getElementById('inputPriceReg').value,
    count: document.getElementById('inputCountReg').value,
  }
  const data = { title: product.title , price: product.price, count: product.count};
  fetch('/product/create', {
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