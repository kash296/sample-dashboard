
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Box,
} from "@mui/material";
import styles from "./Sidebar.module.css";
import { useTheme } from "../../contexts/ThemeContext";
import { menuItems } from "../../utils/constants";
import YaliLogo from "../../assets/YaliLogo.png";
import YaliLogoDark from "../../assets/YaliLogoDark.png";
import ACMELogo from "../../assets/ACMELogo.png";

const Sidebar = () => {
  const { isDarkMode } = useTheme();
  
  return (
    <Drawer
      variant="permanent"
      className={styles.drawer}
      classes={{
        paper: isDarkMode ? styles.drawerPaperDark : styles.drawerPaper,
      }}
    >
      <Toolbar className={styles.toolbar}>
        <img src={isDarkMode ? YaliLogoDark : YaliLogo} alt="Yali Logo" />
      </Toolbar>
      <Box className={isDarkMode ? styles.menuContainerDark : styles.menuContainer}>
        <List>
          {menuItems.map((item, index) => (
            <ListItem
              button
              key={item.text}
              className={`${styles.listItem} ${
                index === 0 ? styles.activeItem : ""
              }`}
            >
              <ListItemIcon className={styles.listItemIcon}>
                <item.icon/>
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                classes={{ primary: styles.listItemText }}
              />
            </ListItem>
          ))}
        </List>
      </Box>
      <Box className={styles.footerLogo}>
        <img src={ACMELogo} alt="ACME Logo" className={styles.acmeLogo} />
      </Box>
    </Drawer>
  );
};

export default Sidebar;
