import {
  GiDramaMasks,
  GiHearts,
  GiPistolGun,
  GiMagnifyingGlass,
  GiFountainPen,
  GiBroadsword,
  GiCannon,
  GiRobberMask
} from "react-icons/gi";
import { MdOutlineSportsVolleyball, MdTheaterComedy,MdFamilyRestroom,MdToys,MdMusicNote } from "react-icons/md";
import { RiKnifeBloodFill, RiGhostFill } from "react-icons/ri";
import { FaHatCowboySide,FaSpaceShuttle } from "react-icons/fa";

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
  Crime:<GiRobberMask/>,
  Fantasy:<GiBroadsword/>,
  War:<GiCannon/>,
  Family:<MdFamilyRestroom/>,
  Animation:<MdToys/>,
  "Sci-Fi":<FaSpaceShuttle/>,
  Musical:<MdMusicNote/>,
  Music:<MdMusicNote/>,
  History:<GiFountainPen/>,
  Western:<FaHatCowboySide />
};

export default genres;