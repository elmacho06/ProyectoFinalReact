// src/App.js
import React, { useState } from 'react';
import Crud from './crud';
import Index1 from './index1'; // Asegúrate de importar Index1 desde el archivo correcto

const App = () => {
  const [showCrud, setShowCrud] = useState(false);
  const [showIndex1, setShowIndex1] = useState(false);

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
  };

  const containerStyle = {
    textAlign: 'center',
    margin: '50px',
    backgroundImage: '"taladro.jpg")', // Reemplaza con la ruta correcta de tu imagen
    backgroundSize: 'cover', // Ajusta según tus necesidades
  };

  const headerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px',
    marginBottom: '20px',
    fontSize: '24px',
  };

  const handleAgregarClick = () => {
    setShowCrud(true);
    setShowIndex1(false); // Oculta Index1 al mostrar Crud
  };

  const handleCarritoClick = () => {
    setShowIndex1(true);
    setShowCrud(false); // Oculta Crud al mostrar Index1
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h1>Bienvenido Proveedor</h1>
      </div>
      {showCrud ? (
        <Crud />
      ) : showIndex1 ? (
        <Index1 />
      ) : (
        
        <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
          <button style={buttonStyle} onClick={handleAgregarClick}>
            Agregar
          </button>
          <button style={buttonStyle} onClick={handleCarritoClick}>
            Carrito
          </button>
          
        </div>
        
      )}
    </div>
  );
};

export default App;
