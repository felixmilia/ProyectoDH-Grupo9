
let formulario=document.querySelector("form")
formulario.addEventListener ("submit",function(e){
    e.preventDefault()
    let mail = document.querySelectorAll("input")[0].value
    let recuperar = document.querySelector('.recuperar')
    let textoR = document.querySelector(".textoR")

    let Tyc = document.querySelectorAll("input")[1].checked 
    let errores=document.querySelector("#errores")
    let listaErrores=[]
    errores.innerHTML=""

    if(mail.length==0){
listaErrores.push("Por favor escriba su email.")
    }

if(Tyc==false){
    listaErrores.push("Por favor acepte el campo Quiero recuperar mi contraseña")
}

for(let i=0; i<listaErrores.length; i++){
    errores.innerHTML +=`<p> ${listaErrores[i]} </p>`
}
if(listaErrores.length==0){
    recuperar.style.display = "flex"
    textoR.style.display = "flex"
}
})

