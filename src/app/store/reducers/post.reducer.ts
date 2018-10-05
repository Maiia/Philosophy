import * as PostActions from '../actions/post.actions';
import { IPost } from '../../interfaces/i-post';

export type Action = PostActions.All;

const defaultState: IPost = {
  text: 'AAAAAAAAAAAAAAAAAA',
  likes: 0
}

const newState = (state, newData) => Object.assign({}, state, newData);

export function postReducer(state: IPost = defaultState, action: Action) {
  switch (action.type) {
    case PostActions.EDIT_TEXT:
      return newState(state, {text: action.payload});

    case PostActions.UPVOTE:
      return newState(state, {likes: state.likes + 1});

    case PostActions.DOWNVOTE:
      return newState(state, {likes: state.likes - 1});

    case PostActions.RESET:
      return defaultState;

    default:
      return state;
  }
}
