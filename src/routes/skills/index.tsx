import { component$ } from '@builder.io/qwik';

export default component$(() => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'HTML5', level: 90 },
        { name: 'CSS3/SCSS', level: 85 },
        { name: 'JavaScript/TypeScript', level: 90 },
        { name: 'React', level: 85 },
        { name: 'Vue.js', level: 80 },
      ],
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'Java', level: 75 },
        { name: 'SQL', level: 85 },
        { name: 'MongoDB', level: 80 },
      ],
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 80 },
        { name: 'AWS', level: 75 },
        { name: 'CI/CD', level: 80 },
        { name: 'RESTful APIs', level: 85 },
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
            'Agile Methodology',
            'Team Leadership',
            'Problem Solving',
            'Technical Writing',
            'Code Review',
            'Mentoring',
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