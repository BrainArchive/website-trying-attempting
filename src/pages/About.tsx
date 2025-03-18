
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const About = () => {
  const skills = [
    { category: 'Design', items: ['UX/UI Design', 'Visual Design', 'Interaction Design', 'Information Architecture'] },
    { category: 'Development', items: ['Front-end Development', 'React', 'TypeScript', 'Responsive Design'] },
    { category: 'Tools', items: ['Figma', 'Adobe Creative Suite', 'VS Code', 'Git'] },
    { category: 'Soft Skills', items: ['Project Management', 'Communication', 'Problem Solving', 'Teamwork'] },
  ];
  
  const experiences = [
    {
      title: 'Senior Product Designer',
      company: 'Innovation Labs',
      period: '2021 - Present',
      description: 'Leading design initiatives for cutting-edge products, collaborating with cross-functional teams, and implementing design systems that enhance product consistency and development efficiency.'
    },
    {
      title: 'UX Developer',
      company: 'Digital Crafts',
      period: '2018 - 2021',
      description: 'Bridged the gap between design and development, creating responsive interfaces and interactive prototypes while contributing to front-end implementation using React and TypeScript.'
    },
    {
      title: 'UI Designer',
      company: 'Creative Solutions',
      period: '2016 - 2018',
      description: 'Designed user interfaces for web and mobile applications, focusing on creating visually appealing and intuitive experiences aligned with brand guidelines and user needs.'
    },
  ];
  
  const education = [
    {
      degree: 'Master of Science in Human-Computer Interaction',
      institution: 'Tech University',
      period: '2014 - 2016',
    },
    {
      degree: 'Bachelor of Arts in Graphic Design',
      institution: 'Design Institute',
      period: '2010 - 2014',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 px-8 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl animate-fade-up">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">About Me</h1>
            <p className="mt-6 text-lg text-muted-foreground">
              A passionate professional with a multidisciplinary background in design, development, 
              and creative problem-solving.
            </p>
          </div>
        </div>
      </section>
      
      {/* Profile */}
      <section className="py-12 px-8 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3 order-2 lg:order-1 animate-fade-right">
              <h2 className="text-3xl font-bold tracking-tight">My Journey</h2>
              <div className="mt-6 space-y-6 text-muted-foreground">
                <p>
                  My professional journey has been driven by a passion for creating meaningful digital experiences that solve real problems. With a background spanning design and development, I've cultivated a unique perspective that bridges aesthetics and functionality.
                </p>
                <p>
                  I believe that great design is about more than just visual appeal—it's about understanding user needs, solving complex problems, and creating intuitive experiences that delight users while accomplishing business goals.
                </p>
                <p>
                  Throughout my career, I've collaborated with teams across various industries, from startups to enterprise organizations. This diversity of experience has taught me to adapt to different challenges and environments while maintaining a commitment to excellence and attention to detail.
                </p>
                <p>
                  When I'm not designing or coding, you can find me exploring new hiking trails, experimenting with photography, or deepening my knowledge through books and online courses. I believe that continuous learning and diverse experiences fuel creativity and innovation.
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-2 order-1 lg:order-2 animate-fade-left">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
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
      
      {/* Skills */}
      <section className="py-12 px-8 md:px-12 lg:px-16 bg-muted/50">
        <div className="max-w-7xl mx-auto animate-fade-up">
          <h2 className="text-3xl font-bold tracking-tight">Skills & Expertise</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-background rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold">{skillGroup.category}</h3>
                <ul className="mt-4 space-y-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-muted-foreground flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Experience */}
      <section className="py-12 px-8 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto animate-fade-up">
          <h2 className="text-3xl font-bold tracking-tight">Professional Experience</h2>
          <div className="mt-8 space-y-8">
            {experiences.map((experience, index) => (
              <div key={index} className="relative pl-8 pb-8 border-l border-border last:pb-0">
                <div className="absolute top-0 left-0 w-4 h-4 bg-primary rounded-full -translate-x-1/2"></div>
                <h3 className="text-xl font-semibold">{experience.title}</h3>
                <div className="mt-1 flex items-center text-sm text-muted-foreground">
                  <span>{experience.company}</span>
                  <span className="mx-2">•</span>
                  <span>{experience.period}</span>
                </div>
                <p className="mt-4 text-muted-foreground">{experience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Education */}
      <section className="py-12 px-8 md:px-12 lg:px-16 bg-muted/50">
        <div className="max-w-7xl mx-auto animate-fade-up">
          <h2 className="text-3xl font-bold tracking-tight">Education</h2>
          <div className="mt-8 space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-background rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <div className="mt-1 flex items-center text-sm text-muted-foreground">
                  <span>{edu.institution}</span>
                  <span className="mx-2">•</span>
                  <span>{edu.period}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20 px-8 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto text-center animate-fade-up">
          <h2 className="text-3xl font-bold tracking-tight">Interested in working together?</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Let's connect and discuss how my skills and experience can contribute to your projects.
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

export default About;
