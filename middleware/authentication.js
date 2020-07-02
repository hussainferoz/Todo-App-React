const jwt = require('jsonwebtoken');

module.exports = (request, response, next) => {
	//Get the token from the header
	const token = request.header('auth-token');

	//If there is no token return error as message
	if (!token) {
		return response.json({ message: 'No token, authorization denied' });
	}

	try {
		//Verify the token
		const decoded = jwt.verify(token, process.env.JWTSECRET);

		//Pass the token to the next method as request
		request.userId = decoded.userId;
		next();
	} catch (error) {
		return response.json({ message: 'Token not valid' });
	}
};
