import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, FormControl, Button } from 'react-bootstrap';
import ProductCard from './componentes/product_card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import logo from './Resources/logo.png';
import LoadingSpinner from './componentes/Loading/Loading';

const App = () => {
  const [productName, setProductName] = useState('');
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('http://127.0.0.1:5000/scraping', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nombre_producto: productName
        })
      });

      if (response.ok) {
        const data = await response.json();
        setProducts(data);
        setIsLoading(false);
      } else {
        console.error('Error al realizar la solicitud al backend:', response.statusText);
      }
    } catch (error) {
      console.error('Error al realizar la solicitud al backend:', error);
    }
  };

  return (
    <div className="App">
      <LoadingSpinner isLoading={isLoading} /> {/* Usar el componente LoadingSpinner */}
      <div className='contenedor-padre d-flex justify-content-center'>
        {/* Agregar el título y el logo */}
        <div className="titulo-y-logo mb-4">
          <img src={logo} alt="Logo" className="logo" />
          <h1>PRICESPIDER</h1>
        </div>

        {/* Barra de búsqueda */}
        <div className="search-bar mb-4">
          <p>Encuentra las mejores ofertas en productos tecnológicos en línea. Utilizando técnicas avanzadas de web scraping, PriceSpider rastrea múltiples tiendas en línea y recopila información detallada sobre los precios de una amplia gama de productos tecnológicos, como teléfonos móviles, computadoras portátiles, tabletas y dispositivos electrónicos.</p>
          <Form inline onSubmit={e => e.preventDefault()}>
            <div className="search-input-container">
              <FormControl
                type="text"
                placeholder="Ingresa el producto que deseas buscar"
                className="mr-sm-2"
                value={productName}
                onChange={e => setProductName(e.target.value)}
              />
              <Button variant="link" className="search-button" onClick={handleSearch}>
                <FontAwesomeIcon icon={faSearch} />
              </Button>
            </div>
          </Form>
        </div>
        {/* Componente de productos */}
        <div className="product-cards-container">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              imagen={product.img}
              nombre={product.nombre}
              precio={product.precio}
              tienda={product.tienda}
              url={product.url}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
