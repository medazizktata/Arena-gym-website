import React from 'react';
import FontTesting from './fontTesting.jsx';
import SplitRectangle from './Sokra_only.jsx';

function App() {
  return (

    <div >
      
      <FontTesting/>


      <SplitRectangle
      text_grand="Fitness d'Élite Padel & Piscines Premium"
      text="Plongez dans une expérience fitness hors du commun avec nos terrains de padel et piscines exclusives, intégrés à notre offre haut de gamme. Rejoignez-nous pour une remise en forme qui conjugue luxe, confort et performance."
      imageUrl="https://www.piscineavenue.com/wp-content/uploads/2020/04/prix-construction-piscine-olympique-600x321.jpeg"
      />
    
   </div>
  );
}

export default App;
