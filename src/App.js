import About from './components/About';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CarouselPortfolio from './components/CarouselPortfolio';
import Contact from './components/Contact';
import Space from './components/Space';
import Mobilemenu from './components/Mobilemenu';
import Whatido from './components/Whatido';

function App() {
  return (
    <div className="App">
      <Mobilemenu/>
      <Navbar/>
      
      <Space/> 
      <Home/>
      <Space/>
      <About/>
      <Space/>
      <Whatido/>
      <Space/>
      <CarouselPortfolio/>
      <Space/>
      <Contact/>
      <Space/>
      
    </div>
  );
}

export default App;
