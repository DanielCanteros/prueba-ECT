import { AnimatePresence, motion } from 'framer-motion'
import { PiCaretDoubleLeftLight, PiCaretDoubleRightLight } from 'react-icons/pi'
import { useCarrito } from '../context/CarritoContext.jsx'
import styles from './Inicio.module.css'

// Convierte píxeles de Figma a una medida que se adapta a la pantalla
const px = (valor) => `calc(${valor} * var(--px))`

const variantes = {
  entrar: (direccion) => ({
    x: direccion > 0 ? '100%' : direccion < 0 ? '-100%' : 0,
  }),
  centro: { x: 0 },
  salir: (direccion) => ({
    x: direccion > 0 ? '-100%' : '100%',
  }),
}

export default function InicioHero({ producto, direccion, onAnterior, onSiguiente }) {
  const { agregar } = useCarrito()
  const { colores } = producto

  return (
    <section className={styles.hero}>
      <AnimatePresence initial={false} custom={direccion}>
        <motion.div
          key={producto.id}
          className={styles.slide}
          custom={direccion}
          variants={variantes}
          initial="entrar"
          animate="centro"
          exit="salir"
          transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
          style={{
            background: `linear-gradient(180deg, ${colores.fondoArriba} 0%, ${colores.fondoAbajo} 100%)`,
          }}
        >
          <div className={styles.escenario}>
            {producto.textos.map((t, i) => (
              <span
                key={i}
                className={styles.textoFondo}
                style={{
                  fontFamily: producto.fuenteFondo,
                  fontSize: px(t.tamano),
                  top: px(t.y),
                  ...(t.derecha !== undefined ? { right: px(1440 - t.derecha) } : { left: px(t.x) }),
                  color: colores.textoFondo,
                  transform: `scaleX(${t.escalaX ?? 1})`,
                  transformOrigin: t.derecha !== undefined ? 'right' : 'left',
                }}
              >
                {t.texto}
              </span>
            ))}

            {producto.decoraciones.map((deco, i) => (
              <img
                key={i}
                src={deco.src}
                alt=""
                className={styles.decoracion}
                style={{ left: px(deco.x), top: px(deco.y), width: px(deco.w) }}
              />
            ))}

            <motion.img
              src={producto.imagen}
              alt={`Paleta de ${producto.nombre}`}
              className={styles.paleta}
              style={{ left: px(producto.paleta.x), top: px(producto.paleta.y), width: px(producto.paleta.w) }}
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </AnimatePresence>

      <div className={styles.escenario}>
        <button className={`${styles.flecha} ${styles.izquierda}`} onClick={onAnterior} aria-label="Producto anterior">
          <PiCaretDoubleLeftLight />
        </button>
        <button className={`${styles.flecha} ${styles.derecha}`} onClick={onSiguiente} aria-label="Producto siguiente">
          <PiCaretDoubleRightLight />
        </button>

        <motion.button className={styles.botonComprar} whileTap={{ scale: 0.93 }} onClick={() => agregar(producto)}>
          Comprar
        </motion.button>
        <span className={styles.precio}>{producto.precio.toFixed(2)}US</span>
      </div>
    </section>
  )
}