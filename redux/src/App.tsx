import * as React from "react"
import { useSelector, shallowEqual, useDispatch } from "react-redux"


import { Post } from "./components/Post"
import { AddPost } from "./components/AddPost"
import { addPost, removePost } from "./store/actionCreators"
import { Dispatch } from "redux"

const App: React.FC = () => {
  const articles: readonly IPost[] = useSelector(
    (state: PostState) => state.posts,
    shallowEqual
  );

  const dispatch: Dispatch<any> = useDispatch();

  const savePost = React.useCallback(
    (post: IPost) => dispatch(addPost(post)),
    [dispatch]
  );
  return (
    <main>
      <h1>My Articles</h1>
      <AddPost savePost={savePost} />
      {articles.map((post: IPost) => (
        <Post
          key={post.id}
          post={post}
          removePost={removePost}
        />
      ))}
    </main>
  );
};

export default App;

