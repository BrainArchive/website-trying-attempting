
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  index?: number;
}

const ProjectCard = ({ id, title, description, category, imageUrl, index = 0 }: ProjectCardProps) => {
  // Calculate animation delay based on index
  const animationDelay = `${0.1 + index * 0.1}s`;

  return (
    <div 
      className="group relative overflow-hidden rounded-lg border border-border bg-card transition-all hover:shadow-lg"
      style={{ animationDelay }}
    >
      <div className="aspect-[16/9] w-full overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          loading="lazy"
        />
      </div>
      
      <div className="p-6 space-y-4">
        <div>
          <span className="inline-block text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {category}
          </span>
          <h3 className="mt-2 text-xl font-medium tracking-tight">{title}</h3>
        </div>
        
        <p className="text-sm text-muted-foreground line-clamp-3">{description}</p>
        
        <Link 
          to={`/project/${id}`}
          className="inline-flex items-center text-sm font-medium text-primary transition-colors hover:text-primary/80 gap-1 group-hover:gap-2"
        >
          Read more <ArrowRight className="h-4 w-4 transition-all duration-300" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
