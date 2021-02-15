import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

import { QuizService } from '../../../services/quiz.service';
import { Quiz } from '../../../models/quiz.model';

@Component({
  selector: 'app-quiz-form',
  templateUrl: './quiz-form.component.html',
  styleUrls: ['./quiz-form.component.scss']
})

export class QuestionFormComponent implements OnInit {

    public questionForm: FormGroup;

    constructor(public formBuilder: FormBuilder) {
        this.initializeQuestionForm();
        // You can also add validators to your inputs such as required, or even create your own validator!
        // More information: https://angular.io/guide/reactive-forms#simple-form-validation
        // Advanced validation: https://angular.io/guide/form-validation#reactive-form-validation
    }

    private initializeQuestionForm(){
        this.questionForm = this.formBuilder.group({
            label: [''],
            answers: this.formBuilder.array([])
        });
    }

    get answers(){
        return this.questionForm.get('answers') as FormArray;
    }
    ngOnInit() {
    }
    private createAnswer(){
        return this.formBuilder.group({
            value: '',
            isCorrect: false,
        });
    }
    
    addAnswer(){
        this.answers.push(this.createAnswer());
    }



}
