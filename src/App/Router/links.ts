import { FaMotorcycle as BikeIcon,  FaCartPlus as AccessoriesIcon } from "react-icons/fa6";
import { GiFullMotorcycleHelmet as GearIcon } from "react-icons/gi";
import { BiSolidMessageRounded as WhatsAppIcon } from "react-icons/bi";

const links = [
  {
    label: 'Bikes',
    to: '/bikes',
    Icon: BikeIcon
  },
  {
    label: 'Biker Wear',
    to: '/biker-wear',
    Icon: GearIcon
  },
  {
    label: 'Accessories',
    to: '/accessories',
    Icon: AccessoriesIcon
  },
  {
    label: 'WhatsApp',
    href: "https://wa.me/c/256786202161",
    Icon: WhatsAppIcon,
    blank: true
  }
];

export default links;