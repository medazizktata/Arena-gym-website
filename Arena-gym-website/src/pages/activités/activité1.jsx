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

function Activite() {
  const label = "Objectifs à atteindre";
  const options = ["Option 1", "Option 2", "Option 3", "Option 4"];
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
      <div className="mb-10 relative z-15" style={{ display: 'flex', flexDirection: 'column' }}>

      <div className="absolute z-1 w-full top-10 opacity-50">
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
          />
        </div>
        <div className="relative z-10 mt-20" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <ActivityCard img='images/gym-workout-plan-for-gaining-muscle_header.jpg' nom='stoufa' icon='images/6dcc2d2ac756fe47587fd2be39913e47-removebg-preview.png' />
          <ActivityCard img='images/gym-workout-plan-for-gaining-muscle_header.jpg' nom='stoufa' icon='images/6dcc2d2ac756fe47587fd2be39913e47-removebg-preview.png' />
          <ActivityCard img='images/gym-workout-plan-for-gaining-muscle_header.jpg' nom='stoufa' icon='images/6dcc2d2ac756fe47587fd2be39913e47-removebg-preview.png' />
        </div>

        {/* Second set of cards */}
        <div className="relative z-10 mt-20" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <ActivityCard img='images/gym-workout-plan-for-gaining-muscle_header.jpg' nom='stoufa' icon='images/6dcc2d2ac756fe47587fd2be39913e47-removebg-preview.png' />
          <ActivityCard img='images/gym-workout-plan-for-gaining-muscle_header.jpg' nom='stoufa' icon='images/6dcc2d2ac756fe47587fd2be39913e47-removebg-preview.png' />
          <ActivityCard img='images/gym-workout-plan-for-gaining-muscle_header.jpg' nom='stoufa' icon='images/6dcc2d2ac756fe47587fd2be39913e47-removebg-preview.png' />
        </div>

        {/* Third set of cards */}
        <div className="relative z-10 mt-20" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <ActivityCard img='images/gym-workout-plan-for-gaining-muscle_header.jpg' nom='stoufa' icon='images/6dcc2d2ac756fe47587fd2be39913e47-removebg-preview.png' />
          <ActivityCard img='images/gym-workout-plan-for-gaining-muscle_header.jpg' nom='stoufa' icon='images/6dcc2d2ac756fe47587fd2be39913e47-removebg-preview.png' />
        </div>

      </div>

      {/* Pagination */}
      <Pagination />
      <BelowFooter/>
    </div>
  );
}

export default Activite;
