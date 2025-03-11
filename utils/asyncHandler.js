const asyncHandler = (requestHandler) => {
	return (req, res, next) => {
		Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
	};
};

export { asyncHandler };

//The asyncHandler function in your code is a higher-order function used to handle asynchronous errors in an Express.js API
//Normally, in Express, if an asynchronous function (e.g., an API controller) throws an error inside an async function, it won't be caught by Express automatically, leading to an unhandled promise rejection.
//This function wraps an async request handler inside a try-catch-like mechanism using .catch(next), ensuring that errors are passed to Express's error-handling middleware.
//This avoids manually wrapping try-catch blocks inside every async route.
