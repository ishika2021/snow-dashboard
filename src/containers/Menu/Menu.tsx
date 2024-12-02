import { useEffect, useState } from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import Icon from "../../components/Icon";
import {MenuItem} from "../../types/MenuTypes";

interface MenuProps {
  menu: MenuItem;
  key: number;
}

const Menu = ({ menu }:MenuProps) => {
  const [open, setOpen] = useState<Record<string,boolean>>({});
  const { subHeaderLabel, list }:MenuItem = menu;
  
  const handleClick = (label:string = '') => {
    const obj = {
      ...open,
      [label]: !open[label],
    };
    setOpen(obj);
  };

  useEffect(() => {
    const headerLabels = {};
    const listHeaders = menu.list.map(({ listLabel }) => listLabel);
    listHeaders.map((item) => {
      headerLabels[item] = false;
    });
    setOpen(headerLabels);
  }, []);

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className="menu-list"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          {subHeaderLabel}
        </ListSubheader>
      }
    >
      {list.map((item, index) => (
        <>
          <ListItemButton
            onClick={() => handleClick(item.listLabel)}
            key={index}
          >
            {open[item.listLabel] ? (
              <Icon type="ArrowLineDown" />
            ) : (
              <Icon type="ArrowLineRight" />
            )}
            <ListItemIcon>
              <Icon type={item.icon} />
            </ListItemIcon>
            <ListItemText primary={item.listLabel} />
          </ListItemButton>
          <Collapse in={open[item.listLabel]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {item.subList.map((subListItem) => (
                <ListItemButton sx={{ pl: 4 }} onClick={subListItem.action}>
                  <ListItemText primary={subListItem.subListLabel} />
                </ListItemButton>
              ))}
            </List>
          </Collapse>
        </>
      ))}
    </List>
  );
  
};

export default Menu;
