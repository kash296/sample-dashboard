import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Switch,
  Avatar,
  IconButton,
  FormControl,
  Select,
  MenuItem,
  Input,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import styles from "./Header.module.css";
import { useTheme } from "../../contexts/ThemeContext";
import UserProfileImage from "../../assets/UserProfile.png";

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      className={styles.appBar}
    >
      <Toolbar className={styles.toolbar}>
        <Box className={styles.leftSection}>
          <Box className={styles.titleSection}>
            <Typography variant="body1" component="div">
              Dashboards
            </Typography>
            <Typography
              variant="h6"
              component="div"
              className={styles.subtitle}
            >
              Metrics Cockpit
            </Typography>
          </Box>
          <FormControl className={styles.formControl}>
            <Select
              value="Account-Console"
              onChange={() => console.log("on state change")}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              input={<Input />}
              classes={{
                icon: styles.selectIcon
              }}
              className={styles.select}
            >
              <MenuItem value="Account-Console">Account-Console</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box className={styles.rightSection}>
          <Box className={styles.themeToggle}>
            <Typography variant="body2">Light / Dark</Typography>
            <Switch
              checked={isDarkMode}
              onChange={toggleTheme}
              sx={{
                "& .Mui-checked": {
                  color: "white !important",
                  opacity: 1,
                },
                "&  .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                  backgroundColor: "black",
                  opacity: 1,
                },
                "& .MuiSwitch-track": {
                  backgroundColor: "lightgray",
                  opacity: 1,
                },
              }}
            />
          </Box>
          <IconButton size="large" edge="end" color="inherit">
            <Avatar alt="User Avatar" src={UserProfileImage} />
          </IconButton>
          <Box className={styles.userInfo}>
            <Typography variant="body2">Last Login: Aug 27, 2024</Typography>
            <Typography variant="body2">Mail ID: brooklyn@acme.com</Typography>
          </Box>
          <LogoutIcon />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
