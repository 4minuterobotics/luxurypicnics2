import {
	navbarLogo,
	preview,
	banner,
	romantic1,
	romantic2,
	romantic3,
	romantic4,
	romantic5,
	romantic6,
	romantic7,
	romantic8,
	romantic9,
	romantic10,
	// navIcons1,
	navIcons2,
	navIcons3,
} from '../assets';

export const navbarLinks = [
	{
		id: 1,
		hyperlink: '',
		title: 'Home',
	},

	{
		id: 2,
		hyperlink: 'picnics',
		title: 'Picnics',
	},
	{
		id: 3,
		hyperlink: 'parties',
		title: 'Parties',
	},

	{
		id: 4,
		hyperlink: 'beachSupplies',
		title: 'Beach Supplies',
	},

	{
		id: 5,
		hyperlink: 'book',
		title: 'Book',
	},
];

export const socialLinks = [
	{
		name: 'facebook',
		id: 1,
		hyperlink: 'https://www.facebook.com/',
		image: navIcons2,
	},
	{
		name: 'instagram',
		id: 1,
		hyperlink: 'https://www.instagram.com/luxurypicnicrentals/',
		image: navIcons3,
	},
];

export const luxuryPicnics = {
	picnicPacks: [
		{
			id: 1,
			name: 'Romantic',
			price: 350,
		},
		{
			id: 2,
			name: 'Birthday',
			price: 350,
		},
	],
	setupOne: {
		id: 1,
		name: 'Romantic',
		description: 'Comes with a table, chairs, and a guaranteed kiss for your love birds.',
		price: 4000,
		image: romantic8,
		alt: 'Luxury Picnic Setup',
		slideImages: [
			{
				id: 1,
				image: romantic7,
				alt: 'Luxury Picnic Setup',
			},
			{
				id: 2,
				image: romantic8,
				alt: 'Luxury Picnic Setup',
			},
			{
				id: 3,
				image: romantic9,
				alt: 'Luxury Picnic Setup',
			},
		],
		details: [
			{
				id: 1,
				items: '1 table',
				color: 'blue-text-gradient',
			},
			{
				id: 2,
				items: '8 chairs',
				color: 'green-text-gradient',
			},
			{
				id: 3,
				items: 'guaranteed kiss',
				color: 'orange-text-gradient',
			},
		],
	},

	setupTwo: {
		id: 2,
		name: 'Birthday',
		description: "You're Definitely getting lucky after this.",
		price: 4000,
		image: romantic10,
		alt: 'Luxury Picnic Setup',
		slideImages: [
			{
				id: 1,
				image: romantic1,
				alt: 'Luxury Picnic Setup',
			},
			{
				id: 2,
				image: romantic2,
				alt: 'Luxury Picnic Setup',
			},
			{
				id: 3,
				image: romantic3,
				alt: 'Luxury Picnic Setup',
			},
			{
				id: 4,
				image: romantic4,
				alt: 'Luxury Picnic Setup',
			},
			{
				id: 5,
				image: romantic5,
				alt: 'Luxury Picnic Setup',
			},
			{
				id: 6,
				image: romantic6,
				alt: 'Luxury Picnic Setup',
			},
			{
				id: 7,
				image: romantic10,
				alt: 'Luxury Picnic Setup',
			},
		],
		details: [
			{
				id: 1,
				items: '2 table',
				color: 'blue-text-gradient',
			},
			{
				id: 2,
				items: '16 chairs',
				color: 'green-text-gradient',
			},
			{
				id: 3,
				items: 'some love',
				color: 'orange-text-gradient',
			},
		],
	},
};

export const luxuryParties = {
	partyPacks: [
		{
			id: 1,
			name: 'Bouncy House',
			price: 4000,
		},
		{
			id: 2,
			name: 'Luxury Play Area',
			price: 4000,
		},
	],
	setupOne: {
		id: 1,
		name: 'Bouncy House',
		description: 'Comes with a luxuy bouncy house with one side open for you classy people.',
		price: 4000,
		image: navbarLogo,
		alt: 'Luxury Party Setup',
		slideImages: [
			{
				id: 'a',
				image: navbarLogo,
				alt: 'Luxury Party Setup',
			},
			{
				id: 'b',
				image: navbarLogo,
				alt: 'Luxury Party Setup',
			},
		],
		details: [
			{
				id: 1,
				items: '1 bouncy house',
				color: 'blue-text-gradient',
			},
			{
				id: 2,
				items: 'a blower',
				color: 'green-text-gradient',
			},
			{
				id: 3,
				items: 'a love pack',
				color: 'orange-text-gradient',
			},
		],
	},

	setupTwo: {
		id: 2,
		name: 'Luxury play area',
		description: 'A big bougie bounce house, and a ball pit for your spoiled ass kids. fuck yall',
		price: 4000,
		image: preview,
		alt: 'Luxury Party Setup',
		slideImages: [
			{
				id: 'a',
				image: preview,
				alt: 'Luxury Party Setup',
			},
			{
				id: 'b',
				image: preview,
				alt: 'Luxury Party Setup',
			},
		],
		details: [
			{
				id: 1,
				items: 'A classy bounce house',
				color: 'blue-text-gradient',
			},
			{
				id: 2,
				items: 'HUUUUGE ball pit',
				color: 'green-text-gradient',
			},
			{
				id: 3,
				items: 'toddler fence',
				color: 'orange-text-gradient',
			},
		],
	},
};

