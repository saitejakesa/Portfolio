import React from 'react'
import "./works.css"
import calculator from '../../assets/calculator2.jpg';
import equipmentrental from '../../assets/euipmentrental2.jpg';
import bulkemail from '../../assets/bulkemail2.jpg';
import shorturl from '../../assets/shortURL2.jpg';
import mentorstudent from '../../assets/MentorStudent2.jpg';
import totalpeople from '../../assets/totalpeople2.jpg';

const Works = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">My Portfolio</h2>
      <span className="worksDesc">Below are some of the projects that are designed using HTML,CSS,JavaScript, React, NodeJS, Express JS. And also linked the git repositories for more projects</span>
      <div className="worksImgs">
        <a href="https://main--subtle-frangollo-c16bb2.netlify.app/" target="_blank"><img src={calculator} alt="Calculator" className="worksImg" /></a>
        <a href="https://frontend--iridescent-semolina-36136f.netlify.app/" target="_blank"><img src={equipmentrental} alt="Equipment Rental" className="worksImg" /></a>
        <a href="https://64c28a981d6bd40096b8fd4e--coruscating-froyo-664377.netlify.app" target="_blank"><img src={bulkemail} alt="Portfolio3" className="worksImg" /></a>
        <a href="https://url-shortening-wheat.vercel.app/" target="_blank"><img src={shorturl} alt="Portfolio4" className="worksImg" /></a>
        <a href="https://frontend--storied-pegasus-208c06.netlify.app/" target="_blank"><img src={mentorstudent} alt="Portfolio5" className="worksImg" /></a>
        <a href="https://6280afc48889300c520822b6--whimsical-mochi-002129.netlify.app/" target="_blank"><img src={totalpeople} alt="Portfolio6" className="worksImg" /></a>
      </div>
      <button onClick={()=>window.open('https://github.com/', '_blank')} className="worksBtn">See More</button>
    </section>
  ) 
}

export default Works