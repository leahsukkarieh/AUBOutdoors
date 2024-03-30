import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Outdoors '24",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Theme",
        path: "/theme",
        newTab: false,
      },
      {
        id: 32,
        title: "Lineup",
        path: "/lineup",
        newTab: false,
      },
      {
        id: 33,
        title: "Meet the Team",
        path: "/team",
        newTab: false,
      },
    ],
  },
  {
    id: 4,
    title: "Archive",
    path: "/archive",
    newTab: false,
  },
  {
    id: 4,
    title: "Tickets",
    path: '/tickets',
    newTab: false,  
  },
  {
    id: 5,
    title: "Merch",
    path: '/merch',
    newTab: false,  
  },
  {
    id: 6,
    title: "FAQ",
    path: '/faq',
    newTab: false,  
  },
  {
    id: 7,
    title: "Rules & Regulations",
    path: '/rules-regulations',
    newTab: false,  
  },
];
export default menuData;
