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
      <p>Rating: ${data.rating.rate}</p>
      <p>Count: ${data.rating.count} users</p>
      <p>${data.description}</p>
        <ul>
          <li><a href="carrito.html"><button>Agregar al Carrito</button></a></li>
        </ul>`
            })

            .catch(function (err){
                console.log(err);
                })
                