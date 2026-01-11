import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ExperienceCard from "../components/ExperienceCard";
import experience from "../data/experience";

const WorkExperience = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-900 text-gray-100">
            <Navbar />
            <main className="grow px-6 md:px-12 lg:px-24 py-16">
                <section className="max-w-5xl">
                    <h1 className="text-4xl font-bold mb-10">
                        Work <span className="text-purple-400">Experience</span>
                    </h1>

                    <div className="space-y-8">
                        {experience.map((item) => (
                            <ExperienceCard key={item.id} experience={item} />
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default WorkExperience;