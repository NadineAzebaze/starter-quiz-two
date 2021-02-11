import {NgModule} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {QuizListComponent} from './quizzes/quiz-list/quiz-list.component';
import{EditQuizComponent} from './quizzes/edit-quiz/edit-quiz.component';
//import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
    {path: 'quiz-list', component: QuizListComponent},
    {path: 'edit-quiz', component: EditQuizComponent},
    { path: '', redirectTo: '/quiz-list', pathMatch: 'full' },
    { path: 'detail/:id', component: QuizListComponent },
];

@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{

}