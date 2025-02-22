const isAuthenticated = (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ message: 'You must be logged in to access this resource.' });
    }
    next();  // Proceed to the next middleware or route handler if authenticated
  };
  
  export default isAuthenticated