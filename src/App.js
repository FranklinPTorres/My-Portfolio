
import Button from "react-bootstrap/Button";
import './App.css';
import NavBar from "./Components/NavBar"
import foto from "./Components/images/foto.png"
import Projets from "./Components/Projects";


function App() {
  return (
    <div className="App">
      <NavBar />
      <img src={foto} alt="foto" className="foto-image" />
      <h1 className="portfolioText">Hello My Name is Franklin and this is my Portfolio</h1>
      <Projets />
    </div>
  );
}

export default App;
