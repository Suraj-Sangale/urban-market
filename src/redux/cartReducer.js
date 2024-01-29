const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case 'REMOVE_FROM_CART':
      const { id } = action.payload;
      const indexToRemove = state.cartItems.findIndex((item) => item.id === id);

      if (indexToRemove !== -1) {
        // Remove the first matching item by creating a new array
        const updatedCartItems = [
          ...state.cartItems.slice(0, indexToRemove),
          ...state.cartItems.slice(indexToRemove + 1),
        ];

        return {
          ...state,
          cartItems: updatedCartItems,
        };
      }
      break;
    default:
      return state;
  }
};

export default cartReducer;