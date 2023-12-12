import React from 'react';

function Acercade() {
  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>Acerca de Nosotros</h2>
      <table style={tableStyle}>
        <tbody>
          <TableRow text="Bienvenido a Ferretería Hernandez, tu nueva fuente chiapaneca para todas tus necesidades de herramientas y maquinaria. Nos enorgullece ser una empresa innovadora, arraigada en la rica tradición de Chiapas, y estamos comprometidos a brindarte productos de la más alta calidad." />
          <TableRow text="Somos más que una ferretería; somos un destino único que ofrece un surtido completo que va desde herramientas casuales hasta maquinaria pesada. En Ferretería Hernandez, creemos en equipar a nuestros clientes con las herramientas adecuadas para cualquier tarea, desde proyectos de bricolaje en el hogar hasta proyectos de construcción a gran escala." />
          <TableRow text="Lo que nos distingue es nuestra dedicación a la excelencia y a satisfacer las necesidades de nuestros clientes. Nuestro compromiso con la calidad se refleja en cada producto que ofrecemos. Ya sea que estés buscando la herramienta perfecta para un proyecto en casa o necesites maquinaria pesada para una tarea más grande, estamos aquí para ayudarte." />
          <TableRow text="Nuestra tienda no solo es un lugar para comprar herramientas, sino también un centro de recursos donde puedes obtener asesoramiento experto y encontrar inspiración para tus proyectos. Nos enorgullece ser parte de la comunidad chiapaneca y estamos emocionados de crecer juntos." />
          <TableRow text="En Ferretería Hernandez, estamos construyendo más que una ferretería; estamos construyendo una experiencia. Únete a nosotros en este emocionante viaje, donde la calidad se encuentra con la tradición chiapaneca y cada proyecto se convierte en una obra maestra." />
          <TableRow text="Descubre la diferencia en Ferretería Hernandez — donde la calidad y la variedad se encuentran para dar vida a tus proyectos." />
        </tbody>
      </table>
    </div>
  );
}

// Componente funcional para una fila de la tabla
function TableRow({ text }) {
  return (
    <tr>
      <td style={tableCellStyle}>{text}</td>
    </tr>
  );
}

// Estilos para el contenedor principal
const containerStyle = {
  maxWidth: '800px',
  margin: '0 auto',
  padding: '20px',
  fontFamily: 'Arial, sans-serif',
};

// Estilos para el encabezado
const headerStyle = {
  color: '#333',
  textAlign: 'center',
  marginBottom: '20px',
};

// Estilos para la tabla
const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  marginTop: '20px',
  border: '2px solid #000',
  borderRadius: '8px',
  overflow: 'hidden',
};

// Estilos para las celdas de la tabla
const tableCellStyle = {
  padding: '15px',
  borderBottom: '1px solid #000',
  border: '1px solid #000',
  borderRight: '1px solid #000',  // Añadido para el contorno derecho
  textAlign: 'justify',
  lineHeight: '1.6',
};

export default Acercade;
