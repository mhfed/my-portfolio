import { component$ } from '@builder.io/qwik';
import ImgChibi from '~/media/images/chibi.png?jsx';

export default component$(() => {
  return (
    <section class="py-20 bg-gray-50" id="about">
      <div class="max-w-6xl mx-auto px-8">
        <h2 class="text-4xl font-bold text-center mb-12">About Me</h2>
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div class="space-y-6">
            <div class="bg-white p-6 rounded-2xl shadow-lg">
              <h3 class="text-2xl font-bold text-gray-900 mb-4">NGUYEN MINH HIEU</h3>
              <p class="text-lg text-blue-600 font-semibold mb-4">Frontend Developer</p>
              
              <div class="space-y-3 mb-6">
                <div class="flex items-center gap-3">
                  <span class="w-5 h-5 text-blue-500">📱</span>
                  <span class="text-gray-700">0982084197</span>
                </div>
                <div class="flex items-center gap-3">
                  <span class="w-5 h-5 text-blue-500">📧</span>
                  <a href="mailto:nmhieu04091999@gmail.com" class="text-gray-700 hover:text-blue-600 transition-colors">
                    nmhieu04091999@gmail.com
                  </a>
                </div>
                <div class="flex items-center gap-3">
                  <span class="w-5 h-5 text-blue-500">💼</span>
                  <a href="https://linkedin.com/in/mhfed" target="_blank" class="text-gray-700 hover:text-blue-600 transition-colors">
                    linkedin.com/in/mhfed
                  </a>
                </div>
                <div class="flex items-center gap-3">
                  <span class="w-5 h-5 text-blue-500">🔗</span>
                  <a href="https://github.com/mhfed" target="_blank" class="text-gray-700 hover:text-blue-600 transition-colors">
                    github.com/mhfed
                  </a>
                </div>
              </div>
            </div>
            
            <div class="bg-white p-6 rounded-2xl shadow-lg">
              <h4 class="text-xl font-bold text-gray-900 mb-4">Professional Summary</h4>
              <p class="text-gray-700 leading-relaxed mb-4">
                Skilled Front-end Developer with 4 years of experience in developing and maintaining front-end web applications. 
                Proficient in JavaScript, TypeScript, HTML, CSS, ES6, React.js, and Next.js. Experienced in code testing and debugging.
              </p>
              <p class="text-gray-700 leading-relaxed">
                Proficient in HTML, CSS, JavaScript, React.js & Next.js, experience in responsive design. 
                Skilled in Redux, RESTful APIs, Websockets, and SSE for real-time features. 
                Strong analytical skills for business requirements, with up-to-date awareness of web trends.
              </p>
            </div>
            
            <div class="flex flex-wrap gap-4 mt-6">
              <div class="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500">
                <h3 class="font-bold text-xl mb-2 text-blue-600">4+</h3>
                <p class="text-gray-600">Years Experience</p>
              </div>
              <div class="bg-white p-4 rounded-lg shadow-md border-l-4 border-purple-500">
                <h3 class="font-bold text-xl mb-2 text-purple-600">10+</h3>
                <p class="text-gray-600">Major Projects</p>
              </div>
              <div class="bg-white p-4 rounded-lg shadow-md border-l-4 border-green-500">
                <h3 class="font-bold text-xl mb-2 text-green-600">4</h3>
                <p class="text-gray-600">Companies</p>
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
            
            {/* Technical Highlights */}
            <div class="mt-8 bg-white p-6 rounded-2xl shadow-lg">
              <h4 class="text-lg font-bold text-gray-900 mb-4">Core Expertise</h4>
              <div class="grid grid-cols-2 gap-4">
                <div class="text-center p-3 bg-blue-50 rounded-lg">
                  <div class="text-2xl mb-2">⚛️</div>
                  <div class="text-sm font-medium text-gray-700">React.js</div>
                </div>
                <div class="text-center p-3 bg-purple-50 rounded-lg">
                  <div class="text-2xl mb-2">📱</div>
                  <div class="text-sm font-medium text-gray-700">React Native</div>
                </div>
                <div class="text-center p-3 bg-green-50 rounded-lg">
                  <div class="text-2xl mb-2">🟢</div>
                  <div class="text-sm font-medium text-gray-700">Next.js</div>
                </div>
                <div class="text-center p-3 bg-yellow-50 rounded-lg">
                  <div class="text-2xl mb-2">📊</div>
                  <div class="text-sm font-medium text-gray-700">TypeScript</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}); 