import React from 'react';
import FontTesting from './fontTesting.jsx';
import SplitRectangle from './Sokra_only.jsx';
import MapCard from './map.jsx';
import SubscriptionBox from './fiche_prix.jsx';
function App() {
  return (

    <div class="bg-blackBG" >
      
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

      <SubscriptionBox
        type={1}
        packName="PACK 2"
        price="560"
        duration="par 6 mois"
        items={['Force', 'Cardio vasculaire', 'TRX', 'Yoga', 'Cross-fit', 'Box' , 'autre']}
        svgIcon={
          <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M13.6766 2.01709C7.21285 2.01709 1.97266 7.25728 1.97266 13.7211C1.97266 20.1849 7.21285 25.4251 13.6766 25.4251C20.1404 25.4251 25.3806 20.1849 25.3806 13.7211C25.3806 7.25728 20.1404 2.01709 13.6766 2.01709ZM18.7498 11.742C18.8432 11.6353 18.9143 11.5109 18.959 11.3762C19.0036 11.2415 19.0208 11.0993 19.0097 10.9579C18.9985 10.8164 18.9592 10.6786 18.894 10.5526C18.8289 10.4266 18.7391 10.3149 18.6301 10.2241C18.5211 10.1332 18.3951 10.0651 18.2594 10.0237C18.1237 9.98236 17.9811 9.96852 17.8399 9.98306C17.6988 9.9976 17.562 10.0402 17.4376 10.1084C17.3132 10.1766 17.2037 10.269 17.1155 10.3801L12.5403 15.8693L10.1729 13.5008C9.97222 13.307 9.70345 13.1998 9.42448 13.2022C9.1455 13.2046 8.87863 13.3165 8.68136 13.5138C8.48409 13.7111 8.37219 13.9779 8.36976 14.2569C8.36734 14.5359 8.47458 14.8046 8.6684 15.0053L11.8604 18.1973C11.9649 18.3018 12.0901 18.3834 12.2279 18.4368C12.3657 18.4902 12.5132 18.5143 12.6608 18.5076C12.8085 18.5009 12.9531 18.4635 13.0855 18.3978C13.2179 18.3321 13.3352 18.2396 13.4298 18.126L18.7498 11.742Z" fill="black"/>
          </svg>
          

        }
        link="https://example.com"
      />


   </div>
  );
}

export default App;
