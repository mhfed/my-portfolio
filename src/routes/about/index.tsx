import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="max-w-4xl mx-auto">
      <h1 class="text-4xl font-bold mb-8">About Me</h1>
      
      <div class="mb-12">
        <h2 class="text-2xl font-semibold mb-4">Nguyễn Minh Hiếu</h2>
        <p class="text-gray-600 mb-4">
          I am a passionate Full Stack Developer with expertise in modern web technologies.
          My goal is to create efficient, scalable, and user-friendly applications that solve real-world problems.
        </p>
      </div>

      <div class="mb-12">
        <h2 class="text-2xl font-semibold mb-4">Experience</h2>
        <div class="space-y-6">
          {/* Add your experience items here */}
          <div class="border-l-4 border-blue-600 pl-4">
            <h3 class="text-xl font-semibold">Senior Full Stack Developer</h3>
            <p class="text-gray-600">Company Name • 2020 - Present</p>
            <ul class="list-disc list-inside mt-2 text-gray-600">
              <li>Led development of multiple web applications</li>
              <li>Implemented modern frontend frameworks and backend solutions</li>
              <li>Mentored junior developers and managed team projects</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="mb-12">
        <h2 class="text-2xl font-semibold mb-4">Education</h2>
        <div class="space-y-4">
          {/* Add your education details here */}
          <div>
            <h3 class="text-xl font-semibold">Bachelor's Degree in Computer Science</h3>
            <p class="text-gray-600">University Name • Graduation Year</p>
          </div>
        </div>
      </div>

      <div>
        <h2 class="text-2xl font-semibold mb-4">Interests</h2>
        <p class="text-gray-600">
          Beyond coding, I'm passionate about technology trends, open-source contribution,
          and continuous learning in the ever-evolving tech landscape.
        </p>
      </div>
    </div>
  );
});