import { useState } from 'react'
import Header from '../components/header/Header.jsx'
import InicioHero from './InicioHero.jsx'
import CarritoPage from '../carrito/page.jsx'
import { productos } from '../data/productos.js'
import styles from './Inicio.module.css'

export default function InicioPage() {
  // indice = producto actual, direccion = 1 (siguiente) o -1 (anterior)
  const [[indice, direccion], setEstado] = useState([0, 0])
  const producto = productos[indice]

  const cambiarProducto = (paso) => {
    setEstado(([actual]) => [(actual + paso + productos.length) % productos.length, paso])
  }

  const irAlInicio = () => {
    setEstado(([actual]) => (actual === 0 ? [0, 0] : [0, -1]))
  }

  const { colores } = producto
  const variablesDeColor = {
    '--color-header': colores.header,
    '--color-texto-header': colores.textoHeader,
    '--color-texto': colores.texto,
    '--color-boton': colores.fondoBoton,
    '--color-borde-boton': colores.bordeBoton,
    '--fondo-arriba': colores.fondoArriba,
    '--fondo-abajo': colores.fondoAbajo,
  }

  return (
    <main className={styles.pagina} style={variablesDeColor}>
      <Header titulo={producto.nombre} onHome={irAlInicio} />
      <InicioHero
        producto={producto}
        direccion={direccion}
        onAnterior={() => cambiarProducto(-1)}
        onSiguiente={() => cambiarProducto(1)}
      />
      <CarritoPage producto={producto} />
    </main>
  )
}