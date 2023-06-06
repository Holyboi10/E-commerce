import Products from './Products';
import './App.css';
import Cars from './Cars';
import Laptops from './Laptops';
import Jewelry from './Jewelry';
import Navbar from './Navbar';
import Hero from './Hero';
import Footer from './Footer';
function App() {
  return (
    <div className="App">

      <Navbar/> <br/><br/><br/>
      <Hero/><br/>
      
      <Products/>
      <Cars/>
      <Laptops/>
      <Jewelry/> <br/>
      <Footer/>


    </div>
  );
}

export default App;
