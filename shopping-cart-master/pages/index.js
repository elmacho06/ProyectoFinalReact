import React from 'react';

function App() {
  const headerStyle = {
    padding: '20px',
    color: 'green',
    position: 'relative',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const titleStyle = {
    color: 'black',
  };

  const redTextStyle = {
    color: 'red',
  };

  const yellowTextStyle = {
    color: 'yellow',
  };

  const buttonContainerStyle = {
    position: 'absolute',
    top: '88px',
    left: '60%',
    transform: 'translateX(30%)',
    display: 'flex',
    gap: '10px',
  };

  const buttonStyle = {
    backgroundColor: '#4DB6AC', // Color verde agua
    color: 'white',
    padding: '10px',
    border: 'none',
    cursor: 'pointer',
  };

  const blackButtonStyle = {
    backgroundColor: 'black', // Color negro
    color: 'white',
    padding: '10px',
    border: 'none',
    cursor: 'pointer',
  };

  const loginContainerStyle = {
    backgroundColor: '#e0e0e0', // Fondo más notorio
    padding: '20px',
    borderRadius: '10px',
    marginTop: '20px',
    width: '300px',
    textAlign: 'center',
    margin: 'auto',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  const loginTitleStyle = {
    color: 'black',
    fontSize: '24px',
    marginBottom: '20px',
  };

  const loginFormStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const handleSubmitSuscripcion = (e) => {
    e.preventDefault();
    // Agrega la lógica de manejo de la suscripción aquí si es necesario
    // Puedes utilizar el estado de React para gestionar los datos del formulario.
  };

  const handleLogin = () => {
    window.location.href = '/index4';
  };

  const handleServices = () => {
    window.location.href = '/Servicios';
  };

  const handleHome = () => {
    window.location.href = '/Acercade';
  };

  return (
    <div className="App">
      <header className="App-header" style={headerStyle}>
        <h1 style={titleStyle}>Ferretería Hernández</h1>
        <h2 style={{ backgroundColor: '#000', padding: '10px' }}>
          <span style={yellowTextStyle}>Online</span> <span style={redTextStyle}>Store</span>
        </h2>
        <div style={buttonContainerStyle}>
          <button style={blackButtonStyle} onClick={handleLogin}>
            Inicia Sesion
          </button>
          <button style={blackButtonStyle} onClick={handleServices}>
            Servicios
          </button>
          <button style={blackButtonStyle} onClick={handleHome}>
            Acerca De Nosotros
          </button>
        </div>
      </header>

      <div style={loginContainerStyle}>
        <h2 style={loginTitleStyle}>¡Suscríbete a nuestras noticias y ofertas!</h2>
        <form style={loginFormStyle} onSubmit={handleSubmitSuscripcion}>
          <label>
            correo electrónico:
            <input type="email" placeholder="Ingresa tu correo electrónico" style={{ margin: '10px 0' }} />
          </label>
          <button type="submit" style={buttonStyle}>
            Suscribirse
          </button>
        </form>
        <div className="redes-sociales" style={{ marginTop: '20px' }}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            Facebook
          <br></br></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            Instagram
          </a><br></br>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
        </div>
        <div className="informacion-contacto" style={{ marginTop: '20px', color: 'black' }}>
          <p>Dirección: Calle Principal, Ciudad</p>
          <p>Teléfono: (992) 112-8321</p>
          <p>Email: melvinvazquez858@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default App;
