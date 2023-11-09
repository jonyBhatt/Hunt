import { IconNode } from "lucide-react";
import { string } from "zod";

export type FindTypes = {
  title: string;
  content: string;
  url: string;
};

export type CreateUser = {
  name: string;
  username: string;
  email: string;
  password: string;
};

export type LoginUser = {
  email: string;
  password: string;
};

export type UserData = {
  userData: {
    email: string;
    name: string;
    username: string;
  };
};

export type MentorOnBoardData = {
  firstname: string;
  lastname: string;
  email: string;
  subject: string;
  skills: string;
  bio: string;
};

export type SideBarProps = {
  title: string;
  url: string;
  icon: JSX.Element;
};
export type Post = {
  id: string;
  description: string;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};
