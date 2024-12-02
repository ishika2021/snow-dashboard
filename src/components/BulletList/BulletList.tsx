import Icon from "../Icon";

const BulletList = ({
  label = "",
  markerColor = "#FFFFFF33",
  labelColor = "",
}) => {
    
  return (
    <div className="bullet-list-wrapper">
      <Icon type="Dot" color={markerColor} />
      <span style={{ color: labelColor }}>{label}</span>
    </div>
  );
  
};

export default BulletList;
