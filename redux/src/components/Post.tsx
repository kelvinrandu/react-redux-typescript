import * as React from "react";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";

type Props = {
  post: IPost;
  removePost: (post: IPost) => void;
};

export const Post: React.FC<Props> = ({ post, removePost }) => {
  const dispatch: Dispatch<any> = useDispatch();

  const deletePost = React.useCallback(
    (post: IPost) => dispatch(removePost(post)),
    [dispatch, removePost]
  );

  return (
    <div className="Article">
      <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
      <button onClick={() => deletePost(post)}>Delete</button>
    </div>
  );
};
