import {Action} from '@ngrx/store';

export const EDIT_TEXT = '[POST] Edit';
export const UPVOTE = '[POST] Upvote';
export const DOWNVOTE = '[POST] Downvote';
export const RESET = '[POST] Reset';

export class PostEdit implements Action {
  readonly type = EDIT_TEXT;

  constructor( public payload: string ) {}
}

export class PostUpvote implements Action {
  readonly type = UPVOTE;
}

export class PostDownvote implements Action {
  readonly type = DOWNVOTE;
}

export class PostReset implements Action {
  readonly type = RESET;
}

export type All
  = PostEdit
    | PostUpvote
    | PostDownvote
    | PostReset;


