fetch("https://fakestoreapi.com/products")

.then(function(res){
    return res.json()
})

.then(function (data){
console.log(data);
let section = document.querySelector("section")
let articulosRopa = ''

for(let i = 0; i < data.results.length; i++) {

articulosRopa = articulosRopa + `<article class="ropa_hombre">
    <a href="./detalles.html?id=${data.results[i].id}">
     <img src=${data.results[i].image}>
     </a>
        <p>${data.results[i].name}</p>
        <p>${data.results[i].name}</p>
        </article>`
}
section.innerHTML = articulosRopa

})

.catch(function (err){
console.log(err);
})
