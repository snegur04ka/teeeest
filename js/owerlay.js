const owerlayFunc = () => {
    //открытие и закрытие корзины
const korzina = document.querySelector(".header__right--item")
const drawer = document.querySelector(".drawer")
const close = document.querySelector(".drawer__right--clos")
const body = document.querySelector("body")
korzina.addEventListener("click", () => {
    drawer.style.display = "block"
    body.style = "overflow: hidden;"
})

close.addEventListener("click", () => {
    drawer.style.display = "none"
    body.style = "overflow: auto;"
})
//
}

export default owerlayFunc;