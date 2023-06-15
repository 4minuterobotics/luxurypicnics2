import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './parties.css'

import { SlideShow, BundleSummary, Line, PageTitle } from '../../components';
import { AddOns } from '../../containers';

import { luxuryParties } from '../../objects';

const Parties = () => {
  return (
    <div className="add-margin-regular-page">
            <PageTitle
                text="Party Styles"
            />
            <Container>
                {/* Stack the columns on mobile by making one full-width and the other half-width */}
                <Row>
                    <Col xs={12} md={6}>
                        <SlideShow
                            slideShowData={luxuryParties.setupOne.slideImages}
                        />
                    </Col>
                    <Col xs={12} md={6}>
                        <BundleSummary
                            title={luxuryParties.setupOne.name}
                            description={luxuryParties.setupOne.description}
                            details={luxuryParties.setupOne.details}
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
                            slideShowData={luxuryParties.setupTwo.slideImages}
                        />
                    </Col>
                    <Col xs={12} md={6}>
                        <BundleSummary
                            title={luxuryParties.setupTwo.name}
                            description={luxuryParties.setupTwo.description}
                            details={luxuryParties.setupTwo.details}
                        />
                    </Col>
                </Row>
            </Container>
            <Line/>
            <AddOns/>
        </div>
  )
}

export default Parties