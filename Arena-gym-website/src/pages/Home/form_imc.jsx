//test 

import GaugeChart from 'react-gauge-chart';

import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import DropdownField from '../../components/input_2';
import InputField from '../../components/input';
import Button from '../../components/Buttons/Button';
import ButtonYellow from '../../components/Buttons/ButtonYellow';

const IMCFormBedis = () => {
    const methods = useForm(); // Initialiser React Hook Form
    const { handleSubmit, watch } = methods;
    const [gaugeValue, setGaugeValue] = useState(null);
    const [imc, setImc] = useState(null);
    const [imcInterpretation, setImcInterpretation] = useState('');
    const calcBMI = (poids, taille) => {
      const tailleEnMetres = taille / 100;
      return poids / (tailleEnMetres ** 2);
    };
    const getIMCInterpretation = (bmi) => {
      if (bmi < 18.5) return 'Sous-poids';
      if (bmi >= 18.5 && bmi < 25) return 'Poids normal';
      if (bmi >= 25 && bmi < 30) return 'Surpoids';
      if (bmi >= 30) return 'Obésité';
    };
    const gageCalc = (bmi) => {
      if (bmi < 16) return 0.0;
      if (bmi >= 16 && bmi < 18.5) return (bmi - 16) / (18.5 - 16) / 3;
      if (bmi >= 18.5 && bmi < 25) return ((bmi - 18.5) / (25 - 18.5) / 3) + (1 / 3);
      if (bmi >= 25 && bmi < 30) return ((bmi - 25) / (30 - 25) / 3) + (2 / 3);
      if (bmi >= 30) return 1;
    };
    const onSubmit = data => {
      const bmi = calcBMI(data.poids, data.taille);
      const gaugePercent = gageCalc(bmi);
      setGaugeValue(gaugePercent);
      setImc(bmi.toFixed(2)); // Arrondir l'IMC à deux décimales
      setImcInterpretation(getIMCInterpretation(bmi));
    };
    const handleReset = () => {
      reset();
      setImc(null);
      setImcInterpretation('');  };

    const ageOptions = [...Array(100).keys()].map(i => `${i + 1} ans`);
    const activityOptions = ['Sédentaire', 'Modérément actif', 'Actif', 'Très actif'];
  
    return (
      <FormProvider {...methods}> {/* Envelopper les champs du formulaire avec FormProvider */}
      <div className="flex flex-col items-center justify-center min-h-screen bg-blackBG p-8">
      {gaugeValue !== null && (
           <>
           <div className="w-full max-w-lg px-4"> {/* Cette div contrôlera la taille de la jauge */}

           <GaugeChart
             id="gauge-chart"
             nrOfLevels={3}
             colors={["#FFFF00", "#228B22", "#FF0000"]}
             percent={gageCalc(imc)}
             arcPadding={0.02}
           />
           </div>
           <h1 className="text-yellowMain text-3xl font-bold mb-4 text-center">Votre IMC est {imc} : {imcInterpretation}</h1>
         </>)}
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
          <Button typeB={"reset"} onClick={handleReset} textColor="text-black" bgColor="bg-white" font="font-bold" padding="4">
            Supprimer
          </Button>
          <ButtonYellow buttonType={"submit"}  buttonFont="font-bold" paddingX="4">
            Calculer
          </ButtonYellow>
        </div>
      </form>
    </div>
  </FormProvider>
);
};

export default IMCFormBedis;