import { motion } from 'framer-motion'
import { FiMinus, FiPlus, FiTrash2 } from 'react-icons/fi'
import { useCarrito } from '../context/CarritoContext.jsx'
import styles from './Carrito.module.css'

export default function CarritoItem({ item }) {
  const { agregar, quitar, eliminar } = useCarrito()

  return (
    <motion.li
      layout
      className={styles.item}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: 40 }}
    >
      <div className={styles.miniatura}>
        <img src={item.imagen} alt={item.nombre} />
      </div>

      <div className={styles.info}>
        <span className={styles.nombre}>{item.nombre}</span>
        <span className={styles.precioItem}>{(item.precio * item.cantidad).toFixed(2)}US</span>
      </div>

      <div className={styles.controles}>
        <button onClick={() => quitar(item.id)} aria-label={`Quitar una paleta de ${item.nombre}`}>
          <FiMinus />
        </button>
        <span>{item.cantidad}</span>
        <button onClick={() => agregar(item)} aria-label={`Agregar una paleta de ${item.nombre}`}>
          <FiPlus />
        </button>
      </div>

      <button className={styles.eliminar} onClick={() => eliminar(item.id)} aria-label={`Eliminar ${item.nombre}`}>
        <FiTrash2 />
      </button>
    </motion.li>
  )
}