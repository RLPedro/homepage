import React from 'react';
// import me from "./imgs/me.jpg";
import "./Home.css";

const Home = () => {
  return (
    <div className="content home">
      <p style={{fontWeight: 'bold', fontSize: '1.4rem'}}>
        Programmer, musician and occasional writer.
      </p>

      <br />
      <br />

      <p style={{margin: '0'}}>Also a compulsive reader and ever-curious human.</p>
      <p style={{margin: '0'}}>
        Currently mostly interested in learning about 
          <span style={{fontWeight: 'bold'}}> intelligence</span> (artificial|human),
          <span style={{fontWeight: 'bold'}}> sustainability</span>,
          <span style={{fontWeight: 'bold'}}> leadership</span> and 
          <span style={{fontWeight: 'bold'}}> business</span>.
      </p>

      <br />
      <br />

      <p>Have a talk about any of these or others? Hit me 
        <a href="./contact" className="home__link"> up</a> !
      </p>
    </div>
  )
}

export default Home;
