import React from "react";
import Marquee from "react-fast-marquee";

const TrustedByMarquee = () => {
    const trustedCompanies = [
        { id: 1, name: "Chanakya National Law", logo: "/TrustedBy/ChanakyaNationalLaw.svg" },
        { id: 2, name: "High Court Odisha", logo: "/TrustedBy/HightCourtOdisha.svg" },
        { id: 3, name: "Mentor", logo: "/TrustedBy/Mentor.svg" },
        { id: 4, name: "Odisha", logo: "/TrustedBy/Odisha.svg" },
        { id: 5, name: "Tata", logo: "/TrustedBy/Tata.svg" },
        { id: 6, name: "The Officer Academy", logo: "/TrustedBy/TheOfficerAcademy.svg" },
        { id: 7, name: "Chanakya National Law", logo: "/TrustedBy/ChanakyaNationalLaw.svg" },
        { id: 8, name: "High Court Odisha", logo: "/TrustedBy/HightCourtOdisha.svg" },
        { id: 9, name: "Mentor", logo: "/TrustedBy/Mentor.svg" },
        { id: 10, name: "Odisha", logo: "/TrustedBy/Odisha.svg" },
        { id: 11, name: "Tata", logo: "/TrustedBy/Tata.svg" },
        { id: 12, name: "The Officer Academy", logo: "/TrustedBy/TheOfficerAcademy.svg" },
    ];

    return (
        <section className="py-10 ">
            <h2 className="text-center text-2xl md:text-4xl font-semibold mb-6">
                Trusted by Companies and Organisations
            </h2>
            <Marquee pauseOnHover speed={50} gradient={false}>
                {trustedCompanies.map((company) => (
                    <div key={company.id} className="flex flex-col items-center mx-6">
                        <img
                            src={company.logo}
                            alt={company.name}
                            className=" h-24  md:h-30 w-auto object-contain"
                        />

                    </div>
                ))}
            </Marquee>
        </section>
    );
};

export default TrustedByMarquee;
