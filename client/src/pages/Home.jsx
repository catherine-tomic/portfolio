import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-900 text-gray-100">
            <Navbar />
            <main className="grow px-6 md:px-12 lg:px-24 py-16">
                <section className="max-w-4xl">
                    <h1 className="text-4xl font-bold mb-6">
                        About{" "}
                        <span className="text-purple-400">Me</span>
                    </h1>

                    <h2 className="text-xl md:text-2xl text-gray-500 mb-6">
                        Software Engineer
                    </h2>

                    {/* Intro */}
                    <p className="text-lg text-gray-200 leading-relaxed mb-6">
                        Graduated from George Mason Universitywith a computer science undergraduate 
                        degree. I love working on web applications, backend logic, and databases.
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

                    <div className="flex flex-wrap gap-3 mb-10 mt-4">
                        {[
                            "React",
                            "Node.js",
                            "JavaScript",
                            "C#",
                            "Go",
                            "MongoDB",
                            "Firebase",
                            "AWS"
                        ].map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-1 text-sm rounded-full border border-purple-400/40 text-purple-300"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="flex gap-4 mb-10">
                        <a
                            href="/contact"
                            className="px-6 py-3 rounded-full bg-purple-500 text-gray-900 font-semibold hover:bg-purple-400 transition"
                        >
                            Contact Me
                        </a>

                        <a
                            href="/projects"
                            className="px-6 py-3 rounded-full border border-gray-600 text-gray-200 hover:border-purple-400 hover:text-purple-300 transition"
                        >
                            Projects
                        </a>
                    </div>

                    {/* Highlights */}
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-xl bg-gray-900 border border-gray-800">
                            <h3 className="text-xl font-semibold mb-2 text-purple-300">
                                Technical Stuff I Like
                            </h3>
                            <ul className="text-gray-400 space-y-2">
                                <li>Building full-stack applications</li>
                                <li>Finding efficient solutions</li>
                                <li>Learning new technologies through projects</li>
                                <li>Fun Fact: My current favorite algorithm is the Gale-Shapely algorithm</li>
                            </ul>
                        </div>

                        <div className="p-6 rounded-xl bg-gray-900 border border-gray-800">
                            <h3 className="text-xl font-semibold mb-2 text-purple-300">
                                Not Technical Stuff I Like
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

export default Home;