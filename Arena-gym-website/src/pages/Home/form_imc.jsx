/*

import React, { useRef } from 'react';
import DropdownField from '../../components/input_2';
import InputField from '../../components/input';
import Button from '../../components/Buttons/Button';


const IMCForm=() => {
    const formRef = useRef();
    // Pour une application réelle, vous devez gérer les états des inputs, les valeurs sélectionnées, etc.
    const handleSubmit = (event) => {
        event.preventDefault();
        // Traitement du formulaire
      };
    const handleReset = () => {
        formRef.current.reset(); // Réinitialise le formulaire en utilisant la référence
      };

    const ageOptions = [...Array(100).keys()].map(i => `${i + 1} ans`); // Crée une liste d'âges de 1 à 100
    const activityOptions = ['Sédentaire', 'Modérément actif', 'Actif', 'Très actif'];
  
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-blackBG p-8">
        <form ref={formRef} onSubmit={handleSubmit} className="bg-blackBG bg-opacity-70 border-2 border-white p-16  w-full max-w-2xl">
        <h1 className="text-yellowMain text-4xl font-bold mb-4 text-center ">CALCULER VOTRE IMC</h1>
        <p className="text-white mb-6 text-center">Calculez votre indice de masse corporel (IMC) et découvrez votre poids idéal !</p>
        <div className=" mb-4" >
        <InputField label="Taille/cm" placeholder="Ex. 180" type="number" />
        </div>
        <div className=" mb-4">
        <InputField label="Poids/kg" placeholder="Ex. 75" type="number" />
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
        <div className="flex-1">
          <DropdownField label="Age" options={ageOptions} />
        </div>
        <div className="flex-1">
          <DropdownField label="Sexe" options={['Homme', 'Femme']} />
        </div>
        </div>
        <div className=" mb-4">

        <DropdownField label="Fréquence d'activité" options={activityOptions} />
        </div>
        <div className="flex gap-24 mt-2 justify-center ">
          <Button onClick={handleReset} textColor="text-black" bgColor="bg-white" font="font-bold" padding="4">
            Supprimer
          </Button>
          <Button type= "submit"  textColor="text-black" bgColor="bg-yellow-500" font="font-bold" padding="4">
            Calculer
          </Button>
        </div>
        </form>
      </div>
    );
  };
  
  export default IMCForm; */



  
import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import DropdownField from '../../components/input_2';
import InputField from '../../components/input';
import Button from '../../components/Buttons/Button';

const IMCForm = () => {
    const methods = useForm(); // Initialiser React Hook Form
    const { handleSubmit, reset } = methods;

    const onSubmit = data => {
        console.log(data); // Traiter les données du formulaire
        reset(); 
    };
    const handleReset = () => {
      reset(); // Réinitialise le formulaire lorsque l'utilisateur clique sur Supprimer
  };

    const ageOptions = [...Array(100).keys()].map(i => `${i + 1} ans`);
    const activityOptions = ['Sédentaire', 'Modérément actif', 'Actif', 'Très actif'];
  
    return (
      <FormProvider {...methods}> {/* Envelopper les champs du formulaire avec FormProvider */}
      <div className="flex flex-col items-center justify-center min-h-screen bg-blackBG p-8">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-blackBG bg-opacity-70 border-2 border-white p-16 w-full max-w-2xl">
        <h1 className="text-yellowMain text-4xl font-bold mb-4 text-center">CALCULER VOTRE IMC</h1>
        <p className="text-white mb-6 text-center">Calculez votre indice de masse corporel (IMC) et découvrez votre poids idéal !</p>

        
        
          


          <div className=" mb-4" >
          <InputField name="taille" label="Taille/cm" placeholder="Ex. 180" type="number" />
        </div>
        <div className=" mb-4">
        <InputField name="poids" label="Poids/kg" placeholder="Ex. 75" type="number" />        </div>
        <div className="flex flex-wrap gap-2 mb-4">
        <div className="flex-1">
        <DropdownField name="age" label="Age" options={ageOptions} />
        </div>
        <div className="flex-1">
        <DropdownField name="sexe" label="Sexe" options={['Homme', 'Femme']} />
        </div>
        </div>
        <div className=" mb-4">

        <DropdownField name="activite" label="Fréquence d'activité" options={activityOptions} />
        </div>
        <div className="flex gap-24 mt-2 justify-center ">
          <Button onClick={handleReset} textColor="text-black" bgColor="bg-white" font="font-bold" padding="4">
            Supprimer
          </Button>
          <Button type="submit" textColor="text-black" bgColor="bg-yellow-500" font="font-bold" padding="4">
            Calculer
          </Button>
        </div>
      </form>
    </div>
  </FormProvider>
);
};

export default IMCForm;

  