
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/lib/projects';

const Index = () => {
  // Only show the first 3 projects on the homepage
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 px-8 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Crafting digital experiences with precision and purpose
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              A showcase of my professional journey, projects, and expertise in design and development.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center h-12 px-6 font-medium bg-primary text-primary-foreground rounded-md transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                View Projects
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center h-12 px-6 font-medium border border-input bg-background rounded-md transition-colors hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Projects Section */}
      <section className="py-20 px-8 md:px-12 lg:px-16 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div className="animate-fade-up">
              <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
              <p className="mt-2 text-muted-foreground">A selection of my most recent work</p>
            </div>
            <Link 
              to="/projects" 
              className="inline-flex items-center mt-4 md:mt-0 text-sm font-medium text-primary transition-colors hover:text-primary/80 group animate-fade-up"
            >
              View all projects <ArrowRight className="ml-1 h-4 w-4 transition-all duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
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
        </div>
      </section>
      
      {/* About Section Preview */}
      <section className="py-20 px-8 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 animate-fade-right">
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">About Me</span>
              <h2 className="mt-2 text-3xl font-bold tracking-tight">Combining creativity with technical expertise</h2>
              <p className="mt-4 text-muted-foreground">
                I'm a multidisciplinary professional with experience spanning software development, 
                design, research, and project management. My approach combines technical expertise 
                with a deep appreciation for aesthetics and usability.
              </p>
              <div className="mt-8">
                <Link 
                  to="/about" 
                  className="inline-flex items-center text-sm font-medium text-primary transition-colors hover:text-primary/80 group"
                >
                  Learn more about me <ArrowRight className="ml-1 h-4 w-4 transition-all duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 animate-fade-left">
              <div className="aspect-square relative overflow-hidden rounded-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2670&auto=format&fit=crop"
                  alt="Portrait" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="py-20 px-8 md:px-12 lg:px-16 bg-muted/50">
        <div className="max-w-7xl mx-auto text-center animate-fade-up">
          <h2 className="text-3xl font-bold tracking-tight">Let's work together</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential collaborations? 
            I'm always open to new opportunities and challenges.
          </p>
          <div className="mt-10">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center h-12 px-6 font-medium bg-primary text-primary-foreground rounded-md transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
