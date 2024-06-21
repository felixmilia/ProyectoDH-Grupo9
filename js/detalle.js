let queryString = location.search 
let queryStringObj = new URLSearchParams(queryString)
let id = queryStringObj.get("id")
console.log(id);
let contenido = document.querySelector(".detalle")
console.log(contenido);

fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                contenido.innerHTML = `      <h1>${data.title}</h1>
    <h2>Category: ${data.category}</h2>
      <h3>Price: $${data.price}</h3>
      <img class="imgDetalle" src=${data.image}>
      <p>Rating: ${data.rating.rate}/5</p>
      <p>Count: ${data.rating.count} users</p>
      <p>${data.description}</p>
        `
        let button=document.querySelector("#botonCarrito")
        
        button.addEventListener("click",function(){
          let listaid=[]
        if(localStorage.getItem("productos")&&localStorage.getItem("productos")!=null){
          listaid=JSON.parse(localStorage.getItem("productos"))
        }
         listaid.push(id) 
         localStorage.setItem("productos",JSON.stringify(listaid))
         console.log(localStorage)
        })
            })

            .catch(function (err){
                console.log(err);
                })
          
                