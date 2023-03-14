import React from 'react';
import {Link} from 'react-router-dom';
import pizza from '../assets/background3.png';
import "../styles/Home.css"
function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${pizza})` }}>
    <div className="headerContainer">
        <h1> Pizza Addict </h1>
        <p> HOT! COLD! WHATEVER! </p>
        <Link to="/menu">
        <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  )
}

export default Home
