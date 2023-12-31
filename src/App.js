import './App.css';
import HeroSection from './Components/HeroSection';
import LogoSection from './Components/LogoSection';
import Navbar from './Components/Navbar';
import ServiceSection from './Components/ServiceSection';
import Services from './Components/Services';
import State from './Components/State';
import Testomionals from './Components/Testomionals';

function App() {
  return (
    <>
      <div className="App">
        <Navbar/>
        <HeroSection/>
        <State/>
        <LogoSection/>
        {/* <Services/> */}
        <ServiceSection/>
        <Testomionals/>
      </div>
    </>
  );
}

export default App;
