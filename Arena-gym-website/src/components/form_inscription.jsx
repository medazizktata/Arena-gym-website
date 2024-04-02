


import React, { useState } from 'react';
import InputField from './input';
import DropdownField from './input_2';

const Form_Ins = () => {
  const [selectedGender, setSelectedGender] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Traitement du formulaire
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-black bg-opacity-70 border-2 border-white p-8 shadow-lg shadow-yellow-500/50 w-full max-w-2xl">
        <h1 className="text-yellowMain text-3xl font-bold mb-6">REJOIGNEZ-NOUS</h1>
        <p className="text-yellowMain mb-8">Veuillez remplir le formulaire pour vous inscrire et poursuivre vers la page de paiement</p>

        <div className="flex justify-between space-x-4">
          <InputField label="Nom" placeholder="Ex. Flen" type="text" />
          <InputField label="Prénom" placeholder="Ex. Flen" type="text" />
        </div>

        <InputField label="E-mail" placeholder="Ex. flen.falten@gmail.com" type="email" />

        <InputField label="Numéro de téléphone" placeholder="+216" type="tel" />


        <DropdownField label="Pack choisi" options={['Pack 1 (250TND par 6 mois)', 'Pack 2 (560TND par 6 mois)']} />
        <DropdownField label="Plages horaires préférées pendant la semaine/week-end ?" options={['Matin', 'Après-midi', 'Soir']} />
        
        <div className="flex justify-around my-4">
          <button
            type="button"
            className={`p-2 w-32  shadow-md ${selectedGender === 'male' ? 'bg-yellowMain' : 'bg-black'} shadow-blue-500/50`}
            onClick={() => setSelectedGender('male')}
          >
             <img src="https://cdn-user-icons.flaticon.com/138303/138303288/1711924092007.svg?token=exp=1711925048~hmac=50d90843b66ef1dfe5430ad3b3681309" alt="" />

          </button>
          <button
            type="button"
            className={`p-2 w-32  shadow-md ${selectedGender === 'female' ? 'bg-yellowMain' : 'bg-black'} shadow-pink-500/50`}
            onClick={() => setSelectedGender('female')}
          >
             <img src="https://cdn-user-icons.flaticon.com/138303/138303288/1712008272634.svg?token=exp=1712009173~hmac=192ce826409b7206d3c7162ac8cfbb10" alt="" />

          </button>
        </div>

        <button type="submit" className="bg-yellowMain text-black py-3 px-6 rounded w-full font-bold text-xl">
          S'inscrire maintenant
        </button>
      </form>
    </div>
  );
};

export default Form_Ins;

