import { component$, useVisibleTask$ } from '@builder.io/qwik';
import { animate, stagger } from 'motion';

export default component$(() => {
  const skills = [
    { 
      category: 'Frontend Core', 
      items: [
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 95 },
        { name: 'JavaScript', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'ES6+', level: 90 }
      ]
    },
    { 
      category: 'Frameworks & Libraries', 
      items: [
        { name: 'React.js', level: 95 },
        { name: 'Next.js', level: 90 },
        { name: 'React Native', level: 85 },
        { name: 'Vue.js', level: 80 },
        { name: 'Redux', level: 90 }
      ]
    },
    { 
      category: 'Styling & UI', 
      items: [
        { name: 'Material-UI', level: 90 },
        { name: 'Ant Design', level: 85 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Bootstrap', level: 85 },
        { name: 'Sass', level: 85 }
      ]
    },
    { 
      category: 'Tools & Technologies', 
      items: [
        { name: 'Git', level: 95 },
        { name: 'CI/CD', level: 80 },
        { name: 'RESTful APIs', level: 90 },
        { name: 'Websockets', level: 85 },
        { name: 'SSE', level: 85 },
        { name: 'Testing', level: 80 },
        { name: 'Canvas', level: 75 }
      ]
    },
  ];

  useVisibleTask$(() => {
    // Animate section title
    const title = document.querySelector('.skills-title');
    if (title) {
      try {
        animate(
          title as any,
          { 
            opacity: [0, 1],
            transform: ['translateY(20px)', 'translateY(0)']
          } as any,
          { 
            duration: 0.8
          } as any
        );
      } catch (e) {
        console.log('Animation not available');
      }
    }

    // Animate skill cards with stagger
    const cards = document.querySelectorAll('.skill-card');
    if (cards.length) {
      try {
        animate(
          cards as any,
          { 
            opacity: [0, 1],
            transform: ['translateY(30px)', 'translateY(0)']
          } as any,
          { 
            duration: 0.6,
            delay: stagger(0.2)
          } as any
        );
      } catch (e) {
        console.log('Animation not available');
      }
    }

    // Animate progress bars
    const progressBars = document.querySelectorAll('.progress-bar');
    if (progressBars.length) {
      progressBars.forEach((bar) => {
        const width = bar.getAttribute('data-width');
        if (width) {
          try {
            animate(
              bar as any,
              { width: ['0%', `${width}%`] } as any,
              { 
                duration: 1,
                delay: 0.5
              } as any
            );
          } catch (e) {
            console.log('Animation not available');
          }
        }
      });
    }
  });

  return (
    <section class="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300" id="skills">
      <div class="max-w-6xl mx-auto px-4 md:px-8">
        <h2 class="skills-title opacity-0 text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
          Technical Skills
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {skills.map((skillGroup) => (
            <div 
              key={skillGroup.category} 
              class="skill-card opacity-0 bg-white dark:bg-slate-800 rounded-2xl p-4 md:p-6 shadow-lg dark:shadow-slate-900/30 hover:shadow-xl dark:hover:shadow-slate-900/50 transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-slate-700"
            >
              <h3 class="text-lg md:text-xl font-bold mb-4 md:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                {skillGroup.category}
              </h3>
              <div class="space-y-3 md:space-y-4">
                {skillGroup.items.map((skill) => (
                  <div key={skill.name} class="space-y-1.5 md:space-y-2">
                    <div class="flex justify-between items-center">
                      <span class="text-gray-700 dark:text-gray-300 font-medium text-sm md:text-base">{skill.name}</span>
                      <span class="text-xs md:text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div class="h-1.5 md:h-2 bg-gray-100 dark:bg-slate-700 rounded-full overflow-hidden">
                      <div 
                        class="progress-bar h-full bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 rounded-full"
                        data-width={skill.level}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Skills Summary */}
        <div class="mt-12 md:mt-16 bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-lg dark:shadow-slate-900/30 border border-gray-100 dark:border-slate-700 transition-colors duration-300">
          <h3 class="text-xl md:text-2xl font-bold text-center mb-6 md:mb-8 text-gray-900 dark:text-white">Additional Expertise</h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div class="text-center">
              <div class="w-12 h-12 md:w-16 md:h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 border border-blue-200 dark:border-blue-800/50 transition-colors duration-300">
                <span class="text-xl md:text-2xl">🔄</span>
              </div>
              <h4 class="font-semibold text-gray-900 dark:text-white mb-2 text-sm md:text-base">Real-time Features</h4>
              <p class="text-gray-600 dark:text-gray-400 text-xs md:text-sm">Experienced with Websockets, SSE, and real-time data updates for trading applications</p>
            </div>
            <div class="text-center">
              <div class="w-12 h-12 md:w-16 md:h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 border border-purple-200 dark:border-purple-800/50 transition-colors duration-300">
                <span class="text-xl md:text-2xl">📱</span>
              </div>
              <h4 class="font-semibold text-gray-900 dark:text-white mb-2 text-sm md:text-base">Responsive Design</h4>
              <p class="text-gray-600 dark:text-gray-400 text-xs md:text-sm">Cross-browser compatibility and responsiveness across various devices and screen sizes</p>
            </div>
            <div class="text-center">
              <div class="w-12 h-12 md:w-16 md:h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 border border-green-200 dark:border-green-800/50 transition-colors duration-300">
                <span class="text-xl md:text-2xl">🔧</span>
              </div>
              <h4 class="font-semibold text-gray-900 dark:text-white mb-2 text-sm md:text-base">Build Tools</h4>
              <p class="text-gray-600 dark:text-gray-400 text-xs md:text-sm">Understanding of Assets & build management tools, e.g: Webpack, Babel</p>
            </div>
          </div>
        </div>
        
        <div class="mt-12 md:mt-16 text-center">
          <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Proficient in debugging and optimizing web application performance. 
            Strong analytical skills for business requirements, with up-to-date awareness of web trends. 
            Proficient in Google search and English comprehension.
          </p>
        </div>
      </div>
    </section>
  );
}); 