
import { Paper, Typography, Box } from "@mui/material";
import {
  ResponsiveContainer,
  ComposedChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Area,
  Line,
} from "recharts";
import styles from "./LoginUsersChart.module.css";

const LoginUsersChart = ({ data }) => {
  return (
    <Paper className={styles.paper}>
      <Typography variant="h6" className={styles.title} gutterBottom>
        Login Users Time Series
      </Typography>
      <Box className={styles.chartContainer}>
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={data}
            margin={{ top: 5, right: 15, left: -20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis axisLine={false} />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="users"
              fill="rgba(48,200,200,0.2)"
              stroke="#30C8C8"
            />
            <Line
              type="monotone"
              dataKey="users"
              stroke="#30C8C8"
              strokeWidth={4}
              dot={false}
            />
            <Area
              type="monotone"
              dataKey="activeUsers"
              fill="rgba(61,61,77,0.2)"
              stroke="#3D3D4D"
            />
            <Line
              type="monotone"
              dataKey="activeUsers"
              stroke="#3D3D4D"
              strokeWidth={4}
              dot={false}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </Box>
    </Paper>
  );
};

export default LoginUsersChart;
