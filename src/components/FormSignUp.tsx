"use client";

// Import icons from lucide-react, the Next.js router, and React
import { UserRound, LockKeyhole } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

export default function FormSignUp() {
  // Initialize Next.js router
  const router = useRouter();

  // Handle form submission
  const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent page reload on form submit
    router.push("/information"); // Navigate to the /information page
  };

  return (
    <div
      className="w-full h-[250px] bg-cover bg-center rounded-md shadow-lg overflow-hidden flex items-center justify-start relative"
      style={{ backgroundImage: "url('/bg-signup.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Main content container */}
      <div className="relative z-10 p-8 text-white w-full">
        <h3 className="text-3xl font-light mb-4">Sign up</h3>

        {/* Sign-up form */}
        <form onSubmit={handleSignUp} className="space-y-2">
          {/* Input username */}
          <div className="flex items-center rounded-md overflow-hidden">
            <div className="bg-white/90 flex items-center justify-center w-10 h-10">
              <UserRound className="w-5 h-5 text-black/90" fill="black" />
            </div>
            <input
              type="text"
              placeholder="Username"
              className="flex-1 bg-white/30 px-3 py-2 text-white placeholder-white/70 outline-none"
            />
          </div>

          {/* Input password */}
          <div className="flex items-center rounded-md overflow-hidden">
            <div className="bg-white/90 flex items-center justify-center w-10 h-10">
              <LockKeyhole className="w-5 h-5 text-black/90" fill="black" />
            </div>
            <input
              type="password"
              placeholder="Password"
              className="flex-1 bg-white/30 px-3 py-2 text-white placeholder-white/70 outline-none"
            />
          </div>

          {/* Forgot Password */}
          <div className="text-sm mt-1 font-semibold cursor-pointer hover:underline">
            Forgot Password
          </div>

          {/* Button sign up */}
          <button
            type="submit"
            className="w-full mt-2 bg-white/90 text-black font-semibold py-2 rounded-md hover:bg-gray-200 transition"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
