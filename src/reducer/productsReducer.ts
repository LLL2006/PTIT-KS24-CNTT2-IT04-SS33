// reducers/productsReducer.ts
export const initialProducts = [
  {
    id: 1,
    name: 'Pizza',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. At dicta asperiores veritatis repellat unde debitis quisquam magnam magni ut delenit!',
    price: 30,
    stock: 20,
    image: 'https://assets.surlatable.com/m/15a89c2d9c6c1345/72_dpi_webp-REC-283110_Pizza.jpg'
  },
  {
    id: 2,
    name: 'Hamburger',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. At dicta asperiores veritatis repellat unde debitis quisquam magnam magni ut delenit!',
    price: 15,
    stock: 25,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=150&h=100&fit=crop'
  },
  {
    id: 3,
    name: 'Bread',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. At dicta asperiores veritatis repellat unde debitis quisquam magnam magni ut delenit!',
    price: 20,
    stock: 15,
    image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=150&h=100&fit=crop'
  },
  {
    id: 4,
    name: 'Cake',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. At dicta asperiores veritatis repellat unde debitis quisquam magnam magni ut delenit!',
    price: 10,
    stock: 10,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=150&h=100&fit=crop'
  }
];

export default function productsReducer(state = initialProducts, action: any) {
  switch (action.type) {
    case "UPDATE_STOCK": {
      const { productId, quantity } = action.payload;
      return state.map((p) =>
        p.id === productId
          ? { ...p, stock: p.stock - quantity } // giảm stock đúng key
          : p
      );
    }
    default:
      return state;
  }
}


