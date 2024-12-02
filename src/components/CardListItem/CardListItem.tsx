import AvatarCustom from "../AvatarCustom";
import Icon from "../Icon";

const CardListItem = ({ id, icon, title, time, avatar, alt }: ListItem) => {
  return (
    <div className="card-list-item-wrapper">
      {icon.length > 0 ? (
        <div className={id % 2 == 0 ? "icon even" : "icon odd"}>
          <Icon type={icon} color="#1c1c1c" />
        </div>
      ) : avatar.length > 0 ? (
        <>
          <div className="avatar">
            <AvatarCustom avatar={avatar} alt={alt} />
          </div>
          <div className="seperator" />
        </>
      ) : (
        <></>
      )}
      <p>{title}</p>
      {time ? <p className="time">{time}</p> : <></>}
    </div>
  );
};

export default CardListItem;
