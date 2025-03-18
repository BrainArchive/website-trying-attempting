
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/lib/projects';

const Projects = () => {
  const [filter, setFilter] = useState<string>('all');
  
  // Get unique categories
  const categories = ['all', ...new Set(projects.map(project => project.category))];
  
  // Filter projects based on selected category
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 px-8 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl animate-fade-up">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Projects</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              A curated selection of my professional work across various domains and disciplines.
            </p>
          </div>
        </div>
      </section>
      
      {/* Filter */}
      <section className="pb-8 px-8 md:px-12 lg:px-16 animate-fade-up">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 text-sm rounded-full transition-colors ${
                  filter === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted hover:bg-muted/80 text-foreground'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Projects Grid */}
      <section className="py-12 px-8 md:px-12 lg:px-16 flex-grow">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div key={project.id} className="animate-fade-up">
                <ProjectCard 
                  id={project.id}
                  title={project.title}
                  description={project.description}
                  category={project.category}
                  imageUrl={project.imageUrl}
                  index={index}
                />
              </div>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-20 animate-fade-up">
              <h3 className="text-xl font-medium">No projects found</h3>
              <p className="mt-2 text-muted-foreground">
                No projects match the selected filter. Please try another category.
              </p>
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Projects;
