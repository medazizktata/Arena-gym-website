import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <button className={className} onClick={onClick}>
      <IoIosArrowForward />
    </button>
  );
}
