const form = document.getElementById('form')
const email = document.getElementById('email')
const password = document.getElementById('password')
const confirmPassword = document.getElementById('password2')


form.addEventListener('submit', (e) =>{
    e.preventDefault();

    if (email.value == ""){
        window.alert("please enter your email.");
        email.focus()
        return false;
    }

    if (password.value == ""){
        window.alert("please enter your password.");
        password.focus()
        return false;
    }


    if (password2.value == ""){
        window.alert("please confirm password.");
        password2.focus()
        return false;
    }

    return false;
})







