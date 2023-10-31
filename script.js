const form = document.querySelector('#form')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const cpassword = document.querySelector('#cpassword')

form.addEventListener('submit', (e) => {
    
    if(!validateInputs()){
        e.preventDefault();
    }
})

function validateInputs() {
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();
    let success=true;

    if (emailVal === '') {
        setError(email, 'email is required')
    }
    else if (!validateEmail(emailVal)) {
        success=false;
        setError(email, 'Please enter a valid mail')
    }
    else {
        setSuccess(email)
    }
    //password
    if (passwordVal === '') {
        success=false;
        setError(password, 'password in required')
    }
    else if (passwordVal.length < 8) {
        success=false;
        setError(password, 'password must be atleast 8 characters')
    }
    else {
        setSuccess(password)
    }
    //cpassword 
    if (cpasswordVal === '') {
        success=false;
        setError(cpassword, 'conform password is required')
    }
    else if (cpasswordVal !== password) {
        setError(cpassword, 'password does not match')
    } else {
        setSuccess(cpassword)
    }
    return success;
}

function setError(element, message) {
    const inputBox = element.parentElement;
    const errorElement = inputBox.querySelector('.error')

    errorElement.innerText = message;
    inputBox.classList.add('error')
    inputBox.classList.remove('success')
}

function setSuccess(element) {
    const inputBox = element.parentElement;
    const errorElement = inputBox.querySelector('.error')

    errorElement.innerText = '';
    inputBox.classList.add('success')
    inputBox.classList.remove('error')
}

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };