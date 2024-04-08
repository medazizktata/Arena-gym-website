


import React, { useState } from 'react';
import InputField from '../../components/input';
import DropdownField from '../../components/input_2';
import DropdownField2 from '../../components/Input_2_disabled';
const Form_Ins = () => {
  const [selectedGender, setSelectedGender] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Traitement du formulaire
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-blackBG bg-opacity-70 border-2 border-white p-14  w-full max-w-2xl">
        <h1 className="text-yellowMain text-4xl font-bold mb-6 text-center">REJOIGNEZ-NOUS</h1>
        <p className="text-yellowMain text-sm mb-8 text-center">Veuillez remplir le formulaire pour vous inscrire et poursuivre vers la page de paiement</p>

        <div className="flex gap-2 mb-4   ">
          <div className='grow'>
          <InputField name={"Nom"} label="Nom" placeholder="Ex. Flen" type="text" />
          </div>
          <div className='grow'>
          <InputField name={"Prenom"} label="Prénom" placeholder="Ex. Flen" type="text" />
          </div>
        </div>
        <div className=" mb-4">

        <InputField name={"Email"} label="E-mail" placeholder="Ex. flen.falten@gmail.com" type="email" />
        </div>
        <div className=" mb-4">

        <InputField name={"Numero"} label="Numéro de téléphone" placeholder="+216" type="tel" />
        </div>
        <div className=" mb-4">

        <DropdownField2 label="Pack choisi" options={['Pack 2 (560TND par 6 mois)','Pack 1 (250TND par 6 mois)']} type="disabled" />
        </div>
        <div className=" mb-4">

        <DropdownField label="Plages horaires préférées pendant la semaine/week-end ?" options={['Matin', 'Après-midi', 'Soir']} />
        </div>
        <div className="flex justify-around my-7 mt-8 mb-8">
          <button
            type="button"
            className={`p-1 w-24 h-24  shadow-md ${selectedGender === 'male' ? 'bg-white' : 'bg-black'} shadow-blue-500/50`}
            onClick={() => setSelectedGender('male')}
          >
             <img src="src/assets/Images/inscription/icons8-male-100.png" alt="" />

          </button>
          <button
            type="button"
            className={`p-2 w-24 h-24  shadow-md ${selectedGender === 'female' ? 'bg-white' : 'bg-black'} shadow-pink-500/50`}
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

