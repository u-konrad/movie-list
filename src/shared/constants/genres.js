import {
  GiDramaMasks,
  GiHearts,
  GiPistolGun,
  GiMagnifyingGlass,
} from "react-icons/gi";
import { MdOutlineSportsVolleyball, MdTheaterComedy } from "react-icons/md";
import { RiKnifeBloodFill, RiGhostFill } from "react-icons/ri";
import { FaHatCowboySide } from "react-icons/fa";

const genres = {
  Drama: <GiDramaMasks />,
  Romance: <GiHearts />,
  Sport: <MdOutlineSportsVolleyball />,
  Thriller: <RiKnifeBloodFill />,
  Horror: <RiGhostFill />,
  Action: <GiPistolGun />,
  Comedy: <MdTheaterComedy />,
  Adventure: <FaHatCowboySide />,
  Mystery: <GiMagnifyingGlass />,
};

export default genres;