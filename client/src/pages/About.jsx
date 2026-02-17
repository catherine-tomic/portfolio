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
                        I'm a Computer Science major at George Mason University, graduating in May 
                        2026. I enjoy building full-stack applications and learning new skills.
                    </p>

                    {/* Background */}
                    <p className="text-gray-400 leading-relaxed mb-6">
                        My experience spans frontend, backend, and cloud-based development. I've
                        built full-stack web applications with React and Node.js, mobile
                        applications in android studio and react native, and deployed projects using
                        AWS. I've worked with multiple databases including Firebase, MongoDB, and Oracle.
                    </p>

                    {/* Current Focus */}
                    <p className="text-gray-400 leading-relaxed mb-10">
                        Currently, I'm focusing on strengthening my full-stack skill set, improving
                        my understanding of system design, and building polished projects.
                    </p>

                    {/* Highlights */}
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-xl bg-gray-900 border border-gray-800">
                            <h3 className="text-xl font-semibold mb-2 text-purple-300">
                                Technical Passions
                            </h3>
                            <ul className="text-gray-400 space-y-2">
                                <li>Building full-stack applications</li>
                                <li>Designing clean and intuitive UIs</li>
                                <li>Learning new technologies through projects</li>
                                <li>Fun Fact: My current facorite algorithm is the Gale-Shapely algorithm</li>
                            </ul>
                        </div>

                        <div className="p-6 rounded-xl bg-gray-900 border border-gray-800">
                            <h3 className="text-xl font-semibold mb-2 text-purple-300">
                                Beyond Code
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