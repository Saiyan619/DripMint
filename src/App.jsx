import './App.css'
import Header from './header/Header'
import Preloader from './preloader/Preloader'
import { motion, AnimatePresence } from 'framer-motion';
import { GlobalContext } from './utils/globalContext';
import SectionOne from './section1/SectionOne';
import NFTCarousel from './nft showcases/NFTCarousel';
import Showcase from './nft showcases/Showcase';


function App() {

  return (
    <GlobalContext>
    <AnimatePresence>
    <div>
      <Preloader />
      <div>
        <Header />
            <SectionOne />
            <Showcase />
      </div>
      </div>
      </AnimatePresence>
      </GlobalContext>
  )
}

export default App
