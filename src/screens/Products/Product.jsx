

import { useEffect, useState } from "react";
import styles from "./Product.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

const Products = () => {
  const [allProducts, setAllProducts] = useState([]);
  const filteredProducts = useSelector((state) => state.filter.filteredProducts);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/products")
      .then((res) => setAllProducts(res.data.data))
      .catch((err) => console.error(err));
  }, []);

  const productsToDisplay = filteredProducts.length > 0 ? filteredProducts : allProducts;

  return (
    <div className="container my-5">
      <h2 className={`text-end fs-4 fw-bold my-4 p-2 ${styles.bgBauty}`}>
        اخر العروض
      </h2>
      <div className="row">
        {productsToDisplay.slice(0, 6).map((product) => (
          <div key={product._id} className="col-md-2">
            <Link to={`/products/${product._id}`} className="text-decoration-none text-dark">
              <div className={styles.productCard}>
                <img
                  className="w-100 img-fluid"
                  src={product.images[0]?.secure_url}
                  alt={product.name}
                />
                <div className="text-end p-2">
                  <h6 className="m-0">{product.name}</h6>
                  <span>{product.price} جنيه</span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <h2 className={`text-end fs-4 fw-bold my-4 p-2 ${styles.bgFff2d6}`}>
        منتجات مختارة
      </h2>
      <div className="row">
        {productsToDisplay.slice(6, 11).map((product) => (
          <div key={product._id} className="col-md-2">
            <Link to={`/products/${product._id}`} className="text-decoration-none text-dark">
              <div className={styles.productCard}>
                <img
                  className="w-100 img-fluid"
                  src={product.images[0]?.secure_url}
                  alt={product.name}
                />
                <div className="text-end p-2">
                  <h6 className="m-0">{product.name}</h6>
                  <span>{product.price} جنيه</span>
                </div>
              </div>
            </Link>
          </div>
        ))}

      </div>
      <div className="row">
        {productsToDisplay.slice(11, 17).map((product) => (
          <div key={product._id} className="col-md-2">
            <Link to={`/products/${product._id}`} className="text-decoration-none text-dark">
              <div className={styles.productCard}>
                <img
                  className="w-100 img-fluid"
                  src={product.images[0]?.secure_url}
                  alt={product.name}
                />
                <div className="text-end p-2">
                  <h6 className="m-0">{product.name}</h6>
                  <span>{product.price} جنيه</span>
                </div>
              </div>
            </Link>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Products;














// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import styles from './Product.module.css';
// import { Link } from "react-router-dom";

// const Products = () => {
//   const [productsList, setProductList] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:3000/api/v1/products")
//       .then(res => {
//         console.log("productsList", res.data.data);
//         setProductList(res.data.data);
//       })
//       .catch(err => console.error(err));
//   }, []);

//   return (
//     <div className="container my-5">

//       <h2 className={`text-end fs-4 fw-bold my-4 p-2 ${styles.bgBauty}`}>اخر العروض</h2>
//       <div className="row">
//         {productsList.slice(0, 6).map((product) => (
//           <div key={product._id} className="col-md-2">
//             <Link to={`/products/${product._id}`} className="text-decoration-none text-dark">
//               <div className={styles.productCard}>
//                 {product.images && product.images.length > 0 && product.images[0].secure_url ? (
//                   <img className="w-100 img-fluid" src={product.images[0].secure_url} alt={product.name} />
//                 ) : (
//                   <img className="w-100 img-fluid" src="/placeholder.jpg" alt="No Image" />
//                 )}
//                 <div className="text-end p-2">
//                   <h6 className="m-0">{product.name}</h6>
//                   <span>{product.price} جنيه</span>
//                 </div>
//               </div>
//             </Link>
//           </div>
//         ))}
//       </div>

//       <h2 className={`text-end fs-4 fw-bold my-4 p-2 ${styles.bgFff2d6}`}>منتجات مختارة</h2>
//       <div className="row">
//         {productsList.slice(6, 11).map((product) => (
//           <div key={product._id} className="col-md-2">
//             <Link to={`/products/${product._id}`} className="text-decoration-none text-dark">
//               <div className={styles.productCard}>
//                 {product.images && product.images.length > 0 && product.images[0].secure_url ? (
//                   <img className="w-100 img-fluid" src={product.images[0].secure_url} alt={product.name} />
//                 ) : (
//                   <img className="w-100 img-fluid" src="/placeholder.jpg" alt="No Image" />
//                 )}
//                 <div className="text-end p-2">
//                   <h6 className="m-0">{product.name}</h6>
//                   <span>{product.price} جنيه</span>
//                 </div>
//               </div>
//             </Link>
//           </div>
//         ))}
//       </div>

//     </div>
//   );
// };

// export default Products;
