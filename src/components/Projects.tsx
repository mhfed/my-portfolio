import { component$ } from '@builder.io/qwik';
import { ScrollAnimation } from './ScrollAnimation';

export default component$(() => {
  const projects = [
    {
      title: 'Mobile App Iress Trading',
      description: 'React Native trading application with real-time data updates, portfolio management, and watchlist features. Developed responsive UI components and implemented state management using Redux.',
      details: [
        'Developed responsive UI components and navigational flows using React Native navigation',
        'Implemented state management using Redux to efficiently manage application state',
        'Developed features for viewing, adding, editing, and deleting watchlists',
        'Draw portfolio distribution charts based on backend data',
        'Integrated API for real-time data updates and smooth trading experience'
      ],
      tech: ['React Native', 'Redux', 'RN Reanimated', 'TypeScript', 'SSE', 'RESTful APIs', 'Git', 'i18n', 'Firebase'],
      company: 'NOVUS FINTECH',
      period: '11/2023 - Now',
      teamSize: '8 members',
      color: 'from-blue-500 to-indigo-600',
    },
    {
      title: 'CMS Website (CGSI, Iress Wealth, Admin Portal Equix)',
      description: 'Content Management System for financial applications with advanced filtering, form validation, and theme customization features.',
      details: [
        'Implementing the login flow and user authentication with a third party',
        'Performing functions such as: adding, editing, deleting, and updating data using Formik to handle form data validation with Yup',
        'Creating advanced filtering functionalities for the list screens',
        'Developing a theme builder feature on the CMS to customize the color scheme of the trading application on mobile devices'
      ],
      tech: ['TypeScript', 'ReactJS', 'Redux', 'RestAPI', 'Formik', 'Yup', 'Git', 'Material UI', 'Golden layout', 'i18n', 'Axios'],
      company: 'NOVUS FINTECH',
      period: '8/2022 - 4/2024',
      teamSize: '20 members',
      color: 'from-purple-500 to-pink-600',
    },
    {
      title: 'Trading Website (EQUIX, MAGPIE, CGSI)',
      description: 'Comprehensive trading platforms with real-time updates, order management, and portfolio tracking. Built with modern web technologies and SSE for live data.',
      details: [
        'Develop login, registration, and forgot password features with reCAPTCHA',
        'Implement two-factor authentication using a PIN',
        'Implementing trading functionalities such as order placement, trade execution, and portfolio management features',
        'Utilize Next.js to create a Fundamental embedded Website for tracking stock information',
        'Improve UI/UX with canvas grid and pop-ups'
      ],
      tech: ['JavaScript', 'TypeScript', 'ReactJS', 'SSE', 'RESTful API', 'Git', 'Golden layout', 'Chart.js', 'i18n', 'Axios', 'Firebase'],
      company: 'NOVUS FINTECH',
      period: '8/2022 - 11/2023',
      teamSize: '25 members',
      color: 'from-green-500 to-teal-600',
    },
    {
      title: 'Metacity System & Landing Page',
      description: 'Game interface system and landing page with custom animations, responsive design, and cross-browser compatibility. Translated Figma designs to production-ready code.',
      details: [
        'Make interface, effect animation, customize game interface',
        'Translated designs from Figma to HTML and CSS while ensuring that the UX and UI design are maintained',
        'Ensuring cross-browser compatibility and responsiveness across various devices and screen sizes',
        'Refactor code, investigate code and fix-bugs'
      ],
      tech: ['NextJS', 'ReactJS', 'Redux', 'Sass', 'Ant Design', 'PHP', 'Git', 'Axios'],
      company: 'METACITY',
      period: '7/2021 - 8/2022',
      teamSize: '15 members',
      color: 'from-orange-500 to-red-600',
    },
  ];



  return (
    <section class="py-12 md:py-20 bg-linear-to-b from-gray-50 to-white dark:from-slate-900 dark:to-slate-800 transition-colors duration-300" id="projects">
      <div class="max-w-6xl mx-auto px-4 md:px-8">
        <ScrollAnimation animation="fadeInUp" delay={0.1}>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Featured Projects
          </h2>
        </ScrollAnimation>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ScrollAnimation key={project.title} animation="fadeInUp" delay={0.2 + index * 0.1}>
              <div 
                class="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg dark:shadow-slate-900/30 hover:shadow-2xl dark:hover:shadow-slate-900/50 transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-slate-700"
              >
              <div class="p-4 md:p-6 lg:p-8">
                <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-3">
                  <div class="flex-1">
                    <div class={`inline-block px-3 py-1 rounded-full bg-linear-to-r ${project.color} text-white text-xs md:text-sm font-medium mb-2 shadow-lg`}>
                      {project.company}
                    </div>
                    <div class="text-xs md:text-sm text-gray-500 dark:text-gray-400 mb-1">{project.period}</div>
                    <div class="text-xs md:text-sm text-gray-500 dark:text-gray-400">Team: {project.teamSize}</div>
                  </div>
                </div>
                
                <h3 class="text-lg md:text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                  {project.title}
                </h3>
                
                <p class="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm md:text-base">{project.description}</p>
                
                <div class="mb-4 md:mb-6">
                  <h4 class="font-semibold text-gray-900 dark:text-white mb-2 text-sm md:text-base">Key Features:</h4>
                  <ul class="space-y-1">
                    {project.details.slice(0, 3).map((detail, idx) => (
                      <li key={idx} class="flex items-start gap-2 text-xs md:text-sm text-gray-700 dark:text-gray-300">
                        <span class="w-1 h-1 md:w-1.5 md:h-1.5 bg-blue-500 dark:bg-blue-400 rounded-full mt-1.5 md:mt-2 shrink-0"></span>
                        <span class="leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div class="mb-4 md:mb-6">
                  <h4 class="font-semibold text-gray-900 dark:text-white mb-2 text-sm md:text-base">Technologies:</h4>
                  <div class="flex flex-wrap gap-1.5 md:gap-2">
                    {project.tech.slice(0, 6).map((tech) => (
                      <span 
                        key={tech} 
                        class="px-2 py-1 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors duration-300 border border-gray-200 dark:border-slate-600"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 6 && (
                      <span class="px-2 py-1 bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-gray-400 rounded text-xs border border-gray-200 dark:border-slate-600">
                        +{project.tech.length - 6} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
        
        <ScrollAnimation animation="fadeInUp" delay={0.6}>
          <div class="text-center mt-12 md:mt-16">
            <div class="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-lg dark:shadow-slate-900/30 border border-gray-100 dark:border-slate-700 transition-colors duration-300">
            <h3 class="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-900 dark:text-white">Education & Awards</h3>
            <div class="space-y-4 md:space-y-6">
              <div class="border-l-4 border-blue-500 dark:border-blue-400 pl-4 text-left">
                <h4 class="font-semibold text-gray-900 dark:text-white text-sm md:text-base">FPT Polytechnic Ha Noi</h4>
                <p class="text-gray-600 dark:text-gray-400 text-xs md:text-sm">Web Development (GPA 8.5) - Degree Classification: Good</p>
              </div>
              <div class="border-l-4 border-purple-500 dark:border-purple-400 pl-4 text-left">
                <h4 class="font-semibold text-gray-900 dark:text-white text-sm md:text-base">Top 4 - FPT Edu Hackathon 2022</h4>
                <p class="text-gray-600 dark:text-gray-400 text-xs md:text-sm">Blockchain Field: Accompany with 4 teammates pass over 3 rounds: (Algorithm, Idea, Product)</p>
              </div>
              <div class="border-l-4 border-green-500 dark:border-green-400 pl-4 text-left">
                <h4 class="font-semibold text-gray-900 dark:text-white text-sm md:text-base">Top 100 Best Student</h4>
                <p class="text-gray-600 dark:text-gray-400 text-xs md:text-sm">Highest grade (Fall 2020, Summer 2021)</p>
              </div>
            </div>
            </div>
          </div>
        </ScrollAnimation>
        
        <ScrollAnimation animation="fadeInUp" delay={0.7}>
          <div class="text-center mt-6 md:mt-8">
          <a
            href="https://github.com/mhfed"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 border-2 border-gray-300 dark:border-slate-600 text-gray-700 dark:text-gray-300 px-6 md:px-8 py-3 md:py-4 rounded-lg hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:shadow-lg dark:hover:shadow-slate-900/30 text-sm md:text-base"
          >
            View More on GitHub
            <svg class="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}); 