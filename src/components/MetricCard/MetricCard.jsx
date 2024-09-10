
import { Paper, Box, Typography } from "@mui/material";
import styles from "./MetricCard.module.css";

const MetricCard = ({ icon: Icon, value, label, change }) => {
  return (
    <Paper className={styles.card}>
      <Box className={styles.content}>
        <Box className={styles.iconContainer}>
          <Icon />
        </Box>
        <Box className={styles.dataContainer}>
          <Box className={styles.valueContainer}>
            <Typography variant="h6" component="div">
              {value}
            </Typography>
            <Typography variant="body2">{label}</Typography>
          </Box>
          <Box className={styles.changeContainer}>
            <Typography variant="h6">{change}</Typography>
            <Typography variant="caption">than yesterday</Typography>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default MetricCard;
