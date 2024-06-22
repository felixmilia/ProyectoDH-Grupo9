let bienvenidaMail = localStorage.getItem("mail")

console.log(bienvenidaMail);

let saludo = document.querySelector('#saludar')

let logout7 = document.querySelector('#logout')

if (bienvenidaMail != null) {
    saludo.innerHTML = `Bienvenido: ${bienvenidaMail}`
}