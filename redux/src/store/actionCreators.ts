import * as actionTypes from "./actionTypes";

export function addPost(post: IPost) {
  const action: PostAction = {
    type: actionTypes.ADD_POST,
    post,
  };

  return simulateHttpRequest(action);
}

export function removePost(post: IPost) {
  const action: PostAction = {
    type: actionTypes.REMOVE_POST,
    post,
  };
  return simulateHttpRequest(action);
}
export function simulateHttpRequest(action: PostAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action);
    }, 500);
  };
}