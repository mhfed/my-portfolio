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

    // Animate skill cards with stagger
    const cards = document.querySelectorAll('.skill-card');
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

    // Animate progress bars
    const progressBars = document.querySelectorAll('.progress-bar');
    if (progressBars.length) {
      progressBars.forEach((bar) => {
        const width = bar.getAttribute('data-width');
        if (width) {
          animate(
            bar as Element,
            { width: ['0%', `${width}%`] },
            { 
              duration: 1,
              easing: [0.16, 1, 0.3, 1],
              delay: 0.5
            }
          );
        }
      });
    }
  });

  return (
    <section class="py-20 bg-gradient-to-b from-white to-gray-50" id="skills">
      <div class="max-w-6xl mx-auto px-8">
        <h2 class="skills-title opacity-0 text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Technical Skills
        </h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup) => (
            <div 
              key={skillGroup.category} 
              class="skill-card opacity-0 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <h3 class="text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {skillGroup.category}
              </h3>
              <div class="space-y-4">
                {skillGroup.items.map((skill) => (
                  <div key={skill.name} class="space-y-2">
                    <div class="flex justify-between items-center">
                      <span class="text-gray-700 font-medium">{skill.name}</span>
                      <span class="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div class="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        class="progress-bar h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
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
        <div class="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <h3 class="text-2xl font-bold text-center mb-8 text-gray-900">Additional Expertise</h3>
          <div class="grid md:grid-cols-3 gap-8">
            <div class="text-center">
              <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl">🔄</span>
              </div>
              <h4 class="font-semibold text-gray-900 mb-2">Real-time Features</h4>
              <p class="text-gray-600 text-sm">Experienced with Websockets, SSE, and real-time data updates for trading applications</p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl">📱</span>
              </div>
              <h4 class="font-semibold text-gray-900 mb-2">Responsive Design</h4>
              <p class="text-gray-600 text-sm">Cross-browser compatibility and responsiveness across various devices and screen sizes</p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl">🔧</span>
              </div>
              <h4 class="font-semibold text-gray-900 mb-2">Build Tools</h4>
              <p class="text-gray-600 text-sm">Understanding of Assets & build management tools, e.g: Webpack, Babel</p>
            </div>
          </div>
        </div>
        
        <div class="mt-16 text-center">
          <p class="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Proficient in debugging and optimizing web application performance. 
            Strong analytical skills for business requirements, with up-to-date awareness of web trends. 
            Proficient in Google search and English comprehension.
          </p>
        </div>
      </div>
    </section>
  );
}); 