"use client";

import React from "react";
import ProfileSection from "@/components/information/ProfileSection";
import InputField from "@/components/information/InputField";

export default function WorkingExperienceForm() {
    // Label
    const experiences = [
        "LATEST COMPANY",
        "LAST 2ND COMPANY",
        "LAST 3RD COMPANY",
        "LAST 4TH COMPANY",
        "LAST 5TH COMPANY",
        "LAST 6TH COMPANY",
    ];

    return (
        <ProfileSection title="WORKING EXPERIENCE">
            {/* Grid for working experience */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Loop through experiences */}
                {experiences.map((company, index) => (
                    <div key={index} className="flex flex-col gap-2">
                        <InputField label={`${index + 1}. ${company}`} />
                        <InputField label="YOUR POSITION" />
                        <InputField label="REPORT TO" />

                        {/* Start & End Date */}
                        <div className="flex gap-2">
                            <div className="flex-1">
                                <InputField label="START DATE" type="date" />
                            </div>
                            <div className="flex-1">
                                <InputField label="END DATE" type="date" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </ProfileSection>
    );
}
