import SubscriptionBox from "../../components/fiche_prix";
import Form_Ins from "../../components/form_inscription";
import Navbar from "../../components/Navbar";
import BackgroundText from "../../components/BackgroundText";
import { getColor } from "../../utils/getColor";
import CustomizableTextBox from "../../components/CustomizableTextBox";
import ButtonBlack from "../../components/Buttons/ButtonBlack";
import SearchBox from "../../components/SearchBox";
import ActivityCard from "../../components/activitycard";

function Activite(){
  let img= 'images/gym-workout-plan-for-gaining-muscle_header.jpg' 
  return(
      
        <div>
        <Navbar/>  

        <div>
        
        </div>
        <div className="mb-10 relative">
            <div className="inline-block flex flex-col relative z-10">
                <div className="" style={{ transform: 'translateY(110%)' }}>
                    <BackgroundText
                    text={"ACTIVITE"}
                    strokeColor="white"
                    fontFamily={"urbanist"}
                    textSize={25}/>
                </div>
                <div className="mt-20 relative">
                    <ActivityCard img='images/gym-workout-plan-for-gaining-muscle_header.jpg' nom='stoufa' icon='images/6dcc2d2ac756fe47587fd2be39913e47-removebg-preview.png' />
                </div>
        </div>
        
       </div>
       </div>

    );

}












export default Activite;