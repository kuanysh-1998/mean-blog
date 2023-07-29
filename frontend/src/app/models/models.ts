export interface IPost {
  id?: string;
  title: string;
  description: string;
  category: string;
  image: {
    url: string;
    publiId: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

export interface IUser {
  id?: string;
  username: string;

  email: string;
  password: string;

  profilePhoto: Object;
  isAdmin: boolean;

  isAccountVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserRegister {
  username: string;
  email: string;
  password: string;
}

export interface ICategories {
  _id: string;
  user: string;
  title: string;
  createdAt: Date;
  updatedAt: Date;
}
export class User {
  _id!: string;
  username?: string;
  email!: string;
  password!: string;
  token!: string;
  isAdmin?: boolean;
}
