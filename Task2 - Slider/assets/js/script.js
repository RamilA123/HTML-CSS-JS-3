let leftArrowIcon = document.querySelector(".slider .left");
let rightArrowIcon = document.querySelector(".slider .right");
let minusIcons = document.querySelectorAll(".slider .icon i")
let images = document.querySelectorAll(".slider .image img");

function rightImgIcoCon(image) {
    minusIcons.forEach(minus => {
        if (image.getAttribute("data-id") == minus.getAttribute("data-id")) {
            if (minus.nextElementSibling == null) {
                minus.classList.remove("active-icon");
                minus.parentNode.firstElementChild.classList.add("active-icon");
            }
            else {
                minus.classList.remove("active-icon");
                minus.nextElementSibling.classList.add("active-icon");
            }
        }
    });
}

function leftImgIcoCon(image) {
    minusIcons.forEach(minus => {
        if (image.getAttribute("data-id") == minus.getAttribute("data-id")) {
            if (minus.previousElementSibling == null) {
                minus.classList.remove("active-icon");
                minus.parentNode.lastElementChild.classList.add("active-icon");
            }
            else {
                minus.classList.remove("active-icon");
                minus.previousElementSibling.classList.add("active-icon");
            }
        }
    });
}


minusIcons.forEach(minus => {
    minus.addEventListener("click", function () {
        let icon = document.querySelector(".active-icon");
        icon.classList.remove("active-icon");
        this.classList.add("active-icon");

        images.forEach(image => {
            if (this.getAttribute("data-id") == image.getAttribute("data-id")) {
                image.classList.add("active-image");
            }
            else {
                image.classList.remove("active-image");
            }
        })

    })
})


rightArrowIcon.addEventListener("click", function () {
    let image = document.querySelector(".active-image");
    if (image.nextElementSibling == null) {
        image.classList.remove("active-image");
        image.parentNode.firstElementChild.classList.add("active-image");
        rightImgIcoCon(image);
    }
    else {
        image.classList.remove("active-image");
        image.nextElementSibling.classList.add("active-image");
        rightImgIcoCon(image);
    }
})


leftArrowIcon.addEventListener("click", function () {
    let image = document.querySelector(".active-image");
    if (image.previousElementSibling == null) {
        image.classList.remove("active-image");
        image.parentNode.lastElementChild.classList.add("active-image");
        leftImgIcoCon(image);
    }
    else {
        image.classList.remove("active-image");
        image.previousElementSibling.classList.add("active-image");
        leftImgIcoCon(image);
    }
})


// rightArrowIcon.addEventListener("mouseover", function () {
//     let image = document.querySelector(".active-image");
//     if (image.nextElementSibling == null) {
//         image.classList.remove("active-image");
//         image.parentNode.firstElementChild.classList.add("active-image");
//     }
//     else {
//         image.classList.remove("active-image");
//         image.nextElementSibling.classList.add("active-image");
//     }
// })


// leftArrowIcon.addEventListener("mouseover", function () {
//     let image = document.querySelector(".active-image");
//     if (image.previousElementSibling == null) {
//         image.classList.remove("active-image");
//         image.parentNode.lastElementChild.classList.add("active-image");
//     }
//     else {
//         image.classList.remove("active-image");
//         image.previousElementSibling.classList.add("active-image");
//     }
// })


// setInterval(function(){
//     let image = document.querySelector(".active-image");
//     if (image.nextElementSibling == null) {
//         image.classList.remove("active-image");
//         image.parentNode.firstElementChild.classList.add("active-image");
//     }
//     else {
//         image.classList.remove("active-image");
//         image.nextElementSibling.classList.add("active-image");
//     }
// },1000);

