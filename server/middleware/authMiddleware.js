import jwt from 'jsonwebtoken';
import { User } from '../models/bookModel.js';

const authMiddleware = async (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Authorization token is missing.' });
  }

  try {
    const decoded = jwt.verify(token, 'your-secret-key');
    req.user = await User.findById(decoded.userId);
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: 'Invalid token.' });
  }
};

export default authMiddleware;
