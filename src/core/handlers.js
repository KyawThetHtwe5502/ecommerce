import Swal from "sweetalert2";
import { app, cartBody, cartBox, searchBar, searchBarInput, searchBtn } from "./selectors"
import { productCardRender } from "../app/product";
import { products } from "./data";

export const cartBtnHandler = () => {
    cartBox.classList.toggle("translate-x-full");
    !cartBox.classList.contains("duration-300") && cartBox.classList.add("duration-300");
    // console.log(cartBox);

}

export const incrementQuantity =(id) => {
    const cartItem = cartBody.querySelector(`[cart-product="${id}"]`)
    const cost = cartItem.querySelector(".cart-item-cost");
    const price = cartItem.querySelector(".cart-item-price");
    const quantity = cartItem.querySelector(".cart-item-quantity");
    quantity.innerText = parseInt(quantity.innerText) + 1;

    cost.innerText = price.innerText * quantity.innerText;
}
export const decrementQuantity =(id) => {
    const cartItem = cartBody.querySelector(`[cart-product="${id}"]`)
    const cost = cartItem.querySelector(".cart-item-cost");
    const price = cartItem.querySelector(".cart-item-price");
    const quantity = cartItem.querySelector(".cart-item-quantity");
    // currentQuantity.innerText = parseInt(currentQuantity.innerText) - 1;
    if(quantity.innerText > 1){
        quantity.innerText = parseInt(quantity.innerText) - 1;
    cost.innerText = price.innerText * quantity.innerText;

        }

}


export const cartBodyHandler = (event) => {

    if (event.target.classList.contains("cart-item-del")) {
        const currentCartItem = event.target.closest(".cart-item");
        const currentCartItemId = currentCartItem.getAttribute("cart-product");


        cartItemDelBtn(currentCartItemId)

    }else if (event.target.classList.contains("cart-item-quantity-increment")) {
        // const currentCartItem = event.target.closest(".cart-item");
        // const currentQuantity = currentCartItem.querySelector(".cart-item-quantity");
        // const currentQuantity = event.target.previousElementSibling;
        const currentCartItem = event.target.closest(".cart-item");

        const currentCartItemId = currentCartItem.getAttribute("cart-product");

        
        incrementQuantity(currentCartItemId)
        // console.log(currentQuantity.innerText);
    }else if (event.target.classList.contains("cart-item-quantity-decrement")) {
        
        // const currentCartItem = event.target.closest(".cart-item");
        // const currentQuantity = currentCartItem.querySelector(".cart-item-quantity");
        // const currentQuantity = event.target.nextElementSibling;

        // if(currentQuantity.innerText > 1){
        // currentQuantity.innerText = parseInt(currentQuantity.innerText) - 1;

        // }
        const currentCartItem = event.target.closest(".cart-item");

        const currentCartItemId = currentCartItem.getAttribute("cart-product");

        decrementQuantity(currentCartItemId)

    }

}

export const cartItemDelBtn = (id) => {
    const currentCartItem = app.querySelector(`[cart-product="${id}"]`)
    const currentCartItemId = currentCartItem.getAttribute("cart-product")

    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {
            currentCartItem.classList.add("animate__animated" ,"animate__hinge")
            currentCartItem.addEventListener("animationend",() => {
            currentCartItem.remove()
                
            })
            const currentProductCard = app.querySelector(`[product-id= '${currentCartItemId}']`);
            const currentAddToCartBtn = currentProductCard.querySelector(".add-to-cart");

            currentAddToCartBtn.classList.remove("bg-neutral-600", "text-white");
            currentAddToCartBtn.innerText = "Add to cart";
            currentAddToCartBtn.disabled = false;

            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            });
        }
    });
}

export const searchBtnHandler = () => {
    searchBtn.classList.toggle("bg-neutral-600");
    searchBtn.classList.toggle("text-white");
    
    searchBar.classList.toggle("-translate-y-full");
    searchBar.classList.toggle("opacity-0");
    searchBar.classList.add("duration-300")
    searchBarInput.focus()
}
export const searchBarInputHandler = (event) => {
    console.log(event.key);
    const keyword = searchBarInput.value;
    productCardRender(products.filter(product => product.title.toLocaleLowerCase().search(keyword) != -1 || product.description.toLocaleLowerCase().search(keyword) != -1))

}
export const clearSearchInputBtnHandler = () => {
    searchBarInput.value= null;
    productCardRender(products);
}