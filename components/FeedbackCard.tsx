import React from 'react';
import { Card, CardBody } from 'reactstrap';
import Fade from 'react-reveal/Fade';
import { FeedbackType } from '../types/sections';

const FeedbackCard = ({ name, title, feedback }: FeedbackType) => {
  return (
  <Fade bottom duration={2000}>
    <Card className="card-lift--hover shadow mt-4" style={{ width: '30rem', height: '25rem' }}>
      <CardBody>
        <div className="d-flex align-items-center px-auto">
          <div className="pl-4">
            <h5 className="text-info">{name}</h5>
            <h6 className="text-info-light">{title}</h6>
            <p className="description mt-3">{feedback}</p>
          </div>
        </div>
      </CardBody>
    </Card>
  </Fade>
  );
};

export default FeedbackCard;
