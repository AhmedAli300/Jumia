
import axios from 'axios';
import './Products.css'
import { useEffect, useState } from 'react';

const Products = () => {

  const [products, setproducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/products")
      .then((res) => setproducts(res.data) )
      .catch((err) => console.error("Error get products:", err));
      
  }, []);
  
  return (
    <>
    {/* <h1>havcjhajh</h1> */}
    {console.log(products.data)}
    
    {console.log(products.data?.[0].images[0])}
    <img src={products.data?.[0].images[0]} alt="ascsa" />
    </>
  );
};

export default Products;
