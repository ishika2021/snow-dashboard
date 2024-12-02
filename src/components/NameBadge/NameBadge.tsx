import AvatarCustom from "../AvatarCustom";

interface NameBadgeProps {
  name: string;
  avatar: string;
  alt: string;
}

const NameBadge = ({ name, avatar, alt }:NameBadgeProps) => {
    
  return (
    <div className="name-badge-wrapper">
      <AvatarCustom avatar={avatar} alt={alt} />
      <span>{name}</span>
    </div>
  );
  
};

export default NameBadge;
