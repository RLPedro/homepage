import { Route, Routes, Link } from "react-router-dom"
import { HashRouter } from 'react-router-dom'
import Menu from "./components/Menu"
import Home from "./components/Home"
import Contact from "./components/Contact"
import Blog from "./components/Blog"
import instagram from "./components/icons/instagram.png"
import linkedin from "./components/icons/linkedin.png"
import './App.css'

const App = () => {
  return (
    <div className="App">
      <HashRouter>

      <Link to="./"><h1 className="app__title">ricardo leitão pedro</h1></Link>
      
      <div className="app__subtitles">
        <Link to="./"><h2 className="app__subtitle">about</h2></Link>
        <Link to="./contact"><h2 className="app__subtitle">contact</h2></Link>
      </div>

      <div className="app__social-media">
        <a href="https://www.linkedin.com/in/ricardoleitaopedro" target="_blank"><img className="app__social-media__linkedin" src={linkedin} alt="linked-in link" /></a>
        <Link to="https://www.instagram.com/ricardoleitaopedro" target="_blank"><img className="app__social-media__instagram" src={instagram} alt="instagram link" /></Link>
      </div>

      <Menu />

      <Routes>
        <Route exact path="/" element={<Home />}/>
        {/* <Route exact path="/about" element={<About />}/> */}
        <Route exact path="/contact" element={<Contact />}/>
        <Route path="/writings" element={<Blog />}/>
      </Routes>

      </HashRouter>
    </div>
  );
}

export default App;