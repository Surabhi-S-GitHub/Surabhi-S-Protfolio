import { Button } from "@/components/ui/button";
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  const scrollToProjects = () => {
    const section = document.getElementById("projects");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    const section = document.getElementById("contact");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-10">
        
        {/* Animated Heading */}
        <div className="space-y-4 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            <Typewriter
              words={['👋 Hey! I’m Surabhi Subramaniam 🚀']}
              loop={1}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h1>

          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
🎓 Computer Science and Engineering graduate with a strong interest in Java development, DevOps, and cloud technologies. Passionate about building scalable applications, solving real-world problems, and continuously expanding my technical expertise.          </p>

          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            💻 Always coding, forever learning, and dreaming big! ✨
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <Button
            size="lg"
            onClick={scrollToProjects}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            🌟 View My Work
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={scrollToContact}
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 text-lg font-semibold transition-all duration-300"
          >
            📬 Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
