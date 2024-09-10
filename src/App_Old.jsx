
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Switch,
  Avatar,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Grid2 as Grid,
  Paper,
  Box,
  createTheme,
  ThemeProvider,
  LinearProgress,
  FormControl,
  Input,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import AssignmentIcon from "@mui/icons-material/Assignment";
import GroupIcon from "@mui/icons-material/Group";
import SettingsIcon from "@mui/icons-material/Settings";
import EventIcon from "@mui/icons-material/Event";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DescriptionIcon from "@mui/icons-material/Description";
import AppsIcon from "@mui/icons-material/Apps";
import LogoutIcon from "@mui/icons-material/Logout";

import {
  ComposedChart,
  PieChart,
  Pie,
  Cell,
  Line,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import YaliLogo from "./assets/YaliLogo.png";
import ACMELogo from "./assets/ACMELogo.png";
import UserProfileImage from "./assets/UserProfile.png";

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#30C8C8",
    },
    secondary: {
      main: "#272D4C",
    },
    background: {
      default: "#F4F8FA",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});

// Dummy data for charts
const loginData = [
  { name: "Jan", users: 0, activeUsers: 0 },
  { name: "Feb", users: 50, activeUsers: 80 },
  { name: "Mar", users: 200, activeUsers: 100 },
  { name: "Apr", users: 400, activeUsers: 250 },
  { name: "May", users: 150, activeUsers: 300 },
  { name: "Jun", users: 500, activeUsers: 350 },
  { name: "Jul", users: 250, activeUsers: 200 },
  { name: "Aug", users: 300, activeUsers: 250 },
  { name: "Sep", users: 450, activeUsers: 400 },
];

const taskData = [
  { month: "Apr", value: 29 },
  { month: "May", value: 31 },
  { month: "Jun", value: 27 },
  { month: "Jul", value: 28 },
  { month: "Aug", value: 34 },
  { month: "Sep", value: 29 },
  { month: "Oct", value: 30 },
  { month: "Nov", value: 28 },
  { month: "Dec", value: 0 },
];

const userActionData = [
  {
    name: "user1",
    value: 25,
  },
  {
    name: "user2",
    value: 75,
  },
];

const pieColors = ["#E2E8F0", "#26C6DA"];

const menuItems = [
  { text: "Dashboard", icon: <DashboardIcon /> },
  { text: "ID Providers", icon: <PersonIcon /> },
  { text: "Attribute Providers", icon: <DescriptionIcon /> },
  { text: "Applications", icon: <AppsIcon /> },
  { text: "Users", icon: <PersonIcon /> },
  { text: "Groups", icon: <GroupIcon /> },
  { text: "Reports", icon: <AssignmentIcon /> },
  { text: "Advance Settings", icon: <SettingsIcon /> },
  { text: "Events", icon: <EventIcon /> },
  { text: "Approve Requests", icon: <CheckCircleIcon /> },
  { text: "Status Approval", icon: <CheckCircleIcon /> },
];

const CustomDot = (props) => {
  const { cx, cy, stroke, payload, value } = props;
  return (
    <circle
      cx={cx}
      cy={cy}
      r={5} // Adjust the radius to your liking
      stroke="none" // No border
      fill={stroke} // Fill color is the line stroke color
    />
  );
};

const LinearProgressWithLabel = (props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box sx={{ minWidth: 150 }}>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress
          sx={{
            borderRadius: 10,
            height: 8,
            backgroundColor: "#E2E8F0",
            "& .MuiLinearProgress-bar": {
              backgroundColor: "#30C8C8",
            },
          }}
          variant="determinate"
          {...props}
        />
      </Box>
    </Box>
  );
};

