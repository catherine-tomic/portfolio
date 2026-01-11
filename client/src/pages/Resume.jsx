import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Resume = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-900 text-gray-100">
            <Navbar />
            <main className="grow px-6 md:px-12 lg:px-24 py-16">
                <section className="max-w-5xl">
                    <h1 className="text-4xl font-bold mb-6">
                        Resume
                    </h1>

                    <div className="mb-8">
                        <a
                            href="/Catherine_Tomic_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-6 py-3 rounded-full bg-purple-500 text-gray-900 font-semibold hover:bg-purple-400 transition"
                        >
                            Download Resume (PDF)
                        </a>
                    </div>

                    <div className="w-full h-250 rounded-xl overflow-hidden border border-gray-800 bg-gray-900">
                        <iframe
                            src="/Catherine_Tomic_Resume.pdf"
                            title="Resume"
                            className="w-full h-full"
                        />
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default Resume;