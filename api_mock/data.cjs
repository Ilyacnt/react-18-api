/* eslint-disable @typescript-eslint/no-var-requires */
const { faker } = require('@faker-js/faker');

module.exports = () => {
	const data = {
		posts: [],
	};

	for (let i = 0; i < 1000; i++) {
		data.posts.push({
			id: String(i),
			title: faker.commerce.product(),
			description: faker.commerce.productDescription(),
			views: faker.number.int({ min: 1, max: 1000 }),
			dividerColor: faker.color.human(),
			createdAt: faker.date.past(),
		});
	}

	return data;
};
