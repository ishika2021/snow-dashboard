import { useEffect, useState, useContext } from "react";
import { themeContext } from "../../contexts/themeContext";

interface IconProps {
  type?: string;
  color?: string;
  onClick?: () => {} | void;
  alt?: string;
}

const Icon = ({ type = "", color = "", onClick }: IconProps) => {
  const [uniqueID] = useState<string>(
    `icon-${Math.random().toString(36).substring(2, 9)}` //adds unique id to all icons
  );
  const [svgCache, setSvgCache] = useState<Record<string, string>>({}); //local caching to prevent importing icons on navigations
  const { theme } = useContext<any>(themeContext);
  const [iconColor, setIconColor] = useState<string>("");

  useEffect(() => {
    if (color == "") {
      theme == "light" ? setIconColor("#1C1C1C") : setIconColor("#FFFFFF");
    } else {
      setIconColor(color);
    }
  }, [color, theme]);

  useEffect(() => {
    svgLoader();
  }, [type, iconColor]);

  const insertSVG = (svg: string) => {
    const ele = document.querySelector(`#${uniqueID}`);
    if (ele) {
      ele.innerHTML = svg;
      const pathElements = ele.querySelectorAll("svg path");
      if (iconColor) {
        pathElements.forEach((path) => path.setAttribute("fill", iconColor));
      }
    }
  };

  const svgLoader = async () => {
    if (type) {
      if (svgCache[type]) {
        insertSVG(svgCache[type]);
      } else {
        try {
          //imports svgs dynamically
          const response = await fetch(`/icons/${type}.svg`, {
            cache: "default",
          });
          const svg = await response.text();
          setSvgCache((prevCache) => ({ ...prevCache, [type]: svg }));
          insertSVG(svg);
        } catch (e) {
          console.error("Error loading svg:", e);
        }
      }
    }
  };

  return <div id={uniqueID} className="svg-icon" onClick={onClick}></div>;
};

export default Icon;
