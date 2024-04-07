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
        <form ref={formRef} onSubmit={handleSubmit} className="bg-black bg-opacity-70 border-2 border-white p-8  w-full max-w-2xl">
        <h1 className="text-yellowMain text-3xl font-bold mb-4 text-center ">CALCULER VOTRE IMC</h1>
        <p className="text-white mb-6 text-center">Calculez votre indice de masse corporel (IMC) et découvrez votre poids idéal !</p>
  
        <InputField label="Taille/cm" placeholder="Ex. 180" type="number" />
        <InputField label="Poids/kg" placeholder="Ex. 75" type="number" />
  
        <div className="flex flex-wrap gap-0 mb-4">
        <div className="flex-1">
          <DropdownField label="Age" options={ageOptions} />
        </div>
        <div className="flex-1">
          <DropdownField label="Sexe" options={['Homme', 'Femme']} />
        </div>
        </div>
  
        <DropdownField label="Fréquence d'activité" options={activityOptions} />
  
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
  
  export default IMCForm;