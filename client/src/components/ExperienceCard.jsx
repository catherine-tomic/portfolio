import React from "react";

const ExperienceCard = ({ experience }) => {
    return (
        <div className="p-6 rounded-xl bg-gray-800 border border-gray-950 hover:border-purple-500 transition">
            <div className="mb-2">
                <h2 className="text-2xl font-semibold">
                    {experience.role}
                </h2>

                <p className="text-gray-400">
                    {experience.company} | {experience.location}
                </p>

                <p className="text-sm text-gray-500 mb-4">
                    {experience.duration}
                </p>
            </div>

            <ul className="text-gray-300 space-y-2 mb-4">
                {experience.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                ))}
            </ul>

            <div className="flex flex-wrap gap-2">
                {experience.tech.map((tech, i) => (
                    <span key={i} className="text-xs px-3 py-1 rounded-full bg-gray-800 text-purple-300 border border-gray-700">
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default ExperienceCard;