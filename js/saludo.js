let bienvenidaMail = localStorage.getItem("mail")

let saludo = document.querySelector('#saludar')

let logout = document.querySelector('.logout')

let register = document.querySelector(".register")

let login = document.querySelector(".login")

if (bienvenidaMail != null) {
    saludo.innerHTML = `<p>Bienvenido: ${bienvenidaMail}</p>`
    register.style.display = "none"
    login.style.display = "none"
    logout.style.display = "flex"
}