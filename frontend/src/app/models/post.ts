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