export const beachSupplies = {
	beachPacks: [
		{
			id: 1,
			name: 'Small Pack',
			price: 4000,
		},
		{
			id: 2,
			name: 'Medium Pack',
			price: 4000,
		},
		{
			id: 3,
			name: 'Large Pack',
			price: 4000,
		},
	],
	setupOne: {
		id: 1,
		name: 'Small Pack',
		description: 'Comes with a luxuy a cabana tent, fully stocked cooler, 2 chairs, and a small speaker',
		price: 4000,
		image: navbarLogo,
		alt: 'Beach Party Setup',
		slideImages: [
			{
				id: 'a',
				image: navbarLogo,
				alt: 'Luxury Party Setup',
			},
			{
				id: 'b',
				image: navbarLogo,
				alt: 'Luxury Party Setup',
			},
		],
		details: [
			{
				id: 1,
				items: '1 Cabana tent',
				color: 'blue-text-gradient',
			},
			{
				id: 2,
				items: 'Fully stocked cooler',
				color: 'green-text-gradient',
			},
			{
				id: 3,
				items: '2 Beach chairs',
				color: 'orange-text-gradient',
			},
			{
				id: 4,
				items: '1 Bluetooth speaker',
				color: 'orange-text-gradient',
			},
		],
	},

	setupTwo: {
		id: 2,
		name: 'Medium Pack',
		description: 'Comes with a luxuy a cabana tent, fully stocked cooler, 4 chairs, and a small speaker',
		price: 4000,
		image: preview,
		alt: 'Beach Party Setup',
		slideImages: [
			{
				id: 'a',
				image: preview,
				alt: 'Luxury Party Setup',
			},
			{
				id: 'b',
				image: preview,
				alt: 'Luxury Party Setup',
			},
		],
		details: [
			{
				id: 1,
				items: '1 Cabana tent',
				color: 'blue-text-gradient',
			},
			{
				id: 2,
				items: 'Fully stocked cooler',
				color: 'green-text-gradient',
			},
			{
				id: 3,
				items: '4 Beach chairs',
				color: 'orange-text-gradient',
			},
			{
				id: 4,
				items: '1 Bluetooth speaker',
				color: 'orange-text-gradient',
			},
		],
	},

	setupThree: {
		id: 3,
		name: 'Large Pack',
		description: 'Comes with a luxuy a cabana tent, fully stocked cooler, 8 chairs, and a small speaker',
		price: 4000,
		image: navbarLogo,
		alt: 'Beach Party Setup',
		slideImages: [
			{
				id: 'a',
				image: navbarLogo,
				alt: 'Luxury Party Setup',
			},
			{
				id: 'b',
				image: navbarLogo,
				alt: 'Luxury Party Setup',
			},
		],
		details: [
			{
				id: 1,
				items: '2 Cabana tents',
				color: 'blue-text-gradient',
			},
			{
				id: 2,
				items: 'Fully stocked cooler',
				color: 'green-text-gradient',
			},
			{
				id: 3,
				items: '8 Beach chairs',
				color: 'orange-text-gradient',
			},
			{
				id: 4,
				items: '1 Bluetooth speaker',
				color: 'orange-text-gradient',
			},
		],
	},
};

export const addOns = [
	{
		id: '1',
		name: 'Charcuterie',
		image: banner,
		description: 'Classy people love their micro meats and crackers',
		price: 4000,
	},
	{
		id: '2',
		name: 'Cooler + Refeshments',
		image: banner,
		description: "We'll fill a cooler with all the sweets you want",
		price: 4000,
	},
	{
		id: '3',
		name: 'Marry me sign',
		image: banner,
		description: 'will you marry me?',
		price: 4000,
	},
	{
		id: '4',
		name: 'Fan',
		image: banner,
		description: "It's hot as heck outside. Cool me down daddy",
		price: 4000,
	},
	{
		id: '5',
		name: 'Speaker',
		image: banner,
		description: 'Turn that music up!',
		price: 4000,
	},
	{
		id: '6',
		name: 'Marry me sign',
		image: banner,
		description: 'will you marry me?',
		price: 4000,
	},
	{
		id: '7',
		name: 'Bubble Machine',
		image: banner,
		description: 'blow some bubbles and feel sexy',
		price: 4000,
	},
	{
		id: '8',
		name: 'Ball pit',
		image: banner,
		description: 'Kids like bouncing around in this.',
		price: 4000,
	},
	{
		id: '9',
		name: 'Balloons',
		image: banner,
		description: 'WOW this fancy as heck fam!',
		price: 4000,
	},
	{
		id: '10',
		name: 'Photo backdrop',
		image: banner,
		description: 'People really doin their thing out here!',
		price: 4000,
	},
	{
		id: '11',
		name: 'Bubble house',
		image: navbarLogo,
		description: 'Balloons finna be flying everywhere',
		price: 4000,
	},
	{
		id: '12',
		name: 'Bouncy House',
		image: banner,
		description: 'criss cross will make you....',
		price: 4000,
	},
];
