import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const technicalSkills = ["Python", "Java", "React.js", "Node.js", "Express.js", "SQL", "MongoDB", "Tailwind CSS"];
  const softSkills = [
    "Communication",
    "Teamwork",
    "Problem-Solving",
    "Time Management",
    "Adaptability",
    "Creativity",
    "Critical Thinking",
    "Leadership"
  ];
  const languageSkills = ["English", "Japanese","Hindi", "Tamil", "Sanskrit"];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Skills Overview
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A mix of technical expertise and soft abilities that help me build, lead, and collaborate effectively.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Technical Skills */}
          <Card className="bg-gradient-to-br from-blue-500 to-purple-600 p-1 hover:shadow-xl transition-all">
            <div className="bg-white h-full rounded-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">🧠 Technical Skills</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {technicalSkills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </CardContent>
            </div>
          </Card>

          {/* Soft Skills */}
          <Card className="bg-gradient-to-br from-indigo-500 to-fuchsia-500 p-1 hover:shadow-xl transition-all">
            <div className="bg-white h-full rounded-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">💬 Soft Skills</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {softSkills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </CardContent>
            </div>
          </Card>

          {/* Language Skills */}
          <Card className="bg-gradient-to-br from-rose-500 to-red-400 p-1 hover:shadow-xl transition-all">
            <div className="bg-white h-full rounded-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">🌐 Language Skills</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {languageSkills.map((lang) => (
                    <li key={lang}>{lang}</li>
                  ))}
                </ul>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
