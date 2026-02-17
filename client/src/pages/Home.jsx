import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-900 text-gray-100">
            <Navbar />
            <main className="grow px-6 md:px-12 lg:px-24 py-16">
                <section className="max-w-4xl">
                    <h1 className="text-4xl font-bold mb-4">
                        Hi, I'm {" "}
                        <span className="text-purple-400">
                            Catherine Tomic
                        </span>
                    </h1>
                    <h2 className="text-xl md:text-2xl text-gray-500 mb-6">
                        Software Engineer
                    </h2>

                    <p className="text-lg text-gray-300 leading-relaxed">
                        Computer Science major at George Mason University and soon to be graduate 
                        in May 2026. I develop full-stack software with a focus in backend 
                        implementations. 
                    </p>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        *This portfolio is still a work in progress, more updates are coming soon
                    </p>

                    <div className="flex flex-wrap gap-3 mb-10 mt-4">
                        {[
                            "React",
                            "Node.js",
                            "JavaScript",
                            "Java",
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

                    <div className="flex gap-4">
                        <a
                            href="/projects"
                            className="px-6 py-3 rounded-full bg-purple-500 text-gray-900 font-semibold hover:bg-purple-400 transition"
                        >
                            View Projects
                        </a>

                        <a
                            href="/resume"
                            className="px-6 py-3 rounded-full border border-gray-600 text-gray-200 hover:border-purple-400 hover:text-purple-300 transition"
                        >
                            Resume
                        </a>
                    </div>
                </section>

                <section className="mt-10 max-w-5xl">
                    <h3 className="text-2xl font-semibold mb-8">
                        Featured Projects
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-xl bg-gray-900 border border-gray-800 hover:border-purple-400/50 transition">
                            <h4 className="text-xl font-semibold mb-2">
                                Ignite - Dating App
                            </h4>
                            <p className="text-gray-300 mb-4">
                                Mobile application built with React-Native and Firebase featuring authentication, real-time chat, and AI-powered services.
                            </p>
                            <span className="text-sm text-purple-400">
                                React-Native | Firebase
                            </span>
                        </div>

                        <div className="p-6 rounded-xl bg-gray-900 border border-gray-800 hover:border-purple-400/50 transition">
                            <h4 className="text-xl font-semibold mb-2">
                                Social Media Mobile Android App
                            </h4>
                            <p className="text-gray-300 mb-4">
                                Android application built with Firebase featuring authentication, real-time posts, and user profiles.
                            </p>
                            <span className="text-sm text-purple-400">
                                Android | Firebase
                            </span>
                        </div>

                        <div className="p-6 rounded-xl bg-gray-900 border border-gray-800 hover:border-purple-400/50 transition">
                            <h4 className="text-xl font-semibold mb-2">
                                Radio Station Web Platform
                            </h4>
                            <p className="text-gray-300 mb-4">
                                Full-stack web app allowing DJs to manage playlists with sessions.
                            </p>
                            <span className="text-sm text-purple-400">
                                EJS | Node.js | MongoDB
                            </span>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default Home;