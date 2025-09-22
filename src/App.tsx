import { Provider } from "react-redux"
import ShoppingCart from "./components/ShoppingCart"
import {store} from "./store"

export default function App() {
  return (
    <Provider store={store}>
      <ShoppingCart />
    </Provider>
  )
}
