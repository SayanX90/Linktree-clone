import React from "react";
import Link from "next/link";

const Login = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-yellow-900 flex items-center justify-center p-6">
      {/* Signup Card */}
      <div className="bg-white rounded-2xl p-8 w-full max-w-md shadow-2xl border border-yellow-500/50">
        <h1 className="text-5xl font-serif font-bold text-black text-center mb-2">
          Join Linktree
        </h1>
        <p className="text-center text-black mb-6">
          Sign up for a luxurious experience!
        </p>

        {/* Email Input */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-bold text-black mb-1"
          > Email Address
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-3 border border-gray-300 rounded-md text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="Enter your email"
          />
        </div>

        {/* Sign Up Button */}
        <button className="w-full bg-yellow-500 text-black rounded-md py-3 mb-4 hover:bg-yellow-600 hover:shadow-lg  transition-all duration-300">
          Sign Up
        </button>

        {/* Terms Notice */}
        <p className="text-xs text-black text-center mb-6">
          By signing up, you agree to our privacy policy, terms of service, and
          to receive updates and offers.
        </p>

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-2 text-black">OR</span>
          </div>
        </div>

        {/* Google Signup */}
        <button className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-md py-3 mb-3 hover:bg-gray-100 hover:shadow-md hover:shadow-yellow-500/30 transition-all duration-300">
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-1.04.69-2.37 1.1-3.71 1.1-2.85 0-5.26-1.92-6.12-4.5H2.37v2.82C4.18 20.54 7.95 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.88 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.37C1.53 8.47 1 10.14 1 12s.53 3.53 1.37 4.93l3.51-2.84z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.95 1 4.18 3.46 2.37 7.07l3.51 2.84c.86-2.58 3.27-4.53 6.12-4.53z"
            />
          </svg>
          <span className="text-black">Sign up with Google</span>
        </button>

        {/* Apple Signup */}
        <button className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-md py-3 mb-6 hover:bg-gray-100 hover:shadow-md hover:shadow-yellow-500/30 transition-all duration-300">
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="apple"
          >
            <path d="M14.94,5.19A4.38,4.38,0,0,0,16,2,4.44,4.44,0,0,0,13,3.52,4.17,4.17,0,0,0,12,6.61,3.69,3.69,0,0,0,14.94,5.19Zm2.52,7.44a4.51,4.51,0,0,1,2.16-3.81,4.66,4.66,0,0,0-3.66-2c-1.56-.16-3,.91-3.83.91s-2-.89-3.3-.87A4.92,4.92,0,0,0,4.69,9.39C2.93,12.45,4.24,17,6,19.47,6.8,20.68,7.8,22.05,9.12,22s1.75-.82,3.28-.82,2,.82,3.3.79,2.22-1.24,3.06-2.45a11,11,0,0,0,1.38-2.85A4.41,4.41,0,0,1,17.46,12.63Z" />
          </svg>
          <span className="text-black">Sign up with Apple</span>
        </button>

        {/* Log In Link */}
        <p className="text-center text-sm text-black">Already have an account?
          <Link href="#"
            className="text-yellow-600 hover:underline hover:text-yellow-700"
          > Log in
          </Link>
        </p>

        {/* Cookie Preferences */}
        <p className="text-center text-sm text-black mt-4">
          <Link href="#" className="hover:underline hover:text-yellow-600">
            Cookie preferences
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
