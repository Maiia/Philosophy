import {IPost} from './i-post';
import {IAuth} from './i-auth';

export interface IAppStore {
  message: string;
  post: IPost;
  auth: IAuth;
}
