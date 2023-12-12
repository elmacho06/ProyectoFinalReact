// Crud.js
import React, { useState, useEffect } from 'react';

const Crud = () => {
  const [products, setProducts] = useState([]);
  const [editedProduct, setEditedProduct] = useState(null);
  const [product, setProduct] = useState({ id: null, name: '', price: '', description: '', quantity: 0 });

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(storedProducts);
  }, []);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const handleAdd = () => {
    if (product.name && product.price && product.description && product.quantity >= 0) {
      if (editedProduct) {
        const updatedProducts = products.map((p) => (p.id === editedProduct.id ? product : p));
        setProducts(updatedProducts);
        setEditedProduct(null);
      } else {
        setProducts([...products, { ...product, id: Date.now() }]);
      }

      setProduct({ id: null, name: '', price: '', description: '', quantity: 0 });
    } else {
      alert('Por favor, complete todos los campos correctamente.');
    }
  };

  const handleEdit = (selectedProduct) => {
    setEditedProduct(selectedProduct);
    setProduct(selectedProduct);
  };

  const handleDelete = (id) => {
    const updatedProducts = products.filter((p) => p.id !== id);
    setProducts(updatedProducts);
    setEditedProduct(null);
  };

  const handleShowAll = () => {
    setEditedProduct(null);
  };

  return (
    <div style={styles.crudContainer}>
      <h1 style={styles.heading}>Gestión de Productos - Ferretería Hernandez</h1>
      <div style={styles.formContainer}>
        <div style={styles.formRow}>
          <label style={styles.label}>Producto:</label>
          <input
            style={styles.input}
            type="text"
            value={product.name}
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
          />
        </div>
        <div style={styles.formRow}>
          <label style={styles.label}>Precio:</label>
          <input
            style={styles.input}
            type="text"
            value={product.price}
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
          />
        </div>
        <div style={styles.formRow}>
          <label style={styles.label}>Descripción:</label>
          <input
            style={styles.input}
            type="text"
            value={product.description}
            onChange={(e) => setProduct({ ...product, description: e.target.value })}
          />
        </div>
        <div style={styles.formRow}>
          <label style={styles.label}>Cantidad:</label>
          <input
            style={styles.input}
            type="number"
            value={product.quantity}
            onChange={(e) => setProduct({ ...product, quantity: e.target.value })}
          />
        </div>
        <button style={styles.actionButton} onClick={handleAdd}>
          {editedProduct ? 'Actualizar' : 'Agregar'}
        </button>
        
      </div>

      <table style={styles.productTable}>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Descripción</th>
            <th>Cantidad</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.price}</td>
              <td>{p.description}</td>
              <td>{p.quantity}</td>
              <td>
                <button style={styles.smallButton} onClick={() => handleEdit(p)}>
                  Editar
                </button>
                <button style={styles.smallDeleteButton} onClick={() => handleDelete(p.id)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  crudContainer: {
    maxWidth: '800px',
    margin: '20px auto',
    padding: '20px',
    border: '2px solid #007bff', // Color azul
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  heading: {
    color: '#007bff', // Color azul
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '20px',
  },
  formRow: {
    marginBottom: '10px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    color: '#555', // Color gris oscuro
  },
  input: {
    padding: '8px',
    width: '100%',
  },
  actionButton: {
    padding: '8px',
    backgroundColor: '#007bff', // Color azul
    color: '#fff',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
    marginRight: '5px',
  },
  smallButton: {
    padding: '5px',
    backgroundColor: '#007bff', // Color azul
    color: '#fff',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
    marginRight: '5px',
  },
  smallDeleteButton: {
    padding: '5px',
    backgroundColor: '#dc3545', // Color rojo oscuro
    color: '#fff',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
  },
  productTable: {
    width: '100%',
    borderCollapse: 'collapse',
    border: '2px solid #007bff', // Color azul
    marginTop: '20px',
  },
};

export default Crud;
