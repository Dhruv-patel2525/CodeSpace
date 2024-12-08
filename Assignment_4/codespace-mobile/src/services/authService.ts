import { storage } from '../App'; // Import initialized storage

const API_URL = 'http://localhost:3003';

const login = async (email: string, password: string) => {
    console.log(email,password);
  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error('Failed to log in');
  }


  const data = await response.json();
  await storage.set('accessToken', data.accessToken);
  await storage.set('user', { email: data.email, role: data.role, name: data.name });

  return data;
};

const register = async (name: string,email: string,role: string,password: string,confirmPassword: string) => {
    const userId=2;
  const response = await fetch(`${API_URL}/auth/registerUser`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({userId,name,email,role,password,confirmPassword}),
  });

  if (!response.ok) {
    throw new Error('Failed to register');
  }

  return response.json();
};

const getProfile = async () => {
  const token = await storage.get('authToken');
  const response = await fetch(`${API_URL}/profile`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch profile');
  }

  return response.json();
};

const logout = async () => {
    await storage.remove('accessToken');
    await storage.remove('user');  
};

export default { login, register, getProfile, logout };
