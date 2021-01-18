import * as actionType from "./shopping-types";
import image1 from "../../assest/Burger-Pattie-Chillipepper-Final-300x300.png";
import image2 from "../../assest/b1.png";
import image3 from "../../assest/b2.png";

const initialState = {
  products: [
    {
      id: 1,
      title: "Fish Burger",
      price: 750,
      image: image1,
    },
    {
      id: 2,
      title: "Prown Fry",
      price: 1200,
      image: image2,
    },
    {
      id: 3,
      title: "Fish Fry Burger",
      price: 1500,
      image: image3,
    },
  ],
  cart: [],
  currentItem: null,
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_TO_CART:
      const item = state.products.find((prod) => prod.id === action.payload.id);
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionType.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionType.ADJUST_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case actionType.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
