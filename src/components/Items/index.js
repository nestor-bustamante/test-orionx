import React from 'react';

const Items = () => {

  // Entiendo que esta información debería ser un servicio
  const products = [
    {
      name: 'Espresso',
      size: 'large',
      quantity: 1,
      price: 2.90
    },
    {
      name: 'Capuccino',
      size: 'small',
      quantity: 2,
      price: 3.50
    }
  ];

  let total = 0;

  const listItems = products.map((item, index) => {
    total = total + (item.price * item.quantity);
    return (
      <tr key={index}>
        <td>{item.name} <span>({item.size})</span></td>
        <td>{item.quantity}</td>
        <td>{(item.price * item.quantity).toFixed(2)}</td>
      </tr>
    )
  });
  return (
    <div className="container-table">
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Unit</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {listItems}
          <tr>
            <td>Total</td>
            <td></td>
            <td>{total.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Items;