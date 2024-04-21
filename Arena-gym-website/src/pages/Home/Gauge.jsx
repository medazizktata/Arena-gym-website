import React from 'react';

const Gauge = ({ value }) => {
  // Cette fonction détermine la position de l'aiguille en fonction de la valeur de l'IMC
  const getNeedleRotation = (value) => {
    // On suppose que l'IMC normal est entre 18.5 et 24.9, on va donc dessiner une échelle de 0 à 180 degrés
    const minValue = 10; // La valeur minimale de l'IMC visible sur la jauge
    const maxValue = 40; // La valeur maximale de l'IMC visible sur la jauge
    const scale = 180 / (maxValue - minValue); // Le nombre de degrés par unité d'IMC
    const rotation = (value - minValue) * scale - 90; // On soustrait 90 pour centrer l'aiguille à 0 degrés
    return Math.min(Math.max(rotation, -90), 90); // S'assure que la rotation reste dans les limites
  };

  return (
    <svg width="200" height="100" viewBox="0 0 200 100">
      {/* Zones de couleur */}
      <path d="M10,50 A40,40 0 0,1 80,50" fill="#FFFF00" /> {/* Sous-poids */}
      <path d="M80,50 A40,40 0 0,1 120,50" fill="#228B22" /> {/* Poids normal */}
      <path d="M120,50 A40,40 0 0,1 190,50" fill="#FF0000" /> {/* Surpoids */}
      {/* Aiguille */}
      <polygon
        points="100,50 105,45 105,55"
        fill="black"
        transform={`rotate(${getNeedleRotation(value)} 100 50)`}
      />
      {/* Axe de l'aiguille */}
      <circle cx="100" cy="50" r="3" fill="black" />
    </svg>
  );
};

export default Gauge;
