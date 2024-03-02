import CANationalParkIMG from "./Photos/caNationalPark.png";
import spaceTravelImg from "./Photos/spaceTravel.png";
import { v4 as id } from "uuid";
const getProjs = () => {
  const arr = [
    {
      img: CANationalParkIMG,
      title: "CA National Parks",
      description: `The purpose of this website is to help users discover and explore the stunning National Parks in California. Users can access detailed information about these parks, make them their favorites, and even sign in and out to enhance their experience.`,
      features: [
        `User Auth: Securely sign in and out to personalize your experience`,
        `Manage Favorites: Add or remove your favorite parks for easy access.`,
        `Explore Park Details: Dive into detailed information about specific parks`,
        `Browse All CA Parks: Discover A comprehensive list of California’s national parks`,
      ],
      link: "https://jguedel.github.io/CaNationalParks/",
      key: id(),
    },
    {
      img: spaceTravelImg,
      title: "Space travel",
      description:
        "The purpose of this website was to practice React and demonstrate my understanding.",
      features: [
        `Create or Delete ships: Create or Delete ships to travel the Universe`,
        `Fly ship: fly your ship to another planet`,
      ],
      link: "https://jguedel.github.io/SpaceTravel/",
      key: id(),
    },
  ];
  return arr;
};

export default getProjs;
