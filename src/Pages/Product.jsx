
import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrums from "../components/Breadcrums/Breadcrums";
import ProductDisplay from "../components/ProductDisplay/ProductDisplay";
import Description from "../components/Description/Description";
import RelatedProduct from "../components/RelatedProduct/RelatedProduct";
import "./css/Product.css"
const Product = () => {
    const { all_product } = useContext(ShopContext);
    const { productId } = useParams();
    const product = all_product.find((e) => e.id === parseInt(productId));  // It will return only 1 product data i.e- 1 or 123 or etc. for product variable
    // you can also write  Number instead of parseInt
    //product function will give you everything whatall_product have like - id,name,image,category,oldPrice,newprice etc.
    return (
        <div className="product-container">
        
            <Breadcrums product={product} />
            {/* so we passed the product function as a prop that we'll use in Breadcrums.jsx to show our specifc product name and category like men, women  */}
            <ProductDisplay product={product} />
            {/* 4 small picture and 1 big pic and other select the sizes*/}
            <Description />
            {/* description about cart items */}
            <RelatedProduct/>
        </div>
    );
}

export default Product;
