"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Icons } from "../ui/icons";
import { useGoogleLogin } from "@react-oauth/google";
import { useGoogleAuthMutation } from "@/store/services/authService";

export function AuthDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [googleAuth] = useGoogleAuthMutation();

  // const navigate = useNavigate();
  const responseGoogle = async (authResult: any) => {
    try {
      // debugger
      if (authResult["code"]) {
        console.log(authResult.code, ":>authResult.code90inn")
        const result = await googleAuth({ code: authResult.code });
        const { email, name, image } = result.data.user;
        const token = result.data.token;
        const obj = { email, name, token, image };
        localStorage.setItem('user-info', JSON.stringify(obj));
        // navigate('/dashboard');
      } else {
        console.log(authResult);
        throw new Error(authResult);
      }
    } catch (e) {
      console.log('Error while Google Login...', e);
    }
  };

  const googleLogin = useGoogleLogin({
    onSuccess: responseGoogle,
    onError: responseGoogle,
    flow: "auth-code",
  });
  return (
    <>
      <Link
        href="#"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(true);
        }}
        className="text-sm font-medium text-white bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
      >
        Sign In / Sign Up
      </Link>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl">
              Welcome to Coderschain
            </DialogTitle>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <div className="text-center mb-4">
              <p className="text-sm text-muted-foreground" >
                Continue with Google to access all features
              </p>
            </div>

            <Button
              variant="outline"
              className="w-full py-6 flex items-center justify-center gap-2"
              onClick={googleLogin}
            >
              <Icons.google className="h-5 w-5" />
              <span>Continue with Google</span>
            </Button>

            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Happy Coding 🙂
                </span>
              </div>
            </div>

            <p className="px-8 text-center text-sm text-muted-foreground">
              By continuing, you agree to our{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}