import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const TopicsDetails = ({ topicsDetails }) => {
    const {id, name, logo, total } = topicsDetails;
    return (
        <div className='my-4 col-lg-3 col-md-6 col-sm-12'>
            <Card style={{ width: '18rem' }}>
                <Card.Img className='bg-secondary' variant="top" src={logo} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Total Questions: {total}
                    </Card.Text>
                    
                    <Link to={`/${id}`}><Button variant="primary">Start Quiz</Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default TopicsDetails;