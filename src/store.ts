import { createStore, combineReducers } from "redux";
import  productsReducer  from "./reducer/productsReducer";
import  cartReducer  from "./reducer/cartReducer";
import  messageReducer from "./reducer/messageReducer";

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  messages: messageReducer,
});

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
