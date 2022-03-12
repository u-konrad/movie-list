import {
  GiDramaMasks,
  GiHearts,
  GiPistolGun,
  GiMagnifyingGlass,
  GiFountainPen,
  GiBroadsword,
  GiCannon
} from "react-icons/gi";
import { MdOutlineSportsVolleyball, MdTheaterComedy,MdFamilyRestroom } from "react-icons/md";
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
  Biography:<GiFountainPen/>,
  Crime:<GiPistolGun />,
  Fantasy:<GiBroadsword/>,
  War:<GiCannon/>,
  Family:<MdFamilyRestroom/>
};

export default genres;