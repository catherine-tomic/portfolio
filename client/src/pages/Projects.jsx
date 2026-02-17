import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard"
import projects from "../data/projects";

const Projects = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-900 text-gray-100">
            <Navbar />
            <main className="grow px-6 md:px-12 lg:px-24 py-16">
                <section className="max-w-5xl">
                    <h1 className="text-4xl font-bold mb-4">
                        Projects{" "}
                        <span className="text-purple-400">I've Built</span>
                    </h1>

                    <p className="text-md text-gray-500 leading-relaxed mb-10">
                        *If it is an academic project you have to request access to view
                    </p>

                    <div className="space-y-8">
                        {projects.map((project) => (
                            project.link ? (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block"
                                >
                                    <ProjectCard key={project.id} project={project} />
                                </a>
                            ) : (
                                <ProjectCard key={project.id} project={project} />
                            )
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default Projects;