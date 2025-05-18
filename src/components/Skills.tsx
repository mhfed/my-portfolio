import { component$, useVisibleTask$ } from '@builder.io/qwik';
import { animate, stagger } from 'motion';

export default component$(() => {
  const skills = [
    { 
      category: 'Frontend', 
      items: [
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 90 },
        { name: 'JavaScript', level: 95 },
        { name: 'TypeScript', level: 85 },
        { name: 'React', level: 90 },
        { name: 'Qwik', level: 80 },
        { name: 'Vue.js', level: 85 }
      ]
    },
    { 
      category: 'Backend', 
      items: [
        { name: 'Node.js', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'Java', level: 80 },
        { name: 'SQL', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'REST APIs', level: 90 },
        { name: 'GraphQL', level: 75 }
      ]
    },
    { 
      category: 'DevOps', 
      items: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 85 },
        { name: 'AWS', level: 80 },
        { name: 'CI/CD', level: 85 },
        { name: 'Linux', level: 80 },
        { name: 'Kubernetes', level: 75 }
      ]
    },
    { 
      category: 'Tools', 
      items: [
        { name: 'VS Code', level: 95 },
        { name: 'Figma', level: 85 },
        { name: 'Postman', level: 90 },
        { name: 'Jest', level: 85 },
        { name: 'Webpack', level: 80 },
        { name: 'npm/yarn', level: 90 }
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
          Skills & Technologies
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
        <div class="mt-16 text-center">
          <p class="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            I'm always learning and expanding my skill set. Currently exploring new technologies 
            in AI/ML and Web3 space.
          </p>
        </div>
      </div>
    </section>
  );
}); 