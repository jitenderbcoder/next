import { ReactNode } from 'react';

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-lg">
        {/* Logo or branding */}
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold">TESTING</h1>
          <p className="text-gray-500">Welcome! Please log in or register.</p>
        </div>

        {/* The child page (login or register) will render here */}
        {children}
      </div>
    </div>
  );
}
