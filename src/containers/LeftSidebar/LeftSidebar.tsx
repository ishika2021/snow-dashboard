import { useContext } from "react";
import Button from "../../components/Button";
import BulletList from "../../components/BulletList";
import Menu from "../Menu";
import NameBadge from "../../components/NameBadge";
import { navContext } from "../../contexts/navigationContext";
import {MenuItem} from "../../types/MenuTypes";

const LeftSidebar = () => {
  const { setActiveView } = useContext(navContext);
  const menu:MenuItem[] = [
    {
      subHeaderLabel: "Dashboard",
      list: [
        {
          listLabel: "Default",
          icon: "ChartPieSlice",
          subList: [
            {
              subListLabel: "e-commerce",
              action: () => {
                setActiveView("dashboard");
              },
            },
            {
              subListLabel: "order list",
              action: () => {
                setActiveView("orders");
              },
            },
          ],
        },
        {
          listLabel: "eCommerce",
          icon: "ShoppingBagOpen",
          subList: [],
        },
        {
          listLabel: "Projects",
          icon: "FolderNotch",
          subList: [],
        },
        {
          listLabel: "Online Courses",
          icon: "BookOpen",
          subList: [],
        },
      ],
    },
    {
      subHeaderLabel: "Pages",
      list: [
        {
          listLabel: "User Profile",
          icon: "IdentificationBadge",
          subList: [
            {
              subListLabel: "Overview",
              action: () => {},
            },
            {
              subListLabel: "Projects",
              action: () => {},
            },
            {
              subListLabel: "Campaigns",
              action: () => {},
            },
            {
              subListLabel: "Documents",
              action: () => {},
            },
            {
              subListLabel: "Followers",
              action: () => {},
            },
          ],
        },
        {
          listLabel: "Account",
          icon: "IdentificationCard",
          subList: [],
        },
        {
          listLabel: "Corporate",
          icon: "UsersThree",
          subList: [],
        },
        {
          listLabel: "Blog",
          icon: "Notebook",
          subList: [],
        },
        {
          listLabel: "Social",
          icon: "ChatsTeardrop",
          subList: [],
        },
      ],
    },
  ];

  return (
    <section className="left-sidebar">
      <NameBadge name="ByeWind" avatar="ByeWind" alt="ByeWind" />
      <div className="menu-item-header">
        <div>
          <Button title="Favorites" action={() => {}} />
          <Button style="lighter" title="Recently" action={() => {}} />
        </div>
        <div className="header-list">
          <BulletList label="Overview" markerColor="#1C1C1C33" />
          <BulletList label="Projects" markerColor="#1C1C1C33" />
        </div>
      </div>
      <div className="menu-container">
        {menu.map((item, index) => (
          <Menu menu={item} key={index}/>
        ))}
      </div>
    </section>
  );
  
};

export default LeftSidebar;
