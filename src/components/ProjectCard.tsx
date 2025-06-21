
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  gradient: string;
}

const ProjectCard = ({ title, description, technologies, gradient }: ProjectCardProps) => {
  return (
    <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0 overflow-hidden">
      <div className={`h-2 ${gradient}`} />
      <CardContent className="p-6 space-y-4">
        <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="bg-gray-100 hover:bg-gray-200 transition-colors">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
