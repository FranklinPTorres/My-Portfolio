
// import Button from "react-bootstrap/Button";
import './App.css';
import NavBar from "./Components/NavBar"
import foto from "./Components/images/foto.png"
import Projets from "./Components/Projects";
import About from "./About"
 


function App() {
  return (
    <div className="App">
      <NavBar />
      <img src={foto} alt="foto" className="foto-image" />
      <h1 className="portfolioText">Hello My Name is Franklin and this is my Portfolio</h1>
      
      <h2 className="mp-text" id='aboutMe'>About me</h2>
      <About />
     <h2 className="mp-text" id='projects'>My Projects</h2>
      <Projets />
    <h2 className="mp-text" id='contact'>Contacts</h2>
    

    </div>
  );
}

export default App;
