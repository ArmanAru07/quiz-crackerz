import React from 'react';
import Card from 'react-bootstrap/Card';
import Toast from 'react-bootstrap/Toast';

const QuesList = ({ quesList }) => {
    const { correctAnswer, question, options } = quesList;
    const questionStarting = question.replace('<p>', " ");
    const questionSection = questionStarting.replace('</p>', " ");

    let result;
    if (options === { correctAnswer }) {
        result = <p className='bg-success'>Correct Answer</p>
    }
    else {
        result = <p className='bg-danger'>Incorrect</p>
    }

    return (
        <div className='container '>


            <Card className='bg-secondary text-light mb-2 w-45'>
                <Card.Body>
                    <Card.Title> {questionSection} </Card.Title>
                    <Card.Text>
                        <div className=''>
                            <div className='m-4 p-2 border text-start'><input className='mx-5' type="radio" value="options" name="options" /> {options[0]}</div>
                            <div className='m-4 p-2 border text-start'><input className='mx-5' type="radio" value="options" name="options" /> {options[1]}</div>
                            <div className='m-4 p-2 border text-start'><input className='mx-5' type="radio" value="options" name="options" /> {options[2]}</div>
                            <div className='m-4 p-2 border text-start'><input className='mx-5' type="radio" value="options" name="options" /> {options[3]}</div>
                        </div>

                        <Toast >
                            <Toast.Header>
                                <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                                <strong className="me-auto">Result</strong>
                            </Toast.Header>
                            <Toast.Body>{result}</Toast.Body>
                        </Toast>
                    </Card.Text>
                </Card.Body>
            </Card>




        </div>
    );
};

export default QuesList;