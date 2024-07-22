let form = document.getElementById('form');
let fullname = document.getElementById('fullname');
let phonenumber = document.getElementById('phoneNumber');

form.addEventListener('submit', e=> {
    e.preventDefualt();
});