const submitForm = document.querySelector('#submit');
const animal = document.querySelector("#animal-name");
const product = document.querySelector("#product-name");
const sellerName = document.querySelector("#seller-name");
const sellerAddress = document.querySelector("#address");
const description = document.querySelector("#description");


submitForm.addEventListener('click', (e) => {
    e.preventDefault()

    const report = {
        animal: animal.value,
        product: product.value,
        sellerName: sellerName.value,
        sellerAddress: sellerAddress.value,
        description: description.value
    }

    fetch('/reports', {
        method: 'post',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(report)
      }).then(res=>res.json())
        .then(res => console.log(res));

});

