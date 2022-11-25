
// ---------------------------------------------

//mobile nav bar
const hamburger=document.querySelector(".hamburger")
const navlinks=document.querySelector(".nav-links-custom") 
const navItems=document.querySelectorAll(".nav-item")

hamburger.addEventListener("click",()=>{
    navlinks.classList.toggle("open")
    hamburger.classList.toggle("fade")
    navItems.forEach(item=>{
        item.classList.toggle("fade")
    })
})