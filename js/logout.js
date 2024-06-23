logout.addEventListener('click', function() {
    localStorage.clear() 
    register.style.display = "flex"
    login.style.display = "flex"
    logout.style.display = "none"
    bienvenidaMail.style.display = "none"
})
