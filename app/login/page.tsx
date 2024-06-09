'use client'
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const LoginPage: React.FC = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      setError(null);
      await login(username, password);
    } catch (error) {
      setError('Failed to login. Please check your credentials and try again.');
    }
  };

  return (
    <div className='h-screen mx-auto p-24'>
      <div className='mx-auto max-w-xl py-6 px-8 h-80 mt-20 bg-white rounded shadow-xl'>
        <form onSubmit={handleSubmit}>
        <h1 className='flex justify-center text-2xl font-bold text-gray-800 mb-4'>Login</h1>
          <div className='mb-6'>
            <label htmlFor="username" className='block text-gray-800 font-bold'>Username:</label>
            <input className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-800 font-bold">Password:</label>
            <input className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button type="submit" className="cursor-pointer py-2 px-4 block mt-6 bg-indigo-500 text-white font-bold w-full text-center rounded">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

