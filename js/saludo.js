let bienvenidaMail = localStorage.getItem("mail")

console.log(bienvenidaMail);

let saludo = document.querySelector('#saludar')

let logout = document.querySelector('logout')

if (bienvenidaMail != null) {
    saludo.innerHTML = `<p>Bienvenido: ${bienvenidaMail}</p>`
}