

const slidingData = document.querySelector(".sliding-data")
const slidingCard = document.querySelectorAll(".name-card")

const nextBtn = document.querySelector(".next")
const prevBtn = document.querySelector(".prev")

let counter = 0
const size = slidingCard[0].clientWidth

prevBtn.addEventListener("click", () => {
    slidingData.style.transition = "transform .4s ease-in-out"

    console.log(counter)
    if (counter < 0) {
        counter += 3
        slidingData.style.transform = 'translateX(' + (counter * size) + 'px)'
    }

})

nextBtn.addEventListener("click", () => {
    slidingData.style.transition = "transform .4s ease-in-out"

    console.log(counter)
    if (counter > -4) {
        counter -= 3
        slidingData.style.transform = 'translateX(' + (counter * size) + 'px)'
    }

})

//-------------------------------------------------------------
