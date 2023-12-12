import React, { useState } from 'react';

const styles = {
  body: {
    fontFamily: 'Arial, sans-serif',
    margin: '20px',
    backgroundColor: '#f7f7f7',
    color: '#333',
  },
  header: {
    background: '#333',
    color: '#fff',
    padding: '20px',
    textAlign: 'center',
  },
  h1: {
    margin: 0,
    fontSize: '1.5em',
  },
  catalog: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: '20px',
  },
  product: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    margin: '10px',
    width: '200px',
    textAlign: 'center',
    background: '#fff',
  },
  button: {
    backgroundColor: '#4caf50',
    color: 'white',
    padding: '10px 15px',
    border: 'none',
    cursor: 'pointer',
    margin: '5px',
    borderRadius: '5px',
  },
  cart: {
    marginTop: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    position: 'fixed',
    top: '80px',
    right: '20px',
    background: '#fff',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
  },
  cartItem: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px',
    borderBottom: '1px solid #ddd',
    paddingBottom: '10px',
  },
  total: {
    marginTop: '10px',
    textAlign: 'right',
    fontWeight: 'bold',
    fontSize: '1.2em',
  },
  deleteButton: {
    backgroundColor: '#ff4d4d',
    color: 'white',
    padding: '8px 12px',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
  },
  emptyCart: {
    textAlign: 'center',
    color: '#777',
  },
  modal: {
    display: 'none',
    position: 'fixed',
    zIndex: 1,
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    overflow: 'auto',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#fefefe',
    margin: '5% auto',
    padding: '20px',
    border: '1px solid #888',
    width: '80%',
    textAlign: 'center',
    position: 'relative',
    borderRadius: '8px',
  },
  close: {
    color: '#aaa',
    fontSize: '28px',
    fontWeight: 'bold',
    cursor: 'pointer',
    position: 'absolute',
    top: '10px',
    right: '10px',
  },
  paymentForm: {
    marginTop: '20px',
    borderRadius: '8px',
    padding: '20px',
    background: '#fff',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    boxSizing: 'border-box',
    borderRadius: '5px',
    border: '1px solid #ddd',
  },
};

const productsData = [
  {
    id: 1,
    name: 'Martillo',
    description: 'Martillo de acero forjado',
    price: 15.99,
    image: 'URL_DE_LA_IMAGEN_DEL_MARTILLO',
  },
  {
    id: 2,
    name: 'Destornillador',
    description: 'Destornillador magnético Phillips',
    price: 7.49,
    image: 'URL_DE_LA_IMAGEN_DEL_DESTORNILLADOR',
  },
  {
    id: 3,
    name: 'Sierra',
    description: 'Sierra para madera con mango suave',
    price: 24.99,
    image: 'URL_DE_LA_IMAGEN_DE_LA_SIERRA',
  },
  {
    id: 4,
    name: 'Taladro',
    description: 'Taladro eléctrico con velocidad variable',
    price: 59.99,
    image: 'taladro.jp',
  },
  {
    id: 5,
    name: 'Pintura',
    description: 'Lata de pintura blanca de 1 galón',
    price: 19.99,
    image: 'URL_DE_LA_IMAGEN_DE_LA_PINTURA',
  },
  {
    id: 6,
    name: 'barrilla',
    description: 'contiene 6 metros de largo',
    price: 400,
    image: 'URL_DE_LA_IMAGEN_DE_LA_PINTURA',
  },
  {
    id: 7,
    name: 'Portaelectrodo',
    description: 'Excelente para plantas generadoras',
    price: 19.99,
    image: 'URL_DE_LA_IMAGEN_DE_LA_PINTURA',
  },
  {
    id: 8,
    name: 'Pinza',
    description: 'Pinza mecanica',
    price: 60,
    image: 'URL_DE_LA_IMAGEN_DE_LA_PINTURA',
  },
  {
    id: 9,
    name: 'Esmeriladora',
    description: 'Excelentes Reboluciones',
    price: 1800,
    image: 'URL_DE_LA_IMAGEN_DE_LA_PINTURA',
  },
  {
    id: 10,
    name: 'Compresor',
    description: '50L',
    price: 3500,
    image: 'URL_DE_LA_IMAGEN_DE_LA_PINTURA',
  },
 
];

