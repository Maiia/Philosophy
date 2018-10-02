import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionsComponent } from './questions.component';

const routes: Routes = [
  { path: 'questions', redirectTo: 'questions/question_1', pathMatch: 'full'},
  { path: 'questions/:id', component: QuestionsComponent, data: { state: 'questions/:id'} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionsRoutingModule { }
