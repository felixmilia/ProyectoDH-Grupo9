let form = document.querySelector('#form')

let campoEmail = document.querySelector('#campoEmail')

let contra=document.querySelector('#contra')

form.addEventListener('submit', function(event){
    event.preventDefault()
    if(campoEmail.value == ''){
        alert('Por favor complete el campo email')
    } 
    else if (contra.value == ''){
        alert('Por favor complete el campo contraseña')
    }
    else if(contra.value.length < 6){
        alert('La contraseña debe tener al menos 6 caracteres')
    }
    else {
        alert('felicidades mandaste el formulario correctamente')
        form.submit()

        localStorage.setItem("mail", campoEmail.value)
    }
})
