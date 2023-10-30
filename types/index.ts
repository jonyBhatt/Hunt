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
