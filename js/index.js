let producto= document.querySelectorAll(".articulos")
console.log(producto);

fetch('https://fakestoreapi.com/products/category/men\'s clothing')
    .then (function(response){
        return response.json()
    })

    .then (function(data){
        console.log(data);
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

    fetch('https://fakestoreapi.com/products/category/women\'s clothing')
    .then (function(response){
        return response.json()
    })

    .then (function(data){
        console.log(data);
        for (let i=0; i<data.length; i++){
            let prod = data[i];
            producto[1].innerHTML +=`
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

    fetch('https://fakestoreapi.com/products/category/electronics')
    .then (function(response){
        return response.json()
    })

    .then (function(data){
        console.log(data);
        for (let i=0; i<data.length; i++){
            let prod = data[i];
            producto[2].innerHTML +=`
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

.catch(function (err){
console.log(err);
})
