import GaugeChart from "react-gauge-chart";
import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import DropdownField from "../../components/input_2";
import InputField from "../../components/input";
import Button from "../../components/Buttons/Button";
import ButtonYellow from "../../components/Buttons/ButtonYellow";
import ButtonBlack from "../../components/Buttons/ButtonBlack";
import { getColor } from "../../utils/getColor";

const IMCFormBedis = () => {
  const methods = useForm();
  const { handleSubmit, watch } = methods;
  const [gaugeValue, setGaugeValue] = useState(null);
  const [imc, setImc] = useState(null);
  const [imcInterpretation, setImcInterpretation] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const calcBMI = (poids, taille) => {
    const tailleEnMetres = taille / 100;
    return poids / tailleEnMetres ** 2;
  };
  const getIMCInterpretation = (bmi) => {
    if (bmi < 18.5) return "Sous-poids";
    if (bmi >= 18.5 && bmi < 25) return "Poids normal";
    if (bmi >= 25 && bmi < 30) return "Surpoids";
    if (bmi >= 30) return "Obésité";
  };
  const gageCalc = (bmi) => {
    if (bmi < 16) return 0.0;
    if (bmi >= 16 && bmi < 18.5) return (bmi - 16) / (18.5 - 16) / 3;
    if (bmi >= 18.5 && bmi < 25) return (bmi - 18.5) / (25 - 18.5) / 3 + 1 / 3;
    if (bmi >= 25 && bmi < 30) return (bmi - 25) / (30 - 25) / 3 + 2 / 3;
    if (bmi >= 30) return 1;
  };
  const onSubmit = (data) => {
    const bmi = calcBMI(data.poids, data.taille);
    const gaugePercent = gageCalc(bmi);
    setGaugeValue(gaugePercent);
    setImc(bmi.toFixed(2)); // Arrondir l'IMC à deux décimales
    setImcInterpretation(getIMCInterpretation(bmi));
  };
  const handleReset = () => {
    reset();
    setImc(null);
    setImcInterpretation("");
  };

  const ageOptions = [...Array(100).keys()].map((i) => `${i + 1} ans`);
  const activityOptions = [
    "Sédentaire",
    "Modérément actif",
    "Actif",
    "Très actif",
  ];
  const colorsArray = {
    "Sous-poids": `${getColor("yellowMain")}`,
    "Poids normal": "#228B22",
    Surpoids: "#FFA500",
    Obésité: "#FF0000",
  };

  return (
    <FormProvider {...methods}>
      {" "}
      {/* Envelopper les champs du formulaire avec FormProvider */}
      <div className="flex flex-row gap-10 items-center justify-center min-h-screen border border-2 border-transparent">
        {gaugeValue !== null && (
          <div className="flex flex-col gap-10">
            <div className="">
              {" "}
              {/* Cette div contrôlera la taille de la jauge */}
              <GaugeChart
                id="gauge-chart"
                nrOfLevels={4}
                colors={Object.values(colorsArray)}
                percent={gageCalc(imc)}
                arcPadding={0.02}
                hideText={false}
                fontSize={"0"}
                needleColor={"white"}
                needleBaseColor={"white"}
                style={{ width: "600px" }}
              />
            </div>
            <div className="flex flex-col gap-5 text-white font-urbanist text-3xl font-bold mb-4 text-center">
              <h1 className="">Votre IMC est </h1>
              <span className="text-7xl"> {imc}</span>
              <span
                className="text-4xl"
                style={{ color: colorsArray[imcInterpretation] }}
              >
                {imcInterpretation}
              </span>
            </div>
          </div>
        )}
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
                placeholder="Ex. 180cm"
                type="number"
              />
            </div>
            <div className="">
              <InputField
                name="poids"
                label="Poids/kg"
                placeholder="Ex. 75Kg"
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
          </div><div className="flex justify-center mt-7 -mb-7">
            {!isFormValid && (
              <p className="font-urbanist text-red-500">
                Veuillez remplir tous les champs pour calculer votre IMC.
              </p>
            )}
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

export default IMCFormBedis;
