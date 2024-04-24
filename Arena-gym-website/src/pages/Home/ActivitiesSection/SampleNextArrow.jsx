import { IoIosArrowBack } from "react-icons/io";

export default function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <button className={className} onClick={onClick}>
      <IoIosArrowBack />
    </button>
  );
}
