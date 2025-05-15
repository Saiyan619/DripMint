import './App.css'
import Header from './header/Header'
import Preloader from './preloader/Preloader'
import { motion, AnimatePresence } from 'framer-motion';
import { GlobalContext } from './utils/globalContext';


function App() {

  return (
    <GlobalContext>
    <AnimatePresence>
    <div>
      <Preloader />
      <div>
        <Header />
      </div>
      </div>
      </AnimatePresence>
      </GlobalContext>
  )
}

export default App
