// Datos de cada sabor.
// Todas las medidas están en PÍXELES DE FIGMA (frame de 1440 x 1024):
//   x = posición X, y = posición Y, w = ancho (lo que ves en el panel derecho de Figma).
// En los textos: 'derecha' = dónde termina la palabra, tamano = tamaño de letra,
//   escalaX = para hacer las letras más angostas (1 = normal).
// Si quieres mover algo, copia los valores X, Y, W de Figma y pégalos aquí.

export const productos = [
  {
    id: 'frutilla',
    nombre: 'Frutilla',
    precio: 2.99,
    imagen: '/img/frutilla/paleta.webp',
    paleta: { x: 569, y: 108, w: 294 },
    fuenteFondo: "'Anton', sans-serif",
    textos: [
      { texto: 'FRUTILLA', derecha: 715, y: 177, tamano: 298 },
      { texto: 'FRUTILLA', x: 900, y: 535, tamano: 298 },
    ],
    colores: {
      fondoArriba: '#F9E7EA',
      fondoAbajo: '#EFCAD3',
      header: '#EADADC',
      textoHeader: '#FFFFFF',
      textoFondo: '#FAEBEE',
      texto: '#141414',
      fondoBoton: 'rgba(255, 255, 255, 0.2)',
      bordeBoton: '#FFFFFF',
    },
    decoraciones: [
      { src: '/img/frutilla/fresa-entera.webp', x: 496, y: 235, w: 100 },
      { src: '/img/frutilla/fresa-mitad-2.webp', x: 829, y: 206, w: 138 },
      { src: '/img/frutilla/fresa-entera.webp', x: 463, y: 517, w: 115 },
      { src: '/img/frutilla/fresa-mitad.webp', x: 408, y: 581, w: 115 },
      { src: '/img/frutilla/fresa-mitad-2.webp', x: 498, y: 579, w: 120 },
      { src: '/img/frutilla/fresas-salpicadura.webp', x: 856, y: 488, w: 206 },
      { src: '/img/frutilla/fresa-mitad.webp', x: 1292, y: 892, w: 170 },
    ],
  },
  {
    id: 'chocolate',
    nombre: 'Chocolate',
    precio: 2.99,
    imagen: '/img/chocolate/paleta.webp',
    paleta: { x: 586, y: 159, w: 260 },
    fuenteFondo: "'Archivo Black', sans-serif",
    textos: [
      { texto: 'chocolate', derecha: 878, y: 172, tamano: 346, escalaX: 0.82 },
      { texto: 'CHOCOLATE', x: 799, y: 493, tamano: 379, escalaX: 0.8 },
    ],
    colores: {
      fondoArriba: '#060404',
      fondoAbajo: '#6E4444',
      header: '#060404',
      textoHeader: '#FFFFFF',
      textoFondo: '#FAEDED',
      texto: '#FFFFFF',
      fondoBoton: 'rgba(0, 0, 0, 0.2)',
      bordeBoton: '#F3E3E3',
    },
    decoraciones: [
      { src: '/img/chocolate/chocolate-trozo.webp', x: 980, y: 212, w: 210 },
      { src: '/img/chocolate/chocolate-trozos-rizos.webp', x: 252, y: 520, w: 328 },
      { src: '/img/chocolate/chocolate-trozo.webp', x: 1255, y: 885, w: 215 },
    ],
  },
  {
    id: 'banana',
    nombre: 'Banana',
    precio: 2.99,
    imagen: '/img/banana/paleta.webp',
    paleta: { x: 599, y: 137, w: 260 },
    fuenteFondo: "'Anton', sans-serif",
    textos: [
      { texto: 'BANANA', derecha: 540, y: 151, tamano: 298 },
      { texto: 'BANANA', x: 893, y: 494, tamano: 298 },
    ],
    colores: {
      fondoArriba: '#F8E23A',
      fondoAbajo: '#D9C6C9',
      header: '#ECD82D',
      textoHeader: '#FFFFFF',
      textoFondo: '#FAEEEE',
      texto: '#FFFFFF',
      fondoBoton: 'rgba(255, 255, 255, 0.08)',
      bordeBoton: '#F5EFE0',
    },
    decoraciones: [
      { src: '/img/banana/banana-rodaja.webp', x: 891, y: 138, w: 202 },
      { src: '/img/banana/banana-rodajas.webp', x: 277, y: 549, w: 328 },
      { src: '/img/banana/banana-rodaja.webp', x: 1296, y: 916, w: 180 },
    ],
  },
]