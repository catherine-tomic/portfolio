import React from "react";

const ProjectCard = ({ project }) => {
    return (
        <div className="p-6 rounded-xl bg-gray-800 border border-gray-950 hover:border-purple-500 transition">
            <div className="flex items-center justify-between mb-2">
                <h2 className="text-2xl font-semibold">{project.title}</h2>
                <span className="text-sm text-purple-400">{project.tag}</span>
            </div>

            <p className="text-sm text-purple-300 mb-3">
                {project.tech_stack.join(" | ")}
            </p>

            <p className="text-gray-300 mb-4">{project.description}</p>

            <ul className="text-gray-400 space-y-1">
                {project.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                ))}
            </ul>
        </div>
    );
};

export default ProjectCard;