import React from 'react';
import { ButtonGroup, Button, ProgressBar } from 'react-bootstrap';

const Card = (props) => {
    const { name, img, description } = props.item;
    return (
        <div className="col">
            <div className="card">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                    <Button variant="success">Click Me</Button>
                    <ProgressBar className="my-5" animated now={45} />
                </div>
            </div>
        </div>
    );
};

export default Card;