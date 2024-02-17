import CANationalParkIMG from "./Photos/caNationalPark.png";
import spaceTravelImg from "./Photos/spaceTravel.png";
const getProjs = () => {
  const arr = [
    {
      img: spaceTravelImg,
      title: "Space travel",
      description: "description",
      link: "https://jguedel.github.io/SpaceTravel/",
    },
    {
      img: CANationalParkIMG,
      title: "CA National Parks",
      description: "description2",
      link: "https://jguedel.github.io/CaNationalParks/",
    },
  ];
  return arr;
};

export default getProjs;
