
import { Paper, Typography, Box } from "@mui/material";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import styles from "./UserActionChart.module.css";

const UserActionChart = ({ data, colors }) => {
  return (
    <Paper className={styles.paper}>
      <Typography variant="h6" className={styles.title} gutterBottom>
        Combined User Action by Admin
      </Typography>
      <Box className={styles.content}>
        <Box className={styles.header}>
          <Box className={styles.iconContainer}>
            <InsertDriveFileIcon />
          </Box>
          <Box className={styles.stats}>
            <Typography variant="body2">Projects</Typography>
            <Typography className={styles.statsValue} variant="body2">
              115
            </Typography>
          </Box>
        </Box>
        <Box className={styles.chartContainer}>
          <ResponsiveContainer style={{ margin: "0 20px" }} width="100%" height="100%">
            <PieChart margin={{ top: 5, right: 15, left: -20, bottom: 5 }}>
              <Pie
                data={data}
                startAngle={180}
                endAngle={-180}
                nameKey="Actions"
                outerRadius={65}
                innerRadius={40}
                paddingAngle={5}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={colors[index % colors.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </Box>
      </Box>
    </Paper>
  );
};

export default UserActionChart;
