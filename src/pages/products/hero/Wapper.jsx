import { useParams } from "react-router-dom";
import ProductDetail from "./ProductDetail";

const ProductDetailWrapper = () => {
  const { id } = useParams(); 
  return <ProductDetail id={id} />; 
};

export default ProductDetailWrapper;
