import { ProductListProps } from 'types/ResultDataType';
import styles from './ProductSection.module.css';
import { Link } from 'react-router-dom';

interface ProductProps {
  key: number;
  product: ProductListProps;
}

const Product = ({ product }: ProductProps) => {
  return (
    <Link
      to={`/detail/${product.productId}`}
      className={`${styles['product-box']}`}
    >
      <div>
        <img src={require('../../assets/cloth1.png')} alt=""></img>
        <div className={`${styles['product-name']}`}>{product.productName}</div>
        <div className={`${styles['product-price']}`}>
          <strong>{Number(product.productPrice).toLocaleString()}</strong>원
        </div>
      </div>
    </Link>
  );
};

export default Product;
