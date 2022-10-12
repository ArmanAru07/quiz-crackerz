import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuesList = ({ quesList }) => {
    console.log(quesList);
    const { correctAnswer, question, options } = quesList;
    const questionStarting = question.replace('<p>', " ");
    const questionSection = questionStarting.replace('</p>', " ");

    const handleClickOption = (optionbd)=>{
        if (optionbd.toLowerCase()===correctAnswer.toLowerCase()){
            console.log(correctAnswer);

            toast.success('Correct!', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
        else {
            console.log("incorrect");

            toast.error('Wrong Answer.', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    }

    const eye = () => {

        toast.info(` ${correctAnswer}`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }

    return (

        <div className='container QuestionDiv w-100 bg-secondary text-light mb-2 p-4'>

            <div className='QDiv-Upper'>
                <div>
                    <h2> {questionSection}</h2>
                </div>
                <div >
                    <a onClick={() => eye()} className='fs-5' ><i className="fa-solid fa-eye"></i></a> <small className='d-sm-inline d-none'>See correct answer.</small>

                </div>
            </div>



            <div className='option-div border m-4 p-2'>
                {
                    options.map((option, idx) => {
                        return (
                            <div key={idx}>
                                <input type="radio" id="html" name="fav_language" value="HTML" onClick={()=>{handleClickOption(option)}} />
                                <label htmlFor="html"> <p className='ms-2 fs-5'> <span style={{ fontWeight: 'bold' }}>{idx + 1}.</span>  {option}</p></label>
                            </div>
                        )
                        
                    })
                }
                <ToastContainer />
            </div>


            
        </div >
    );










        // <div className='container '>


        //     <Card className='bg-secondary text-light mb-2'>
        //         <Card.Body>
        //             <Card.Title> {questionSection} </Card.Title>
        //             <Card.Text>
        //                 <div>
        //                     {
        //                         options.map((option)=>{
        //                             return <p>{options}</p>
        //                         })
        //                     }
        //                 </div>
        //                 {/* <div className='row '>
        //                 <div className='col-lg-6 col-sm-12'>
        //                     <div className='m-4 p-2 border text-start'><input className='mx-3' type="radio" value="options" name="options" /> {options[0]}</div>
        //                     <div className='m-4 p-2 border text-start'><input className='mx-3' type="radio" value="options" name="options" /> {options[1]}</div>
        //                     <div className='m-4 p-2 border text-start'><input className='mx-3' type="radio" value="options" name="options" /> {options[2]}</div>
        //                     <div className='m-4 p-2 border text-start'><input className='mx-3' type="radio" value="options" name="options" /> {options[3]}</div>
        //                 </div>
        //                 </div> */}

        //                 <div className=' '>
        //                 <Toast >
        //                     <Toast.Header>
        //                         <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        //                         <strong className="me-auto">Result</strong>
        //                     </Toast.Header>
        //                     <Toast.Body>{result}</Toast.Body>
        //                 </Toast>
        //                 </div>
        //             </Card.Text>
        //         </Card.Body>
        //     </Card>




        // </div>
    
};

export default QuesList;