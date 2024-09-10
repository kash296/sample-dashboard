import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import AssignmentIcon from "@mui/icons-material/Assignment";
import GroupIcon from "@mui/icons-material/Group";
import SettingsIcon from "@mui/icons-material/Settings";
import EventIcon from "@mui/icons-material/Event";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DescriptionIcon from "@mui/icons-material/Description";
import AppsIcon from "@mui/icons-material/Apps";

export const loginData = [
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

export const taskData = [
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

export const userActionData = [
  {
    name: "user1",
    value: 25,
  },
  {
    name: "user2",
    value: 75,
  },
];

export const pieColors = ["#E2E8F0", "#26C6DA"];

export const menuItems = [
  { text: "Dashboard", icon: DashboardIcon },
  { text: "ID Providers", icon: PersonIcon },
  { text: "Attribute Providers", icon: DescriptionIcon },
  { text: "Applications", icon: AppsIcon },
  { text: "Users", icon: PersonIcon },
  { text: "Groups", icon: GroupIcon },
  { text: "Reports", icon: AssignmentIcon },
  { text: "Advance Settings", icon: SettingsIcon },
  { text: "Events", icon: EventIcon },
  { text: "Approve Requests", icon: CheckCircleIcon },
  { text: "Status Approval", icon: CheckCircleIcon },
];

export const usageStats = [
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
];
