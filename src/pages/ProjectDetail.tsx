
import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getProjectById } from '@/lib/projects';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = id ? getProjectById(id) : undefined;
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Redirect to 404 if project not found
    if (!project && id) {
      navigate('/not-found');
    }
  }, [project, id, navigate]);
  
  if (!project) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Header with image */}
      <section className="pt-32 md:pt-40 pb-0 px-8 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="animate-fade-up">
            <Link 
              to="/projects" 
              className="inline-flex items-center text-sm font-medium text-primary transition-colors hover:text-primary/80 group mb-8"
            >
              <ArrowLeft className="mr-1 h-4 w-4 transition-all duration-300 group-hover:-translate-x-1" />
              Back to Projects
            </Link>
          </div>
          
          <div className="max-w-3xl animate-fade-up mb-8">
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              {project.category}
            </span>
            <h1 className="mt-2 text-4xl md:text-5xl font-bold tracking-tight">
              {project.title}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              {project.description}
            </p>
          </div>
          
          <div className="rounded-xl overflow-hidden aspect-video mb-12 animate-fade-up">
            <img 
              src={project.imageUrl} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      
      {/* Project details */}
      <section className="py-12 px-8 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2 animate-fade-up">
              <div className="prose prose-lg max-w-none">
                <h2>Overview</h2>
                {project.fullDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
            
            {/* Project metadata */}
            <div className="animate-fade-left">
              <div className="bg-muted/50 rounded-lg p-6 space-y-6">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                    Date
                  </h3>
                  <p className="mt-2 text-base font-medium">{project.date}</p>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                    Category
                  </h3>
                  <p className="mt-2 text-base font-medium">{project.category}</p>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                    Technologies
                  </h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.technologies.map(tech => (
                      <span 
                        key={tech} 
                        className="inline-block px-3 py-1 text-xs bg-background border border-border rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {project.link && (
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                      External Link
                    </h3>
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block text-primary hover:underline"
                    >
                      Visit Project
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Next/Prev Projects (simplified) */}
      <section className="py-12 px-8 md:px-12 lg:px-16 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center animate-fade-up">
            <Link 
              to="/projects" 
              className="inline-flex items-center justify-center h-12 px-6 font-medium bg-primary text-primary-foreground rounded-md transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;
