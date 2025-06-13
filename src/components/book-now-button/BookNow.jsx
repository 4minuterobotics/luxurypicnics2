// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import './bookNow.css';

import { Link } from 'react-router-dom';
import { navbarContext } from '../../contexts/navbarContext';

const BookNow = () => {
	const { setActiveLink } = useContext(navbarContext);

	return (
		<div className='book-now'>
			<Link to='/book' onClick={() => setActiveLink('book')}>
				<button>
					<span>Book Now</span>
				</button>
			</Link>
		</div>
	);
};

export default BookNow;
