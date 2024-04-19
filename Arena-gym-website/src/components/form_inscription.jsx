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
             <img src="src/assets/Images/inscription/icons8-male-100.png" alt="" />

          </button>
          <button
            type="button"
            className={`p-2 w-32  shadow-md ${selectedGender === 'female' ? 'bg-yellowMain' : 'bg-black'} shadow-pink-500/50`}
            onClick={() => setSelectedGender('female')}
          >
             <img src="src/assets/Images/inscription/002-femelle-1.png" alt="" />

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