const Product = ({ id, name, description, price, image, addToCart, viewDetails }) => (
  <div style={styles.product}>
    <h3>{name}</h3>
    <img src={image} alt={name} style={{ maxWidth: '100%', maxHeight: '100px', marginBottom: '10px' }} />
    <p>{description}</p>
    <p>Precio: ${price.toFixed(2)}</p>
    <button style={styles.button} onClick={() => addToCart(id)}>
      Agregar al carrito
    </button>

  </div>
);

const ShoppingCart = ({ cartItems, removeFromCart, viewDetails, handlePayment }) => {
  const totalAmount = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div style={styles.cart}>
      <h2>Carrito de Compras</h2>
      {cartItems.length > 0 ? (
        <>
          {cartItems.map(item => (
            <div key={item.id} style={styles.cartItem}>
              <p>{item.name}</p>
              <p>${item.price.toFixed(2)}</p>
              <button style={styles.deleteButton} onClick={() => removeFromCart(item.id)}>
                Eliminar
              </button>
            </div>
          ))}
          <div style={styles.total}>
            <p>Total a Pagar: ${totalAmount.toFixed(2)}</p>
          </div>
          <button style={styles.button} onClick={handlePayment}>
            Pagar
          </button>
        </>
      ) : (
        <p style={styles.emptyCart}>El carrito está vacío.</p>
      )}
    </div>
  );
};

const App = () => {
  const [products] = useState(productsData);
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [selectedProductName, setSelectedProductName] = useState(null);
  const [showPaymentForm, setShowPaymentForm] = useState(false); // Nuevo estado

  const addToCart = (productId) => {
    const selectedProduct = products.find((product) => product.id === productId);

    if (selectedProduct) {
      setCartItems([...cartItems, selectedProduct]);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const viewDetails = (productName) => {
    setSelectedProductName(productName);
  };

  const closeDetails = () => {
    setSelectedProductName(null);
  };

  const togglePaymentForm = () => {
    setShowPaymentForm(!showPaymentForm);
  };

  const handlePayment = () => {
    // Add your payment logic here
    console.log('Payment logic goes here');
    // Puedes cerrar el formulario de pago después de completar el pago si es necesario
    setShowPaymentForm(false);
  };

  return (
    <div style={styles.body}>
      <div style={styles.header}>
        <h1 style={styles.h1}>Ferretería - Carrito de Compras</h1>
      </div>

      <div style={styles.catalog}>
        {products.map((product) => (
          <Product key={product.id} {...product} addToCart={addToCart} viewDetails={viewDetails} />
        ))}
      </div>

      <button style={styles.button} onClick={toggleCart}>
        {showCart ? 'Ocultar Carrito' : 'Ver Carrito'}
      </button>

      {showCart && (
        <ShoppingCart
          cartItems={cartItems}
          removeFromCart={removeFromCart}
          viewDetails={viewDetails}
          handlePayment={togglePaymentForm} // Modificado para mostrar el formulario de pago
        />
      )}

{showPaymentForm && (
  <div style={{ ...styles.paymentForm, textAlign: 'center', width: '80%', maxWidth: '300px', margin: '0 auto' }}>
    <h2 style={{ marginBottom: '20px', fontWeight: 'bold' }}>Visa Gold Debito</h2>

    <div style={{ marginBottom: '15px' }}>
      <label htmlFor="cardNumber" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
        Número de Tarjeta:
      </label>
      <input
        type="text"
        id="cardNumber"
        name="cardNumber"
        style={{
          ...styles.input,
          backgroundImage: 'url("card-icon.png")',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '98% 50%',
          fontSize: '14px', // Tamaño de fuente más pequeño
        }}
        placeholder="Número de tarjeta"
      />
    </div>

    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
      <div style={{ flex: '1', marginRight: '10px' }}>
        <label htmlFor="expirationDate" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
          Fecha de Vencimiento:
        </label>
        <input
          type="text"
          id="expirationDate"
          name="expirationDate"
          style={{ ...styles.input, fontSize: '14px' }}
          placeholder="MM/AA"
        />
      </div>

      <div style={{ flex: '1' }}>
        <label htmlFor="cvv" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
          CVV:
        </label>
        <input
          type="text"
          id="cvv"
          name="cvv"
          style={{ ...styles.input, fontSize: '14px' }}
          placeholder="CVV"
        />
      </div>
    </div>

    <button style={{ ...styles.button, marginTop: '10px', fontWeight: 'bold' }} onClick={handlePayment}>
      "pagar"
    </button>
  </div>
)}


      {selectedProductName && (
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <span style={styles.close} onClick={closeDetails}>
              &times;
            </span>
            <h2>{selectedProductName}</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;