import React from 'react';
import { Link } from "react-router-dom"
import "./Contact.css";

const Home = () => {
  return (
    <div className="content contact">
      <Link style={{color: 'rgb(248, 241, 232)'}} to="mailto:ricardoleitaopedro@gmail.com"><p className="contact__email">ricardoleitaopedro@gmail.com</p></Link>
      <p className="contact__location">Gothenburg, Sweden | Porto, Portugal</p>
    </div>
  )
}

export default Home;