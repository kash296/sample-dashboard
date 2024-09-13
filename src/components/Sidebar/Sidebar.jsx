
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
import YaliLogo from "../../assets/Logos/YaliLogo.png";
import YaliLogoDark from "../../assets/Logos/YaliLogoDark.png";
import ACMELogo from "../../assets/Logos/ACMELogo.png";

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
      <Box className={styles.divider}/>
      <Box className={isDarkMode ? styles.menuContainerDark : styles.menuContainer}>
        <List className={styles.menuList}>
          {menuItems.map((item, index) => (
            <ListItem
              button
              key={item.text}
              className={`${styles.listItem} ${
                index === 0 ? styles.activeItem : ""
              }`}
            >
              <ListItemIcon className={index === 0 ? styles.listItemActiveIcon : styles.listItemIcon}>
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
      <Box className={styles.divider}/>
      <Box className={styles.footerLogo}>
        <img src={ACMELogo} alt="ACME Logo" className={styles.acmeLogo} />
      </Box>
    </Drawer>
  );
};

export default Sidebar;
