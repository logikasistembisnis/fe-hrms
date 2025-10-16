import ProfileHeader from "@/components/information/ProfileHeader";
import ProfileProgress from "@/components/information/ProfileProgress";
import PersonalDataForm from "@/components/information/PersonalDataForm";
import EducationForm from "@/components//information/EducationForm";

export default function InformationPage() {
  return (
    <main className="w-full px-4">
      {/* Header Section */}
      <div className="flex justify-between items-start mb-3">
        {/* Displays user profile name and basic info */}
        <ProfileHeader name="Rangga" />
        {/* Shows completion progress of the profile as a percentage */}
        <ProfileProgress percentage={78} />
      </div>

      {/* Main form */}
      <div className="grid grid-cols-3 gap-8 bg-white">
        {/* Left column: Personal Data (left side form fields) */}
        <PersonalDataForm section="left" />

        {/* Middle column: Personal Data (right side form fields) */}
        <PersonalDataForm section="right" />

        {/* Right column: Education form */}
        <EducationForm />
      </div>
    </main>
  );
}
