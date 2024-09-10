import { Box, Grid2 as Grid } from "@mui/material";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import MetricCard from "./components/MetricCard/MetricCard";
import UsageStats from "./components/UsageStats/UsageStats";
import LoginUsersChart from "./components/LoginUsersChart/LoginUsersChart";
import ResponsesChart from "./components/ResponsesChart/ResponsesChart";
import UserActionChart from "./components/UserActionChart/UserActionChart";
import {
  Person as PersonIcon,
  Assignment as AssignmentIcon,
} from "@mui/icons-material";
import {
  loginData,
  taskData,
  userActionData,
  pieColors,
  usageStats,
} from "./utils/constants";
import styles from "./App.module.css";
import { useTheme } from "./contexts/ThemeContext";

const App = () => {
  const { isDarkMode } = useTheme();

  return (
    <Box className={styles.root}>
      <Sidebar />
      <Box
        component="main"
        className={isDarkMode ? styles.contentDark : styles.content}
      >
        <Header />
        <Grid container spacing={3} className={styles.gridContainer}>
          <Box className={styles.metricsContainer}>
            <Grid container spacing={2} className={styles.metricsGrid}>
              <Grid item xs={12} sm={6} md={3}>
                <MetricCard
                  icon={PersonIcon}
                  value="2,300"
                  label="Login Users"
                  change="+3%"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <MetricCard
                  icon={PersonIcon}
                  value="2,300"
                  label="Login Users"
                  change="+3%"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <MetricCard
                  icon={PersonIcon}
                  value="1879"
                  label="Logged out users"
                  change="-5%"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <MetricCard
                  icon={AssignmentIcon}
                  value="1,250"
                  label="Applications active"
                  change="+1%"
                />
              </Grid>
            </Grid>
            <UsageStats stats={usageStats} />
          </Box>
          <Box className={styles.chartsContainer}>
            <LoginUsersChart data={loginData} />
            <Box className={styles.smallChartsContainer}>
              <ResponsesChart data={taskData} />
              <UserActionChart data={userActionData} colors={pieColors} />
            </Box>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};

export default App;
