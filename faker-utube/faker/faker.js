let btnGen = document.querySelector('button');

btnGen.addEventListener('click', () => {
    let data = faker.helpers.createCard();

    console.log(data)    
    let {name, email, phone, website, address:{zipcode}} = data;

    document.querySelector('#name').value = name;
    document.querySelector('#email').value = email;
    document.querySelector('#phone').value = phone;
    document.querySelector('#website').value = website;
    document.querySelector('#zipcode').value = zipcode;
});