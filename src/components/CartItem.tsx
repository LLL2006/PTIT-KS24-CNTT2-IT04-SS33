import React from 'react';

const CartItem = ({ item, onUpdateQuantity, onRemoveItem , stock}) => {
  const handleChange = (e) => {
    const newQuantity = parseInt(e.target.value) || 1;
    if (newQuantity > stock) {
      alert("Số lượng vượt quá trong kho");
      return;
    }
    onUpdateQuantity(item.id, newQuantity);
  };
  return (
    <tr>
      <td className="table-cell">{item.stt}</td>
      <td className="table-cell text-left">{item.name}</td>
      <td className="table-cell">{item.price} USD</td>
      <td className="table-cell">
        <input
  type="number"
  min="1"
  value={item.quantity || 1}  
  onChange={(e) => {
    const newQuantity = parseInt(e.target.value, 10);
    onUpdateQuantity(item.id, isNaN(newQuantity) ? 1 : newQuantity);
  }}
  className="quantity-input"
/>
      </td>
      <td className="table-cell">
        <button
          onClick={() => onUpdateQuantity(item.id, item.quantity)}
          className="action-button update-button"
        >
          Update
        </button>
        <button
  onClick={() => {
    if (window.confirm("Bạn có chắc muốn xóa sản phẩm này không?")) {
      onRemoveItem(item.id);
      alert("Delete cart successfully");
    }
  }}
  className="action-button delete-button"
>
  Delete
</button>

      </td>
    </tr>
  );
};

export default CartItem;