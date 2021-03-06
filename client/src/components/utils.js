export const dateParser = (date) => {
	let options = {
		// hour: '2-digit',
		// minute: '2-digit',
		// second: '2-digit',
		weekday: 'short',
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	};

	let timestamp = Date.parse(date);

	let dateFormatted = new Date(timestamp).toLocaleDateString('fr-FR', options);

	return dateFormatted.toString();
};

export const timestampParser = (tsp) => {
	let options = {
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
		weekday: 'long',
		year: 'numeric',
		month: 'short',
		day: 'numeric'
	};

	let date = new Date(tsp).toLocaleDateString('fr-FR', options);

	return date.toString();
};

export const isEmpty = (value) => {
	return value === undefined ||
		value === null ||
		(typeof value === 'object' && Object.keys(value).length === 0) ||
		(typeof value === 'string' && value.trim().length === 0);
};