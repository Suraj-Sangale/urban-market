const initialState = {
  cartItems: [],
  totalItems: 0,
};

const cartReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case 'ADD_TO_CART':
      const newItem = action.payload;
      const existingItem = state.cartItems.find(item => item.id === newItem.id);

      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map(item =>
            item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
          totalItems: state.totalItems + 1,
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...newItem, quantity: 1 }],
          totalItems: state.totalItems + 1,
        };
      }

    case 'REMOVE_FROM_CART':
      const { productId } = action.payload;
      const updatedCartItems = state.cartItems.filter(item => item.id !== productId);
      const removedItem = state.cartItems.find(item => item.id === productId);

      return {
        ...state,
        cartItems: updatedCartItems,
        totalItems: state.totalItems - (removedItem ? removedItem.quantity : 0),
      };

      case 'UPDATE_QUANTITY':
        const { productId: updateProductId, quantity: updateQuantity } = action.payload;
        
        const updatedItem = state.cartItems.find(item => item.id === updateProductId);
      
        if (updatedItem) {
          return {
            ...state,
            cartItems: state.cartItems.map(item =>
              item.id === updateProductId ? { ...item, quantity: updateQuantity } : item
            ),
            totalItems: state.totalItems + (updateQuantity - (updatedItem.quantity || 0)),
          };
        } else {
          return state;
        }
      

    default:
      return state;
  }
};

export default cartReducer;