import { component$ } from '@builder.io/qwik';

export default component$(() => {
  const workExperience = [
    {
      period: '4/2024 - Now',
      position: 'Fullstack Developer',
      company: 'Coolmate',
      description: 'Currently working as a Fullstack Developer, contributing to the development of modern web applications and e-commerce solutions.',
      color: 'from-green-500 to-emerald-600',
    },
    {
      period: '8/2022 - 4/2024',
      position: 'Frontend Developer',
      company: 'NOVUS-FINTECH',
      description: 'Developed trading platforms and CMS systems for financial applications. Worked on projects including CGSI, Iress Wealth, Admin Portal Equix, EQUIX, MAGPIE trading websites.',
      highlights: [
        'Implemented login flow and user authentication with third-party integration',
        'Developed advanced filtering functionalities and form validation using Formik and Yup',
        'Created theme builder feature for mobile trading application customization',
        'Built trading functionalities with real-time updates using Server-Sent Events (SSE)',
        'Developed Fundamental embedded Website using Next.js for stock information tracking'
      ],
      tech: ['TypeScript', 'ReactJS', 'Redux', 'RestAPI', 'Formik', 'Yup', 'Material UI', 'Golden layout', 'i18n', 'SSE', 'Chart.js', 'Firebase'],
      color: 'from-blue-500 to-indigo-600',
    },
    {
      period: '7/2021 - 8/2022',
      position: 'Frontend Developer',
      company: 'METACITY',
      description: 'Worked on Metacity System and Landing Page development, focusing on game interface customization and responsive design.',
      highlights: [
        'Created interface and effect animations for game systems',
        'Translated Figma designs to HTML and CSS while maintaining UX/UI design',
        'Ensured cross-browser compatibility and responsiveness across various devices',
        'Performed code refactoring, investigation, and bug fixes'
      ],
      tech: ['NextJS', 'ReactJS', 'Redux', 'Sass', 'Ant Design', 'PHP', 'Git', 'Axios'],
      color: 'from-purple-500 to-pink-600',
    },
    {
      period: '2/2021 - 7/2021',
      position: 'Intern Frontend Developer',
      company: 'IT Lab FPOLY',
      description: 'Started my professional journey as an intern, learning fundamental web development skills and contributing to various projects.',
      color: 'from-orange-500 to-red-600',
    },
  ];

  return (
    <section class="py-20 bg-gradient-to-b from-white to-gray-50" id="experience">
      <div class="max-w-6xl mx-auto px-8">
        <h2 class="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Work Experience
        </h2>
        <div class="relative">
          {/* Timeline line */}
          <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 hidden md:block"></div>
          
          <div class="space-y-12">
            {workExperience.map((work) => (
              <div 
                key={work.company} 
                class="relative"
              >
                {/* Timeline dot */}
                <div class="absolute left-6 w-4 h-4 bg-white border-4 border-blue-500 rounded-full hidden md:block"></div>
                
                <div class="md:ml-20">
                  <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 class="text-2xl font-bold text-gray-900 mb-2">{work.position}</h3>
                        <h4 class="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
                          {work.company}
                        </h4>
                      </div>
                      <div class={`px-4 py-2 rounded-full bg-gradient-to-r ${work.color} text-white font-medium text-sm`}>
                        {work.period}
                      </div>
                    </div>
                    
                    <p class="text-gray-700 mb-6 leading-relaxed">{work.description}</p>
                    
                    {work.highlights && (
                      <div class="mb-6">
                        <h5 class="font-semibold text-gray-900 mb-3">Key Achievements:</h5>
                        <ul class="space-y-2">
                          {work.highlights.map((highlight, idx) => (
                            <li key={idx} class="flex items-start gap-3">
                              <span class="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                              <span class="text-gray-700">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {work.tech && (
                      <div>
                        <h5 class="font-semibold text-gray-900 mb-3">Technologies Used:</h5>
                        <div class="flex flex-wrap gap-2">
                          {work.tech.map((tech) => (
                            <span 
                              key={tech} 
                              class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}); 