import React from 'react';
import './footer.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { socialLinks } from '../../objects';

const Footer = () => {
	return (
		<>
			<div className='footer'>
				<Container className='footer-content2'>
					<Row>
						<Col sm className='footer-content3'>
							<div className='footer-button-bg'>
								<div className='footer-button'>
									<div className='social-icon'>(954) 557 - 4816</div>
								</div>
							</div>
						</Col>
						<Col sm className='footer-content3'>
							<div className='footer-button-bg'>
								<div className='footer-button'>
									<div className='social-icons'>
										{/* <a href="https://linkedin.com/in/william-lawrence-196511156/"><img src={navIcon1} alt="" /></a>
                                        <a href="#"><img src={navIcon2} alt="" /></a> */}
										<a className='facebook' href={socialLinks[0].hyperlink}>
											<img src={socialLinks[0].image} alt='' />
										</a>
									</div>
								</div>
							</div>
						</Col>
						<Col sm className='footer-content3'>
							<div className='footer-button-bg'>
								<div className='footer-button'>
									<div className='social-icons '>
										{/* <a href="https://linkedin.com/in/william-lawrence-196511156/"><img src={navIcon1} alt="" /></a>
                                        <a href="#"><img src={navIcon2} alt="" /></a> */}
										<a className='instagram' href={socialLinks[1].hyperlink}>
											<img src={socialLinks[1].image} alt='' />
										</a>
									</div>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	);
};

export default Footer;
