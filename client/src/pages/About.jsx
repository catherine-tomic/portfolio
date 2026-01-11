import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-900 text-gray-100">
            <Navbar />
            <main className="grow px-6 md:px-12 lg:px-24 py-16">
                <section className="max-w-4xl">
                    <h1 className="text-4xl font-bold mb-6">
                        About{" "}
                        <span className="text-purple-400">Me</span>
                    </h1>

                    {/* Intro */}
                    <p className="text-lg text-gray-200 leading-relaxed mb-6">
                        I'm a Computer Science major at George Mason University with a strong 
                        interest in full-stack software engineering. I enjoy building 
                        applications with real-world usefulness.
                    </p>

                    {/* Background */}
                    <p className="text-gray-400 leading-relaxed mb-6">
                        My experience spans frontend, backend, and cloud-based development. I've
                        built full-stack web applications with React and Node.js, mobile
                        applications in android studio using Firebase, and deployed projects using
                        AWS. 
                    </p>

                    {/* Current Focus */}
                    <p className="text-gray-400 leading-relaxed mb-10">
                        Right now, I'm focused on strengthening my full-stack skill set, improving
                        system design fundamentals, and building polished projects.
                    </p>

                    {/* Highlights */}
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-xl bg-gray-900 border border-gray-800">
                            <h3 className="text-xl font-semibold mb-2 text-purple-300">
                                What I Enjoy
                            </h3>
                            <ul className="text-gray-400 space-y-2">
                                <li>Building full-stack applications</li>
                                <li>Designing clean and intuitive UIs</li>
                                <li>Learning new technologies through projects</li>
                                <li>Turning an idea into working software</li>
                            </ul>
                        </div>

                        <div className="p-6 rounded-xl bg-gray-900 border border-gray-800">
                            <h3 className="text-xl font-semibold mb-2 text-purple-300">
                                Outside of Code
                            </h3>
                            <ul className="text-gray-400 space-y-2">
                                <li>Discovering new music</li>
                                <li>Playing video games</li>
                                <li>Experiencing something new</li>
                                <li>Lighting design & live event production</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default About;