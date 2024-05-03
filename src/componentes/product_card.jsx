import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './product_card.css'
import carIcon from '../Resources/car.png'


function Product_card() {


    return (
        <div className="container-page p-4" >
            <div className="container-img mb-4">
                <img src="https://primefaces.org/cdn/primereact/images/landing/air-jordan.png" alt="Watch" className="img" />
            </div>
            <div className="row mb-4">
                <div className="col">
                    <div className='row'>
                        <span className="block font-semibold fs-3">Nombre producto</span>
                        <span className="text-secondary fs-5">Tienda producto</span>
                    </div>
                </div>
                <div className="col d-flex justify-content-end align-items-center">
                    <span className="font-weight-bold fs-1">$990</span>
                </div>
            </div>

            <button className="button-card p-3 font-weight-bold">
                <div><img src={carIcon} className="mr-2 icon-button-card" /></div>
                <span className="fs-5">Ver en la tienda</span>
            </button>

        </div>
    );

}

export default Product_card;
