import React from 'react';
import AboutPizza from '../assets/AboutPizza.jpg';
import '../styles/About.css';
<meta name="viewport" content="width=device-width, initial-scale=1"></meta>
function About() {
  return (
    <div className="about">
      <div className="aboutTop" style={{ backgroundImage: `url(${AboutPizza})` }}>
      </div>
      <div className="aboutBottom">
        <h1> ABOUT US </h1>
        <p> It all started in 1972, when owner Ola Wailed opened her first Egyptian Pizza Company in a burned out clock shop in Alexandria, Egypt. Armed with a unique recipe for thin crust pizza and an old fashioned stone hearth oven, Egyptian Pizza embarked on a quarter-of-a-century journey that has done everything but dwindle.
            Since then we have been making our thin crust pizza from scratch when you order it. And we still use stone hearth ovens. That is one of the reasons our unique pizzas are worth the wait!
            We pride ourselves in offering you the very best pizza, and we value your patronage.</p>
      </div>
    </div>
  )
}

export default About
