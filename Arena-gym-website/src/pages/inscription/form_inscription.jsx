import React, { useState } from "react";

import { useForm, FormProvider } from "react-hook-form";

import InputField from "../../components/input";
import DropdownField from "../../components/input_2";
import DropdownField2 from "./Input_2_disabled";
import { IoMdMale } from "react-icons/io";
import { IoMdFemale } from "react-icons/io";
import ButtonYellow from "../../components/Buttons/ButtonYellow";

const Form_Ins = () => {
  const methods = useForm();
  const { handleSubmit, register, reset } = methods;

  const [selectedGender, setSelectedGender] = useState("");

  const onSubmit = (data) => {
    // Ajout du genre sélectionné aux données du formulaire avant de les afficher
    const fullData = { ...data, gender: selectedGender };
    console.log(fullData); // Affiche les données du formulaire + genre dans la console
    reset(); // Réinitialise le formulaire et l'état local du genre après la soumission
    setSelectedGender(""); // Réinitialise le genre
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="shadow-cardGreyMedium border-2 border-white hover:shadow-cardYellowMain hover:border-yellowMain cursor-pointer transition all duration 500 font-robotoCon bg-blackBG bg-opacity-70 p-14 w-full max-w-2xl"
        >
          <h1 className="text-yellowMain text-7xl font-bold mb-6 text-center">
            REJOIGNEZ-NOUS
          </h1>
          <p className="text-white text-base mb-8 text-center">
            Veuillez remplir le formulaire pour vous inscrire et poursuivre vers
            la page de paiement
          </p>
          <div className="flex flex-col gap-7">
            <div className="flex gap-2">
              <div className="grow">
                <InputField
                  name="nom"
                  label="Nom"
                  placeholder="Ex. Flen"
                  type="text"
                  register={register}
                />
              </div>
              <div className="grow">
                <InputField
                  name="prenom"
                  label="Prénom"
                  placeholder="Ex. Flen"
                  type="text"
                  register={register}
                />
              </div>
            </div>
            <div className="">
              <InputField
                name="email"
                label="E-mail"
                placeholder="Ex. flen.falten@gmail.com"
                type="email"
                register={register}
              />
            </div>
            <div className="">
              <InputField
                name="numero"
                label="Numéro de téléphone"
                placeholder="+216"
                type="tel"
                register={register}
              />
            </div>
            <div className="">
              <DropdownField2
                name="pack"
                label="Pack choisi"
                options={["Pack 2 (560TND par 6 mois)"]}
                register={register}
              />
            </div>
            <div className="">
              <DropdownField
                name="plagesHoraires"
                label="Plages horaires préférées pendant la semaine/week-end ?"
                options={["Matin", "Après-midi", "Soir"]}
                register={register}
              />
            </div>
          </div>
          <div className="flex justify-around my-7 mt-8 mb-8">
            <button
              type="button"
              className={`bg-blackBG border border-1 border-white w-24 h-24 shadow-cardSmallBlueMaleDark hover:shadow-cardBlueMale transition all duration 500
              ${
                selectedGender === "male"
                  ? "bg-white hover:border-black"
                  : "bg-black hover:border-yellowMain"
              }`}
              onClick={() => setSelectedGender("male")}
            >
              <IoMdMale className="text-7xl mx-auto text-blueMale" />
            </button>
            <button
              type="button"
              className={`bg-blackBG border border-1 border-white w-24 h-24 shadow-cardSmallPinkFemaleDark hover:shadow-cardPinkFemale transition all duration 500
               ${
                 selectedGender === "female"
                   ? "bg-white hover:border-black"
                   : "bg-black hover:border-yellowMain"
               } `}
              onClick={() => setSelectedGender("female")}
            >
              <IoMdFemale className="text-7xl mx-auto text-pinkFemale" />
            </button>
          </div>
          <ButtonYellow buttonFont={"font-robotoCon"} fontWeight={"mt-10 w-full font-black"} buttonType={"submit"}> S'inscrire maintenant</ButtonYellow>
        </form>
      </FormProvider>
    </div>
  );
};

export default Form_Ins;