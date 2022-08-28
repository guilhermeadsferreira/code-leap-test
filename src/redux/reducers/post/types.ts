export type Post = {
  id: number;
  username: string;
  created_datetime: string;
  title: string;
  content: string;
};

export type ListPostsResponse = {
  count: number;
  next: string;
  previous: string;
  results: Post[];
};

export type ListPostsParams = {
  next?: string;
};
