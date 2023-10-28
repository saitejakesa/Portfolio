import React from 'react'
import { FaSuitcase } from 'react-icons/fa';
import "./Intro.css"
import file from '../../assets/saiteja_MernStack_Resume.pdf';
function Intron() {
  return (
    <section className="inro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">I'm <span className="introName">Sai Teja</span><br />Mern Stack Developer And Selenium Tester</span>
        <p className="introPara">Skilled in Developing a complete website both front end and back end and also good in testing the same website</p>
        <a href={file} download> <button className="btn"><FaSuitcase /> Hire Me
  </button>
</a>

      </div>
      {/* <img src={bg} alt="" className="bg" /> */}
    </section>
  )
}

export default Intron