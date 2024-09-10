
import { Box, Typography, LinearProgress } from "@mui/material";
import styles from "./LinearProgressWithLabel.module.css";

const LinearProgressWithLabel = (props) => {
  return (
    <Box className={styles.container}>
      <Box className={styles.labelContainer}>
        <Typography variant="body2" className={styles.label}>
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
      <Box className={styles.progressContainer}>
        <LinearProgress
          className={styles.progress}
          variant="determinate"
          {...props}
        />
      </Box>
    </Box>
  );
};

export default LinearProgressWithLabel;
