import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TopicsDetails from '../TopicsDetails/TopicsDetails';

const Topics = () => {
    const quizTopic = useLoaderData();
    return (
        <div className='topics container mt-5'>
            <h3>Topics</h3>
            <div className='topicsDetails d-flex p-3'>
            {
                quizTopic.map(topicsDetails => <TopicsDetails
                key={topicsDetails.id}
                topicsDetails={topicsDetails}
                ></TopicsDetails>)
            }
            </div>
        </div>
    );
};

export default Topics;