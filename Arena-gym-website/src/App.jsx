import React from 'react';
import FontTesting from './fontTesting.jsx';
import SplitRectangle from './Sokra_only.jsx';
import MapCard from './map.jsx';
function App() {
  return (

    <div >
      
           <SplitRectangle
      text_grand="Fitness d'Élite Padel & Piscines Premium"
      text="Plongez dans une expérience fitness hors du commun avec nos terrains de padel et piscines exclusives, intégrés à notre offre haut de gamme. Rejoignez-nous pour une remise en forme qui conjugue luxe, confort et performance."
      imageUrl="https://www.piscineavenue.com/wp-content/uploads/2020/04/prix-construction-piscine-olympique-600x321.jpeg"
      />

      <MapCard
      title="Visitez-nous à Manar 2"
      subtitle="Venez nous rendre visite pour découvrir ce que nous offrons pour améliorer votre condition physique !"
      url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12772.765663728429!2d10.1565846!3d36.8378915!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd3368ff1aaaad%3A0x6971f9e8f53b0353!2sArena%20gym!5e0!3m2!1sfr!2stn!4v1711553784567!5m2!1sfr!2stn"
      />
   </div>
  );
}

export default App;
