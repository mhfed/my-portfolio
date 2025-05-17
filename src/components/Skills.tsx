import { component$ } from '@builder.io/qwik';

export default component$(() => {
  const skills = [
    { category: 'Frontend', items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Qwik', 'Vue.js'] },
    { category: 'Backend', items: ['Node.js', 'Python', 'Java', 'SQL', 'MongoDB', 'REST APIs', 'GraphQL'] },
    { category: 'DevOps', items: ['Git', 'Docker', 'AWS', 'CI/CD', 'Linux', 'Kubernetes'] },
    { category: 'Tools', items: ['VS Code', 'Figma', 'Postman', 'Jest', 'Webpack', 'npm/yarn'] },
  ];

  return (
    <section class="py-20 bg-white" id="skills">
      <div class="max-w-6xl mx-auto px-8">
        <h2 class="text-4xl font-bold text-center mb-12">Skills & Technologies</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} class="bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300">
              <h3 class="text-xl font-bold mb-4 text-indigo-600">{skillGroup.category}</h3>
              <ul class="space-y-2">
                {skillGroup.items.map((skill) => (
                  <li key={skill} class="flex items-center">
                    <span class="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                    <span class="text-gray-700">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div class="mt-12 text-center">
          <p class="text-gray-600 max-w-2xl mx-auto">
            I'm always learning and expanding my skill set. Currently exploring new technologies 
            in AI/ML and Web3 space.
          </p>
        </div>
      </div>
    </section>
  );
}); 