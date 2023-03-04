let leftIcon = document.querySelector(".highlights .left");
let rightIcon = document.querySelector(".highlights .right");
let content = document.querySelector(".contents");


rightIcon.addEventListener("click", function () {
    let item = document.querySelector(".contents .item");
    if (item.classList.contains("stop")) {
        return;
    }
    else {
        if (item.classList.contains("opacity2")) {
            rightIcon.style.opacity = "0.5";
            item.classList.remove("item");
            item.classList.add("d-none");
        }
        else {
            leftIcon.style.opacity = "1";
            item.classList.remove("item");
            item.classList.add("d-none");
        }
    }
})

leftIcon.addEventListener("click", function () {
    let item = document.querySelector(".contents .item");
    if (item.previousElementSibling == null) {
        return;
    }
    else {
        if (item.classList.contains("opacity1")) {
            leftIcon.style.opacity = "0.5";
            item.previousElementSibling.classList.remove("d-none");
            item.previousElementSibling.classList.add("item");
        }
        else {
            rightIcon.style.opacity = "1";
            item.previousElementSibling.classList.remove("d-none");
            item.previousElementSibling.classList.add("item");
        }
    }



})