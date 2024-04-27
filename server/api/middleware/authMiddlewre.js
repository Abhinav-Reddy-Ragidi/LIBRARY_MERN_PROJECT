const jwt = require('jsonwebtoken');

function authMiddleware(req, res, next) {
  // Get the token from the authorization header
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Unauthorized: Access token is missing' });
  }

  const token = authHeader.split(' ')[1];

  // Verify the token
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }
    req.user = decoded; // Store the decoded user data in the request object
    next(); // Pass the control to the next middleware or route handler
  });
}

module.exports = authMiddleware;
