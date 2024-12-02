import Icon from "../../components/Icon";
import { useContext } from "react";
import Button from "../../components/Button";
import Search from "../../components/Search";
import { themeContext } from "../../contexts/themeContext";

const Navbar = () => {
  const {theme,setTheme} = useContext(themeContext);

  const handleThemeChange = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
  };
  
  return (
    <div className="navbar-wrapper">
      <div className="left">
        <span>
          <Icon type="Sidebar" />
        </span>
        <span>
          <Icon type="Star" />{" "}
        </span>
        <div className="breadcrumb-wrapper">
          <Button title="Dashboards" style="lighter" action={() => {}} />
          /
          <Button title="Default" action={() => {}} />
        </div>
      </div>
      <div className="right">
        <Search showTextIcon={true}/>
        <span>
          <Icon type="Sun" onClick={handleThemeChange} />
        </span>
        <span>
          <Icon type="ClockCounterClockwise" />{" "}
        </span>
        <span>
          <Icon type="Bell" />
        </span>
        <span>
          <Icon type="Sidebar" />
        </span>
      </div>
    </div>
  );
  
};

export default Navbar;
