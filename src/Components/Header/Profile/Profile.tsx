import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";
import { useState } from "react";
import styles from "./profile.module.css";
import LogoutIcon from "@mui/icons-material/Logout";
import Tooltip from "@mui/material/Tooltip";
import CloseIcon from "@mui/icons-material/Close";

export const Profile: React.FC = () => {
  const [click, setClick] = useState<boolean>(false);
  return (
    <div className={styles.profile}>
      <div className={styles.avatar} onClick={() => setClick(!click)}>
        <Avatar
          sx={{
            bgcolor: click ? "#fff" : deepOrange[500],
            color: click ? "#000" : "#fff",
          }}
          alt="Remy Sharp"
          src="/broken-image.jpg"
        >
          {click ? <CloseIcon /> : "B"}
        </Avatar>
      </div>
      <Tooltip title="Logout">
        <LogoutIcon sx={{ visibility: click ? "visible" : "hidden" }} />
      </Tooltip>
    </div>
  );
};
