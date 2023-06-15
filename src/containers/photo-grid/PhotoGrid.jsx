import React from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 

import { navbarLogo } from '../../assets';

import './photoGrid.css'
const PhotoGrid = () => {
    return (
        <Container className="photo-grid">
            {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
            <Row>
                <Col xs={8} md={4}>
                    <img src= {navbarLogo}/>
                </Col>
                <Col xs={4} md={4}>
                    <img src= {navbarLogo}/>
                </Col>
                <Col xs={5} md={4}>
                    <img src= {navbarLogo}/>
                </Col>
                
                <Col xs={7} md={4}>
                    <img src= {navbarLogo}/>
                </Col>
                <Col xs={12} md={4}>
                    <img src= {navbarLogo}/>
                </Col>
                <Col xs={5} md={4}>
                    <img src= {navbarLogo}/>
                </Col>

                <Col xs={7} md={4}>
                    <img src= {navbarLogo}/>
                </Col>
                <Col xs={8} md={4}>
                    <img src= {navbarLogo}/>
                </Col>
                <Col xs={4} md={4}>
                    <img src= {navbarLogo}/>
                </Col>
            </Row>
        </Container>
  )
}

export default PhotoGrid