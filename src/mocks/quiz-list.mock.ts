import { Quiz } from '../models/quiz.model';
import { Question } from '../models/question.model';

 export const QUESTION_ACTOR: Question = {
     label: 'Jean Gabin a joué dans...',
     answers: [
         {
             value: 'Les tuches II',
             isCorrect: false,
         },
         {
             value: 'La grande illusion',
             isCorrect: true,
         }
     ]
 };
 export const QUESTION_SPORT: Question = {
    label: 'Christiano Ronaldo est un joueur de ...',
    answers: [
        {
            value: 'tennis',
            isCorrect: false,
        },
        {
            value: 'football',
            isCorrect: true,
        }
    ]
};

export const QUIZ_LIST: Quiz[] = [
    {
        id: '1',
        name: 'Les Acteurs', // What's happening if I change this value..?
        theme: 'Actors',
        questions: [QUESTION_ACTOR],
        creationDate: "",
    },
    {
        id: '2',
        name: 'Les Sports',
        theme: 'Sports',
        questions: [QUESTION_SPORT],
        creationDate: "25janvier2021",
    }
];
