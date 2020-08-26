const runner = {
	first: 'Eliud',
	last: 'Kipchoge',
	country: 'Kenya'
};
const print = ({ first, last, country }) => {
	console.log(`${first} ${last}, ${country}`);
};

print(runner);

const response = [ 'HTTP/1.1', '200 OK', 'application/json' ];
const parseResponse = ([ protocol, statusCode, contentType ]) => {
	console.log(`Status: ${statusCode}`);
};

parseResponse(response);
