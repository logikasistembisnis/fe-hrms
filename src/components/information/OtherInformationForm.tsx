import InputField from "./InputField";
import ProfileSection from "./ProfileSection";

export default function OtherInformationForm() {
  return (
    <ProfileSection title="OTHER INFORMATION">
      <InputField label="BPJS KETENAGAKERJAAN NUMBER:" />
      <InputField label="BPJS KESEHATAN NUMBER:" />
      <InputField label="TAX NUMBER:" />
      <InputField label="BANK'S NAME:" />
      <InputField label="BANK'S ACCOUNT:" />
      <InputField label="SHIRT SIZE:" />
      <InputField label="PANTS SIZE:" />
      <InputField label="SHOES SIZE:" />
    </ProfileSection>
  );
}
