import { component$, useVisibleTask$ } from '@builder.io/qwik';
import { animate, stagger } from 'motion';

export default component$(() => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with real-time inventory management and payment processing.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '/images/project1.jpg',
      link: '#',
      color: 'from-blue-500 to-indigo-600',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management tool with real-time updates and team collaboration features.',
      tech: ['Vue.js', 'Firebase', 'Tailwind CSS'],
      image: '/images/project2.jpg',
      link: '#',
      color: 'from-purple-500 to-pink-600',
    },
    {
      title: 'AI Content Generator',
      description: 'An AI-powered content generation platform using advanced NLP models.',
      tech: ['Python', 'TensorFlow', 'FastAPI', 'React'],
      image: '/images/project3.jpg',
      link: '#',
      color: 'from-green-500 to-teal-600',
    },
  ];

  useVisibleTask$(() => {
    // Animate section title
    const title = document.querySelector('.projects-title');
    if (title) {
      animate(
        title as Element,
        { 
          opacity: [0, 1],
          transform: ['translateY(20px)', 'translateY(0)']
        },
        { 
          duration: 0.8,
          easing: [0.16, 1, 0.3, 1]
        }
      );
    }

    // Animate project cards with stagger
    const cards = document.querySelectorAll('.project-card');
    if (cards.length) {
      animate(
        cards,
        { 
          opacity: [0, 1],
          transform: ['translateY(30px)', 'translateY(0)']
        },
        { 
          duration: 0.6,
          delay: stagger(0.2),
          easing: [0.16, 1, 0.3, 1]
        }
      );
    }
  });

  return (
    <section class="py-20 bg-gradient-to-b from-gray-50 to-white" id="projects">
      <div class="max-w-6xl mx-auto px-8">
        <h2 class="projects-title opacity-0 text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Featured Projects
        </h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.title} 
              class="project-card opacity-0 group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div class="h-48 bg-gray-300 relative overflow-hidden">
                <div class={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p class="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                <div class="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech} 
                      class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  class="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:shadow-lg"
                >
                  View Project
                  <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        <div class="text-center mt-16">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300 hover:shadow-lg"
          >
            View More Projects
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}); 