import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { IoClose } from 'react-icons/io5'
import { useCarrito } from '../context/CarritoContext.jsx'
import CarritoItem from './CarritoItem.jsx'
import styles from './Carrito.module.css'

export default function CarritoPage({ producto }) {
  const { items, total, abierto, cerrar, vaciar } = useCarrito()
  const [compraHecha, setCompraHecha] = useState(false)
  const { colores } = producto

  const finalizarCompra = () => {
    vaciar()
    setCompraHecha(true)
  }

  const cerrarPanel = () => {
    cerrar()
    setCompraHecha(false)
  }

  return (
    <AnimatePresence>
      {abierto && (
        <>
          <motion.div
            className={styles.fondo}
            onClick={cerrarPanel}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.aside
            className={styles.panel}
            style={{ background: `linear-gradient(180deg, ${colores.fondoArriba} 0%, ${colores.fondoAbajo} 100%)` }}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.45, ease: [0.65, 0, 0.35, 1] }}
          >
            <div className={styles.cabecera}>
              <h2 className={styles.titulo}>Carrito</h2>
              <button className={styles.cerrar} onClick={cerrarPanel} aria-label="Cerrar carrito">
                <IoClose />
              </button>
            </div>

            {items.length === 0 ? (
              <p className={styles.vacio}>
                {compraHecha ? '¡Gracias por tu compra!' : 'Tu carrito está vacío. Elige un sabor y pulsa Comprar.'}
              </p>
            ) : (
              <ul className={styles.lista}>
                <AnimatePresence>
                  {items.map((item) => (
                    <CarritoItem key={item.id} item={item} />
                  ))}
                </AnimatePresence>
              </ul>
            )}

            <div className={styles.resumen}>
              <div className={styles.total}>
                <span>Total</span>
                <span>{total.toFixed(2)}US</span>
              </div>
              <button className={styles.botonFinalizar} onClick={finalizarCompra} disabled={items.length === 0}>
                Finalizar compra
              </button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}