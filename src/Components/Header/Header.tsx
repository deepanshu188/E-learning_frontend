import styles from "./header.module.css";
import { Profile } from "./Profile/Profile";

export const Header = () => {
  return (
    <div className={styles.header}>
      <h1>E-Learning</h1>
      <Profile />
    </div>
  );
};
