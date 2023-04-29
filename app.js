let password = document.querySelector('#pas')
let email = document.querySelector('#mail')
let login = document.querySelector('#small')


function permit(){
  if(email.value.length === 0 || password.value.length === 0){
    alert('All fields must be filled');
    return
  }
  if(password.value.length < 6){
    alert('password must be greater than SIX letters');
    return
  }
  alert('Registration Completed');
}
  
login.addEventListener('click',permit)
