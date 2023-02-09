import Product from './components/Product';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="App">
      <header className=" ">
        <Navbar/>
      </header>
        <Product/>
        <Footer/>
    </div>
  );
}

export default App;
