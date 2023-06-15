import React from 'react'
import './beachSupplies.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { SlideShow, BundleSummary,Line, PageTitle } from '../../components';
import { AddOns } from '../../containers';

import { beachSupplies } from '../../objects';

const BeachSupplies = () => {
  return (
    <div className="add-margin-regular-page">
            <PageTitle
                text="Beach Supplies"
            />
            <Container>
                {/* Stack the columns on mobile by making one full-width and the other half-width */}
                <Row>
                    <Col xs={12} md={6}>
                        <SlideShow
                            slideShowData={beachSupplies.setupOne.slideImages}
                        />
                    </Col>
                    <Col xs={12} md={6}>
                        <BundleSummary
                            title={beachSupplies.setupOne.name}
                            description={beachSupplies.setupOne.description}
                            details={beachSupplies.setupOne.details}
                        />
                    </Col>
                </Row>
            </Container>
            <Line/>
            <Container>
                {/* Stack the columns on mobile by making one full-width and the other half-width */}
                <Row>
                    <Col xs={12} md={6}>
                        <SlideShow
                            slideShowData={beachSupplies.setupTwo.slideImages}
                        />
                    </Col>
                    <Col xs={12} md={6}>
                        <BundleSummary
                            title={beachSupplies.setupTwo.name}
                            description={beachSupplies.setupTwo.description}
                            details={beachSupplies.setupTwo.details}
                        />
                    </Col>
                </Row>
            </Container>
            <Line/>

            <Container>
                {/* Stack the columns on mobile by making one full-width and the other half-width */}
                <Row>
                    <Col xs={12} md={6}>
                        <SlideShow
                            slideShowData={beachSupplies.setupThree.slideImages}
                        />
                    </Col>
                    <Col xs={12} md={6}>
                        <BundleSummary
                            title={beachSupplies.setupThree.name}
                            description={beachSupplies.setupThree.description}
                            details={beachSupplies.setupThree.details}
                        />
                    </Col>
                </Row>
            </Container>
            <Line/>
            <AddOns/>
        </div>
  )
}

export default BeachSupplies