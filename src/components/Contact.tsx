
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Github } from "lucide-react";

import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="bg-gradient-to-br from-white to-purple-50 py-24 px-6">
      <div className="max-w-3xl mx-auto border-4 border-blue-200 rounded-3xl bg-white/80 backdrop-blur-md shadow-xl p-10 text-center transition-all duration-500 hover:shadow-2xl">

        <h2 className="text-4xl font-bold text-purple-700 mb-4">
          Let’s Connect 🤝
        </h2>

        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          I’m currently open to software engineering roles, collaborations, or just a good conversation about building meaningful tech.  
          If you’ve got an idea, a role, or even a challenge — I’d love to hear from you.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <a
            href="mailto:surabhi.22cse@sonatech.ac.in"
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-500 text-white rounded-full font-medium shadow-md hover:scale-105 transition"
          >
            Email Me
          </a>
          <a
            href="/NewCV.pdf"
            download
            className="px-6 py-3 border-2 border-purple-600 text-purple-600 rounded-full font-medium hover:bg-purple-50 transition"
          >
            Download Resume
          </a>
        </div>

        <div className="flex justify-center gap-8 text-lg font-medium mt-4">
          <a
            href="https://www.linkedin.com/in/surabhi-s-4315ba244/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-600 hover:underline"
          >
            <FaLinkedin className="text-2xl" /> LinkedIn
          </a>
          <a
            href="https://github.com/Surabhi-S-GitHub"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-800 hover:underline"
          >
            <FaGithub className="text-2xl" /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

