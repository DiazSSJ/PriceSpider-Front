import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './product_card.css';
import carIcon from '../Resources/car.png';

function truncateText(text, maxLength) {
    if (text.length > maxLength) {
        return text.substring(0, maxLength - 3) + '...';
    }
    return text;
}

function formatPrecio(precio) {
    return precio.replace('COP', '$').replace(/\s/g, ''); // Elimina los espacios en blanco y reemplaza "COP" con "₱"
}


function ProductCard({ nombre, tienda, precio, imagen, url }) {
    const redirectToStore = () => {
        window.open(url, '_blank');
    };

    const truncatedNombre = truncateText(nombre, 25); // Trunca el nombre a 20 caracteres
    const truncatedTienda = truncateText(tienda, 25); // Trunca el nombre de la tienda a 20 caracteres
    const truncatedPrecio = formatPrecio(precio); // No se trunca el precio

    return (
        <div className="container-page p-3">
            <div className="container-img mb-2">
                <img src={imagen} alt="Watch" className="img" />
            </div>
            <div className="row mb-2">
                <div className="col">
                    <span className="block font-semibold" style={{ maxHeight: '2.4em', overflow: 'hidden' }}>{truncatedNombre}</span>
                </div>
            </div>
            <div className="row mb-2">
                <div className="col">
                    <span className="text-secondary" style={{ maxHeight: '1.2em', overflow: 'hidden' }}>{truncatedTienda}</span>
                </div>
            </div>
            <div className="row mb-4">
                <div className="col">
                    <span className="font-weight-bold fs-5">{truncatedPrecio}</span>
                </div>
            </div>

            <button className="button-card p-2 font-weight-bold" onClick={redirectToStore}>
                <div><img src={carIcon} className="mr-2 icon-button-card" /></div>
                <span className="fs-6">Ver en la tienda</span>
            </button>
        </div>
    );
}

export default ProductCard;
