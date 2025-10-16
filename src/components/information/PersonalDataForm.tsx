import InputField from "./InputField";
import ProfileSection from "./ProfileSection";

interface PersonalDataFormProps {
    section: "left" | "right";
}

export default function PersonalDataForm({ section }: PersonalDataFormProps) {
    if (section === "left") {
        return (
            <ProfileSection title="PERSONAL DATA">
                <InputField label="Full Name" />
                <InputField label="Nick Name" />
                <InputField label="Mobile Number 1" />
                <InputField label="Mobile Number 2 (if any)" />
                <InputField label="Email Address" />
                <InputField label="Citizenship" />
                <InputField label="Country Born Place" />
                <InputField label="City Born Place" />
                <InputField label="Born Date" />
            </ProfileSection>
        );
    }

    return (
        <div className="pt-10">
            <ProfileSection title=" ">
                <InputField label="Ethnic Group" />
                <InputField label="Gender" />
                <InputField label="ID Card Number" />
                <InputField label="Home Address" />
                <InputField label="Domicile Address" />
                <InputField label="Height (cm)" />
                <InputField label="Weight (kg)" />
                <InputField label="Blood Type" />
            </ProfileSection>
        </div>
    );
}
