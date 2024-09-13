
import { Paper, Typography, Box } from "@mui/material";
import { useTheme } from "../../contexts/ThemeContext";
import styles from "./UsageStats.module.css";

const UsageStats = ({ stats }) => {
  const { isDarkMode } = useTheme();

  return (
    <Paper className={isDarkMode ? styles.paperDark : styles.paper}>
      <Typography variant="h6" className={isDarkMode ? styles.titleDarkMode : styles.title} gutterBottom>
        Usage Stats
      </Typography>
      {stats.map((item, index) => (
        <Box key={index} className={styles.statItem}>
          <Box className={styles.statGrid}>
            <Box className={styles.statColumn}>
              <Typography className={isDarkMode ? styles.statTitleDarkMode : styles.statTitle} variant="body1">
                {item.title}
              </Typography>
              <Typography className={isDarkMode ? styles.statLabelDarkMode : styles.statLabel} variant="body1">{item.label}</Typography>
            </Box>
            <Box className={styles.statColumn}>
              <Typography className={isDarkMode ? styles.statTitleDarkMode : styles.statTitle} variant="body1">
                Total:
              </Typography>
              <Typography className={isDarkMode ? styles.statLabelDarkMode : styles.statLabel} variant="body1">{item.value}</Typography>
            </Box>
            <Box className={styles.statColumn}>
              <Typography className={isDarkMode ? styles.statTitleDarkMode : styles.statTitle} variant="body1">
                Trend:
              </Typography>
              <Typography className={isDarkMode ? styles.statLabelDarkMode : styles.statLabel} variant="body1">{item.trend}</Typography>
            </Box>
          </Box>
        </Box>
      ))}
    </Paper>
  );
};

export default UsageStats;
