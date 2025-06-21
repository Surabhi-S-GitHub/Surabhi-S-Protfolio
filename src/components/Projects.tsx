
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with user authentication, product management, shopping cart, and payment integration. Built with modern web technologies for optimal performance.",
      technologies: ["React", "SpringBoot", "SQL", "JWT","Tailwind"],
      gradient: "bg-gradient-to-r from-green-400 to-blue-500"
    },
    {
      title: "Brainly Clone",
      description: "It acts as a second-brain and helps us to store the document links or youtube links that we feel like storing it for further reference or you just love to read it again",
      technologies: ["Express", "Node.js", "TypeScript","Tailwind"],
      gradient: "bg-gradient-to-r from-purple-400 to-pink-500"
    },
    {
      title: "PayTM Clone",
      description: "A digital wallet application with features like money transfer, transaction history, and user management. Implements secure payment processing.",
      technologies: ["React.js", "Node.js","Express.js", "MongoDB", "Tailwind"],
      gradient: "bg-gradient-to-r from-blue-400 to-indigo-500"
    },
    {
      title: "Excalidraw Clone",
      description: "A collaborative whiteboard tool for creating diagrams and sketches. Features real-time collaboration, export functionality, and intuitive drawing tools.",
      technologies: ["TypeScript","Node.js","Express.js", "Tailwind"],
      gradient: "bg-gradient-to-r from-orange-400 to-red-500"
    },
    {
      title: "Quantum Project",
      description: "An innovative quantum computing simulation platform that demonstrates quantum algorithms and principles. Protfolio Optimization for big tech giants",
      technologies: ["Python", "Qiskit", "Dynex"],
      gradient: "bg-gradient-to-r from-teal-400 to-cyan-500"
    },
    {
      title: "Social Media-Mini Project",
      description: "A social media platform where users can post, like, comment,delete, posts/comments, and follow other users with a secure backend with SQL for data management and optimization",
      technologies: ["React", "Node.js", "Express", "SQL"],
      gradient: "bg-gradient-to-r from-fuchsia-500 to-violet-600"
    }
  ];

  return (
<section id="projects" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A showcase of my recent work in full-stack development and innovative technologies
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={project.title} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
