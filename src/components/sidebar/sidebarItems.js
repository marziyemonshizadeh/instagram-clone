import { BiAddToQueue, BiStore } from "react-icons/bi";
import { BsBoxArrowRight, BsCart3, BsInfoCircle } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { MdHomeFilled } from "react-icons/md";
import { RiBookmarkLine } from "react-icons/ri";

let sidebarItems = [
  { icon: MdHomeFilled, text: "Home", to: "/main" },
  { icon: BiStore, text: "Shop", to: "/main/shop" },
  { icon: BiAddToQueue, text: "Create", to: "/main/create" },
  { icon: BsInfoCircle, text: "AboutUs", to: "/main/aboutus" },
  { icon: RiBookmarkLine, text: "Saves", to: "/main/saves" },
  { icon: FaRegHeart, text: "Likes", to: "/main/likes" },
  { icon: CgProfile, text: "Profile", to: "/main/profile" },
  { icon: BsCart3, text: "Cart", to: "/main/cart" },
  { icon: BsBoxArrowRight, text: "Log out", to: "/" },
];
export default sidebarItems;
