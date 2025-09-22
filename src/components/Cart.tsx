import CartItem from './CartItem';

const Cart = ({ cartItems, onUpdateQuantity, onRemoveItem, showSuccess }) => {
  const totalAmount = cartItems.reduce((total: number, item: { price: number; quantity: number; }) => total + (item.price * item.quantity), 0);

  return (
    <div className="card">
      <div className="card-header cart-header">
        Your Cart
      </div>
      
      <div className="cart-content">
        {cartItems.length === 0 ? (
          <div className="empty-cart">Empty product in your cart</div>
        ) : (
          <>
            <table className="cart-table">
              <thead>
                <tr>
                  <th className="table-header">STT</th>
                  <th className="table-header text-left">Name</th>
                  <th className="table-header">Price</th>
                  <th className="table-header">Quantity</th>
                  <th className="table-header">Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => (
                  <CartItem
                    key={item.id}
                    item={{...item, stt: index + 1}}
                    onUpdateQuantity={onUpdateQuantity}
                    onRemoveItem={onRemoveItem}
                  />
                ))}
              </tbody>
            </table>
            
            <div className="cart-summary">
              <p className="cart-info">
                There are {cartItems.length} items in your shopping cart.
              </p>
              <div className="total-amount">
                {totalAmount} USD
              </div>
            </div>
          </>
        )}
      </div>
      
      {showSuccess && (
        <div className="success-message">
          Add to cart successfully
        </div>
      )}
    </div>
  );
};

export default Cart;