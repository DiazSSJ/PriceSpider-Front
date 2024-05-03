import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product_card from './componentes/product_card';

const App = () => {
  return (
    <div className=" App container-fluid d-flex justify-content-center align-items-center" >
      <div className="row">
        <div className="col-md-10">
          <div className="d-flex flex-column">
            <Product_card/>
          </div>
        </div>
    
      </div>
    </div>
  );
}

export default App;
