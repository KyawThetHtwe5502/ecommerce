import { cartBody, cartCountBadge, cartItem, cartItemCount, cartTotal } from "../core/selectors"

export  const createCartItem = ({id,image,title,price}) => {
    const cartItemUi = cartItem.content.cloneNode(true);
    const currentItem = cartItemUi.querySelector(".cart-item")
    cartItemUi.querySelector(".cart-item-img").src = image;
    cartItemUi.querySelector(".cart-item-title").innerText = title;
    cartItemUi.querySelector(".cart-item-price").innerText = price;
    cartItemUi.querySelector(".cart-item-cost").innerText = price;

    // cartItemUi.querySelector(".cart-item-quantity").innerText = quantity;
    const cartItemDel = cartItemUi.querySelector(".cart-item-del");

    cartItemUi.querySelector(".cart-item").setAttribute("cart-product",id)

    return cartItemUi;
}

export const cartCount =() => {
    return cartBody.querySelectorAll(".cart-item").length
}
export const calculateItemInCartCostTotal = () => {
    
    return [...cartBody.querySelectorAll(".cart-item-cost")].reduce((pv,cv) =>pv + parseFloat(cv.innerText),0 );
}

export const cartObserver = () => {
    const process = () => {
        cartCountBadge.innerText = cartCount()
        cartTotal.innerText = calculateItemInCartCostTotal().toFixed(2);
        cartItemCount.innerText = cartCount();
        console.log(cartBody.querySelectorAll(".cart-item-price"));
    }
    const options = {
        childList : true,
        subtree : true
    }

    const observer = new MutationObserver(process)
    observer.observe(cartBody,options)
}