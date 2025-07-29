import * as cartService from ".services/cart.js";
import createItem from "./services/item.js";

const cart = [];

console.log("Bem vindo ao seu carrinho da Shoppe!!");

const item1 = await createItem("barbie", 199.99, 1);
const item2 = await createItem("barbie fadas", 299.99, 3);

await cartService.addItem(cart, item1);
await cartService.addItem(cart, item2);

await cartService.removeItem(cart, item2);

await cartService.display(cart);
await cartService.deleteItem(cart, item2.name);

await cartService.caculateTotal(cart);
