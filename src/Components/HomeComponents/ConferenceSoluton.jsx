import React from "react"

// Dynamic data for conference solutions
const conferenceSolutionsData = [
    {
        id: 1,
        title: "Small Room Solutions",
        capacity: "1-4 People",
        description:
            "Perfect for huddle rooms and small spaces, our compact conference solution delivers clear audio, crisp video, and seamless connectivity—making every meeting productive and professional.",
        image: "NextGenConference/SmallRoomSolutions.svg",
    },
    {
        id: 2,
        title: "Medium Room Solutions",
        capacity: "5-15 People",
        description:
            "Perfectly designed for small to medium meeting spaces, our conference room solution offers seamless video, crisp audio, and smart collaboration tools—ensuring every meeting is smooth, professional, and productive.",
        image: "NextGenConference/MediumRoomSolutions.svg",
    },
    {
        id: 3,
        title: "Large Room Solutions",
        capacity: "25-40 People",
        description:
            "Designed for spacious meeting rooms, our large room conference solution delivers crystal-clear audio, high-definition video, and seamless connectivity—ensuring every voice is heard and every idea shared, no matter the distance.",
        image: "NextGenConference/LargeRoomSolutions.svg",
    },
]

function ConferenceSolutions() {
    return (
        <section className="py-16 px-4 bg-white " style={{ fontFamily: "Inria Serif, serif" }}>
            <div className="container mx-auto max-w-6xl">
                {/* Main Heading and Description */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-[5.5vh]  mb-6">
                        Empowering Innovation with Tailored Audio-Visual Solutions for Every Need!
                    </h2>
                    <p className="text-gray-700 text-[1.5vh] md:text-[2vh] mx-auto ">
                        We empower innovation by providing customized audio-visual solutions that cater to your specific needs. Whether
                        for business, education, or entertainment, our tailored systems enhance communication, collaboration, and
                        experience, helping you stay ahead in a rapidly evolving world.
                    </p>
                    <button className="mt-8 bg-[#21697D] hover:bg-teal-800 text-white py-2 px-8 rounded transition-colors">
                        Explore
                    </button>
                </div>

                {/* Conference Solutions Section */}
                <div className="mt-16">
                    <h3 className="text-3xl font-bold text-center mb-12">Next Gen Conference Solutions</h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {conferenceSolutionsData.map((solution) => (
                            <div key={solution.id} className="flex flex-col items-center text-center">
                                <div className="mb-4">
                                    <img
                                        src={solution.image || "/placeholder.svg"}
                                        alt={solution.title}
                                        className="w-48 h-48 object-contain"
                                    />
                                </div>
                                <h4 className="text-xl font-bold mb-2">{solution.title}</h4>
                                <p className="font-medium text-gray-600 mb-3">Capacity: {solution.capacity}</p>
                                <p className="text-gray-700 text-sm">{solution.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ConferenceSolutions
