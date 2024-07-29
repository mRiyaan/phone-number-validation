const form = document.getElementById('.form');
const inputControl = document.querySelector('.input-control');
const nameError = document.querySelector('.nameError');
const phoneError = document.querySelector('.phoneError');

document.getElementById('form').addEventListener('submit',function (e){
   e.preventDefault();
   validateForm();

});



function validateFullName(){
    const name=document.getElementById('fullName').value;

    if(name.value ===''){
        nameError.innerHTML ='Name is required';
        
    }
  
    else{
        form.innerHTML =(action="submit.html")
    }  

}

function validatePhoneNumber(){
    const phone=document.getElementById('phonenumber').value;

    if (phone.value ===''){
        phoneError.innerHTML='Phone Number is required';
        
    }
    else if(phone.length !==10){
        phoneError.innerHTML='Enter valid 10 digit Phone Number';
        
    }
    else if(phone.match(/^\d{10}$/)){
        phoneError.innerHTML='Enter valid 10 digit Phone Number';

    }
    else {
        form.innerHTML =(action="submit.html")
    }

}

function validateForm(){
    if(!validateFullName() || !validatePhoneNumber()){
        return false;
    }
}
