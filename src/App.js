import './App.css';
import blogs from "./assets/img1.jpg"
import blogs2 from "./assets/img2.jpg"
import blogs3 from "./assets/img3.jpg"
import blogs4 from "./assets/img4.jpg"
import blogs5 from "./assets/img5.jpg"
import Hero from './components/Hero';
import slider from "./components/Slider"
function App() {
  return (
    <div className="App">
      <Hero imageSrc={blogs3}/>
      <sldier imageSrc={blogs} title={"Explore with us"} subtitle={"This is a react based blog application"}/>
      <sldier imageSrc={blogs2} title={"Explore with us"} subtitle={"This is a react based blog application"} flipped={true}/>
    </div>
  );
}

export default App;
