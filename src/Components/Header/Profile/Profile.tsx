import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";
import { useState } from "react";
import styles from "./profile.module.css";

export const Profile: React.FC = () => {
  const [click, setClick] = useState<boolean>(false);
  return (
    <div className={styles.profile} onClick={() => setClick(!click)}>
      <Avatar
        sx={{ bgcolor: deepOrange[500] }}
        alt="Remy Sharp"
        src="/broken-image.jpg"
      >
        B
      </Avatar>
    </div>
  );
};
