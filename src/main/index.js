import React from "react";
import './index.css';
import axios from "axios";

function MainPage(){
  const [products, setProducts] = React.useState([]);
  React.useEffect(function(){
    axios.get('https://b6fecd73-c9ae-464d-9e2b-bc7e80a24bab.mock.pstmn.io/products')
    .then(function(result){
      const products = result.data.products;
      setProducts(products);
    }).catch(function(error){
      console.error("에러발생:", error);
    })
  },[]);
  return (
    <div>
      <div id="header">
        <div id="header-area">
            <img src="images/icons/logo.png" />
        </div>
      </div>
      <div id="body">
          <div id="banner">
              <img src="images/banner/banner1.jpg" />
          </div>
          <h1>인기 상품</h1>
          <div id="product-list">
            {
              products.map(function(product, index){
                return (
                  <div className="product-card">
                    <div>
                      <img className="product-img" src={product.imageUrl}/>
                    </div>
                    <div className="product-content">
                      <span className="product-name">
                        {product.name}
                      </span>
                      <span className="product-price">
                        {product.price}원
                      </span>
                      <div className="product-seller">
                        <img className="product-avatar" src="images/icons/icon.png" />
                        <span>{product.seller}</span>
                      </div>
                    </div>
                  </div>
                );
              })
            }

          </div>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default MainPage;