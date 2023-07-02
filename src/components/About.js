import React from 'react';
import "./About.css";

const About = () => {
  return (
    <div className="content about">
      <p>
      With a formal education in classical music (Switzerland, France, Portugal), I lived an exciting career as a singer and lutenist performing throughout the world for several years. <br />
      <br />
      During the 2020 pandemic I realized I was eager to reconnect with my childhood interests in more scientific and technologic topics 
      and taught myself web development and data analytics before being accepted into the "world's hardest bootcamp" at 
      <a className="about__link" href="https://www.salt.study" target="_blank" rel="noreferrer"> &lt;/salt&gt;</a>. <br/>
      <br />
      Currently working as full-stack developer while compulsively learning about a broad array of interests for the betterment of society: studies on (human/artificial) intelligence and better education, sustainability and ecology, decentralized technologies and privacy rights, empowerment of artists and encouragement of creative thinking.
      </p>
    </div>
  )
}

export default About;