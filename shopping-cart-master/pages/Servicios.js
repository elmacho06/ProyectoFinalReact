import React from 'react';

function Servicios() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h2 style={{ color: '#333', textAlign: 'center' }}>Nuestros Servicios</h2>

      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>Servicio</th>
            <th style={tableHeaderStyle}>Descripción</th>
          </tr>
        </thead>
        <tbody>
          <TableRow title="Envío Rápido y Seguro" description="Garantizamos la entrega rápida y segura de tus productos directamente a tu puerta." />
          <TableRow title="Amplia Variedad de Productos" description="Descubre una amplia gama de herramientas, materiales de construcción, artículos de seguridad y más." />
          <TableRow title="Asesoramiento Técnico" description="Contamos con personal capacitado para brindarte asesoramiento técnico en tus compras. ¡Pregunta y te ayudaremos!" />
          
          <TableRow title="Seguridad en las Transacciones:" description="Puedes confiar en la seguridad de tus transacciones en nuestro sitio web." />
          <TableRow title="Actualizacion de inventario" description="Mantenemos nuestro inventario actualizado y te notificamos sobre nuevos productos y reabastecimientos." />
          <TableRow title="Atención al Cliente:" description="Estamos aquí para ayudarte. Ponte en contacto con nuestro equipo de atención al cliente para cualquier consulta o problema." />

          {/* Agrega más filas según sea necesario */}
        </tbody>
      </table>
    </div>
  );
}

// Componente funcional para una fila de la tabla
function TableRow({ title, description }) {
  return (
    <tr>
      <td style={tableCellStyle}><strong style={{ color: '#007bff' }}>{title}</strong></td>
      <td style={tableCellStyle}>{description}</td>
    </tr>
  );
}

// Estilos para las celdas de la tabla
const tableCellStyle = {
  padding: '10px',
  borderBottom: '1px solid #ddd',
};

// Estilos para los encabezados de la tabla
const tableHeaderStyle = {
  background: '#f2f2f2',
  padding: '15px',
  textAlign: 'left',
};

export default Servicios;
