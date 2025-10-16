import Image from "next/image";
import FormSignUp from "@/components/FormSignUp";

export default function SignUp() {
  return (
    <main className="flex flex-col md:flex-row min-h-screen bg-black">
      {/* Left Content */}
      <div className="flex flex-col justify-center items-start w-full md:w-1/2 px-8 md:px-16 py-12 space-y-3">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Image src="/logo.png" height={100} width={100} alt="logo" className="w-40 h-auto"/>
        </div>

        {/* Title */}
        <h2 className="text-4xl font-bold text-white">
          PEOPLE PARTNER SYSTEM
        </h2>

        {/* Description */}
        <p className="text-white leading-relaxed text-justify text-lg italic">
          We believe that you as part of our family is the most important people
          to be managed and taken care of, allowing us to give you great people
          experience.
        </p>

        {/* Form sign up */}
        <FormSignUp />
      </div>

      {/* Right Content */}
      <div
        className="hidden md:block w-1/2 bg-cover bg-center relative"
        style={{ backgroundImage: "url('/right-panel.png')" }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
    </main>
  );
}
