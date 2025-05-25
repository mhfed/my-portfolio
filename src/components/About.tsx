import { component$ } from '@builder.io/qwik';
import ImgChibi from '~/media/images/chibi.png?jsx';

export default component$(() => {
  return (
    <section class="py-12 md:py-20 bg-gray-50" id="about">
      <div class="max-w-6xl mx-auto px-4 md:px-8">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">About Me</h2>
        <div class="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div class="space-y-4 md:space-y-6 order-2 lg:order-1">
            <div class="bg-white p-4 md:p-6 rounded-2xl shadow-lg">
              <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">NGUYEN MINH HIEU</h3>
              <p class="text-base md:text-lg text-blue-600 font-semibold mb-4">Frontend Developer</p>
              
              <div class="space-y-2 md:space-y-3 mb-4 md:mb-6">
                <div class="flex items-center gap-3">
                  <span class="w-4 h-4 md:w-5 md:h-5 text-blue-500 text-sm md:text-base">📱</span>
                  <span class="text-gray-700 text-sm md:text-base">0982084197</span>
                </div>
                <div class="flex items-center gap-3">
                  <span class="w-4 h-4 md:w-5 md:h-5 text-blue-500 text-sm md:text-base">📧</span>
                  <a href="mailto:nmhieu04091999@gmail.com" class="text-gray-700 hover:text-blue-600 transition-colors text-sm md:text-base break-all">
                    nmhieu04091999@gmail.com
                  </a>
                </div>
                <div class="flex items-center gap-3">
                  <span class="w-4 h-4 md:w-5 md:h-5 text-blue-500 text-sm md:text-base">💼</span>
                  <a href="https://linkedin.com/in/mhfed" target="_blank" class="text-gray-700 hover:text-blue-600 transition-colors text-sm md:text-base">
                    linkedin.com/in/mhfed
                  </a>
                </div>
                <div class="flex items-center gap-3">
                  <span class="w-4 h-4 md:w-5 md:h-5 text-blue-500 text-sm md:text-base">🔗</span>
                  <a href="https://github.com/mhfed" target="_blank" class="text-gray-700 hover:text-blue-600 transition-colors text-sm md:text-base">
                    github.com/mhfed
                  </a>
                </div>
              </div>
            </div>
            
            <div class="bg-white p-4 md:p-6 rounded-2xl shadow-lg">
              <h4 class="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">Professional Summary</h4>
              <p class="text-gray-700 leading-relaxed mb-3 md:mb-4 text-sm md:text-base">
                Skilled Front-end Developer with 4 years of experience in developing and maintaining front-end web applications. 
                Proficient in JavaScript, TypeScript, HTML, CSS, ES6, React.js, and Next.js. Experienced in code testing and debugging.
              </p>
              <p class="text-gray-700 leading-relaxed text-sm md:text-base">
                Proficient in HTML, CSS, JavaScript, React.js & Next.js, experience in responsive design. 
                Skilled in Redux, RESTful APIs, Websockets, and SSE for real-time features. 
                Strong analytical skills for business requirements, with up-to-date awareness of web trends.
              </p>
            </div>
            
            <div class="grid grid-cols-3 gap-2 md:gap-4 mt-4 md:mt-6">
              <div class="bg-white p-3 md:p-4 rounded-lg shadow-md border-l-4 border-blue-500 text-center">
                <h3 class="font-bold text-lg md:text-xl mb-1 md:mb-2 text-blue-600">4+</h3>
                <p class="text-gray-600 text-xs md:text-sm">Years Experience</p>
              </div>
              <div class="bg-white p-3 md:p-4 rounded-lg shadow-md border-l-4 border-purple-500 text-center">
                <h3 class="font-bold text-lg md:text-xl mb-1 md:mb-2 text-purple-600">10+</h3>
                <p class="text-gray-600 text-xs md:text-sm">Major Projects</p>
              </div>
              <div class="bg-white p-3 md:p-4 rounded-lg shadow-md border-l-4 border-green-500 text-center">
                <h3 class="font-bold text-lg md:text-xl mb-1 md:mb-2 text-green-600">4</h3>
                <p class="text-gray-600 text-xs md:text-sm">Companies</p>
              </div>
            </div>
          </div>
          
          <div class="relative order-1 lg:order-2">
            <div class="w-full max-w-sm mx-auto lg:max-w-none rounded-lg overflow-hidden shadow-lg">
              <ImgChibi 
                alt="Nguyễn Minh Hiếu - Chibi Avatar" 
                class="w-full h-full object-cover object-bottom hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div class="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-full h-full border-4 border-gray-900 rounded-lg -z-10"></div>
            
            {/* Technical Highlights */}
            <div class="mt-6 md:mt-8 bg-white p-4 md:p-6 rounded-2xl shadow-lg">
              <h4 class="text-base md:text-lg font-bold text-gray-900 mb-3 md:mb-4 text-center">Core Expertise</h4>
              <div class="grid grid-cols-2 gap-3 md:gap-4">
                <div class="text-center p-2 md:p-3 bg-blue-50 rounded-lg">
                  <div class="text-xl md:text-2xl mb-1 md:mb-2">⚛️</div>
                  <div class="text-xs md:text-sm font-medium text-gray-700">React.js</div>
                </div>
                <div class="text-center p-2 md:p-3 bg-purple-50 rounded-lg">
                  <div class="text-xl md:text-2xl mb-1 md:mb-2">📱</div>
                  <div class="text-xs md:text-sm font-medium text-gray-700">React Native</div>
                </div>
                <div class="text-center p-2 md:p-3 bg-green-50 rounded-lg">
                  <div class="text-xl md:text-2xl mb-1 md:mb-2">🟢</div>
                  <div class="text-xs md:text-sm font-medium text-gray-700">Next.js</div>
                </div>
                <div class="text-center p-2 md:p-3 bg-yellow-50 rounded-lg">
                  <div class="text-xl md:text-2xl mb-1 md:mb-2">📊</div>
                  <div class="text-xs md:text-sm font-medium text-gray-700">TypeScript</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}); 