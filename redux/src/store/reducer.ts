import * as actionTypes from "./actionTypes";

const initialState: PostState = {
  posts: [
    {
      id: 1,
      title: "post 1",
      body: "Quisque cursus, metus vitae pharetra Nam libero tempore, cum soluta nobis est eligendi",
    },
    {
      id: 2,
      title: "post 2",
      body: "Harum quidem rerum facilis est et expedita distinctio quas molestias excepturi sint",
    },
  ],
};

const reducer = (
  state: PostState = initialState,
  action: PostAction
): PostState => {
  switch (action.type) {
    case actionTypes.ADD_POST:
      const newPost: IPost = {
        id: Math.random(), // not really unique
        title: action.post.title,
        body: action.post.body,
      };
      return {
        ...state,
        posts: state.posts.concat(newPost),
      };
    case actionTypes.REMOVE_POST:
      const updatedPosts: IPost[] = state.posts.filter(
        (post) => post.id !== action.post.id
      );
      return {
        ...state,
        posts: updatedPosts,
      };
  }
  return state;
};

export default reducer;