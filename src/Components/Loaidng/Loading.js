import React from 'react';
import './Loading.css'
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div className="row loading_container">
            <div className="col-12 text-center">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        </div>
    );
};

export default Loading;