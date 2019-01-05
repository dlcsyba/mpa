import React from 'react';
import { Alert } from 'reactstrap';

export const Info = (props) => {
    return (
        <Alert color="info">
            {props.content}
        </Alert>
    );
};

export const Success = (props) => {
    return (
        <Alert color="success">
            {props.content}
        </Alert>
    );
};