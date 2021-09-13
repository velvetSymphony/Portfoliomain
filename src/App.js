import About from './components/About';
import './App.css';
import Home from './components/Home';
import CarouselPortfolio from './components/CarouselPortfolio';
import Contact from './components/Contact';
import Space from './components/Space';
import Whatido from './components/Whatido';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      
      <Header/>
      
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
