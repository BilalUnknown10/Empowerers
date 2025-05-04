import { dbConnect } from '../../../utils/dbConnect';
import User from '../../../models/User_model';
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  await dbConnect();

  const { firstName, lastName, username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = await User.create({ firstName, lastName, username, email, role : "student", password: hashedPassword });
    console.log(user);
    res.status(201).json({ message: 'User created', user });
  } catch (error) {
    console.log(error); 
    res.status(400).json({ error: 'Error creating user' });
  }
}