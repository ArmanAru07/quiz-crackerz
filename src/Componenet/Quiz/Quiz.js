import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuesList from '../QuesList/QuesList';

const Quiz = () => {
    const quizQues = useLoaderData();
    console.log(quizQues);
    const quizData = quizQues.data.questions
    console.log(quizData);
  

    return (
        <div>
            <h1>Quiz Exam</h1>

            <div>
                {
                    quizData.map(quesList => <QuesList
                    key={quesList.id}
                    quesList={quesList}
                    ></QuesList>)
                }
            </div>
        </div>
    );
};

export default Quiz;