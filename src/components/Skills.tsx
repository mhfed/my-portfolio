import { component$ } from '@builder.io/qwik';
import { ScrollAnimation } from './ScrollAnimation';

export default component$(() => {
  const skills = [
    { 
      category: 'Frontend Core', 
      items: [
        { name: 'HTML5', level: 'Expert' },
        { name: 'CSS3', level: 'Expert' },
        { name: 'JavaScript', level: 'Expert' },
        { name: 'TypeScript', level: 'Advanced' },
        { name: 'ES6+', level: 'Advanced' }
      ]
    },
    { 
      category: 'Frameworks & Libraries', 
      items: [
        { name: 'React.js', level: 'Expert' },
        { name: 'Next.js', level: 'Advanced' },
        { name: 'React Native', level: 'Advanced' },
        { name: 'Vue.js', level: 'Intermediate' },
        { name: 'Redux', level: 'Advanced' }
      ]
    },
    { 
      category: 'Styling & UI', 
      items: [
        { name: 'Material-UI', level: 'Advanced' },
        { name: 'Ant Design', level: 'Advanced' },
        { name: 'Tailwind CSS', level: 'Advanced' },
        { name: 'Bootstrap', level: 'Advanced' },
        { name: 'Sass', level: 'Advanced' }
      ]
    },
    { 
      category: 'Tools & Technologies', 
      items: [
        { name: 'Git', level: 'Expert' },
        { name: 'CI/CD', level: 'Intermediate' },
        { name: 'RESTful APIs', level: 'Advanced' },
        { name: 'Websockets', level: 'Advanced' },
        { name: 'SSE', level: 'Advanced' },
        { name: 'Testing', level: 'Intermediate' },
        { name: 'Canvas', level: 'Intermediate' }
      ]
    },
  ];

  const getLevelStyle = (level: string) => {
    switch (level) {
      case 'Expert':
        return 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg shadow-green-500/25';
      case 'Advanced':
        return 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/25';
      case 'Intermediate':
        return 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg shadow-yellow-500/25';
      default:
        return 'bg-gradient-to-r from-gray-500 to-slate-500 text-white shadow-lg shadow-gray-500/25';
    }
  };

  return (
    <section class="py-12 md:py-20 bg-linear-to-b from-white to-gray-50 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300" id="skills">
      <div class="max-w-6xl mx-auto px-4 md:px-8">
        <ScrollAnimation animation="fadeInUp" delay={0.1}>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Technical Skills
          </h2>
        </ScrollAnimation>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {skills.map((skillGroup, index) => (
            <ScrollAnimation key={skillGroup.category} animation="fadeInUp" delay={0.2 + index * 0.1}>
              <div 
                class="bg-white dark:bg-slate-800 rounded-2xl p-4 md:p-6 shadow-lg dark:shadow-slate-900/30 hover:shadow-xl dark:hover:shadow-slate-900/50 transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-slate-700"
              >
              <h3 class="text-lg md:text-xl font-bold mb-4 md:mb-6 text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                {skillGroup.category}
              </h3>
              <div class="flex flex-wrap gap-2 md:gap-3">
                {skillGroup.items.map((skill) => (
                  <div 
                    key={skill.name} 
                    class={`px-3 py-2 rounded-xl font-medium text-sm transition-all duration-300 hover:scale-105 hover:shadow-xl ${getLevelStyle(skill.level)}`}
                  >
                    {skill.name}
                  </div>
                ))}
              </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
        
        {/* Skills Legend */}
        <ScrollAnimation animation="fadeInUp" delay={0.6}>
          <div class="mt-8 md:mt-12 flex justify-center">
            <div class="bg-white dark:bg-slate-800 rounded-2xl p-4 md:p-6 shadow-lg dark:shadow-slate-900/30 border border-gray-100 dark:border-slate-700">
              <h4 class="text-sm md:text-base font-semibold text-gray-700 dark:text-gray-300 mb-3 text-center">Skill Levels</h4>
              <div class="flex flex-wrap justify-center gap-3">
                <div class="flex items-center gap-2">
                  <div class="w-4 h-4 rounded bg-gradient-to-r from-green-500 to-emerald-500"></div>
                  <span class="text-xs md:text-sm text-gray-600 dark:text-gray-400">Expert</span>
                </div>
                <div class="flex items-center gap-2">
                  <div class="w-4 h-4 rounded bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                  <span class="text-xs md:text-sm text-gray-600 dark:text-gray-400">Advanced</span>
                </div>
                <div class="flex items-center gap-2">
                  <div class="w-4 h-4 rounded bg-gradient-to-r from-yellow-500 to-orange-500"></div>
                  <span class="text-xs md:text-sm text-gray-600 dark:text-gray-400">Intermediate</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
        
        {/* Additional Skills Summary */}
        <ScrollAnimation animation="fadeInUp" delay={0.7}>
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
        </ScrollAnimation>
        
        <ScrollAnimation animation="fadeInUp" delay={0.8}>
          <div class="mt-12 md:mt-16 text-center">
          <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Proficient in debugging and optimizing web application performance. 
            Strong analytical skills for business requirements, with up-to-date awareness of web trends. 
            Proficient in Google search and English comprehension.
          </p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}); 