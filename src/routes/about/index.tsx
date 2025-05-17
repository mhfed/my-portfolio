import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="max-w-4xl mx-auto">
      <h1 class="text-4xl font-bold mb-8">About Me</h1>
      
      <div class="mb-12">
        <h2 class="text-2xl font-semibold mb-4">Nguyễn Minh Hiếu</h2>
        <p class="text-gray-600 mb-4">
          I am a passionate Frontend Developer with expertise in creating beautiful and intuitive user interfaces.
          My focus is on crafting responsive, accessible, and performant web applications that provide exceptional user experiences.
        </p>
      </div>

      <div class="mb-12">
        <h2 class="text-2xl font-semibold mb-4">Experience</h2>
        <div class="space-y-6">
          <div class="border-l-4 border-blue-600 pl-4">
            <h3 class="text-xl font-semibold">Frontend Developer</h3>
            <p class="text-gray-600">Company Name • 2020 - Present</p>
            <ul class="list-disc list-inside mt-2 text-gray-600">
              <li>Developed responsive and accessible web applications using modern JavaScript frameworks</li>
              <li>Implemented pixel-perfect UI designs and smooth animations</li>
              <li>Optimized frontend performance and user experience</li>
              <li>Collaborated with designers and backend teams to deliver high-quality products</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="mb-12">
        <h2 class="text-2xl font-semibold mb-4">Education</h2>
        <div class="space-y-4">
          <div>
            <h3 class="text-xl font-semibold">Bachelor's Degree in Computer Science</h3>
            <p class="text-gray-600">University Name • Graduation Year</p>
          </div>
        </div>
      </div>

      <div>
        <h2 class="text-2xl font-semibold mb-4">Interests</h2>
        <p class="text-gray-600">
          Beyond coding, I'm passionate about UI/UX design, web accessibility, modern frontend frameworks,
          and staying up-to-date with the latest web development trends and best practices.
        </p>
      </div>
    </div>
  );
});