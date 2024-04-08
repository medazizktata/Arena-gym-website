
import SubscriptionBox2 from "./fiche_prix_ins";
import Form_Ins from "../../components/form_inscription";
import Navbar from "../../components/Navbar/Navbar";
import BackgroundText from "../../components/BackgroundText";
import { getColor } from "../../utils/getColor";
import CustomizableTextBox from "../../components/CustomizableTextBox";
import ButtonBlack from "../../components/Buttons/ButtonBlack";


function Inscription(){
    return(
        <div>
        <Navbar/>  
        <div className="mb-10 relative">
            <div className="inline-block flex flex-col relative z-10">
                <div className="" style={{ transform: 'translateY(110%)' }}>
                    <BackgroundText
                    text={"INSCRIPTION"}
                    strokeColor="white"
                    fontFamily={"urbanist"}
                    textSize={25}/>
                </div>
            <h1 className="inline text-white font-Urbanist font-black text-9xl text-center">
            INSCRIPTION
            </h1>
        </div>

        <img
            src="src/assets/Images/inscription/Rectangle 43.png"
            className="absolute inset-0 w-full h-full object-cover"
            alt="Background"
        />
        <div
            className="absolute inset-0 w-full"
            style={{
            background: `linear-gradient(to top, ${getColor(
                "blackBG"
            )}, rgba(255,255,255,0))`,
            }}
        ></div>
        </div>
      <div className="w-full relative mt-24 mb-2">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-4 md:space-x-8">
          <div className="w-full md:w-1/4 flex flex-col items-center">
            <span className="inline text-white font-Urbanist font-black text-5xl pb-6">PACK CHOISI</span>
            <SubscriptionBox2
              packName="PACK 2"
              type={1}
              price="560"
              duration="par 6 mois"
              items={['Force', 'Cardio vasculaire', 'TRX', 'Yoga', 'Cross-fit', 'Box']}
              svgIcon={
                <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.6766 2.01709C7.21285 2.01709 1.97266 7.25728 1.97266 13.7211C1.97266 20.1849 7.21285 25.4251 13.6766 25.4251C20.1404 25.4251 25.3806 20.1849 25.3806 13.7211C25.3806 7.25728 20.1404 2.01709 13.6766 2.01709ZM18.7498 11.742C18.8432 11.6353 18.9143 11.5109 18.959 11.3762C19.0036 11.2415 19.0208 11.0993 19.0097 10.9579C18.9985 10.8164 18.9592 10.6786 18.894 10.5526C18.8289 10.4266 18.7391 10.3149 18.6301 10.2241C18.5211 10.1332 18.3951 10.0651 18.2594 10.0237C18.1237 9.98236 17.9811 9.96852 17.8399 9.98306C17.6988 9.9976 17.562 10.0402 17.4376 10.1084C17.3132 10.1766 17.2037 10.269 17.1155 10.3801L12.5403 15.8693L10.1729 13.5008C9.97222 13.307 9.70345 13.1998 9.42448 13.2022C9.1455 13.2046 8.87863 13.3165 8.68136 13.5138C8.48409 13.7111 8.37219 13.9779 8.36976 14.2569C8.36734 14.5359 8.47458 14.8046 8.6684 15.0053L11.8604 18.1973C11.9649 18.3018 12.0901 18.3834 12.2279 18.4368C12.3657 18.4902 12.5132 18.5143 12.6608 18.5076C12.8085 18.5009 12.9531 18.4635 13.0855 18.3978C13.2179 18.3321 13.3352 18.2396 13.4298 18.126L18.7498 11.742Z" fill="black"/>
                    </svg>
              }
              link="https://example.com"
              offer="hidden"
            />
            <div className="p-12">
            <ButtonBlack buttonFont="font-bold" paddingX="px-8" fontWeight="font-bold">
              Changer d'offre
            </ButtonBlack>
            </div>
          </div>
          <div className="w-full md:w-1/6 relative">
            <img
              src="src/assets/Images/inscription/pngwing.com.png" // Utilisez votre image importée ici
              alt="Fitness"
              className="relative w-72  z-10 max-w-xs md:max-w-md"
              style={{ transform: 'translateX(-4rem)'  }} // Ajustez si nécessaire
            />
          </div>
        </div>
      </div>
      <Form_Ins />
    </div>

    );

}













export default Inscription;