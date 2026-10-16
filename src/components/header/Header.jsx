import { AnimatePresence, motion } from 'framer-motion'
import { FaShoppingCart } from 'react-icons/fa'
import { useCarrito } from '../../context/CarritoContext.jsx'
import styles from './Header.module.css'

export default function Header({ titulo, onHome }) {
  const { cantidadTotal, abrir } = useCarrito()

  return (
    <header className={styles.header}>
      <div className={styles.contenido}>
        <div className={styles.titulo}>
          <AnimatePresence mode="wait">
            <motion.span
              key={titulo}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.25 }}
            >
              {titulo}
            </motion.span>
          </AnimatePresence>
        </div>

        <button className={styles.home} onClick={onHome}>
          Home
        </button>

        <button className={styles.carrito} onClick={abrir} aria-label="Abrir carrito">
          <FaShoppingCart className={styles.icono} />
          <motion.span
            key={cantidadTotal}
            className={styles.contador}
            initial={{ scale: 1.6 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
          >
            ({cantidadTotal})
          </motion.span>
        </button>
      </div>
    </header>
  )
}