import CANationalParkIMG from "./Photos/caNationalPark.png";
import spaceTravelImg from "./Photos/spaceTravel.png";
import { v4 as id } from "uuid";
const getProjs = () => {
  const arr = [
    {
      img: spaceTravelImg,
      title: "Space travel",
      description: "description",
      link: "https://jguedel.github.io/SpaceTravel/",
      key: id(),
    },
    {
      img: CANationalParkIMG,
      title: "CA National Parks",
      description: "description2",
      link: "https://jguedel.github.io/CaNationalParks/",
      key: id(),
    },
  ];
  return arr;
};

export default getProjs;
