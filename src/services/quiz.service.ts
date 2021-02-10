import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Quiz } from '../models/quiz.model';
import { QUIZ_LIST } from '../mocks/quiz-list.mock';
import { QuizListComponent } from 'src/app/quizzes/quiz-list/quiz-list.component';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  /**
   * Services Documentation:
   * https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
   */
  //private http MyUrl;
   /**
    * The list of quiz.
    * The list is retrieved from the mock.
    */
  private quizzes: Quiz[] = QUIZ_LIST;

  /**
   * Observable which contains the list of the quiz.
   * Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */
  public quizzes$: BehaviorSubject<Quiz[]> = new BehaviorSubject(QUIZ_LIST);

  constructor() {
    //private http: HttpClientModule;
  }
 /* getQuizzes() {
    MyUrl = this.http.get<Quiz[]>(this.MyUrl);
  }*/
  addQuiz(quiz: Quiz) {
    this.quizzes.push(quiz);
    this.quizzes$.next(this.quizzes);
    //private newQuiz = new quiz Quiz();
    //add(term: string): void {
    //  this.searchTerms.next(term);
    // You need here to update the list of quiz and then update our observable (Subject) with the new list
    // More info: https://angular.io/tutorial/toh-pt6#the-searchterms-rxjs-subject
  }
  deleteQuiz(quiz: Quiz):void{
    this.quizzes.forEach((element:Quiz, index:number) => {
      if(element == quiz){
        this.quizzes.splice(index, 1);
      }
    });
    this.quizzes$.next(this.quizzes);
  }
}
