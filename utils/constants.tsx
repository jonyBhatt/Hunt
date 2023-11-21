import {
  LayoutDashboard,
  User,
  MessageSquareDashed,
  BookOpen,
  BarChart2,
  Users,
  Cog,
  HelpCircle,
  CupSoda,
  Store,
} from "lucide-react";
import { MdOutlineAddHomeWork, MdOutlinePostAdd } from "react-icons/md";
export const topics = [
  {
    id: 1,
    title: "Artificial Intelligence",
  },
  {
    id: 2,
    title: "Productivity",
  },
  {
    id: 3,
    title: "Developer Tools",
  },
  {
    id: 4,
    title: "SaaS",
  },
  {
    id: 5,
    title: "Marketing",
  },
];

export const featuredPost = [
  {
    name: "Robin Benji",
    content: "No subscription ASO tool in Slack and Telegram messengers",
    tags: [
      {
        title: "bootstrap",
      },
      {
        title: "sass",
      },
      {
        title: "telegram",
      },
    ],
    reviews: [
      { title: "Great Product", content: "...", rating: 5 },
      { title: "Good Product", content: "...", rating: 4 },
    ],
    image: "/normal.jpg",
    vote: 270,
  },
  {
    name: "Zaplify",
    content: "Personalized Linkedin and email outreach on autopilot",
    tags: [
      {
        title: "Productivity",
      },
      {
        title: "Sales",
      },
      {
        title: "Marketing",
      },
    ],
    reviews: [
      { title: "Great Product", content: "...", rating: 5 },
      { title: "Good Product", content: "...", rating: 4 },
    ],
    image: "/z.jpg",
    vote: 270,
  },
  {
    name: "Dashboards",
    content: "Business intelligence, but dead easy",
    tags: [
      {
        title: "AI",
      },
      {
        title: "Data and Analytics",
      },
      {
        title: "Business Intelligence",
      },
    ],
    reviews: [
      { title: "Great Product", content: "...", rating: 5 },
      { title: "Good Product", content: "...", rating: 4 },
    ],
    image: "/d.jpg",
    vote: 270,
  },
  {
    name: "Talently.ai",
    content: "AI Interviewer that screens candidates for any role",
    tags: [
      {
        title: "Hiring",
      },
      {
        title: "Saas",
      },
      {
        title: "Artificial Intelligence",
      },
    ],
    reviews: [
      { title: "Great Product", content: "...", rating: 5 },
      { title: "Good Product", content: "...", rating: 4 },
    ],
    image: "/t.jpg",
    vote: 270,
  },
  {
    name: "Talently.ai",
    content: "AI Interviewer that screens candidates for any role",
    tags: [
      {
        title: "Hiring",
      },
      {
        title: "Saas",
      },
      {
        title: "Artificial Intelligence",
      },
    ],
    reviews: [
      { title: "Great Product", content: "...", rating: 2 },
      { title: "Bad Product", content: "...", rating: 1 },
    ],
    image: "/t.jpg",
    vote: 270,
  },
  {
    name: "Talently.ai",
    content: "AI Interviewer that screens candidates for any role",
    tags: [
      {
        title: "Hiring",
      },
      {
        title: "Saas",
      },
      {
        title: "Artificial Intelligence",
      },
    ],
    reviews: [
      { title: "Great Product", content: "...", rating: 3 },
      { title: "Good Product", content: "...", rating: 4 },
    ],
    image: "/t.jpg",
    vote: 270,
  },
];

export const adminSideBar = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        url: "/admin-dashboard",
        icon: <LayoutDashboard />,
      },
      {
        title: "Users",
        url: "/admin-dashboard/users",
        icon: <User />,
      },
      {
        title: "Post",
        url: "/admin-dashboard/posts",
        icon: <MessageSquareDashed />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        url: "/dashboard/revenue",
        icon: <BarChart2 />,
      },
      {
        title: "Reports",
        url: "/dashboard/reports",
        icon: <BookOpen />,
      },
      {
        title: "Teams",
        url: "/dashboard/teams",
        icon: <Users />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        url: "/dashboard/settings",
        icon: <Cog />,
      },
      {
        title: "Help",
        url: "/dashboard/help",
        icon: <HelpCircle />,
      },
    ],
  },
];

export const mentorSideBar = [
  {
    title: "Featured",
    list: [
      {
        title: "Dashboard",
        url: "/mentor-dashboard",
        icon: <LayoutDashboard />,
      },
      {
        title: "Event",
        url: "/mentor-dashboard/event",
        icon: <CupSoda />,
      },
      {
        title: "Post",
        url: "/mentor-dashboard/post",
        icon: <MdOutlinePostAdd size={25} />,
      },
    ],
  },
  {
    title: "Resource",
    list: [
      {
        title: "Jobs",
        url: "/mentor-dashboard/jobs",
        icon: <MdOutlineAddHomeWork size={25} />,
      },
      {
        title: "Forem Store",
        url: "/store",
        icon: <Store />,
      },
      {
        title: "Teams",
        url: "/mentor-dashboard/teams",
        icon: <Users />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        url: "/dashboard/settings",
        icon: <Cog />,
      },
      {
        title: "Help",
        url: "/dashboard/help",
        icon: <HelpCircle />,
      },
    ],
  },
];

export const userSideBar = [
  {
    title: "Featured",
    list: [
      {
        title: "Dashboard",
        url: "/user-dashboard",
        icon: <LayoutDashboard />,
      },
      {
        title: "Events",
        url: "/user-dashboard/event",
        icon: <CupSoda />,
      },
      {
        title: "Posts",
        url: "/user-dashboard/post",
        icon: <MessageSquareDashed />,
      },
    ],
  },
  {
    title: "Resource",
    list: [
      {
        title: "Market",
        url: "/user-dashboard/jobs",
        icon: <MdOutlineAddHomeWork size={25} />,
      },
      {
        title: "Forem Store",
        url: "/user-dashboard/store",
        icon: <Store />,
      },
      {
        title: "Teams",
        url: "/user-dashboard/teams",
        icon: <Users />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        url: "/dashboard/settings",
        icon: <Cog />,
      },
      {
        title: "Help",
        url: "/dashboard/help",
        icon: <HelpCircle />,
      },
    ],
  },
];