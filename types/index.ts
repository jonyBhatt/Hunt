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
  firstname: string,
  lastname: string,
  email: string,
  subject: string,
  skills: string,
  bio:string
}