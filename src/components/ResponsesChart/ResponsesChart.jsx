
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
import HouseIcon from '@mui/icons-material/House';
import styles from "./ResponsesChart.module.css";
import LinearProgressWithLabel from "../LinearProgressWithLabel/LinearProgressWithLabel";

const CustomDot = (props) => {
  const { cx, cy, stroke } = props;
  return <circle cx={cx} cy={cy} r={5} stroke="none" fill={stroke} />;
};

const ResponsesChart = ({ data }) => {
  return (
    <Paper className={styles.paper}>
      <Typography variant="h6" className={styles.title} gutterBottom>
        4xx and 5xx Responses
      </Typography>
      <Box className={styles.content}>
        <Box className={styles.header}>
          <Box className={styles.iconContainer}>
            <HouseIcon />
          </Box>
          <Box className={styles.statsContainer}>
            <Box className={styles.stats}>
              <Typography variant="body2">Tasks</Typography>
              <Typography className={styles.statsValue} variant="body2">
                480
              </Typography>
            </Box>
            <LinearProgressWithLabel value={60} />
          </Box>
        </Box>
        <Box className={styles.chartContainer}>
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
              data={data}
              margin={{ top: 5, right: 15, left: -20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="month" />
              <YAxis axisLine={false} />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="value"
                fill="rgba(48,200,200,0.2)"
                stroke="#30C8C8"
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#30C8C8"
                strokeWidth={4}
                dot={<CustomDot />}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </Box>
      </Box>
    </Paper>
  );
};

export default ResponsesChart;
