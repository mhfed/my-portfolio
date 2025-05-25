import { component$ } from '@builder.io/qwik';
import ImgChibi from '~/media/images/chibi.png?jsx';

export default component$(() => {
  return (
    <section class="py-20 bg-gray-50" id="about">
      <div class="max-w-6xl mx-auto px-8">
        <h2 class="text-4xl font-bold text-center mb-12">About Me</h2>
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div class="space-y-6">
            <p class="text-lg text-gray-700 leading-relaxed">
              I'm a passionate developer with a keen eye for creating beautiful and functional web applications. 
              With several years of experience in full-stack development, I specialize in building scalable 
              solutions that solve real-world problems.
            </p>
            <p class="text-lg text-gray-700 leading-relaxed">
              My journey in tech started when I built my first website, and since then, 
              I've been constantly learning and evolving with the ever-changing landscape of web development.
            </p>
            <div class="flex flex-wrap gap-4 mt-6">
              <div class="bg-white p-4 rounded-lg shadow-md">
                <h3 class="font-bold text-xl mb-2">5+</h3>
                <p class="text-gray-600">Years Experience</p>
              </div>
              <div class="bg-white p-4 rounded-lg shadow-md">
                <h3 class="font-bold text-xl mb-2">50+</h3>
                <p class="text-gray-600">Projects Completed</p>
              </div>
              <div class="bg-white p-4 rounded-lg shadow-md">
                <h3 class="font-bold text-xl mb-2">20+</h3>
                <p class="text-gray-600">Happy Clients</p>
              </div>
            </div>
          </div>
          <div class="relative">
            <div class="w-full rounded-lg overflow-hidden shadow-lg">
              <ImgChibi 
                alt="Nguyễn Minh Hiếu - Chibi Avatar" 
                class="w-full h-full object-cover object-bottom hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div class="absolute -bottom-6 -right-6 w-full h-full border-4 border-gray-900 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}); 