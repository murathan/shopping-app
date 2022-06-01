const combineReducers = (slices) => (state, action) =>
	Object.keys(slices).reduce(
		(acc, prop) => ({
			...acc,
			[prop]: slices[prop](acc[prop], action),
		}),
		state
	);

const arrayChunk = (arr, n) => {
	const array = arr.slice();
	const chunks = [];
	while (array.length) chunks.push(array.splice(0, n));
	return chunks;
};

export { combineReducers, arrayChunk };
