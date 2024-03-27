import BackgroundText from "../../components/BackgroundText";

function ActivitiesSection() {
  return (
    <>
      <div className=" my-10 relative">
        <h2 className="font-urbanist text-white text-3xl relative z-10">
          Découvrez nos activités
        </h2>
        <BackgroundText
          className=""
          text={"Activités"}
          fontFamily={"urbanist"}
          strokeColor={"white"}
          textSize={20}
        />
      </div>
    </>
  );
}

export default ActivitiesSection;
