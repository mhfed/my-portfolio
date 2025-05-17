import { component$ } from '@builder.io/qwik';

export default component$(() => {
  const skillCategories = [
    {
      title: 'Core Technologies',
      skills: [
        { name: 'HTML5/Semantic HTML', level: 95 },
        { name: 'CSS3/SCSS', level: 90 },
        { name: 'JavaScript/TypeScript', level: 90 },
        { name: 'Responsive Design', level: 95 },
        { name: 'Web Accessibility', level: 85 },
      ],
    },
    {
      title: 'Frameworks & Libraries',
      skills: [
        { name: 'React', level: 90 },
        { name: 'Vue.js', level: 85 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Next.js', level: 80 },
        { name: 'Redux/Vuex', level: 85 },
      ],
    },
    {
      title: 'Tools & Workflow',
      skills: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'Webpack/Vite', level: 85 },
        { name: 'Jest/Testing Library', level: 80 },
        { name: 'Figma/Adobe XD', level: 75 },
        { name: 'Performance Optimization', level: 85 },
      ],
    },
  ];

  return (
    <div class="max-w-4xl mx-auto">
      <h1 class="text-4xl font-bold mb-8">Skills & Expertise</h1>
      
      <div class="space-y-12">
        {skillCategories.map((category, index) => (
          <div key={index} class="bg-white rounded-lg p-6 shadow-lg">
            <h2 class="text-2xl font-semibold mb-6">{category.title}</h2>
            <div class="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex}>
                  <div class="flex justify-between mb-1">
                    <span class="font-medium">{skill.name}</span>
                    <span class="text-gray-600">{skill.level}%</span>
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      class="bg-blue-600 h-2.5 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div class="mt-12">
        <h2 class="text-2xl font-semibold mb-6">Additional Skills</h2>
        <div class="flex flex-wrap gap-3">
          {[
            'UI/UX Design Principles',
            'Cross-browser Compatibility',
            'Mobile-First Development',
            'Web Performance',
            'SEO Best Practices',
            'Component Design',
          ].map((skill, index) => (
            <span
              key={index}
              class="bg-gray-100 text-gray-800 px-4 py-2 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}); 