import { useEffect } from "react";
import { useState } from "react";
import Navbar from "./Navbar";
import Modal from "./Modal";

const Shop = function () {
  const [products, setProducts] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchData = async function () {
      try {
        const response = await fetch("https://fakestoreapi.com/products", {
          mode: "cors",
        });
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleProductClick = function (product) {
    setSelectedProduct(product);
  }
  return (
    <>
    <Navbar />
    {/* show products in page */}
    <div className="products">
      {products?(
      products.map((product) => (
        <div key={product.id} className="product" onClick={()=>handleProductClick(product)}>
            <h4 className="producttitle">{product.title}</h4>
            <img src={product.image} alt="" className="productimg"/>
            <p className="productprice">${product.price}</p>
            <p className="rating">Rating:{product.rating.rate}/5({product.rating.count})</p>
        </div>
      ))
    ): 
    <p>Loading...</p>
  }
  {/* click product to open modal */}
  {selectedProduct && (
  <Modal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
)}
    </div>
    </>
  );
};

export default Shop;
