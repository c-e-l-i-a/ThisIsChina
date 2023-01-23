let hamburger = document.querySelector('.hamburger_menu')

hamburger.onclick = function() {
    console.log("click")
    let navBar = document.querySelector('.nav_bar')
    navBar.classList.toggle('active')
}