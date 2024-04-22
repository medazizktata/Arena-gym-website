import React, { useState } from "react";
import PageIntroduction from "../../components/PageIntroduction";
import ActivityCard from "../../components/ActivityCard";
import BackgroundText from "../../components/BackgroundText";
import DropdownFieldVierge from "../../components/DropDownFieldVierge";

import Pagination from "../../components/Pagination";

function Activite() {
  const label = "Objectifs à atteindre";
  const options = [
    "Choisir Objectif",
    "Perte de poids",
    "Musculation",
    "Cross Fit",
    "Danse",
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const activitiesPerPage = 8;

  const [activities, setActivities] = useState([
    { name: "Strength Training", img: "/images/gym-workout-plan-for-gaining-muscle_header.jpg" },
    { name: "Spinning", img: "/images/1000_F_524378456_7iH4roEgy8t8351zKypjRumlIbRfwhIO.jpg" },
    { name: "HIIT Workout", img: "/images/dumbbells-gym-64a3f4bc2fe31.jpg" },
    { name: "Pilates", img: "/images/dumbbells-gym-64a3f4bc2fe31.jpg" },
    { name: "Zumba", img: "/images/gym-workout-plan-for-gaining-muscle_header.jpg" },
    { name: "Cycling", img: "/images/1000_F_524378456_7iH4roEgy8t8351zKypjRumlIbRfwhIO.jpg" },
    { name: "Tabata", img: "/images/dumbbells-gym-64a3f4bc2fe31.jpg" },
    { name: "Aerobics", img: "/images/dumbbells-gym-64a3f4bc2fe31.jpg" },
    { name: "Boxing", img: "/images/gym-workout-plan-for-gaining-muscle_header.jpg" },
    { name: "Plyometrics", img: "/images/1000_F_524378456_7iH4roEgy8t8351zKypjRumlIbRfwhIO.jpg" },
    { name: "Swimming", img: "/images/dumbbells-gym-64a3f4bc2fe31.jpg" },
    { name: "Barre Workout", img: "/images/dumbbells-gym-64a3f4bc2fe31.jpg" },
    { name: "Power Yoga", img: "/images/gym-workout-plan-for-gaining-muscle_header.jpg" },
    { name: "Rowing", img: "/images/1000_F_524378456_7iH4roEgy8t8351zKypjRumlIbRfwhIO.jpg" },
    { name: "Circuit Training", img: "/images/dumbbells-gym-64a3f4bc2fe31.jpg" },
    { name: "Kettlebell Workout", img: "/images/dumbbells-gym-64a3f4bc2fe31.jpg" },
    { name: "Tai Chi", img: "/images/gym-workout-plan-for-gaining-muscle_header.jpg" },
    { name: "Bootcamp", img: "/images/1000_F_524378456_7iH4roEgy8t8351zKypjRumlIbRfwhIO.jpg" },
    { name: "Stretching", img: "/images/dumbbells-gym-64a3f4bc2fe31.jpg" },
    { name: "Kickboxing", img: "/images/dumbbells-gym-64a3f4bc2fe31.jpg" },
    { name: "TRX Training", img: "/images/gym-workout-plan-for-gaining-muscle_header.jpg" },
    { name: "Crossfit", img: "/images/1000_F_524378456_7iH4roEgy8t8351zKypjRumlIbRfwhIO.jpg" },
    { name: "Bodyweight Exercises", img: "/images/dumbbells-gym-64a3f4bc2fe31.jpg" },
    { name: "Calisthenics", img: "/images/dumbbells-gym-64a3f4bc2fe31.jpg" },
    { name: "Functional Training", img: "/images/gym-workout-plan-for-gaining-muscle_header.jpg" },
    { name: "Prenatal Yoga", img: "/images/1000_F_524378456_7iH4roEgy8t8351zKypjRumlIbRfwhIO.jpg" },
    { name: "Postnatal Workout", img: "/images/dumbbells-gym-64a3f4bc2fe31.jpg" },
    { name: "Meditation", img: "/images/dumbbells-gym-64a3f4bc2fe31.jpg" },
    { name: "High-Intensity Interval Training (HIIT)", img: "/images/gym-workout-plan-for-gaining-muscle_header.jpg" },
    { name: "Step Aerobics", img: "/images/1000_F_524378456_7iH4roEgy8t8351zKypjRumlIbRfwhIO.jpg" },
    { name: "Piloxing", img: "/images/dumbbells-gym-64a3f4bc2fe31.jpg" },
    { name: "Water Aerobics", img: "/images/dumbbells-gym-64a3f4bc2fe31.jpg" },
    { name: "Gymnastics", img: "/images/gym-workout-plan-for-gaining-muscle_header.jpg" },
    { name: "Kickboxing Fitness", img: "/images/1000_F_524378456_7iH4roEgy8t8351zKypjRumlIbRfwhIO.jpg" },
    { name: "Tabata Training", img: "/images/dumbbells-gym-64a3f4bc2fe31.jpg" },
    { name: "Senior Fitness", img: "/images/dumbbells-gym-64a3f4bc2fe31.jpg" },
    { name: "Barre Pilates", img: "/images/gym-workout-plan-for-gaining-muscle_header.jpg" },
    { name: "Interval Training", img: "/images/1000_F_524378456_7iH4roEgy8t8351zKypjRumlIbRfwhIO.jpg" },
    { name: "Parkour", img: "/images/dumbbells-gym-64a3f4bc2fe31.jpg" },
    { name: "Aerial Yoga", img: "/images/dumbbells-gym-64a3f4bc2fe31.jpg" },
  ]);
  

  const indexOfLastActivity = currentPage * activitiesPerPage;
  const indexOfFirstActivity = indexOfLastActivity - activitiesPerPage;
  const currentActivities = activities.slice(indexOfFirstActivity, indexOfLastActivity);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <PageIntroduction
        imgSrc="../src/assets/Images/Caroussel/Hero-section/Training_ground.jpg"
        title="Nos Activités"
        titleProps="text-greyLight ml-[15%] uppercase text-6xl sm:text-7xl md:text-8xl lg:text-9xl"
      />
      <div className="my-20 -mt-8 w-3/4 m-auto">
        <DropdownFieldVierge
          name="plagesHoraires"
          label={label}
          options={options}
        />
      </div>
      <div className="mx-auto">
      <div className="flex flex-col justify-center items-center m-auto mx-20">
        <div className="w-full scale-100 mx-20 grid justify-items-center items-center grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 max-sm:min-w-[90%] max-sm:max-w-screen-[500px] max-sm:mx-10 max-sm:scale-90  ">
          {currentActivities.map((activity, index) => (
            <ActivityCard key={index} img={activity.img} nom={activity.name} />
          ))}
        </div>
      </div>
      </div>
      <div className="my-10">
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(activities.length / activitiesPerPage)}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default Activite;
