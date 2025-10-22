import { Target, Lightbulb, Rocket } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useTheme } from '../contexts/ThemeContext';

const canvasSections = [
  ['PROBLEM', 'SOLUTION'],
  ['AUDIENCE', 'PRICING'],
  ['GTM', 'RISKS'],
  ['METRICS', 'MOAT']
];

const getCardClasses = (isDark) =>
  isDark
    ? 'bg-[#23283e] border-gray-700 border shadow-lg'
    : 'bg-white/95 border-gray-200 border shadow-xl';

const getBoxClasses = (isDark) =>
  isDark
    ? 'bg-[#181d2b] border border-gray-800'
    : 'bg-gray-50 border border-gray-200';

const AboutSection = () => {
  const { ref: section1Ref, isVisible: section1Visible } = useScrollAnimation();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="about" className="py-12 relative">
      <div className="container mx-auto px-6">
        <div
          ref={section1Ref}
          className={`max-w-6xl mx-auto transition-all duration-1000 ${section1Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="text-center mb-8">
            <p className="text-sm font-semibold tracking-widest text-cyan-500 mb-1">ABOUT US</p>
            <h2 className={`text-3xl md:text-3xl font-bold mb-3 ${isDark ? 'text-cyan-400' : 'text-cyan-700'}`}>
              <span className="text-gradient">Your innovation canvas, powered by AI.</span>
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
              Syntheseed helps founders, entrepreneurs, and product teams turn sparks into shippable strategies — from research and validation to build and launch, all in one collaborative workspace.
            </p>
          </div>

          <div className="md:grid md:grid-cols-2 gap-12 flex flex-col min-h-[550px]">
            {/* Cards with space between them */}
            <div className="flex flex-col justify-between h-full space-y-8">
              {[
                {
                  icon: Target,
                  title: 'Our Mission',
                  description: 'To advance the human potential for innovation and create meaningful changes for a better world by enabling ordinary people with solutions that combine Artificial Intelligence, Human Insight, and Digital Integration.'
                },
                {
                  icon: Lightbulb,
                  title: 'Our Vision',
                  description: 'To help dreamers transform their imagination into concrete ideas that can be built, launched, and improved.'
                },
                {
                  icon: Rocket,
                  title: 'Innovation First',
                  description: 'We leverage cutting-edge AI technology within a foundational innovation system that positions ideas for success.'
                }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`flex-1 p-7 md:p-8 rounded-xl flex flex-col transition-all duration-300 ${getCardClasses(isDark)}`}
                  style={{
                    transitionDelay: `${idx * 80}ms`,
                    minHeight: 0,
                  }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-lg flex items-center justify-center mb-5 shadow">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>{item.title}</h3>
                  <p className={`leading-relaxed text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Example Canvas with proper bordered cells */}
            <div className="flex flex-col justify-center h-full">
              <div className={`h-full rounded-xl p-7 md:p-8 transition-colors duration-200 flex flex-col justify-center ${getCardClasses(isDark)}`}>
                <h3 className={`text-lg font-semibold mb-5 ${isDark ? 'text-white' : 'text-gray-900'}`}>Example Canvas</h3>
                <div className="flex flex-col gap-6 w-full">
                  {canvasSections.map((row, idx) => (
                    <div key={idx} className="flex gap-6 w-full">
                      {row.map((section, sdx) => (
                        <div
                          key={sdx}
                          className={`flex flex-col gap-2 w-full rounded-xl border ${
                            isDark ? 'border-gray-800 bg-[#151820]' : 'border-gray-200 bg-white'
                          } p-4`}
                        >
                          <span
                            className={`uppercase text-xs font-semibold ${
                              isDark ? 'text-cyan-200' : 'text-cyan-700'
                            }`}
                          >
                            {section}
                          </span>
                          <div
                            className={`rounded-lg h-14 px-2 py-14 flex items-center shadow-inner w-full ${
                              isDark
                                ? 'bg-[#181d2b] border border-gray-800'
                                : 'bg-gray-50 border border-gray-200'
                            }`}
                          ></div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
