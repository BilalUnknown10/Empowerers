import { dbConnect } from '../../../utils/dbConnect';
import User from '../../../models/User_model';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  await dbConnect();

  const { email, password } = req.body;
  const user = await User.findOne({ email });
 
  if (!user) return res.status(401).json('User not found');

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(401).json( 'Invalid credentials' );

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
  res.json({ message : 'Login successful', token, role : user.role,username:user.username });
}
