import Icon from "../Icon";

const Card = ({ id, title, value, change, icon, alt = "icon" }:ListItem) => {
    
  return (
    <div
      className={
        id == 1
          ? "card-wrapper blue"
          : id == 4
          ? "card-wrapper cyan"
          : "card-wrapper"
      }
    >
      <p>{title}</p>
      <p className="value"> {value} </p>
      <span>
        {change}
        <Icon type={icon} alt={alt} />
      </span>
    </div>
  );
  
};

export default Card;
