const form = document.getElementById('form');
const fullname = document.getElementById('fullname');
const phonenumber = document.getElementById('phoneNumber');

form.addEventListener('submit', e => {
    e.preventDefualt();
});