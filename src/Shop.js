import { cartObserver } from "./app/cart";
import { categoryHandler, categoryRender } from "./app/category";
import { productCardRender, productListHandler } from "./app/product";
import { categories, products } from "./core/data";
import { cartBodyHandler, cartBtnHandler, clearSearchInputBtnHandler, searchBarInputHandler, searchBtnHandler } from "./core/handlers";
import { cartBody, cartBtn, cartCloseBtn, categoryList, clearSearchInputBtn, productList, searchBarInput, searchBtn } from "./core/selectors";

class Shop {

    observer(){
      cartObserver()
    }
    initialRender(){
      categoryRender(categories)
      productCardRender(products)
    }
    Listener(){
        cartBtn.addEventListener("click",cartBtnHandler);
        cartCloseBtn.addEventListener("click",cartBtnHandler)
        productList.addEventListener("click",productListHandler)
        cartBody.addEventListener("click",cartBodyHandler);
        categoryList.addEventListener("click",categoryHandler)
        searchBtn.addEventListener("click",searchBtnHandler)
        searchBarInput.addEventListener("keyup",searchBarInputHandler)
        clearSearchInputBtn.addEventListener("click",clearSearchInputBtnHandler)
    }
    init(){
      console.log("Shop App Start"); 
      this.observer()
      this.initialRender()
      this.Listener() 
    }
}

export default Shop;