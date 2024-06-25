
let formulario=document.querySelector("form")
formulario.addEventListener ("submit",function(e){
    e.preventDefault()
    let mail = document.querySelectorAll("input")[0].value
    let pass = document.querySelectorAll("input")[1].value
    let pass2 = document.querySelectorAll("input")[2].value
    let Tyc = document.querySelectorAll("input")[3].checked 
    let errores=document.querySelector("#errores")
    let listaErrores=[]
    errores.innerHTML=""
    console.log (pass) 
    console.log(pass2)
    if(mail.length==0){
listaErrores.push("Por favor complete el campo email.")
    }
    if(pass.length==0){
        listaErrores.push("Por favor complete el campo contraseña.")
  }
if(pass.length<6) {
listaErrores.push("Debe ingresar al menos 6 caracteres en la contraseña")
}
if(pass!=pass2){
    listaErrores.push("Las contraseñas no coinciden")
}
if(Tyc==false){
    listaErrores.push("Debe aceptar los terminos y condiciones")
}

for(let i=0; i<listaErrores.length; i++){
    errores.innerHTML +=`<p> ${listaErrores[i]} </p>`
}
if(listaErrores.length==0){ 
    console.log("Hago el submit")
    this.submit()
}
})

