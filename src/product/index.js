import { useParams } from 'react-router-dom';
import axios from "axios";
import './index.css';
import { useEffect, useState } from "react";

function ProductPage(){
  const {id} = useParams();
  const [product, setProduct] = useState(null);
  useEffect(function(){
    axios.get(`https://b6fecd73-c9ae-464d-9e2b-bc7e80a24bab.mock.pstmn.io/products/${id}`)
    .then(function(result){
      setProduct(result.data);
    }).catch(function(error){
      console.error(error);
    });
  },[]);

  if(product === null){
    return <h1>상품 정보를 받고 있습니다...</h1>
  }

  return (
    <div>
      <div id="image-box">
        <img src={"/"+product.imageUrl} />
      </div>
      <div id="profile-box">
        <img src="/images/icons/icon.png"/>
        <span>{product.seller}</span>
      </div>
      <div id="contents-box">
        <div id="name">{product.name}</div>
        <div id="price">{product.price}원</div>
        <div id="createAt">2021년 2월 22일</div>
        <div id="description">{product.description}</div>
      </div>
    </div>
  );
}

export default ProductPage;