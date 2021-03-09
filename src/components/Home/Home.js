import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Country from '../Country/Country';
import './Home.css';

const Home = () => {

    return (
        <div className="home-area">
            <Row className="section-section">
                <Col xs={12} md={8}>
                    <div>
                        {/* <h1 className="home-border">Test1</h1> */}
                        <Country></Country>
                    </div>
                </Col>
                <Col xs={12} md={4}>
                    <div>
                        <h1 className="home-border">Test2</h1>
                    </div>
                </Col>
            </Row>
        </div>

    );
};

export default Home;