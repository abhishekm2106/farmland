var marker = document.querySelector("#marker")
var item = document.querySelectorAll(".nav-item")
const h = document.querySelector(".home-tab")
const nlc = document.querySelector("#navbar-custom")
indicator(h);

function indicator(e) {
    marker.style.left = e.offsetLeft - 3 + "px";
    marker.style.width = e.offsetWidth + 6 + "px";
}

nlc.addEventListener('mouseleave', () => {
    indicator(h);
})

item.forEach(link => {
    link.addEventListener('mouseover', (e) => {
        indicator(e.target);
    })
})
