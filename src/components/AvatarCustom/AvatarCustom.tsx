import { Avatar } from "@mui/material";
import { useState, useEffect } from "react";

interface AvatarCustomProps {
  avatar: string;
  alt: string;
}

const AvatarCustom = ({ avatar, alt = "avatar-image" }:AvatarCustomProps) => {
  const [avatarImg, setAvatarImg] = useState("");

  useEffect(() => {
    const getAvatarImg = async () => {
      try {
        // imports images dynamically
        const img = new URL(
          `../../assets/images/${avatar}.jpg`,
          import.meta.url
        );
        setAvatarImg(img.href);
      } catch (err) {
        console.log(err);
      }
    };
    getAvatarImg();
  }, [avatar]);

  return <Avatar src={avatarImg} alt={alt} />;
  
};

export default AvatarCustom;
