import { createStore, combineReducers } from "redux";
import  productsReducer  from "./reducer/productsReducer";
import  cartReducer  from "./reducer/cartReducer";
import  messageReducer from "./reducer/messageReducer";

// Gom nhiều reducer lại thành rootReducer
const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  messages: messageReducer,
});

// Tạo store
export const store = createStore(rootReducer);

// Định nghĩa kiểu RootState để dễ dùng với useSelector
export type RootState = ReturnType<typeof rootReducer>;
