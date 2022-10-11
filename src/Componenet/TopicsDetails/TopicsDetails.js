import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const TopicsDetails = ({ topicsDetails }) => {
    const { name, logo, total } = topicsDetails;
    return (
        <div className='m-3'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={logo} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Total Questions: {total}
                    </Card.Text>
                    <Button variant="primary">Start Quiz</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default TopicsDetails;