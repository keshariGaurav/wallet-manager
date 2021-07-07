export const AppReducer = (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      
      return {
        ...state,
        transactions: state.transactions.filter((transaction) => {
          return transaction._id !== action.payload;
        }),
      };
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    case "GET_TRANSACTION":
      return {
        ...state,
        transactions: action.payload,
        loading: false,
      };
    case "TRANSACTION_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
