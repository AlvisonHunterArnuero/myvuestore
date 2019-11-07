export const store = {
    state: {
      cart: [],
      items: 0
    },
    addItemToCart(newItem) {
      this.state.cart.push(newItem);
    },
countItemsInCart(newItem){
this.state.items = this.state.items + newItem; 
}
  };