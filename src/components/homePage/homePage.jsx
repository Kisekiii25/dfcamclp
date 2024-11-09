import React from 'react';
import './homePage.css';
import dfcamlogo from '../../assets/dfcamlogo.png';
import girlwithbook from '../../assets/girlwithbook.png';

function HomePage() {
  return (
    <div className="home">
        <div className="content">
            <img src={dfcamlogo} alt="DFCAM College Logo" />
            <h1 className="schoolName">Dr. Filemon C. Aguilar Memorial College of Las Piñas</h1>
            <blockquote>
                "The roots of education are bitter, but the fruit is sweet."
                <cite>— Aristotle</cite>
            </blockquote>
            <button aria-label="View Main Campus Information" className="button" role="button">Main-campus</button>
            <button aria-label="View Satellite Campus Information" className="button" role="button">Satellite-campus</button>
            <img className="girlwithbook" src={girlwithbook} alt="Girl reading a book" />
        </div>
    </div>
  );
}

export default HomePage;
