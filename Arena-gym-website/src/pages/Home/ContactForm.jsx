import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import InputField from "../../components/input";
import ButtonYellow from "../../components/Buttons/ButtonYellow";

const ContactForm = () => {
  const methods = useForm();
  const { handleSubmit, reset } = methods;

  const onSubmit = (data) => {
    console.log(data); // Affiche les données du formulaire dans la console
    reset(); // Réinitialise le formulaire après la soumission
  };

  return (
    <FormProvider {...methods}>
      <div className="flex flex-col items-center justify-center min-h-screen bg-blackBG font-robotoCon w-[40%] ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-7 bg-blackBG shadow-cardGreyMedium border-2 border-white hover:shadow-cardYellowMain hover:border-yellowMain cursor-pointer transition all duration 500 font-robotoCon bg-blackBG p-14 w-full max-w-2xl"
        >
          <h1 className="text-yellowMain text-5xl font-bold text-center mb-5">
            CONTACTEZ-NOUS
          </h1>

          <div className="">
            <InputField
              name={"fullName"}
              label={"Nom Complet"}
              placeholder={"Ex. Flen Ben Foulane"}
              type={"text"}
              require={1}
            />
          </div>
          <div className="">
            <InputField
              name="email"
              label="Adresse E-mail"
              placeholder="Ex. flen@yourmail.com"
              type="email"
              require={1}
            />
          </div>
          <div className="">
            <InputField name="message" label="Message" type="textarea" placeholder={"Enter your message"} require={1} />
          </div>
          <div className="mt-8 ">
            <ButtonYellow
              buttonType={"submit"}
              buttonFont="font-bold"
              paddingX="4"
              fontWeight={"w-full"}
            >
              Envoyer
            </ButtonYellow>
          </div>
        </form>
      </div>
    </FormProvider>
  );
};

export default ContactForm;
