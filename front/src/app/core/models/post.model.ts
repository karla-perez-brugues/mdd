export interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  topicId: number;
  createdAt: Date;
  updatedAt: Date;
}
