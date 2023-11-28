import styles from './product.module.css'
import { ProductProps } from './types'

const Product = (props: ProductProps) => {
  const {title, description, stock} = props
  return (
    <div className={styles.productContainer}>
        <h1>{title}</h1>
        <p>{description ? description : 'Articulo sin descripción'}</p>
        <p>Stock: {stock ? stock : 400}</p>
        <button>Comprar</button>
    </div>
  )
}

export default Product