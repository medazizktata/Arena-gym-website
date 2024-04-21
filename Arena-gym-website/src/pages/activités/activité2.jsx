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
            <div className="m-auto text-white font-Urbanist font-black text-5xl lg:text-9xl md:text-7xl z-10 w-full text-center" style={{marginTop:'-150px'}}>
            
                <div className="" style={{ transform: 'translateY(60%)' }}>
                    <BackgroundText
                    text={"Description"}
                    strokeColor="white"
                    fontFamily={"urbanist"}
                    textSize={25}/>
                </div>
            <h1 className="inline text-white font-Urbanist font-black text-5xl lg:text-9xl md:text-7xl  text-center">
                DESCRIPTION
            </h1>
            </div>

            {/* Description */ }
            <div className="z-10" >
            <CustomizableTextBox
        className={"m-auto my-16 text-center"}
        size="70%"
        text={
          "Le RPM est une activité sportive dynamique et énergique qui se pratique sur un vélo stationnaire, en suivant le rythme de la musique. C'est un entraînement cardiovasculaire complet qui améliore la condition physique et brûle des calories."
        }
        textColor={"text-white"}
      />
            </div>

            </div>

            

            

            {/* Rectangles */}
            <div className="w-full flex flex-col gap-1 justify-center items-center z-10 scale-90 md:flex-row" style={{ display: 'flex', justifyContent: 'space-between' }}>
            
            <div className="border-2 border-black p-4 mx-auto bg-white shadow-cardGreyMedium z-10" style={{border:'3px solid white' , width:"75%", marginTop:'50px', marginLeft:'5%', marginRight:'5%', height:'100%' }} >
                <p className="text-base leading-relaxed text-justify text-black font-mosk text-4xl lg:text-4xl md:text-4xl sm:text-3xl" style={{ fontSize: "30px", fontWeight: 700}}>
                    Horraire: </p>

                    <p className="text-base leading-relaxed text-justify text-black font-mosk" style={{ fontSize: "22px", fontWeight: 600}}>
                    Lundi : 15h </p> 
                    <p className="text-base leading-relaxed text-justify text-black font-mosk" style={{ fontSize: "22px", fontWeight: 600}}>
                    Mercredi : 15h </p>    
            </div>






        <div className="border-2 border-black p-4 mx-auto bg-yellowMain shadow-cardGreyMedium z-10" style={{border:'3px solid white' , width:"75%", marginTop:'50px', marginLeft:'5%', marginRight:'5%', height:'100%'}} >
                <p className="text-base leading-relaxed text-justify text-black font-mosk text-4xl lg:text-4xl md:text-4xl sm:text-3xl" style={{ fontSize: "30px", fontWeight: 700}}>
                    Strength Cardio: </p>

                    <p className="text-base leading-relaxed  text-black font-mosk" style={{ fontSize: "18px", fontWeight: 600}}>
                    Amélioration de la santé cardiovasculaire. </p> 

                    <p className="text-base leading-relaxed  text-black font-mosk" style={{ fontSize: "18px", fontWeight: 600}}>
                    Brûlage de calories et perte de poids.</p> 

                    <p className="text-base leading-relaxed  text-black font-mosk" style={{ fontSize: "18px", fontWeight: 600}}>
                    Amélioration de l'endurance. </p> 

                       
            </div>




            <div className="border-2 border-black p-4 mx-auto bg-white shadow-cardGreyMedium z-10" style={{border:'3px solid white' , width:"75%", marginTop:'50px' , marginLeft: '5%', marginRight:'5%', height:'100%'}} >
                <p className="text-base leading-relaxed text-justify text-black font-mosk text-4xl lg:text-4xl md:text-4xl sm:text-3xl" style={{fontWeight: 700}}>
                    Recommandations: </p>

                    <p className="text-base leading-relaxed text-justify text-black font-mosk" style={{ fontSize: "18px", fontWeight: 600}}>
                    Restez hydraté:  Buvez de l'eau avant, pendant et après la séance pour éviter la déshydratation. </p> 

                    

                       
            </div>
      </div>


      {/* COACHES BG */}
      <div className="m-auto text-white font-Urbanist font-black text-5xl lg:text-9xl md:text-7xl  text-center" style={{marginTop:'-75px'}}>
            
                <div className="" style={{ transform: 'translateY(60%)' }}>
                    <BackgroundText
                    text={"Coaches"}
                    strokeColor="white"
                    fontFamily={"urbanist"}
                    textSize={25}/>
                </div>
            <h1 className="inline text-white font-Urbanist font-black text-5xl lg:text-9xl md:text-7xl  text-center">
                COACHES
            </h1>
            </div>

        {/* Coaches cards */}
        <div className="flex flex-col gap-1 justify-center items-center z-10 scale-90 md:flex-row" style={{ marginLeft:'20%', marginRight:'20%', display: 'flex', justifyContent: 'space-between' }}>
          <CoachCard img='images/gym-workout-plan-for-gaining-muscle_header.jpg' nom='Mounir' />
          <CoachCard img='images/1000_F_524378456_7iH4roEgy8t8351zKypjRumlIbRfwhIO.jpg' nom='Neji' />
        </div>
            

        {/* Activités */}
        
        <div className="mb-10 relative z-15 " >

        <p className="text-white text-3xl lg:text-4xl md:text-4xl sm:text-3xl" style={{ fontFamily: "Roboto Condensed", fontWeight: 600, marginLeft:'10%', marginTop:'50px', marginBottom : '0px' }}>Vous êtes peut-être intéressé par...</p>


            <div className="absolute z-1 w-full top-1/2 transform -translate-y-1/2 opacity-50 flex flex-col justify-between" style={{transform : 'translateY(-70%)'}}>


                <BackgroundText
                    className=""
                    text={"Activites"}
                    fontFamily={"urbanist"}
                    strokeColor={"white"}
                    textSize={20}
                    />
    
                </div>
                <div className="flex flex-col gap-1 justify-center items-center z-10 scale-90 md:flex-row" style={{ marginLeft:'10%', marginRight:'10%', display: 'flex', justifyContent: 'space-between' }}>
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
  