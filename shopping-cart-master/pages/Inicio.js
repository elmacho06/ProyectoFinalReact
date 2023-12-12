import React from 'react';


function Inicio() {
    const handleSubmitSuscripcion = (event) => {
    event.preventDefault();
    
  };

  return (
    <div className="inicio-container">
      <h2>Ferretería Hernandez</h2>
      <p>Agrega Imagen de Fondo.</p>
      
      <form onSubmit={handleSubmitSuscripcion}>
        <label>
          Suscríbete para recibir nuestras noticias y ofertas:
          <input type="email" placeholder="Tu correo electrónico" />
        </label>
        <button type="submit">Suscribirse</button>
      </form>
      
      <div className="redes-sociales">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          Facebook
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
        
      </div>

            <div className="informacion-contacto">
        <p>Dirección: Calle Principal, Ciudad</p>
        <p>Teléfono: (992) 112-8321</p>
        <p>Email: melvinvazquez858@gmail.com</p>
      </div>
         
    </div>
  );
}

export default Inicio;