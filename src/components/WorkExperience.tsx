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
    <section class="py-12 md:py-20 bg-linear-to-b from-white to-gray-50 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300" id="experience">
      <div class="max-w-6xl mx-auto px-4 md:px-8">
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
          Work Experience
        </h2>
        <div class="relative">
          {/* Timeline line - hidden on mobile */}
          <div class="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-linear-to-b from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 hidden md:block"></div>
          
          <div class="space-y-8 md:space-y-12">
            {workExperience.map((work) => (
              <div 
                key={work.company} 
                class="relative"
              >
                {/* Timeline dot - hidden on mobile */}
                <div class="absolute left-2.5 md:left-6 w-3 h-3 md:w-4 md:h-4 bg-white dark:bg-slate-800 border-3 md:border-4 border-blue-500 dark:border-blue-400 rounded-full hidden md:block transition-colors duration-300"></div>
                
                <div class="md:ml-20">
                  <div class="bg-white dark:bg-slate-800 rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg dark:shadow-slate-900/30 hover:shadow-xl dark:hover:shadow-slate-900/50 transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-slate-700">
                    <div class="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-3 md:gap-4">
                      <div class="flex-1">
                        <h3 class="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">{work.position}</h3>
                        <h4 class="text-lg md:text-xl font-semibold text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-2">
                          {work.company}
                        </h4>
                      </div>
                      <div class={`px-3 md:px-4 py-2 rounded-full bg-linear-to-r ${work.color} text-white font-medium text-sm md:text-sm whitespace-nowrap shadow-lg`}>
                        {work.period}
                      </div>
                    </div>
                    
                    <p class="text-gray-700 dark:text-gray-300 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">{work.description}</p>
                    
                    {work.highlights && (
                      <div class="mb-4 md:mb-6">
                        <h5 class="font-semibold text-gray-900 dark:text-white mb-2 md:mb-3 text-sm md:text-base">Key Achievements:</h5>
                        <ul class="space-y-1.5 md:space-y-2">
                          {work.highlights.map((highlight, idx) => (
                            <li key={idx} class="flex items-start gap-2 md:gap-3">
                              <span class="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-500 dark:bg-blue-400 rounded-full mt-1.5 md:mt-2 shrink-0"></span>
                              <span class="text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {work.tech && (
                      <div>
                        <h5 class="font-semibold text-gray-900 dark:text-white mb-2 md:mb-3 text-sm md:text-base">Technologies Used:</h5>
                        <div class="flex flex-wrap gap-1.5 md:gap-2">
                          {work.tech.map((tech) => (
                            <span 
                              key={tech} 
                              class="px-2 md:px-3 py-1 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-full text-xs md:text-sm font-medium hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors duration-300 border border-gray-200 dark:border-slate-600"
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