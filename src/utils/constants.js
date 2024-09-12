import {
  DashboardIcon,
  IDProviderIcon,
  AttributeProviderIcon,
  ApplicationsIcon,
  UsersIcon,
  GroupsIcon,
  ReportsIcon,
  AdvanceSettingsIcon,
  EventsIcon,
  ApproveRequestsIcon,
  StatusApprovalIcon,
} from "./Icons";

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
  { text: "ID Providers", icon: IDProviderIcon },
  { text: "Attribute Providers", icon: AttributeProviderIcon },
  { text: "Applications", icon: ApplicationsIcon },
  { text: "Users", icon: UsersIcon },
  { text: "Groups", icon: GroupsIcon },
  { text: "Reports", icon: ReportsIcon },
  { text: "Advance Settings", icon: AdvanceSettingsIcon },
  { text: "Events", icon: EventsIcon },
  { text: "Approve Requests", icon: ApproveRequestsIcon },
  { text: "Status Approval", icon: StatusApprovalIcon },
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
