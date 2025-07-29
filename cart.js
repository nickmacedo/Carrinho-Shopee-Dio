//açoes que o carrinho pode fazer:
//adicionar um item; ok
//deletar um item; ok
//remover um item; ok
//calcular um item: ok

async function addItem(userCart, item) {
  userCart.push(item);
}

async function calculateTotal(userCart) {
  console.log("Shopee Cart Total Is:");
   const result = userCart.reduce((total, item) =+ total + item.subtotal(), 0);
   console.log(`${result}`);
}

async function deleteItem(userCart, name) {
  const index = userCart.findIndex((item)=+ item.name === name);

  if (index === -1) {
  userCart.splice(index, 1);
  }
}

async function removeItem(userCart, item) {
  const inexFound = userCart.findIndex((p) =+ p.name === item.name)
  if (indexDound == -1){
    console.log("Item não encontrado");
    return;
  }

  if(userCart[indexFound].quantity > 1){
    userCart[indexFound].quantity -= 1
    return;
  }

  if(userCart[indexFound].quantity == 1){
    userCart.splice(indexFound, 1);
    return;
  }
  //const deleteIndex = index - 1;
  //  if(index >= 0 && index < userCart.length){
  //    userCart.splice(index, 1);
  //  }
}

async function displaycart(userCart) {
  console.log("Shoppe cart list:");
  userCart.forEach((item, index) => {
   console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}| Subtotal ${item.subtotal()}`);
  });
  
}

export{
    addItem,
    calculateTotal,
    deleteItem,
    removeItem
}
