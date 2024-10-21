import { ProductListProps } from 'types/ResultDataType';
import styles from './ProductSection.module.css';
import { Link } from 'react-router-dom';

const Product = ({ product }: any) => {
  return (
    <Link to="/detail" className={`${styles['product-box']}`}>
      <div>
        <img src={require('../../assets/cloth1.png')} alt=""></img>
        <div className={`${styles['product-name']}`}>{product.productName}</div>
        <div className={`${styles['product-price']}`}>
          <strong>{product.productPrice}</strong>원
        </div>
      </div>
    </Link>
  );
};

const ProductSection = ({ label, productList }: any) => {
  const labelClass =
    label === '여성패션' ? styles['text-red'] : styles['text-blue'];

  return (
    <section className={`${styles['product-section']}`}>
      <div className={`${styles['product-section_label']} ${labelClass}`}>
        {label}
      </div>
      <img
        src={require('../../assets/product.png')}
        alt="여성패션이미지"
        className={`${styles['big-image']}`}
      ></img>
      <div className={`${styles['product-section_list']}`}>
        {productList.map((product: ProductListProps) => (
          <Product key={product.productId} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
