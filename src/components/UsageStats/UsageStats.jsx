
import { Paper, Typography, Box } from "@mui/material";
import styles from "./UsageStats.module.css";

const UsageStats = ({ stats }) => {
  return (
    <Paper className={styles.paper}>
      <Typography variant="h6" className={styles.title} gutterBottom>
        Usage Stats
      </Typography>
      {stats.map((item, index) => (
        <Box key={index} className={styles.statItem}>
          <Box className={styles.statGrid}>
            <Box className={styles.statColumn}>
              <Typography className={styles.statTitle} variant="body1">
                {item.title}
              </Typography>
              <Typography className={styles.statLabel} variant="body1">{item.label}</Typography>
            </Box>
            <Box className={styles.statColumn}>
              <Typography className={styles.statTitle} variant="body1">
                Total:
              </Typography>
              <Typography className={styles.statLabel} variant="body1">{item.value}</Typography>
            </Box>
            <Box className={styles.statColumn}>
              <Typography className={styles.statTitle} variant="body1">
                Trend:
              </Typography>
              <Typography className={styles.statLabel} variant="body1">{item.trend}</Typography>
            </Box>
          </Box>
        </Box>
      ))}
    </Paper>
  );
};

export default UsageStats;
