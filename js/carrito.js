let listaid=[]
        if(localStorage.getItem("productos")&&localStorage.getItem("productos")!=null){
          listaid=JSON.parse(localStorage.getItem("productos"))
          console.log(listaid)
        let boton=document.querySelector("#Vaciar")

boton.addEventListener("click",function(){
    localStorage.removeItem("productos")
    alert("gracias por su compra")
    window.location.href="./index.html"
})
        let seccion =document.querySelector(".seccion_productos")
        for(let i=0;i<listaid.length;i++){
            fetch(`https://fakestoreapi.com/products/${listaid[i]}`)
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                seccion.innerHTML+=`<article class="ropa_hombre">
                <p>${data.title}</p>
                <p>Precio: $${data.price} </p>
                <img src="${data.image}" alt="remeras1">
                <p>${data.category}</p>
              </article>`
            })


            .catch(function (err){
                console.log(err);
                })
          
        }
        }
         else{
            document.querySelector("h2").innerHTML="su carrito esta vacio"
        }