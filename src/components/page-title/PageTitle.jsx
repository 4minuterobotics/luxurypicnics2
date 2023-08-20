import React from 'react';
import './pageTitle.css';

const PageTitle = (props) => {
	return (
		<>
			<div className='page-title gradient__text'>
				<h1 className={`fancy-font ${props.titleSize}`}>{props.text}</h1>
			</div>
		</>
	);
};

export default PageTitle;
