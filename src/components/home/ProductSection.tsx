import { ProductListProps } from 'types/ResultDataType';
import styles from './ProductSection.module.css';
import Product from './Product';

interface ProductSectionProps {
  label: string;
  productList: ProductListProps[];
}

const ProductSection = ({ label, productList }: ProductSectionProps) => {
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
