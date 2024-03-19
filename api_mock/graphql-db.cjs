module.exports = {
	publications: [
		{
			id: 1,
			title: 'Getting Started with GraphQL',
			body: 'Learn how to easily setup a GraphQL Server with NodeJS and build a CRUD app that speaks GraphQL.',
			views: 150,
			user_id: 1,
		},
		{
			id: 2,
			title: 'Advanced GraphQL Techniques',
			body: 'Explore advanced GraphQL techniques such as pagination, authentication, and error handling.',
			views: 80,
			user_id: 2,
		},
	],
	users: [
		{ id: 1, name: 'Caroline Baker', publication_ids: [1] },
		{ id: 2, name: 'Jane Doe', publication_ids: [2] },
	],
	comments: [
		{
			id: 987,
			publication_id: 1,
			body: 'Looks good!',
			date: new Date('2023-07-03'),
			user_id: 123,
		},
		{
			id: 995,
			publication_id: 1,
			body: 'Nam molestie pellentesque dui',
			date: new Date('2023-08-17'),
			user_id: 456,
		},
	],
};
