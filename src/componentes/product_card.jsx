import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './product_card.css'
import carIcon from '../Resources/car.png'


function ProductCard() {
    return (
        <div className="container-page p-3" >
            <div className="container-img mb-2  ">
                <img src="https://primefaces.org/cdn/primereact/images/landing/air-jordan.png" alt="Watch" className="img" />
            </div>
            <div className="row mb-4">
                <div className="col">
                    <div className='row'>
                        <span className="block font-semibold">Nombre producto</span>
                        <span className="text-secondary">Tienda producto</span>
                    </div>
                </div>
                <div className="col-4 d-flex justify-content-end align-items-center">
                    <span className="font-weight-bold fs-3">$990</span>
                </div>
            </div>

            <button className="button-card p-2 font-weight-bold">
                <div><img src={carIcon} className="mr-2 icon-button-card" /></div>
                <span className="fs-6">Ver en la tienda</span>
            </button>

        </div>
    );

}

export default ProductCard;
