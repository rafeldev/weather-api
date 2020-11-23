import React from 'react';

import './hero.css'

import svg from './assets/weather2.svg'

const Hero = () => {
  return (
    <div className="contain-hero">
      <div className="hero-text">
        <h1>Descubre el clima en cualquier ciudad</h1>
        <p>OpenWeatherMap es un servicio en línea, propiedad de OpenWeather Ltd, que proporciona globales tiempo de datos, incluyendo los datos de tiempo actuales, pronósticos, predicciones inmediatas y datos históricos</p>
      </div>
      <div className="hero-img">
        <img src={svg} alt="svg" className="svg-hero" />
      </div>
    </div>
  );
};

export default Hero;