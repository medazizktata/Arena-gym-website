import SubscriptionBox from "../../components/FichePrix";
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

function Activite() {
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
            <h1 className="text-greyLight font-Gentona font-black text-9xl" style={{ opacity: 0.7, marginTop: "300px" }}>
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
        <div className="relative z-10 mt-20 scale-90" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <ActivityCard img='images/gym-workout-plan-for-gaining-muscle_header.jpg' nom='Body Building' icon='images/6dcc2d2ac756fe47587fd2be39913e47-removebg-preview.png' />
          <ActivityCard img='images/1000_F_524378456_7iH4roEgy8t8351zKypjRumlIbRfwhIO.jpg' nom='RPM' icon='images/6dcc2d2ac756fe47587fd2be39913e47-removebg-preview.png' />
          <ActivityCard img='images/dumbbells-gym-64a3f4bc2fe31.jpg' nom='Fitness' icon='images/6dcc2d2ac756fe47587fd2be39913e47-removebg-preview.png' />
        </div>

        {/* Second set of cards */}
        <div className="relative z-10 scale-90 " style={{ display: 'flex', justifyContent: 'space-between', marginTop:'150px' }}>
          <ActivityCard img='images/boxe-anglaise-debutant_dojo.jpg' nom='Boxe' icon='images/6dcc2d2ac756fe47587fd2be39913e47-removebg-preview.png' />
          <ActivityCard img='images/Gym-structure-1080x675.png' nom='Cross Fit' icon='images/6dcc2d2ac756fe47587fd2be39913e47-removebg-preview.png' />
          <ActivityCard img='images/1000_F_575226840_HVm83lSEIqArrnLNrhXxzebjeRJ14AtE.jpg' nom='Body Pump' icon='images/6dcc2d2ac756fe47587fd2be39913e47-removebg-preview.png' />
        </div>

        {/* Third set of cards */}
        <div className="relative z-10 scale-90 " style={{ display: 'flex', justifyContent: 'space-between', marginTop:'150px' }}>
          <ActivityCard img='images/gym-workout-plan-for-gaining-muscle_header.jpg' nom='stoufa' icon='images/6dcc2d2ac756fe47587fd2be39913e47-removebg-preview.png' />
          <ActivityCard img='images/gym-workout-plan-for-gaining-muscle_header.jpg' nom='stoufa' icon='images/6dcc2d2ac756fe47587fd2be39913e47-removebg-preview.png' />
        </div>

      </div>

      {/* Pagination */}
      <Pagination />
    </div>
  );
}

export default Activite;
