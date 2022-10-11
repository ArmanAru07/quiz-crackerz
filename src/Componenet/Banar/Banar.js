import React from 'react';
import logo from '../../images/quiz-medecine-pass.jpg'
import Carousel from 'react-bootstrap/Carousel';

const Banar = () => {
    return (
        <Carousel className='container'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={logo}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Play Quiz With Your Self..</h3>
          <p>If you can try yours best, You will success...!</p>
        </Carousel.Caption>

      </Carousel.Item>
    </Carousel>
    );
};

export default Banar;