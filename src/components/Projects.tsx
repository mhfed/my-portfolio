import { component$ } from '@builder.io/qwik';

export default component$(() => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with real-time inventory management and payment processing.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '/images/project1.jpg',
      link: '#',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management tool with real-time updates and team collaboration features.',
      tech: ['Vue.js', 'Firebase', 'Tailwind CSS'],
      image: '/images/project2.jpg',
      link: '#',
    },
    {
      title: 'AI Content Generator',
      description: 'An AI-powered content generation platform using advanced NLP models.',
      tech: ['Python', 'TensorFlow', 'FastAPI', 'React'],
      image: '/images/project3.jpg',
      link: '#',
    },
  ];

  return (
    <section class="py-20 bg-gray-50" id="projects">
      <div class="max-w-6xl mx-auto px-8">
        <h2 class="text-4xl font-bold text-center mb-12">Featured Projects</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
              <div class="h-48 bg-gray-300 relative">
                <div class="absolute inset-0 bg-indigo-600 opacity-10"></div>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold mb-2">{project.title}</h3>
                <p class="text-gray-600 mb-4">{project.description}</p>
                <div class="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} class="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  class="inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
        <div class="text-center mt-12">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-block border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg hover:bg-indigo-600 hover:text-white transition duration-300"
          >
            View More Projects
          </a>
        </div>
      </div>
    </section>
  );
}); 