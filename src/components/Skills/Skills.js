import React from 'react'
import './skills.css'
import WebDesign from '../../assets/MERN-1.jpeg'
import testing from '../../assets/seleniumlogo_conv.png'
import scripting from '../../assets/shellscriptlogo.png'

const skills = () => {
  return (
    <section id="skills">
        <span className="skillTitle">What I do</span>
        <span className="skillsDesc">I am skilled and Passionate Web Developer in creating visually appealing and user friendly websites and proficient in HTML,CSS, Java script, React, Express, NodeJS.</span>
        <div className="skillBars">
          <div className="skillBar">
            <img src={WebDesign} alt="Web Designing" className="skillBarImg" /> 
            <div className="skillBarText">
              <h2>Web Designing with MERN</h2>
              <p>Good in Designing MERN stack projects with HTML, CSS and Java Script</p>
            </div> 
          </div>
          <div className="skillBar">
            <img src={testing} alt="" className="skillBarImg" /> 
            <div className="skillBarText">
              <h2>Web Designing with Automation</h2>
              <p>Experience in testing the web applications both Manual and Automation with selenium and also testing the functionality using POM and Data Driven Framework </p>
            </div> 
          </div>
          <div className="skillBar">
            <img src={scripting} alt="" className="skillBarImg" /> 
            <div className="skillBarText">
              <h2>Product Testing with Bash Scripting</h2>
              <p>Experience in Testing the Product which contains PowerG, Z-wave protocols and designing bash scripting for ease of doing Regression tetsing.</p>
            </div> 
          </div>  
        </div>  
        
    </section>
  )
}

export default skills