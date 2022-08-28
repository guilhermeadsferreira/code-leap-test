export type Post = {
  id: number;
  username: string;
  created_datetime: string;
  title: string;
  content: string;
};

export type ResponsePost = {
  count: number;
  next: string;
  previous: string;
  results: Post[];
};
