'use client'; // Client component because it uses state/events

import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');

  return (
    <form className="space-y-4">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full p-2 border border-gray-300 rounded"
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Login
      </button>
    </form>
  );
}
