import { IconBaseProps } from "react-icons";
import {
  RiAccountCircleFill,
  RiArticleFill,
  RiBankCardFill,
  RiLayoutMasonryFill,
  RiShoppingBagFill,
  RiUserFill,
} from "react-icons/ri";

interface INavigationDTO {
  id: number;
  name: string;
  icon: string | React.ComponentType<IconBaseProps>;
  pathname: string;
}

export const iconsMenu: INavigationDTO[] = [
  {
    id: 1,
    name: "Resumo",
    icon: RiArticleFill,
    pathname: "/resumo",
  },
  {
    id: 2,
    name: "Dashboard",
    icon: RiLayoutMasonryFill,
    pathname: "/dashboard",
  },
  {
    id: 3,
    name: "Cartões",
    icon: RiBankCardFill,
    pathname: "/cartoes",
  },
  {
    id: 4,
    name: "Devedores",
    icon: RiUserFill,
    pathname: "/devedores",
  },
  {
    id: 5,
    name: "Compras",
    icon: RiShoppingBagFill,
    pathname: "/compras",
  },
  {
    id: 6,
    name: "Perfil",
    icon: RiAccountCircleFill,
    pathname: "/perfil",
  },
];
