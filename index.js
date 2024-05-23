let button = document.querySelectorAll(".btn")
let body = document.querySelector("body")

button.forEach(function (btn) {
    btn.addEventListener("click", function (color) {
        if (color.target.id === "btn1") {
            body.style.backgroundColor="#008DDA"
        }
        if (color.target.id === "btn2") {
            body.style.backgroundColor="#41C9E2"
        }
        if (color.target.id === "btn3") {
            body.style.backgroundColor="#ACE2E1"
        }
        if (color.target.id === "btn4") {
            body.style.backgroundColor="#EEF7FF"
        }
        if (color.target.id === "btn5") {
            body.style.backgroundColor="#F7EEDD"
        }
    })
})