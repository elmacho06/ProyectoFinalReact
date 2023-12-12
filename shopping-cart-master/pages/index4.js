// Login.js
import React, { useState, useEffect } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    const users = [
      { username: 'melvin@gmail.com', password: '12345', panel: 'index1' },
      { username: 'proveedor@gmail.com', password: '12portugal', panel: 'ls' },
    ];

    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      console.log(`Inicio de sesión exitoso para el usuario: ${username}`);

     
      localStorage.setItem('user', JSON.stringify(user));

      // Redirigir al panel correspondiente
      window.location.href = `/${user.panel}`;
    } else {
      setErrorMessage('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
    }
  };

  useEffect(() => {
    // Verificar la sesión del usuario al cargar el componente
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.panel) {
      // El usuario está autenticado

      // Restaurar información del carrito u otros estados 
      const cartData = JSON.parse(localStorage.getItem('cart'));
      // restaurar otros estados si es necesario
    }
  }, []); 

  return (
    <div style={styles.loginContainer}>
      <h2 style={styles.heading}>Iniciar Sesión</h2>
      {errorMessage && <p style={styles.error}>{errorMessage}</p>}
      <form style={styles.form}>
        <label style={styles.label} htmlFor="username">
          Usuario:
        </label>
        <input
          style={styles.input}
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label style={styles.label} htmlFor="password">
          Contraseña:
        </label>
        <input
          style={styles.input}
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button style={styles.button} type="button" onClick={handleLogin}>
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};

const styles = {
  loginContainer: {
    backgroundColor: '#87CEEB', // Color azul cielo
    padding: '30px',
    borderRadius: '15px',
    width: '400px',
    margin: 'auto',
    marginTop: '100px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Sombra ligera
  },
  heading: {
    textAlign: 'center',
    color: '#000', // Cambiado a negro    marginBottom: '20px',
    fontSize: '28px',
    fontWeight: 'bold', // Hacer el texto negrita

  },
  error: {
    color: '#FF0000', // Texto rojo
    marginBottom: '15px',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  label: {
    marginTop: '10px',
    color: '#000',  // Texto blanco
    fontSize: '18px',
  },
  input: {
    padding: '12px',
    margin: '5px 0',
    width: '100%',
    borderRadius: '8px',
    border: 'none',
    color: '#000', 
    backgroundColor: '#fff', // Fondo blanco
  },
  button: {
    
    backgroundColor: '#fff', // Fondo blanco
    color: '#87CEEB', // Color azul cielo
    padding: '15px',
    borderRadius: '8px',
    cursor: 'pointer',
    marginTop: '15px',
    width: '100%',
    border: 'none',
    fontSize: '18px',
    color: '#000', 
  },
};

export default Login;
