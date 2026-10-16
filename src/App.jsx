import { MotionConfig } from 'framer-motion'
import InicioPage from './inicio/page.jsx'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <InicioPage />
    </MotionConfig>
  )
}