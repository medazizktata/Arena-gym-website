import SubscriptionBox from "../../components/fiche_prix";
import Form_Ins from "../../components/form_inscription";
import Navbar from "../../components/Navbar/Navbar";
import { getColor } from "../../utils/getColor";
import CustomizableTextBox from "../../components/CustomizableTextBox";
import ButtonBlack from "../../components/Buttons/ButtonBlack";
import ActivityCard from "../../components/activitycard";
import Pagination from "../../components/Pagination";
import BackgroundText from "../../components/BackgroundText";
import DropdownField from "../../components/input_2";
import BelowFooter from "../../components/BelowFooter";
import { RxFontSize } from "react-icons/rx";
import CoachCard from "../../components/coachcard";
import ButtonYellow from "../../components/Buttons/ButtonYellow";

function Activite2() {
    const label = "Objectifs à atteindre";
    const options = ["Choose Option", "Weight Loss", "Body Building", "Cross Fit", "Dance" ];
    return (
      <div>
        <Navbar />
        
        <div className="relative min-h-screen flex flex-col items-start">
          <div className="absolute inset-0 w-full h-full z-10">
            <img
              src="src/assets/Images/Caroussel/Hero-section/Training_ground.jpg"
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


          <div className="z-10 ml-10 m-40">
            <div className="mb-1">
              <h1 className="text-greyLight font-Gentona font-black text-9xl" style={{ opacity: 0.8, marginTop: "300px" }}>
                RPM
              </h1>
            </div>
            </div>

            {/* DESCRIPTION BG */}
            <div className="inline-block flex flex-col relative z-10 m-auto w-full">
            <h1 className="inline text-white font-Urbanist font-black text-9xl text-center">
                DESCRIPTION
            </h1>
                <div className="" style={{ transform: 'translateY(-75%)' }}>
                    <BackgroundText
                    text={"DESCRIPTION"}
                    strokeColor="white"
                    fontFamily={"urbanist"}
                    textSize={25}/>
                </div>
            
            </div>

            {/* Description */ }
            <div className="border-2 border-black p-4 mx-auto bg-transparent-200 shadow-cardWhite z-10" style={{border:'3px solid white' , width:"800px", height:'200px', marginTop:'-100px'}} >
                <p className="text-base leading-relaxed text-justify text-white" style={{ fontSize: "22px", fontWeight: 600}}>
                    Le RPM est une activité sportive dynamique et énergique qui se pratique sur un vélo stationnaire, en suivant le rythme de la musique. C'est un entraînement cardiovasculaire complet qui améliore la condition physique et brûle des calories.
                </p>
            </div>

            </div>

            

            

            {/* Rectangles */}
            <div className="mt-20 flex flex-row space-around justify-content align-items ">
        <CustomizableTextBox
          className="mx-20 text-blackBG"
          size="33%"
          text={`<div class="mx-10 flex flex-col gap-5 justify-content align-items">
              <div>
                  <span class="font-mosk font-black">Horaires</span>
              </div>
              <div class="flex flex-col gap-2 font-robotoCon">
                  <span>Lundi 15h</span>
                  <span>Mercredi 16h</span>
              </div>
          </div>`}
          color="bg-white"
          shadow="shadow-cardGreyMedium"
          textColor={"text-black"}
        />
        <CustomizableTextBox
          className="mx-20 text-blackBG"
          size="33%"
          text={`<div class="mx-10 flex flex-col gap-5 justify-content align-items">
              <div>
                  <span class="font-mosk font-black">Cardio Strength</span>
              </div>
              <div class="flex flex-col gap-2 font-robotoCon">
                  <span>(+216) 71 88 96 58</span>
                  <span>(+216) 58 88 38 83</span>
              </div>
          </div>`}
          color="bg-yellowMain"
          shadow="shadow-cardGreyMedium"
        />
        <CustomizableTextBox
          className="mx-20 text-black"
          size="33%"
          text={`<div class="mx-10 flex flex-col gap-5 justify-content align-items">
              <div>
                  <span class="font-mosk font-black">Recommandations</span>
              </div>
              <div class="flex flex-col gap-2 font-robotoCon">
                  <span>Colisée Soula | Esc D | 1er étage </span>
                  <span>2092 El Manar 2</span>
              </div>
          </div>`}
          color="bg-white"
          shadow="shadow-cardGreyMedium"
          textColor={"text-black"}
        />
      </div>


      {/* COACHES BG */}
      <div className="inline-block flex flex-col relative z-10 m-auto w-full" style={{marginTop:'-200px'}}>
            
                <div className="" style={{ transform: 'translateY(60%)' }}>
                    <BackgroundText
                    text={"Coaches"}
                    strokeColor="white"
                    fontFamily={"urbanist"}
                    textSize={25}/>
                </div>
            <h1 className="inline text-white font-Urbanist font-black text-9xl text-center">
                COACHES
            </h1>
            </div>

        {/* Coaches cards */}
        <div className="relative z-10 mt-20" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginLeft:'300px', marginRight: '300px' }}>
          <CoachCard img='images/gym-workout-plan-for-gaining-muscle_header.jpg' nom='Mounir' />
          <CoachCard img='images/1000_F_524378456_7iH4roEgy8t8351zKypjRumlIbRfwhIO.jpg' nom='Neji' />
        </div>
            

        {/* Activités */}
        
        <div className="mb-10 relative z-15 " >

        <p className="text-white" style={{ fontFamily: "Roboto Condensed", fontSize: "50px", fontWeight: 600, marginLeft:'200px', marginTop:'100px', marginBottom : '-100px'}}>Vous êtes peut-être intéressé par...</p>


            <div className="absolute z-1 w-full top-1/2 transform -translate-y-1/2 opacity-50 flex flex-col justify-between" style={{transform : 'translateY(-70%)'}}>


                <BackgroundText
                    className=""
                    text={"Activites"}
                    fontFamily={"urbanist"}
                    strokeColor={"white"}
                    textSize={20}
                    />
    
                </div>
                <div className="relative z-10 mt-20 scale-90" style={{ display: 'flex', justifyContent: 'space-between', marginTop:'200px' }}>
                    <ActivityCard img='images/gym-workout-plan-for-gaining-muscle_header.jpg' nom='Body Building' icon='images/6dcc2d2ac756fe47587fd2be39913e47-removebg-preview.png' />
                    <ActivityCard img='images/1000_F_524378456_7iH4roEgy8t8351zKypjRumlIbRfwhIO.jpg' nom='RPM' icon='images/6dcc2d2ac756fe47587fd2be39913e47-removebg-preview.png' />
                    <ActivityCard img='images/dumbbells-gym-64a3f4bc2fe31.jpg' nom='Fitness' icon='images/6dcc2d2ac756fe47587fd2be39913e47-removebg-preview.png' />
                </div>


        </div>



        <div className="flex flex-col justify-center items-center text-lg">
        <ButtonYellow
          buttonFont="font-robotoCon"
          fontWeight="font-black hover:scale-105"
          paddingX={10}
        >
          Voir nos Activités
        </ButtonYellow>
      </div>


        </div>
    );
  }
  
  export default Activite2;
  