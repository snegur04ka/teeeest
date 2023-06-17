import { cart } from "./index.js"
const drawerContent = document.querySelector(".drawer__content")

const renderCartItems = () => {
    console.log(cart);
    drawerContent.innerHTML = ""
    cart.forEach(item => {
        drawerContent.innerHTML += `
            <div class="drawer__item" id="${item.id}">
                <div class="drawer__left">
                    <img src="${item.top}" alt="./assets/img/sneakers-2.svg" class="drawer__sneakers">
                </div>
                <div class="drawer__center">
                    <h1 class="drawer__center--top">${item.center}</h1>
                    <h1 class="drawer__center--bottom">${item.bottomm}руб.</h1>
                </div>
                <div class="drawer__right">
                    <img src="./assets/img/close.svg" alt="./assets/img/close.svg" class="drawer__right--close">
                </div>
            </div>
        `;
    });
}
export default renderCartItems