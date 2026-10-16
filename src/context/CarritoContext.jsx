import { createContext, useContext, useState } from 'react'

const CarritoContext = createContext(null)

export function CarritoProvider({ children }) {
  const [items, setItems] = useState([])
  const [abierto, setAbierto] = useState(false)

  const agregar = (producto) => {
    setItems((prev) => {
      const existe = prev.find((item) => item.id === producto.id)
      if (existe) {
        return prev.map((item) =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
        )
      }
      return [
        ...prev,
        {
          id: producto.id,
          nombre: producto.nombre,
          precio: producto.precio,
          imagen: producto.imagen,
          cantidad: 1,
        },
      ]
    })
  }

  const quitar = (id) => {
    setItems((prev) =>
      prev
        .map((item) => (item.id === id ? { ...item, cantidad: item.cantidad - 1 } : item))
        .filter((item) => item.cantidad > 0)
    )
  }

  const eliminar = (id) => setItems((prev) => prev.filter((item) => item.id !== id))
  const vaciar = () => setItems([])

  const cantidadTotal = items.reduce((acc, item) => acc + item.cantidad, 0)
  const total = items.reduce((acc, item) => acc + item.cantidad * item.precio, 0)

  const value = {
    items,
    agregar,
    quitar,
    eliminar,
    vaciar,
    cantidadTotal,
    total,
    abierto,
    abrir: () => setAbierto(true),
    cerrar: () => setAbierto(false),
  }

  return <CarritoContext.Provider value={value}>{children}</CarritoContext.Provider>
}

export function useCarrito() {
  const contexto = useContext(CarritoContext)
  if (!contexto) {
    throw new Error('useCarrito debe usarse dentro de CarritoProvider')
  }
  return contexto
}