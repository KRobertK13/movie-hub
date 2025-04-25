import { HStack } from "@chakra-ui/react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
interface StarProps {
  numericRating: number;
}
const Stars = ({ numericRating }: StarProps) => {
  numericRating = Math.round(numericRating);
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    const value = i * 2;
    if (numericRating >= value) {
      stars.push(<FaStar key={i} size={25} color="#ECC94B" />);
    } else if (numericRating >= value - 1) {
      stars.push(<FaStarHalfAlt key={i} size={25} color="#ECC94B" />);
    } else {
      stars.push(<FaRegStar key={i} size={25} color="#CBD5E0" />);
    }
  }
  return <HStack marginTop={5}>{stars}</HStack>;
};

export default Stars;
