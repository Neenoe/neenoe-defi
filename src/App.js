import './App.css';
import Navbar from './../src/Components/Navbar'
import Hero from './Components/Hero';
import About from './Components/About';
import Development from './Components/Development';
import Subscribe from './Components/Subscribe';
import Footer from './Components/Footer';
import Freestyle from './Components/Freestyle';


function App() {
  return (
    <div className="App">
   <Navbar/>
   <Hero/>
   <About/>
   <Development/>
   <Subscribe/>
   <Footer/>
   {/* <Freestyle/> */}
    </div>
  );
}

export default App;
