import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../../services/questions.service';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { IQuestions } from '../../interfaces/i-questions';
import { IQuestion } from '../../interfaces/i-question';
import { IAnswer } from '../../interfaces/i-answer';
import { ValidationService } from '../../services/validation.service';
import { Router } from '@angular/router';
import { multiChanges, scaleAnimation, twoStates, dirDir } from '../../shared/shared.animations';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
  animations: [ scaleAnimation, multiChanges, twoStates, dirDir ]

  // animation in the same file
  /*
  animations: [
    trigger('scaleAnimation', [
      state('small', style({
        transform: 'scale(1)',
      })),
      state('large', style({
        transform: 'scale(1.2)',
      })),
      transition('small <=> large', animate('300ms ease-in', style({
        transform: 'translateY(-1px)'
      }))),
    ])
  ]
  */
})

export class QuestionsComponent implements OnInit {
  questionsData: Array<IQuestions>;
  questionsReactiveForm: FormGroup;
  currentQuestion: IQuestions;
  currentKey: string;
  prevKeys: Array<string> = [];
  questionAnswers: Array<IQuestion> = [];
  templateType = 'questions';

  answersKeys: Array<string>;
  currentAnswerData: IAnswer;

  state = 'small';
  state1 = 'hidden';
  stateContainerLoading = 'top';
  dirDirState = 'change1';

  constructor(
    private questionsService: QuestionsService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.questionsService.getQuestions().subscribe(
      (data: any) => {
        this.questionsData = data;
        this.currentQuestion = this.questionsData[localStorage.getItem('currentQuestion') || 'question_1'];
        this.currentKey = localStorage.getItem('currentQuestion') || 'question_1';

        this.initForm();
    });

    this.questionsService.getAnswers().subscribe(
      (data: any) => this.answersKeys = Object.keys(data),
      error => new Error(error)
    );
  }

  initForm() {
    localStorage.setItem('currentQuestion', (this.currentKey || 'question_1'));
    this.router.navigate(['questions', localStorage.getItem('currentQuestion')], { skipLocationChange: false});

    this.questionAnswers = this.currentQuestion['questions'];
    this.questionsReactiveForm = this.fb.group({
      'questionRadio':  new FormControl(''),
      'questionCheckbox': this.fb.array(this.buildSkills(), [ValidationService.checkboxHasValueValidator])
    });
    this.questionsReactiveForm.patchValue({questionRadio: this.currentQuestion.questions[0]['index']});
    this.questionsReactiveForm.patchValue({questionCheckbox: [true, false]});
  }

  onSubmit(evt) {
    this.fadeUp();
    if(!this.questionsReactiveForm.valid) {
      return true;
    }

    evt.stopPropagation();

    this.prevKeys.push(this.currentKey);

    this.currentKey =
      this.currentQuestion.question_type === 'radio' ?
        this.currentKey = this.questionsReactiveForm.value['questionRadio'] :
        this.currentKey = this.getQuestionCheckboxChecked();

    if (this.answersKeys.indexOf(this.currentKey) === -1) {
      this.currentQuestion = this.questionsData[this.currentKey];
      this.initForm();

      this.stateContainerLoading = 'top';

    } else {
      this.getAnswer();
    }

    // TODO validation if both empty
  }

  getQuestionCheckboxChecked() {
    let indexChecked = this.questionsReactiveForm.value.questionCheckbox.indexOf(true);
    const indexArr = [];

    while (indexChecked > -1) {
      indexArr.push(this.questionAnswers[indexChecked]['index']);
      indexChecked = this.questionsReactiveForm.value.questionCheckbox.indexOf(true, indexChecked + 1);
    }
    return indexArr.join('_');
  }

  get questionCheckbox(): FormArray {
    return this.questionsReactiveForm.get('questionCheckbox') as FormArray;
  }

  buildSkills() {
    const arr = this.questionAnswers.map(s => this.fb.control(false));
    return arr;
  }

  getAnswer() {
    this.templateType = 'answer';
    this.questionsService.getAnswers().subscribe(
      (data: any) => this.currentAnswerData = data[this.currentKey],
      error => new Error(error)
    );
  }

  getFirst () {
    this.prevKeys = [];
    this.getQuestion();
  }

  getPrev () {
    if (this.prevKeys.length > 0) {
      this.getQuestion(...this.prevKeys.splice(-1, 1));
    }
  }

  getQuestion(question_index = 'question_1') {
    this.currentKey = question_index;
    this.router.navigate(['questions', this.currentKey], { skipLocationChange: false});

    this.currentQuestion = this.questionsData[this.currentKey];
    this.questionAnswers = this.currentQuestion['questions'];

    localStorage.setItem('currentQuestion', this.currentKey);
  }

  // animations
  fadeUp() {
    this.state1 = (this.state1 === 'hidden' ? 'shown' : 'hidden');
  }

  dirDirChangeState() {
    this.dirDirState = (this.dirDirState === 'change1' ? 'change2' : 'change1');
  }

}
