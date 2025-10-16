import InputField from "./InputField";
import ProfileSection from "./ProfileSection";

interface FamilyMemberFormProps {
    section: "left" | "right";
}

export default function FamilyMemberForm({ section }: FamilyMemberFormProps) {
    if (section === "left") {
        return (
            <ProfileSection title="FAMILY MEMBERS">
                <InputField label="SPOUSE NAME:" />
                <InputField label="SPOUSE BIRTH DATE:" />
                <InputField label="FATHER'S NAME:" />
                <InputField label="FATHER'S BIRTH DATE:" />
                <InputField label="MOTHER'S NAME:" />
                <InputField label="MOTHER'S BIRTH DATE:" />
                <InputField label="CHILD'S NAME 1:" />
                <InputField label="CHILD'S BIRTH DATE 1:" />
            </ProfileSection>
        );
    }

    return (
        <div className="pt-10">
            <ProfileSection title=" ">
                <InputField label="CHILD'S NAME 2:" />
                <InputField label="CHILD'S BIRTH DATE 2:" />
                <InputField label="CHILD'S NAME 3:" />
                <InputField label="CHILD'S BIRTH DATE 3:" />
            </ProfileSection>
        </div>
    );
}
