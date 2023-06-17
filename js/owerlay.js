const owerlayFunc = () => {
    //открытие и закрытие корзины
const korzina = document.querySelector(".header__right--item")
const drawer = document.querySelector(".drawer")
const close = document.querySelector(".drawer__right--clos")
korzina.addEventListener("click", () => {
    drawer.style.display = "block"
})

close.addEventListener("click", () => {
    drawer.style.display = "none"
})
//
}

export default owerlayFunc;