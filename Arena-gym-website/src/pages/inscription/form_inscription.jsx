
import React, { useState } from 'react';

import { useForm, FormProvider } from 'react-hook-form';

import InputField from '../../components/input';
import DropdownField from '../../components/input_2';
import DropdownField2 from './Input_2_disabled';
const Form_Ins = () => {

  const methods = useForm();
  const { handleSubmit, register, reset } = methods;

  const [selectedGender, setSelectedGender] = useState('');

  const onSubmit = (data) => {
    // Ajout du genre sélectionné aux données du formulaire avant de les afficher
    const fullData = { ...data, gender: selectedGender };
    console.log(fullData); // Affiche les données du formulaire + genre dans la console
    reset(); // Réinitialise le formulaire et l'état local du genre après la soumission
    setSelectedGender(''); // Réinitialise le genre
  };


  return (
    <div className="min-h-screen flex items-center justify-center">
      <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="bg-blackBG bg-opacity-70 border-2 border-white p-14  w-full max-w-2xl">
        <h1 className="text-yellowMain text-4xl font-bold mb-6 text-center">REJOIGNEZ-NOUS</h1>
        <p className="text-yellowMain text-sm mb-8 text-center">Veuillez remplir le formulaire pour vous inscrire et poursuivre vers la page de paiement</p>

        <div className="flex gap-2 mb-4   ">
          <div className='grow'>
          <InputField name="nom" label="Nom" placeholder="Ex. Flen" type="text" register={register} />
          </div>
          <div className='grow'>
          <InputField name="prenom" label="Prénom" placeholder="Ex. Flen" type="text" register={register} />
          </div>
        </div>
        <div className=" mb-4">

        <InputField name="email" label="E-mail" placeholder="Ex. flen.falten@gmail.com" type="email" register={register} />
        </div>
        <div className=" mb-4">

        <InputField name="numero" label="Numéro de téléphone" placeholder="+216" type="tel" register={register} />
        </div>
        <div className=" mb-4">

        <DropdownField2 name="pack" label="Pack choisi" options={['Pack 2 (560TND par 6 mois)']}  register={register}  />
        </div>
        <div className=" mb-4">

        <DropdownField name="plagesHoraires" label="Plages horaires préférées pendant la semaine/week-end ?" options={['Matin', 'Après-midi', 'Soir']} register={register} />
        </div>
        <div className="flex justify-around my-7 mt-8 mb-8">
        <button
              type="button"
              className={`p-1 w-24 h-24 shadow-md ${selectedGender === 'male' ? 'bg-white' : 'bg-black'} shadow-blue-500/50`}
              onClick={() => setSelectedGender('male')}
            >
              {/* Assurez-vous que les chemins des images sont corrects */}
              <img src="src/assets/Images/inscription/icons8-male-100.png" alt="Male" />
            </button>
            <button
              type="button"
              className={`p-2 w-24 h-24 shadow-md ${selectedGender === 'female' ? 'bg-white' : 'bg-black'} shadow-pink-500/50`}
              onClick={() => setSelectedGender('female')}
            >
              {/* Assurez-vous que les chemins des images sont corrects */}
              <img src="src/assets/Images/inscription/002-femelle-1.png" alt="Female" />
            </button>
        </div>

        <button type="submit" className="bg-yellowMain text-black py-3 px-6 rounded w-full font-bold text-xl">
          S'inscrire maintenant
        </button>
      </form>
      </FormProvider>
    </div>
  );
};

export default Form_Ins;

