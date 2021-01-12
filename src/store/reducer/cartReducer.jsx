// const initialState = {
//   basket: [],
// };

// export const addReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "ADD_TO_BASKET":
//       return {
//         basket: [action.payload, ...state.basket],
//       };
//     case "DELETE_ITEM":
//       let newBasket = [...state.basket];
//       const index = state.basket.findIndex(
//         (basketItem) => basketItem.id == action.payload
//       );

//       if (index >= 0) {
//         newBasket.splice(index, 1);
//       } else {
//         alert("id didnt exist");
//       }
//       return {
//         ...state,
//         basket: newBasket,
//       };
//     //   return {
//     //     ...state,
//     //     basket: state.basket.filter((item) => item.id != action.payload),
//     //   };
//     default:
//       return state;
//   }
// };
