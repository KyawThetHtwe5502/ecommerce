import { products } from "../core/data";
import { categoryBtn, categoryList } from "../core/selectors"
import { productCardRender } from "./product";


export const createCategory = (title) => {
    const clone = categoryBtn.content.cloneNode(true);
    const category = clone.querySelector("button");
    category.innerText = title;
    return category;
}

export const categoryRender =(categoryArray) => {
    categoryArray.forEach((el) => categoryList.append(createCategory(el)));
    
}
export const categoryHandler =(event) => {
    if(event.target.classList.contains("category-btn")){
        // event.target.classList.add("bg-neutral-600")
        // event.target.classList.add("text-white")
        const currentCategory = event.target.innerText;
        const currentProduct = products.filter(product => product.category == currentCategory || currentCategory == "All")
        // console.log(currentProduct);
        // productCardRender(currentProduct);
        if(currentCategory=="All"){
            productCardRender(products)
        }else {
            
            productCardRender(currentProduct)
        }
    }
}