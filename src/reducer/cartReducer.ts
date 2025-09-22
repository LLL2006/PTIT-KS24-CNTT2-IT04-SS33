// reducers/cartReducer.ts
const initialCart = JSON.parse(localStorage.getItem("cart") || "[]");

export default function cartReducer(state = initialCart, action: any) {
  switch (action.type) {
    case "ADD_TO_CART": {
      const { product } = action.payload;
      const exist = state.find((item: any) => item.id === product.id);

      // Tính số lượng mới sau khi click
      const currentQty = exist ? exist.quantity : 0;
      const newQty = currentQty + 1;

      if (newQty > product.stock) {
  alert("Số lượng sản phẩm vượt quá số lượng trong kho");
  return state;
}


      let updated;
      if (exist) {
        updated = state.map((item: any) =>
          item.id === product.id ? { ...item, quantity: newQty } : item
        );
      } else {
        updated = [...state, { ...product, quantity: 1 }];
      }

      localStorage.setItem("cart", JSON.stringify(updated));
      return updated;
    }

    case "REMOVE_ITEM": {
      const updated = state.filter((item: any) => item.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(updated));
      return updated;
    }

    default:
      return state;
  }
}
