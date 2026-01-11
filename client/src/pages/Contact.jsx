import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-900 text-gray-100">
            <Navbar />
            <main className="grow px-6 md:px-12 lg:px-24 py-16">
                <section className="max-w-3xl">
                    <h1 className="text-4xl font-bold mb-4">
                        Contact{" "}
                        <span className="text-purple-400">Me</span>
                    </h1>

                    <p className="text-gray-400 mb-8">
                        Feel free to reach out whether you have a question, want to collaborate, or just say hi.
                    </p>

                    <div className="border-t border-gray-800 pt-6">
                        <div className="flex flex-col sm:flex-row gap-4 text-purple-400">
                            <a
                                href="mailto:ctomic@gmu.edu"
                                className="hover:text-purple-300 transition"
                            >
                                ctomic@gmu.edu
                            </a>

                            <a
                                href="https://www.linkedin.com/in/catherine-tomic"
                                target="_blank"
                                rel="noopener noferrer"
                                className="hover:text-purple-300 transition"
                            >
                                LinkedIn
                            </a>

                            <a
                                href="https://github.com/catherine-tomic"
                                target="_blank"
                                rel="noopener noferrer"
                                className="hover:text-purple-300 transition"
                            >
                                GitHub
                            </a>
                        </div>
                    </div>

                    <form className="space-y-6 border-t border-gray-800 pt-6 mt-8">
                        <div>
                            <label className="block text-sm mb-1 text-gray-300">
                                Name
                            </label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-purple-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm mb-1 text-gray-300">
                                Email
                            </label>
                            <input
                                type="email"
                                placeholder="name@example.com"
                                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-purple-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm mb-1 text-gray-300">
                                Message
                            </label>
                            <textarea
                                rows="5"
                                placeholder="Your message..."
                                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-purple-500"
                            />
                        </div>

                        <button
                            type="submit"
                            className="px-6 py-3 rounded-full bg-purple-500 text-gray-900 font-semibold hover:bg-purple-400 transition"
                        >
                            Send Message
                        </button>
                    </form>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default Contact;