const Dashboard = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        {/* Sidebar */}
        <Drawer
          variant="permanent"
          sx={{
            width: 350,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: 350,
              boxSizing: "border-box",
              backgroundColor: "#F4F8FA",
              padding: "0 40px",
            },
          }}
        >
          <Toolbar
            sx={{
              borderBottom: "2px solid",
              borderImageSource:
                "linear-gradient(90deg, rgba(224, 225, 226, 0) 0%, #A4BCD5 49.52%, rgba(224, 225, 226, 0.15625) 99.04%)",
              borderImageSlice: "1",
              padding: "48px 24px",
            }}
          >
            <img src={YaliLogo} alt="Yali Logo" />
          </Toolbar>
          <Box sx={{ width: "100%", bgcolor: "#F4F8FA", py: 2 }}>
            <List>
              {menuItems.map((item, index) => (
                <ListItem
                  button
                  key={item.text}
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    py: 0.5,
                    "&:hover": {
                      backgroundColor:
                        index > 0 ? "rgba(0, 0, 0, 0.04)" : "#F4F8FA",
                    },
                    ...(index === 0 && {
                      borderRadius: "5px",
                      border: "1px solid white",
                      backgroundColor: "#F4F8FA",
                      boxShadow: "rgba(0,0,0,0.3) 0 0 10px",
                    }),
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 40,
                      color: "#30C8C8",
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    sx={{
                      "& .MuiListItemText-primary": {
                        fontSize: "1.25rem",
                        fontWeight: index === 0 ? 600 : 500,
                        color: index === 0 ? "#222222" : "#757575",
                      },
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
          <Box
            sx={{
              borderTop: "2px solid",
              borderImageSource:
                "linear-gradient(90deg, rgba(224, 225, 226, 0) 0%, #A4BCD5 49.52%, rgba(224, 225, 226, 0.15625) 99.04%)",
              borderImageSlice: "1",
              padding: "48px 24px",
            }}
          >
            <img src={ACMELogo} alt="ACME Logo" style={{ width: "100%" }} />
          </Box>
        </Drawer>

        {/* Main content */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            padding: "24px",
            backgroundColor: "#F4F8FA",
          }}
        >
          <AppBar position="static" color="transparent" elevation={0}>
            <Toolbar
              sx={{
                background:
                  "linear-gradient(180.86deg, #94C83D -11.66%, #00B4B9 126.84%)",
                borderRadius: "15px",
                display: "flex",
                justifyContent: "space-between",
                minHeight: "100px",
                height: "125px",
                maxHeight: "125px",
                marginBottom: "30px",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: "100px" }}>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography
                    sx={{ lineHeight: "1.2" }}
                    variant="body1"
                    component="div"
                  >
                    Dashboards
                  </Typography>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ fontWeight: "600", lineHeight: "1.2" }}
                  >
                    Metrics Cockpit
                  </Typography>
                </Box>
                <FormControl
                  sx={{
                    minWidth: 180,
                    maxWidth: 200,
                    display: "flex",
                    flexDirection: "column",
                    height: "44px",
                    justifyContent: "flex-end",
                  }}
                >
                  <Select
                    sx={{
                      backgroundColor: "transparent",
                      color: "white",
                      "&:focus": {
                        backgroundColor: "transparent",
                      },
                      "& .MuiSelect-icon": {
                        color: "white",
                      },
                      "&.MuiInput-underline:before": {
                        borderBottom: "1px solid white",
                      },
                      "&.MuiInput-underline:hover:not(.Mui-disabled):before": {
                        borderBottom: "1px solid white",
                      },
                      "&.MuiInput-underline:after": {
                        borderBottom: "1px solid white",
                      },
                    }}
                    value="Account-Console"
                    onChange={() => console.log("on state change")}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                    input={
                      <Input
                        sx={{
                          color: "white",
                          "&:before": {
                            borderBottom: "1px solid white",
                          },
                          "&:hover:not(.Mui-disabled):before": {
                            borderBottom: "1px solid white",
                          },
                          "&:after": {
                            borderBottom: "1px solid white",
                          },
                        }}
                      />
                    }
                  >
                    <MenuItem value="Account-Console">Account-Console</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography
                    variant="body2"
                    sx={{ marginLeft: 1, marginRight: 2 }}
                  >
                    Light / Dark
                  </Typography>
                  <Switch
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
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography variant="body2" sx={{ marginRight: 2 }}>
                    Last Login: Aug 27, 2024
                  </Typography>
                  <Typography variant="body2" sx={{ marginRight: 2 }}>
                    Mail ID: brooklyn@acme.com
                  </Typography>
                </Box>
                <LogoutIcon />
              </Box>
            </Toolbar>
          </AppBar>

          <Grid container spacing={3} sx={{ marginTop: 2 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexGrow: 1,
              }}
            >
              <Grid container spacing={2} sx={{ maxWidth: "45rem" }}>
                {/* Metric cards */}
                {[
                  {
                    icon: PersonIcon,
                    value: "2,300",
                    label: "Login Users",
                    change: "+3%",
                  },
                  {
                    icon: PersonIcon,
                    value: "2,300",
                    label: "Login Users",
                    change: "+3%",
                  },
                  {
                    icon: PersonIcon,
                    value: "1879",
                    label: "Logged out users",
                    change: "-5%",
                  },
                  {
                    icon: AssignmentIcon,
                    value: "1,250",
                    label: "Applications active",
                    change: "+1%",
                  },
                ].map((item, index) => (
                  <Grid item xs={12} sm={6} md={3} key={index}>
                    <Paper
                      sx={{
                        p: 2,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        height: "9rem",
                        width: "20rem",
                        borderRadius: 5,
                        backgroundColor: theme.palette.secondary.main,
                        color: "white",
                        boxShadow: "rgba(0,0,0,0.3) 0 0 10px",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                          height: "100%",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <item.icon />
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Box
                            sx={{ display: "flex", flexDirection: "column" }}
                          >
                            <Typography
                              variant="h6"
                              component="div"
                              sx={{
                                flexGrow: 1,
                                display: "flex",
                                alignItems: "center",
                              }}
                            >
                              {item.value}
                            </Typography>
                            <Typography variant="body2">
                              {item.label}
                            </Typography>
                          </Box>
                          <Box
                            sx={{ display: "flex", flexDirection: "column" }}
                          >
                            <Typography variant="h6">{item.change}</Typography>
                            <Typography variant="caption">
                              than yesterday
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
              {/* Usage Stats */}
              <Grid item xs={12} md={4}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "21rem",
                    width: "43.8rem",
                    borderRadius: 5,
                    maxHeight: "400px",
                    boxShadow: "rgba(0,0,0,0.3) 0 0 10px",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "600" }}
                    gutterBottom
                  >
                    Usage Stats
                  </Typography>
                  {[
                    {
                      title: "Users",
                      label: "Created",
                      value: "2500",
                      trend: "+29.9%",
                    },
                    {
                      title: "Roles",
                      label: "Created",
                      value: "3900",
                      trend: "+40.22%",
                    },
                    {
                      title: "Applications",
                      label: "Onboarded",
                      value: "3900",
                      trend: "+40.22%",
                    },
                    {
                      title: "Login",
                      label: "Errors",
                      value: "3900",
                      trend: "+40.22%",
                    },
                  ].map((item, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mb: 1,
                        width: "100%", // Ensure outer container takes full width
                        borderBottom: "1px solid lightgray",
                        padding: "8px 0",
                      }}
                    >
                      <Box
                        sx={{
                          display: "grid",
                          gridTemplateColumns: "1fr 1fr 1fr",
                          columnGap: 2, // adjust gap between columns as needed
                          width: "100%", // Ensure inner grid container takes full width
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                          }}
                        >
                          <Typography
                            sx={{ fontWeight: "600" }}
                            variant="body1"
                          >
                            {item.title}
                          </Typography>
                          <Typography variant="body1">{item.label}</Typography>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                          }}
                        >
                          <Typography
                            sx={{ fontWeight: "600" }}
                            variant="body1"
                          >
                            Total:
                          </Typography>
                          <Typography variant="body1">{item.value}</Typography>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                          }}
                        >
                          <Typography
                            sx={{ fontWeight: "600" }}
                            variant="body1"
                          >
                            Trend:
                          </Typography>
                          <Typography variant="body1">{item.trend}</Typography>
                        </Box>
                      </Box>
                    </Box>
                  ))}
                </Paper>
              </Grid>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexGrow: 1,
              }}
            >
              {/* Login Users Time Series */}
              <Grid item xs={12} md={8}>
                <Paper
                  sx={{
                    p: 2,
                    borderRadius: "20px",
                    boxShadow: "rgba(0,0,0,0.3) 0 0 10px",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ marginBottom: 10, fontWeight: "600" }}
                    gutterBottom
                  >
                    Login Users Time Series
                  </Typography>
                  <Box sx={{ width: "43rem", height: "15.5rem" }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <ComposedChart
                        data={loginData}
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
              </Grid>

              {/* 4xx and 5xx Responses */}
              <Grid item xs={12} md={6}>
                <Paper
                  sx={{
                    p: 2,
                    borderRadius: "20px",
                    boxShadow: "rgba(0,0,0,0.3) 0 0 10px",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "600", marginBottom: 4 }}
                    gutterBottom
                  >
                    4xx and 5xx Responses
                  </Typography>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Box sx={{ display: "flex", marginBottom: 10 }}>
                      <Box
                        sx={{
                          backgroundColor: theme.palette.primary.main,
                          width: 40,
                          height: 40,
                          borderRadius: "50%",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          color: "white",
                          marginRight: 2,
                        }}
                      >
                        <AssignmentIcon />
                      </Box>
                      <Box sx={{ display: "flex", gap: 5 }}>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                          }}
                        >
                          <Typography variant="body2" sx={{ marginLeft: 0 }}>
                            Tasks
                          </Typography>
                          <Typography
                            sx={{ fontWeight: "600" }}
                            variant="body2"
                          >
                            480
                          </Typography>
                        </Box>
                        <LinearProgressWithLabel value={60} />
                      </Box>
                    </Box>
                    <Box sx={{ width: "19rem", height: "11rem" }}>
                      <ResponsiveContainer width="100%" height="100%">
                        <ComposedChart
                          data={taskData}
                          margin={{ top: 5, right: 15, left: -20, bottom: 5 }}
                        >
                          <CartesianGrid
                            strokeDasharray="3 3"
                            vertical={false}
                          />
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
              </Grid>

              {/* Combined User Action by Admin */}
              <Grid item xs={12} md={6}>
                <Paper
                  sx={{
                    p: 2,
                    borderRadius: "20px",
                    boxShadow: "rgba(0,0,0,0.3) 0 0 10px",
                  }}
                >
                  <Typography
                    sx={{ fontWeight: "600", marginBottom: 4 }}
                    variant="h6"
                    gutterBottom
                  >
                    Combined User Action by Admin
                  </Typography>

                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Box sx={{ display: "flex", marginBottom: 2 }}>
                      <Box
                        sx={{
                          backgroundColor: theme.palette.primary.main,
                          width: 40,
                          height: 40,
                          borderRadius: "50%",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          color: "white",
                          marginRight: 2,
                        }}
                      >
                        <AssignmentIcon />
                      </Box>
                      <Box sx={{ display: "flex", gap: 5 }}>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                          }}
                        >
                          <Typography variant="body2" sx={{ marginLeft: 0 }}>
                            Projects
                          </Typography>
                          <Typography
                            sx={{ fontWeight: "600" }}
                            variant="body2"
                          >
                            115
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                    <Box sx={{ width: "19rem", height: "15rem" }}>
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart
                          margin={{ top: 5, right: 15, left: -20, bottom: 5 }}
                        >
                          <Pie
                            data={userActionData}
                            startAngle={180}
                            endAngle={-180}
                            nameKey="Actions"
                            outerRadius={65}
                            innerRadius={40}
                            paddingAngle={5}
                          >
                            {userActionData.map((entry, index) => (
                              <Cell
                                key={`cell-${index}`}
                                fill={pieColors[index % pieColors.length]}
                              />
                            ))}
                          </Pie>
                        </PieChart>
                      </ResponsiveContainer>
                    </Box>
                  </Box>
                  {/* Add a donut chart here */}
                </Paper>
              </Grid>
            </Box>
          </Grid>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Dashboard;
