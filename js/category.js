let queryString = location.search 
let queryStringObj = new URLSearchParams(queryString)
let id = queryStringObj.get("id")
console.log(id);
let contenido = document.querySelector(".detalle")


fetch(`https://fakestoreapi.com/products/${id}`)
.then (function(response){
    return response.json()
})

.then (function(data){
    for (let i=0; i<data.length; i++){
        let prod = data[i];
        producto[0].innerHTML +=`
        <article class="ropa_hombre">
            <p>${prod.title}</p>
            <p>$${prod.price}</p>
            <img src=${prod.image}>
            <p>${prod.description}</p>
            <p>${prod.rating.rate}</p>
              <ul>
                <li><a href="detalle.html?id=${prod.id}"><button>Ver mas</button></a></li>
              </ul>
          </article>`
}
})

.catch(function(err){
console.log(err);
})
