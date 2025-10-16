import InputField from "./InputField";
import ProfileSection from "./ProfileSection";

export default function EducationForm() {
  return (
    <ProfileSection title="EDUCATION">
      <InputField label="#1 Last Education" />
      <InputField label="#1 Major of Last Education" />
      <InputField label="#1 Institution Name of Last Education" />
      <InputField label="#1 Institution City of Last Education" />
      <InputField label="#2 Last Education" />
      <InputField label="#2 Major of Last Education" />
      <InputField label="#2 Institution Name of Last Education" />
      <InputField label="#2 Institution City of Last Education" />
    </ProfileSection>
  );
}
