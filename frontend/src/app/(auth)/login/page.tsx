'use client';

import { useGoogleLogin } from '@react-oauth/google';
import { useEffect, useState } from 'react';

export default function LoginPage() {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  // const { data: profile, isLoading: loadingProfile } = useGetGoogleUserInfoQuery(accessToken!, { skip: !accessToken });
  // const [login, { isLoading: loginLoading }] = useSocialLoginMutation();

  // const handleGoogleOAuth = useGoogleLogin({
  //   onSuccess: (tokenResponse: { access_token: string }) => {
  //     setAccessToken(tokenResponse.access_token);
  //   },
  //   onError: () => {
  //     console.log('Google login error');
  //   },
  // });

  // useEffect(() => {
  //   if (profile) {
  //     const payload = {
  //       authMethod: 'google',
  //       googleId: profile.sub,
  //       fullName: profile.name,
  //       email: profile.email,
  //       accessToken: accessToken, // Send access token to backend for validation
  //     };

  //     login(payload).unwrap()
  //       .then((result) => {
  //         if (result?.isSuccess) {
  //           // Handle success (e.g., redirect to profile)
  //         }
  //       })
  //       .catch((error) => {
  //         console.error('Google login failed:', error);
  //         // toast.error("Google login failed!");
  //       });
  //   }
  // }, [profile, login, accessToken]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Login / Register</h1>
        {/* <button
          onClick={(e) => {
            e.preventDefault();
            handleGoogleOAuth();
          }}
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          disabled={loginLoading || loadingProfile}
        >
          Continue with Google
        </button> */}
      </div>
    </div>
  );
}