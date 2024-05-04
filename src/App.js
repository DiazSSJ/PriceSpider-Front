import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, FormControl, Button } from 'react-bootstrap';
import ProductCard from './componentes/product_card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import logo from './Resources/logo.png'

const App = () => {
  // Función para generar un array de 10 elementos (puedes usar Array(10).fill(0) para generar un array)
  const productCards = Array.from({ length: 0 }, (_, index) => (
    <ProductCard key={index} className="product-card" />
  ));

  return (
    <div className="App">
      <div className='contenedor-padre d-flex justify-content-center'>
        {/* Agregar el título y el logo */}
        <div className="titulo-y-logo mb-4">
          <img src={logo} alt="Logo" className="logo" />
          <h1>PRICESPIDER</h1>
        </div>

        {/* Barra de búsqueda */}
        <div className="search-bar mb-4">
          <p>Encuentra las mejores ofertas en productos tecnológicos en línea. Utilizando técnicas avanzadas de web scraping, PriceSpider rastrea múltiples tiendas en línea y recopila información detallada sobre los precios de una amplia gama de productos tecnológicos, como teléfonos móviles, computadoras portátiles, tabletas y dispositivos electrónicos.</p>
          <Form inline>
            <div className="search-input-container">
              <FormControl type="text" placeholder="Ingresa el producto que deseas buscar" className="mr-sm-2" />
              <Button variant="link" className="search-button">
                <FontAwesomeIcon icon={faSearch} />
              </Button>
            </div>
          </Form>
        </div>
        {/* Componente de productos */}
        <div className="product-cards-container">
          {productCards}
        </div>
      </div>
    </div>
  );
};

export default App;
