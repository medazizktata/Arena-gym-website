

  
import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import DropdownField from '../../components/input_2';
import InputField from '../../components/input';
import Button from '../../components/Buttons/Button';

const ConForm = () => {
    const methods = useForm(); // Initialiser React Hook Form
    const { handleSubmit, reset } = methods;

    const onSubmit = data => {
        console.log(data); // Traiter les données du formulaire
        reset(); 
    };
   

    return (
      <FormProvider {...methods}> {/* Envelopper les champs du formulaire avec FormProvider */}
      <div className="flex flex-col items-center justify-center min-h-screen bg-blackBG p-8">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-blackBG bg-opacity-70 border-2 border-white p-16 w-full max-w-2xl">
        <h1 className="text-yellowMain text-4xl font-bold mb-4 text-center">CALCULER VOTRE IMC</h1>
        <p className="text-white mb-6 text-center">Calculez votre indice de masse corporel (IMC) et découvrez votre poids idéal !</p>

        
        
          


        <div className=" mb-4" >
        <InputField name="Nom" label="Nom Complet" placeholder="Ex. Flen Ben Foulen" type="text" register={register}  />
        </div>
        <div className=" mb-4">
        <InputField name="email" label="Adresse E-mail" placeholder="Ex. flen@youlmail.com" type="number" register={register}  />        </div>
        
        <div className=" mb-4">

        <InputField name="message" label="Message" placeholder="" type="nutextmber" register={register}  />       
         </div>
       
        <button type="submit" className="bg-yellowMain text-black py-3 px-6 rounded w-full font-bold text-xl">
          S'inscrire maintenant
        </button>   
      </form>
    </div>
  </FormProvider>
);
};

export default ConForm;
