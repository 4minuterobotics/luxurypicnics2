import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {
	navbarLogo,
	romantic1,
	romantic10,
	romantic2,
	romantic3,
	romantic4,
	romantic5,
	romantic6,
	romantic7,
	romantic8,
	romantic9,
} from '../../assets';

import './photoGrid.css';
const PhotoGrid = () => {
	return (
		<Container className='photo-grid'>
			{/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
			<Row className='photogrid-photos'>
				<Col
					xs={8}
					md={4}
				>
					<img src={romantic1} />
				</Col>
				<Col
					xs={4}
					md={4}
				>
					<img src={romantic2} />
				</Col>
				<Col
					xs={5}
					md={4}
				>
					<img src={romantic3} />
				</Col>

				<Col
					xs={7}
					md={4}
				>
					<img src={romantic4} />
				</Col>
				<Col
					xs={12}
					md={4}
				>
					<img src={romantic5} />
				</Col>
				<Col
					xs={5}
					md={4}
				>
					<img src={romantic6} />
				</Col>

				<Col
					xs={7}
					md={4}
				>
					<img src={romantic7} />
				</Col>
				<Col
					xs={8}
					md={4}
				>
					<img src={romantic9} />
				</Col>
				<Col
					xs={4}
					md={4}
				>
					<img src={romantic10} />
				</Col>
			</Row>
		</Container>
	);
};

export default PhotoGrid;
