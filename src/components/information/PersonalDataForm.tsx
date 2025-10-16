import InputField from "./InputField";
import ProfileSection from "./ProfileSection";

interface PersonalDataFormProps {
    section: "left" | "right";
}

export default function PersonalDataForm({ section }: PersonalDataFormProps) {
    if (section === "left") {
        return (
            <ProfileSection title="PERSONAL DATA">
                <InputField label="FULL NAME:" />
                <InputField label="NICK NAME:" />
                <InputField label="MOBILE NUMBER 1:" />
                <InputField label="MOBILE NUMBER 2 (IF ANY):" />
                <InputField label="EMAIL ADDRESS:" />
                <InputField label="CITIZENSHIP:" />
                <InputField label="COUNTRY BORN PLACE:" />
                <InputField label="CITY BORN PLACE:" />
                <InputField label="BORN DATE:" />
            </ProfileSection>
        );
    }

    return (
        <div className="pt-10">
            <ProfileSection title=" ">
                <InputField label="ETHNIC GROUP:" />
                <InputField label="GENDER:" />
                <InputField label="ID CARD NUMBER:" />
                <InputField label="HOME ADDRESS:" />
                <InputField label="DOMICILE ADDRESS:" />
                <InputField label="HEIGHT (CM):" />
                <InputField label="WEIGHT (KG):" />
                <InputField label="BLOOD TYPE:" />
            </ProfileSection>
        </div>
    );
}
