import owerlayFunc from "./owerlay.js"

const crossContent = document.querySelector(".cross__content")

export let cart = [
    // {
    //     id: 0,
    //     top: "./assets/img/sneakers-10.svg",
    //     center: "Мужские Кроссовки Nike Blazer Mid Suede",
    //     bottomm: 8499
    // },
    // {
    //     id: 1,
    //     top: "./assets/img/sneakers-2.svg",
    //     center: "Мужские Кроссовки Nike Air Max 270",
    //     bottomm: 12999,
    // }
]
import renderCartItems from "./renderCartItems.js"

const response = async () => {
    const result = await fetch("https://6455ed7b5f9a4f236136e757.mockapi.io/goods")
    const data = await result.json()

    data.forEach(item => {
        crossContent.innerHTML += `
            <div id="${item.id}" class="cross__item">
                <div class="cross__like--mother">
                    <img src="./assets/img/like.svg" alt="./assets/img/like.svg" class="cross__like">
                    <img src="./assets/img/unlike.svg" alt="./assets/img/unlike.svg" class="cross__unlike active">
                </div>

                <div class="cross__topp">
                    <img src="${item.top}" alt="./assets/img/sneakers-1" class="cross__sneakers">
                </div>
                <div class="cross__centerr">
                    <h1 class="cross__center">${item.center}</h1>
                </div>
                <div class="cross__bottomm">
                    <div class="cross__bottom--text">
                        <h1 class="cross__bottom--one">Цена:</h1>
                        <h1 class="cross__bottom">${item.bottomm} руб.</h1>
                    </div>
                    <div class="cross__bottom--plus">
                        <img src="./assets/img/plus.svg" alt="./assets/img/plus.svg" class="cross__plus">
                        <img src="./assets/img/unplus.svg" alt="./assets/img/unplus.svg" class="cross__unplus active">
                    </div>
                </div>
            </div>
        `;
    });
    


    const like = document.querySelectorAll(".cross__like--mother")

    like.forEach(item => {
        item.firstElementChild.addEventListener("click", () => {
            item.firstElementChild.classList.toggle("active")
            item.lastElementChild.classList.toggle("active")
        })
    })

    like.forEach(item => {
        item.lastElementChild.addEventListener("click", () => {
            item.firstElementChild.classList.toggle("active")
            item.lastElementChild.classList.toggle("active")
        })
    })

    const plus = document.querySelectorAll(".cross__bottom--plus")
    plus.forEach(item => {
        item.firstElementChild.addEventListener("click", () => {
            item.firstElementChild.classList.toggle("active")
            item.lastElementChild.classList.toggle("active")
        })
    })

    plus.forEach(item => {
        item.lastElementChild.addEventListener("click", () => {
            item.firstElementChild.classList.toggle("active")
            item.lastElementChild.classList.toggle("active")
        })
    })


    

    // const pluss = document.querySelectorAll(".cross__plus");

    // pluss.forEach((item) => {
    //     item.addEventListener("click", () => {
    //         const itemId = item.parentElement.parentElement.parentElement.id;
    //         const selectedItem = data.find((item) => +item.id === +itemId);

    //         cart.push(selectedItem);
    //         console.log(cart);

    //         const drawerKorzina = document.querySelector(".drawer__content");
    //         const cartItem = document.createElement("div");
    //         cartItem.classList.add("drawer__item");
    //         cartItem.id = selectedItem.id;
    //         cartItem.innerHTML = `
            
    //         <div class="drawer__left">
    //             <img src="${selectedItem.top}" alt="./assets/img/sneakers-2.svg" class="drawer__sneakers">
    //         </div>
    //         <div class="drawer__center">
    //             <h1 class="drawer__center--top">${selectedItem.center}</h1>
    //             <h1 class="drawer__center--bottom">${selectedItem.bottomm} руб.</h1>
    //         </div>
    //         <div class="drawer__right">
    //             <img src="./assets/img/close.svg" alt="./assets/img/close.svg" class="drawer__right--close">
    //         </div>
    //         `;
    
    // const draw = document.querySelector(".drawer__korzina")
    // const closeBtn = cartItem.querySelector(".drawer__right--close");
    //         closeBtn.addEventListener("click", () => {
    //             const removedItemId = cartItem.id;
    //             cart = cart.filter((item) => item.id !== removedItemId);
    //             draw.removeChild(cartItem);
    //             console.log(cart);
    //         });

    //         drawerKorzina.appendChild(cartItem);
    //     });
    // });

    // const crossUnpluss = document.querySelectorAll(".cross__unplus");
    // crossUnpluss.forEach((cartDelete) => {
    //   cartDelete.addEventListener("click", () => {
    //     const cartItem = cartDelete.closest(".cross__item");
    //     const itemId = parseInt(cartItem.id);
    //     cart = cart.filter((item) => item.id !== itemId);
    //     console.log(cart);
    //     cartItem.remove();
    
    //     const drawerItem = document.getElementById(itemId);
    //     if (drawerItem) {
    //       drawerItem.remove();
    //     }
    //     });
    // });
    
    const addCartItem = document.querySelectorAll(".cross__plus")
    addCartItem.forEach(cartAdd =>{
        cartAdd.addEventListener("click",() =>{
            const itemId = cartAdd.parentElement.parentElement.parentElement.id
            cart.push(data.find(item => +item.id === +itemId))
            renderCartItems();
        })
    })


    const deleteCartItem = document.querySelectorAll(".cross__unplus")
    deleteCartItem.forEach(cartDelete =>{
        cartDelete.addEventListener("click",() =>{
            const itemId = cartDelete.parentElement.parentElement.parentElement.id
            cart = cart.filter(item => +item.id !== +itemId)
            renderCartItems();
        })
    })
    return data;
}

response();
owerlayFunc();




