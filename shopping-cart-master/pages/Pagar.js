// Pagar.js

import React, { useState } from 'react';

const Pagar = () => {
  const [numeroTarjeta, setNumeroTarjeta] = useState('');
  const [nombreTitular, setNombreTitular] = useState('');
  const [fechaExpiracion, setFechaExpiracion] = useState('');
  const [codigoSeguridad, setCodigoSeguridad] = useState('');

  const handlePagar = () => {
    // Agrega lógica para procesar el pago
    console.log('Pago procesado con éxito');
  };

  return (
    <div>
      <h2>Ingrese los detalles de pago</h2>
      <label>Número de Tarjeta:</label>
      <input type="text" value={numeroTarjeta} onChange={(e) => setNumeroTarjeta(e.target.value)} />
      <br />
      <label>Nombre del Titular:</label>
      <input type="text" value={nombreTitular} onChange={(e) => setNombreTitular(e.target.value)} />
      <br />
      <label>Fecha de Expiración:</label>
      <input type="text" value={fechaExpiracion} onChange={(e) => setFechaExpiracion(e.target.value)} />
      <br />
      <label>Código de Seguridad:</label>
      <input type="text" value={codigoSeguridad} onChange={(e) => setCodigoSeguridad(e.target.value)} />
      <br />
      <button onClick={handlePagar}>Pagar</button>
    </div>
  );
};

export default Pagar;
