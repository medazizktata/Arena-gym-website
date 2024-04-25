import GaugeChart from "react-gauge-chart";
import React, { useState, useRef } from "react";
import { useForm, FormProvider } from "react-hook-form";
import DropdownField from "../../components/input_2";
import InputField from "../../components/input";
import ButtonBlack from "../../components/Buttons/ButtonBlack";
import ButtonYellow from "../../components/Buttons/ButtonYellow";
import { getColor } from "../../utils/getColor";
import "./IMCCardFlip.css";

const IMCFormBedis = () => {
  const methods = useForm();
  const { handleSubmit, reset } = methods;
  const [isFlipped, setIsFlipped] = useState(false);
  const [gaugeValue, setGaugeValue] = useState(null);
  const [imc, setImc] = useState(null);
  const [imcInterpretation, setImcInterpretation] = useState("");
  const [isFormValid, setIsFormValid] = useState(null);
  const cardContainerRef = useRef(null);

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
    const { poids, taille } = data;

    if (poids && taille) {
      setIsFormValid(true);
      const bmi = calcBMI(poids, taille);
      const gaugePercent = gageCalc(bmi);
      setGaugeValue(gaugePercent);
      setImc(bmi.toFixed(2));
      setImcInterpretation(getIMCInterpretation(bmi));
      setIsFlipped(true); // Flip the card upon successful submission
    } else {
      setIsFormValid(false);
    }
  };

  const handleReset = () => {
    reset();
    setIsFormValid(null);
    setIsFlipped(false); // Flip back to the front card upon reset
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
      <div className="card-container" ref={cardContainerRef}>
        <div className={`card ${isFlipped ? "flipped" : ""}`}>
          <div className="front transform translate-y-[740px] sm:w-full max-sm:w-[400px] max-sm:mx-auto ">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="shadow-cardGreyMedium border-2 border-white hover:shadow-cardYellowMain hover:border-yellowMain cursor-pointer transition all duration 500 font-robotoCon bg-blackBG p-14 w-full max-w-2xl"
            >
              <div className="">
                <h1 className="text-yellowMain text-5xl font-bold mb-4 text-center">
                  CALCULER VOTRE IMC
                </h1>
                <p className="text-white text-sm mb-10 text-center">
                  Calculez votre indice de masse corporel (IMC) et découvrez
                  votre poids idéal!
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
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  <div className="flex-1">
                    <DropdownField
                      name="age"
                      label="Age"
                      options={ageOptions}
                    />
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
              <div className="flex justify-center mt-7 -mb-7">
                {!isFormValid && isFormValid !== null && (
                  <p className="font-urbanist text-red-500">
                    Veuillez remplir tous les champs pour calculer votre IMC.
                  </p>
                )}
              </div>
              <div className="flex gap-5 mt-2 justify-center ">
                <ButtonBlack
                  buttonFont={"font-robotoCon"}
                  fontWeight={"mt-10 w-full font-black"}
                  buttonType={"reset"}
                  onClick={handleReset}
                >
                  Réinitialiser
                </ButtonBlack>
                <ButtonYellow
                  buttonFont={"font-robotoCon"}
                  fontWeight={"mt-10 w-full font-black"}
                  buttonType={"submit"}
                  onClick={handleSubmit}
                >
                  Calculer
                </ButtonYellow>
              </div>
            </form>
          </div>
          <div className="back">
            <div className="flex flex-col gap-10 shadow-cardGreyMedium border-2 border-white hover:shadow-cardYellowMain hover:border-yellowMain cursor-pointer transition all duration 500 font-robotoCon bg-blackBG p-14 w-full max-w-2xl">
                <GaugeChart
                  id="gauge-chart"
                  nrOfLevels={4}
                  colors={Object.values(colorsArray)}
                  percent={gaugeValue}
                  arcPadding={0.02}
                  hideText={true}
                  fontSize={"0"}
                  needleColor={"white"}
                  needleBaseColor={"white"}
                  style={{ width: "600px" }}
                />
              <div className="flex flex-col gap-6 text-white font-urbanist text-3xl font-bold mb-4 text-center">
                <h1 className="text-4xl">Votre IMC est </h1>
                <span className="block text-8xl"> {imc}</span>
                <span
                  className="text-6xl"
                  style={{ color: colorsArray[imcInterpretation] }}
                >
                  {imcInterpretation}
                </span>
              </div>
              <ButtonYellow
                buttonFont={"font-robotoCon"}
                fontWeight={"hover:scale-105 w-full font-black"}
                onClick={() => setIsFlipped(false)}
              >
                Recalculer l'IMC
              </ButtonYellow>
            </div>
          </div>
        </div>
      </div>
    </FormProvider>
  );
};

export default IMCFormBedis;
