import { useLoaderData } from 'react-router-dom';
import TopicsDetails from '../TopicsDetails/TopicsDetails';

const Topics = () => {
    const quizTopic = useLoaderData();
    // console.log(quizTopic.data);
    const quizData = quizTopic.data
    // console.log(quizdata);


    return (
        <div className='topics container mt-5'>
            <h3>Quiz Topics</h3>
            <div className='topicsDetails d-flex p-3'>
            {
                quizData.map(topicsDetails => <TopicsDetails
                key={topicsDetails.id}
                topicsDetails={topicsDetails}
                ></TopicsDetails>)
            }
            </div>

        </div>
    );
};

export default Topics;