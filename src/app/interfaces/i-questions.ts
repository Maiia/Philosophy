import {IQuestion} from './i-question';

export interface IQuestions {
  'question_text': string;
  'question_type': string;
  'questions': Array<IQuestion>;
}
