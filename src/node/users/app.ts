import express, { Request, Response } from 'express';

const app = express();
app.use(express.json());

interface User {
  username: string;
  email: string;
  password: string;
}

const users: User[] = [];

function isValidEmail(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function userExists(username: string, userEmail: string): boolean {
  return users.some((user) => user.username === username || user.email === userEmail);
}

app.get('/users', (req: any, res: any) => {
  return res.status(200).json(users);
});

app.post('/users', (req: any, res: any) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  if (userExists(username, email)) {
    return res.status(400).json({ error: 'User already exists' });
  }

  const newUser: User = { username, email, password };
  users.push(newUser);

  res.status(201).json(newUser);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
