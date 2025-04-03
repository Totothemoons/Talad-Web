import { useState, useEffect } from "react";
import "./App.css"


function App() {


const [products, setProducts] = useState([]);
useEffect(() => {
  const fetchData = async () => {
    try {
      let response = await fetch("src/assets/data.json"); // Corrected path
      let data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  fetchData();
}, []);

function preview(){

}  

  return (
    <div className="donation-list">
      {products.map((product, index) => (
        <div key={index} className="product-card" onClick={() => {

          alert(` hello this is ${product.producttype} at ${product.location}`)
        }}>
            <div className="card-wrapper">
                <div className="Pic">
                    <img src={product.image} alt={product.producttype} />
                </div>
                
                <div className="info">
                    <h2>{product.producttype}</h2>

                    <div className="info-section">
                      <div>
                        <p>{product.location}</p>
                        <p>{product.amount} {product.unit}</p>
                        <p>{product.availability}</p>
                      </div>
                      
                      <div>
                        <p>{product.price}</p>
                        <p>{product.quality}</p>
                      </div>
                      
                    </div>

                </div>
                
            </div>
        </div>
      ))}
    </div>
  );
}

export default App;
