import SubscriptionBox from "../../components/FichePrix";
import Form_Ins from "../../components/form_inscription";
import Navbar from "../../components/Navbar/Navbar";
import { getColor } from "../../utils/getColor";
import CustomizableTextBox from "../../components/CustomizableTextBox";
import ButtonBlack from "../../components/Buttons/ButtonBlack";
import ActivityCard from "../../components/ActivityCard";
import Pagination from "../../components/Pagination";
import BackgroundText from "../../components/BackgroundText";
import DropdownField from "../../components/input_2";
import BelowFooter from "../../components/BelowFooter";



function Activite() {
  const label = "Objectifs à atteindre";
  const options = ["Choose Option", "Weight Loss", "Body Building", "Cross Fit", "Dance" ];
  return (
    <div>
      
      <div className="relative min-h-screen flex flex-col items-start">
        <div className="absolute inset-0 h-full z-10 w-auto">
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
            <h1 className="text-greyLight font-Gentona font-black lg:text-9xl md:text-7xl sm:text-5xl text-5xl" style={{ opacity: 0.7, marginTop: "300px" }}>
              Nos Activités
            </h1>
          </div>
          </div>
          </div>
          
      <div className='w-3/4 m-auto' >
        <DropdownField label={label} options={options}  />
      </div>

      {/* Render cards above background text */}
      <div className="mb-10 relative z-15 " >

      <div className="absolute z-1 w-full top-1/2 transform -translate-y-1/2 opacity-50 flex flex-col justify-between">
          <BackgroundText
            className=""
            text={"Activite"}
            fontFamily={"urbanist"}
            strokeColor={"white"}
            textSize={20}
          />
          <BackgroundText
            className=""
            text={"Activite"}
            fontFamily={"urbanist"}
            strokeColor={"white"}
            textSize={20}
            style={{marginTop:'100px'}}
          />
          
        </div>
        <div className="flex flex-col gap-1 justify-center items-center z-10 scale-90 md:flex-row" style={{ marginLeft:'10%', marginRight:'10%', display: 'flex', justifyContent: 'space-between' }}>
            <ActivityCard img='images/gym-workout-plan-for-gaining-muscle_header.jpg' nom='Body Building' icon='images/6dcc2d2ac756fe47587fd2be39913e47-removebg-preview.png' />
            <ActivityCard img='images/1000_F_524378456_7iH4roEgy8t8351zKypjRumlIbRfwhIO.jpg' nom='RPM' icon='images/6dcc2d2ac756fe47587fd2be39913e47-removebg-preview.png' />
            <ActivityCard img='images/dumbbells-gym-64a3f4bc2fe31.jpg' nom='Fitness' icon='images/6dcc2d2ac756fe47587fd2be39913e47-removebg-preview.png' />
        </div>


        {/* Second set of cards */}
        <div className=" flex flex-col gap-1 justify-center items-center z-10 scale-90 md:flex-row" style={{display: 'flex', justifyContent: 'space-between', marginLeft:'10%', marginRight:'10%' }}>
            <ActivityCard img='images/gym-workout-plan-for-gaining-muscle_header.jpg' nom='Body Building' icon='images/6dcc2d2ac756fe47587fd2be39913e47-removebg-preview.png' className=" md:w-1/3 lg:w-1/3 xl:w-1/5" />
            <ActivityCard img='images/1000_F_524378456_7iH4roEgy8t8351zKypjRumlIbRfwhIO.jpg' nom='RPM' icon='images/6dcc2d2ac756fe47587fd2be39913e47-removebg-preview.png' />
            <ActivityCard img='images/dumbbells-gym-64a3f4bc2fe31.jpg' nom='Fitness' icon='images/6dcc2d2ac756fe47587fd2be39913e47-removebg-preview.png' />
        </div>


        {/* Third set of cards */}
        <div className=" flex flex-col gap-1 justify-center items-center z-10 scale-90 md:flex-row" style={{display: 'flex', justifyContent: 'space-between', marginLeft:'10%', marginRight:'10%' }}>
          <ActivityCard img='images/gym-workout-plan-for-gaining-muscle_header.jpg' nom='stoufa' icon='images/6dcc2d2ac756fe47587fd2be39913e47-removebg-preview.png' />
          <ActivityCard img='images/gym-workout-plan-for-gaining-muscle_header.jpg' nom='stoufa' icon='images/6dcc2d2ac756fe47587fd2be39913e47-removebg-preview.png' />
          <ActivityCard img='images/gym-workout-plan-for-gaining-muscle_header.jpg' nom='stoufa' icon='images/6dcc2d2ac756fe47587fd2be39913e47-removebg-preview.png' />
        </div>

      </div>

      {/* Pagination */}
      <Pagination className=" mx-auto" />
    </div>
  );
}

const data = [
  {
    name: 'RPM',
    img: 'images/gym-workout-plan-for-gaining-muscle_header.jpg',
    icon:'images/6dcc2d2ac756fe47587fd2be39913e47-removebg-preview.png'
  },
  {
    name: 'Cardio',
    img: 'images/Gym-structure-1080x675.png',
    icon:'images/6dcc2d2ac756fe47587fd2be39913e47-removebg-preview.png'
  },
  {
    name: 'Musculation',
    img: 'images/dumbbells-gym-64a3f4bc2fe31.jpg',
    icon:'images/6dcc2d2ac756fe47587fd2be39913e47-removebg-preview.png'
  },
  {
    name: 'boxe',
    img: 'images/boxe-anglaise-debutant_dojo.jpg',
    icon:'images/6dcc2d2ac756fe47587fd2be39913e47-removebg-preview.png'
  }
];
export default Activite;
