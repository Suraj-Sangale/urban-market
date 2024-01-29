const initialState = {
    items: [],
    quantity: 0,
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        return {
          ...state,
          items: [...state.items, action.payload],
          quantity: state.quantity + 1,
        };
      default:
        return state;
    }
  };
  
  export default cartReducer;
  