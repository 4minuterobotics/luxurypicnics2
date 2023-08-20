import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './picnics.css';

import { SlideShow, BundleSummary, Line, PageTitle, PageAnimation1 } from '../../components';
import { AddOns } from '../../containers';

import { luxuryPicnics } from '../../objects';

const Picnics = () => {
	return (
		<PageAnimation1>
			<div className='add-margin-regular-page'>
				<PageTitle text='Picnic Styles' titleSize='normal' />
				<Container>
					{/* Stack the columns on mobile by making one full-width and the other half-width */}
					<Row>
						<Col xs={12} md={6}>
							<SlideShow slideShowData={luxuryPicnics.setupOne.slideImages} />
						</Col>
						<Col xs={12} md={6}>
							<BundleSummary
								title={luxuryPicnics.setupOne.name}
								description={luxuryPicnics.setupOne.description}
								details={luxuryPicnics.setupOne.details}
							/>
						</Col>
					</Row>
				</Container>
				<Line />
				<Container>
					{/* Stack the columns on mobile by making one full-width and the other half-width */}
					<Row>
						<Col xs={12} md={6}>
							<SlideShow slideShowData={luxuryPicnics.setupTwo.slideImages} />
						</Col>
						<Col xs={12} md={6}>
							<BundleSummary
								title={luxuryPicnics.setupTwo.name}
								description={luxuryPicnics.setupTwo.description}
								details={luxuryPicnics.setupTwo.details}
							/>
						</Col>
					</Row>
				</Container>
				<Line />
				<AddOns />
			</div>
		</PageAnimation1>
	);
};

export default Picnics;
