
import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import InputField from '../../components/input';
import Button from '../../components/Buttons/Button';

const ContactForm = () => {
    const methods = useForm();
    const { handleSubmit, reset } = methods;

    const onSubmit = data => {
        console.log(data); // Affiche les données du formulaire dans la console
        reset(); // Réinitialise le formulaire après la soumission
    };

    return (
        <FormProvider {...methods}>
            <div className="flex flex-col items-center justify-center min-h-screen bg-blackBG p-8">
                <form onSubmit={handleSubmit(onSubmit)} className="bg-blackBG bg-opacity-70 border-2 border-yellowMain p-16 w-full max-w-2xl">
                    <h1 className="text-yellowMain text-4xl font-bold mb-4 text-center">CONTACTEZ-NOUS</h1>

                    <div className="mb-4">
                        <InputField name="fullName" label="Nom Complet" placeholder="Ex. Flen Ben Foulane" type="text" />
                    </div>
                    <div className="mb-4">
                        <InputField name="email" label="Adresse E-mail" placeholder="Ex. flen@yourmail.com" type="email" />
                    </div>
                    <div className="mb-4">
                        <InputField name="message" label="Message" type="textarea" /> {/* Assurez-vous que votre InputField prend en charge le type "textarea" */}
                        </div>
                        <div className="mt-4">
    <Button type="submit" textColor="text-black" bgColor="bg-yellowMain" font="font-bold" padding="4" className="w-full">
        Envoyer
    </Button>
</div>
                    </form>
                </div>
            </FormProvider>
        );
    };
    
    export default ContactForm;
    