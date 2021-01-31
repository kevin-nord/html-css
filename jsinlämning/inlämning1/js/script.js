const email = document.querySelector('#email');
const Registrering = document.querySelector('#Registrering');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');

let users = [];

const validate = id => {
let input = document.querySelector(id);

if(input.value.length < 2) {
    input.classList.add ('is-invalid')
    input.classList.remove('is-valid')
    return false;
} else {
    input.classList.add ('is-valid')
    input.classList.remove('is-invalid')
    return true;
}

}


function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
  

const validateEmail = (email) => {
    if(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email.value)) {
    email.classList.remove('is-invalid');
    email.classList.add('is-valid');
    return true;

} else {
    email.classList.add('is-invalid');
    email.classList.remove('is-valid');
    return false;
}
}

const createUser = (firstName, lastName, email) => {

let user = {
    userID: uuidv4(),
    firstName: Registrering.firstName.value,
    lastName: Registrering.lastName.value,
    email: Registrering.email.value,
    
}
    users.push(user);
    console.log(users);
}

const newUser = () => {
    output.innerHTML = '';
    users.forEach(user => {
    	let DIV = `<div class="user">
        <h3 id="fnln">${user.firstName} ${user.lastName}</h3>
        <small id="mail">${user.email}</small>
       </div>`

        output.innerHTML += DIV
    }) 
}

newUser();

Registrering.addEventListener('submit', (e) => {
    e.preventDefault();

    if(validate('#firstName') && validate('#lastName') && validateEmail(email)){
        
        createUser(firstName.value, lastName.value, email.value)
        newUser();
        
    }else {
        console.log('Missing information, account not created.')
    }
    
  
    
    



})







