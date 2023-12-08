import "./index.css";
import Shop from "./src/Shop";
// import { categoryBtn, categoryList } from "./src/core/selectors";

const shop = new Shop();
shop.init()

// const cat1 = categoryBtn.content.cloneNode(true);
// cat1.querySelector("button").innerText = "cat one";
// const cat2 = categoryBtn.content.cloneNode(true);
// cat2.innerText = "cat two";

// console.log(cat1);
// console.log(cat2);

// categoryList.append(cat1,cat2)