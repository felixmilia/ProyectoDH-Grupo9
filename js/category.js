let queryString = location.search 
let queryStringObj = new URLSearchParams(queryString)
let id = queryStringObj.get("id")
console.log(id);
let producto = document.querySelector(".articulos")
console.log(producto);
let title = document.querySelector ("#title")
title.innerHTML = `Mostrando los productos para la categoria: "${id}"`


fetch(`https://fakestoreapi.com/products/category/${id}`)
.then (function(response){
    return response.json()
})

.then (function(data){
    for (let i=0; i<data.length; i++){
        let prod = data[i];
        producto.innerHTML +=`
        <article class="ropa_hombre">
            <p>${prod.title}</p>
            <p>$${prod.price}</p>
            <img src=${prod.image}>
            <p>${prod.description}</p>
            <p>Rating: ${prod.rating.rate}/5</p>
              <ul>
                <li><a href="producto.html?id=${prod.id}"><button>Ver mas</button></a></li>
              </ul>
          </article>`
}
})

.catch(function(err){
console.log(err);
})
