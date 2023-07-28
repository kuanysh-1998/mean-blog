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
  userName?: string;
  email: string;
  password: string;
}
