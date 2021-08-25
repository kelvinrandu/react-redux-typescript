interface IPost{
  id: number;
  title: string;
  body: string;
}

type PostState = {
  posts: Post[];
};

type PostAction = {
  type: string;
  post: IArticle;
};

type DispatchType = (args: PostAction) => PostAction;
