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

import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import DropdownField from "../../components/input_2";
import InputField from "../../components/input";
import Button from "../../components/Buttons/Button";
import ButtonYellow from "../../components/Buttons/ButtonYellow";
import ButtonBlack from "../../components/Buttons/ButtonBlack";

const IMCForm = () => {
  const methods = useForm(); // Initialiser React Hook Form
  const { handleSubmit, reset } = methods;

  const onSubmit = (data) => {
    console.log(data); // Traiter les données du formulaire
    reset();
  };
  const handleReset = () => {
    reset(); // Réinitialise le formulaire lorsque l'utilisateur clique sur Supprimer
  };

  const ageOptions = [...Array(100).keys()].map((i) => `${i + 1} ans`);
  const activityOptions = [
    "Sédentaire",
    "Modérément actif",
    "Actif",
    "Très actif",
  ];

  return (
    <FormProvider {...methods}>
      {" "}
      {/* Envelopper les champs du formulaire avec FormProvider */}
      <div className="flex flex-col items-center justify-center min-h-screen font-robotoCon">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="shadow-cardGreyMedium border-2 border-white hover:shadow-cardYellowMain hover:border-yellowMain cursor-pointer transition all duration 500 font-robotoCon bg-blackBG p-14 w-full max-w-2xl"
        >
          <div className="">
            <h1 className="text-yellowMain text-5xl font-bold mb-4 text-center">
              CALCULER VOTRE IMC
            </h1>
            <p className="text-white text-sm mb-10 text-center">
              Calculez votre indice de masse corporel (IMC) et découvrez votre
              poids idéal!
            </p>
          </div>
          <div className="flex flex-col gap-7">
            <div className="">
              <InputField
                name="taille"
                label="Taille/cm"
                placeholder="Ex. 180"
                type="number"
              />
            </div>
            <div className="">
              <InputField
                name="poids"
                label="Poids/kg"
                placeholder="Ex. 75"
                type="number"
              />{" "}
            </div>
            <div className="flex flex-wrap gap-2">
              <div className="flex-1">
                <DropdownField name="age" label="Age" options={ageOptions} />
              </div>
              <div className="flex-1">
                <DropdownField
                  name="sexe"
                  label="Sexe"
                  options={["Homme", "Femme"]}
                />
              </div>
            </div>
            <div className="">
              <DropdownField
                name="activite"
                label="Fréquence d'activité"
                options={activityOptions}
              />
            </div>
          </div>
          <div className="flex gap-24 mt-2 justify-center ">
            <ButtonBlack
              buttonFont={"font-robotoCon"}
              fontWeight={"mt-10 w-full font-black"}
              buttonType={"reset"}
            >
              Supprimer
            </ButtonBlack>

            <ButtonYellow
              buttonFont={"font-robotoCon"}
              fontWeight={"mt-10 w-full font-black"}
              buttonType={"submit"}
            >
              Calculer
            </ButtonYellow>
          </div>
        </form>
      </div>
    </FormProvider>
  );
};

export default IMCForm;
