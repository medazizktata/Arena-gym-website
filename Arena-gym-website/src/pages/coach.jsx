import React from "react";
import PageIntroduction from "../components/PageIntroduction";
import BackgroundText from "../components/BackgroundText.jsx";
import CoachCard from "../components/coachcard.jsx";
import coachImage from "../assets/Img/coach1.jpg"
import CustomizableTextBox from "../components/CustomizableTextBox.jsx"



function Coach (){

return(
<>


 <PageIntroduction
                imgSrc="src/assets/Images/Caroussel/Hero-section/Training_ground.jpg"
                title="COACH"
                titleProps="text-greyLight font-Gentona font-black text-12xl  ml-40 "
                
/>

<div className="relative">
                <BackgroundText className="z-10" text="RADOUEN FOULEN" fontFamily=""  strokeColor="white"  textSize=""  />
                <h1 className="text-white font-bold text-8xl z-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">RADOUEN FOULEN</h1>
</div>
<div className="flex flex-col items-center">
<BackgroundText className="z-10" text="RADOUEN FOULEN" fontFamily=""  strokeColor="white"  textSize=""  />
<h1 className="text-white font-bold text-8xl z-20">RADOUEN FOULEN</h1>
<h2 className="text-white text-6xl">HEAD COACH</h2>
</div> 









<div className="flex flex-row my-40 ">
<CustomizableTextBox text="AAAAAAA" textColor="white" />
   <img src="https://media.licdn.com/dms/image/D4E03AQEq_letOm387Q/profile-displayphoto-shrink_800_800/0/1684915953004?e=2147483647&v=beta&t=VgErBupwbY9tz_WETka65byU42cJcPo8WHx2gzAJk_A" alt="coach" />


   
   <h1 className="text-white">Introduction</h1>
   <p className="text-white">AAAAAAAAA</p>
   <h1 className="text-white">Salle</h1>
   <h1 className="text-white">Spécilaté</h1>
   

</div>

<h1 className="text-white font-robotoCon text-3xl ml-20 mb-20">
Vous êtes peut-être intéressé par ...
</h1>


<div className="flex flex-col justify-center gap-32 mx-0 mb-20 md:flex-row justify-center md:mx-20">
        <CoachCard
          nom ="Siwar"
          img={coachImage}
        />
        <CoachCard
          nom ="Rania"
          img={coachImage}
        />
        <CoachCard
          nom ="Yasmine"
          img={coachImage}
        />
</div>


</>
)































}export default Coach;