import Nevbar from './Component/Nevbar';
import Timer from './Component/Timer';
import AboutUs from './Component/AboutUs';
import ContactUs from './Component/ContactUs';

import sulogo from './Assets/sulogo.png';
import './App.css';

function App() {
  return (
    <><div className="app">
      <div className="sulogo">
        <a href="https://shooliniuniversity.com/">
          <img src={sulogo} alt="Logo" height={40} width={70} />
        </a>
      </div>
      <div className='home'>
        <div className='main'>
          <div className="hero-container">
            <div className="environment"></div>
            <h1 className="hero glitch layers" data-text="glitch"><span>GLITCH</span></h1>
            <br />
            <h3><span><b>UNLEASHING THE INNOVATION</b></span></h3>
          </div>
          <div><h2>yooo</h2></div>
          <div className='timer'><Timer /></div>
        </div>
      </div>
      <Nevbar />

    </div><div className="content">
        <AboutUs />
      </div><div className="content">
        <ContactUs />
      </div></>
  );
}

export default App;
