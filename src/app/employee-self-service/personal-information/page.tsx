"use client";

import { useState } from "react";
import ProfileHeader from "@/components/information/ProfileHeader";
import ProfileProgress from "@/components/information/ProfileProgress";
import PersonalDataForm from "@/components/information/PersonalDataForm";
import EducationForm from "@/components//information/EducationForm";
import FamilyMemberForm from "@/components/information/FamilyMemberForm";
import OtherInformationForm from "@/components/information/OtherInformationForm";
import WorkingExperienceForm from "@/components/information/WorkingExperience";

export default function InformationPage() {
  // State to track the current step
  const [step, setStep] = useState(1);

  return (
    <main className="w-full px-4">
      {/* Header Section */}
      <div className="flex justify-between items-start mb-3">
        {/* Displays user profile name and basic info */}
        <ProfileHeader name="Rangga" text="Yuk cek lagi kelengkapan data kamu :)" />
        {/* Shows completion progress of the profile as a percentage */}
        <ProfileProgress text="Persentase Kelengkapan Datamu" value="" percentage={78} />
      </div>

      {/* Form Step 1 */}
      {step === 1 && (
        <>
          <div className="grid grid-cols-3 gap-8 bg-white">
            {/* Left column: Personal Data (left side form fields) */}
            <PersonalDataForm section="left" />

            {/* Middle column: Personal Data (right side form fields) */}
            <PersonalDataForm section="right" />

            {/* Right column: Education form */}
            <EducationForm />
          </div>
          <div className="flex justify-end mt-6">
            <button
              onClick={() => setStep(2)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition"
            >
              Next →
            </button>
          </div>
        </>
      )}

      {/* Form Step 2 */}
      {step === 2 && (
        <>
          <div className="grid grid-cols-3 gap-8 bg-white">
            {/* Left column */}
            <FamilyMemberForm section="left" />

            {/* Middle column*/}
            <FamilyMemberForm section="right" />

            {/* Right column*/}
            <OtherInformationForm />
          </div>
          <div className="flex justify-between mt-6">
            <button
              onClick={() => setStep(1)}
              className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 px-6 rounded-lg transition"
            >
              ← Back
            </button>

            <button
              onClick={() => setStep(3)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition"
            >
              Next →
            </button>
          </div>
        </>
      )}

      {/* Form Step 3 */}
      {step === 3 && (
        <>
          <WorkingExperienceForm />

          <div className="flex justify-between mt-6">
            <button
              onClick={() => setStep(2)}
              className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 px-6 rounded-lg transition"
            >
              ← Back
            </button>

            <button
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg transition"
            >
              Submit
            </button>
          </div>
        </>
      )}
    </main>
  );
}
