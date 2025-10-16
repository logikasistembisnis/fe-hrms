import InputField from "./InputField";
import ProfileSection from "./ProfileSection";

export default function EducationForm() {
  return (
    <ProfileSection title="EDUCATION">
      <InputField label="#1 LAST EDUCATION:" />
      <InputField label="#1 MAJOR OF LAST EDUCATION:" />
      <InputField label="#1 INSTITUTION NAME OF LAST EDUCATION:" />
      <InputField label="#1 INSTITUTION CITY OF LAST EDUCATION:" />
      <InputField label="#2 LAST EDUCATION:" />
      <InputField label="#2 MAJOR OF LAST EDUCATION:" />
      <InputField label="#2 INSTITUTION NAME OF LAST EDUCATION:" />
      <InputField label="#2 INSTITUTION CITY OF LAST EDUCATION:" />
    </ProfileSection>
  );
}
