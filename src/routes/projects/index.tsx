import { component$ } from '@builder.io/qwik';

export default component$(() => {
  const projects = [
    {
      title: 'Project 1',
      description: 'Description of project 1 and its key features',
      technologies: ['React', 'Node.js', 'MongoDB'],
      image: '/images/project1.jpg',
      github: '#',
      demo: '#'
    },
    // Add more projects here
  ];

  return (
    <div class="max-w-6xl mx-auto">
      <h1 class="text-4xl font-bold mb-8">My Projects</h1>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} class="bg-white rounded-lg shadow-lg overflow-hidden">
            <div class="h-48 bg-gray-200">
              {/* Add project image here */}
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">{project.title}</h3>
              <p class="text-gray-600 mb-4">{project.description}</p>
              <div class="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    class="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div class="flex gap-4">
                <a
                  href={project.github}
                  class="text-blue-600 hover:text-blue-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href={project.demo}
                  class="text-blue-600 hover:text-blue-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}); 