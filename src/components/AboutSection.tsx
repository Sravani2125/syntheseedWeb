import { Target, Lightbulb, Rocket } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useTheme } from '../contexts/ThemeContext';


import solutionImg from '../../assets/solution.png';
import downloadImg from '../../assets/image.png';
import peopleImg from '../../assets/people.png';
import moat from '../../assets/moat.png';

// Map canvas sections & image for each (ordering: PROBLEM, SOLUTION, AUDIENCE, MOAT)
const canvasSections = [
  [
    {
      title: 'PROBLEM',
      desc: 'Millions of ideas die early due to lack of direction, validation, and resources',
      img: downloadImg, // e.g. use download.jpg (binocular/search/looking for direction)
    },
    {
      title: 'SOLUTION',
      desc: 'Syntheseed transforms raw ideas into validated, market-ready business',
      img: solutionImg, // e.g. use solution.jpg (team brainstorming)
    }
  ],
  [
    {
      title: 'AUDIENCE',
      desc: 'Aspiring founders, creators, startup teams, incubators, and innovation hubs',
      img: peopleImg, // people.jpg (representing audience/teams)
    },
    {
      title: 'MOAT',
      desc: 'End to end AI ecosystem • proprietary data models • continuous learning loop',
      img: moat, 
    }
  ]
];

const ExampleCanvas = ({ isDark }) => (
  <div className="h-full flex flex-col justify-center w-full">
    <div className="flex flex-col gap-10 w-full h-full justify-center">
      {canvasSections.map((row, rowIndex) => (
        <div key={rowIndex} className="flex gap-10 w-full justify-center">
          {row.map((section, colIndex) => (
            <div
              key={colIndex}
              className={`flex flex-col items-center w-full rounded-xl border ${isDark ? 'border-gray-800 bg-[#151820]' : 'border-gray-200 bg-white'} px-7 py-9 shadow-xl`}
              style={{
                minHeight: 220,
                flex: 1,
                maxWidth: '100%',
              }}
            >
              <div
                className={`rounded-xl h-50 w-35 flex items-center justify-center shadow-inner mb-4 border-2 ${isDark ? 'bg-[#181d2b] border-gray-800' : 'bg-gray-50 border-gray-200'}`}
              >
                {section.img ? (
                  <img
                    src={section.img}
                    alt={section.title}
                    className=" w-auto object-contain rounded"
                  />
                ) : (
                  <span className="opacity-60 text-xs">Image Here</span>
                )}
              </div>
              <span className={`uppercase text-base font-bold tracking-wide mb-1 ${isDark ? 'text-cyan-200' : 'text-cyan-700'}`}>
                {section.title}
              </span>
              <span className={`text-base text-center ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                {section.desc}
              </span>
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
);

const getCardClasses = (isDark) =>
  isDark
    ? 'bg-[#23283e] border-gray-700 border shadow-lg'
    : 'bg-white/95 border-gray-200 border shadow-xl';

const AboutSection = () => {
  const { ref: section1Ref, isVisible: section1Visible } = useScrollAnimation();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="about" className="py-12 relative">
      <div className="container mx-auto px-6">
        <div
          ref={section1Ref}
          className={`max-w-6xl mx-auto transition-all duration-1000 ${
            section1Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
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
            {/* LEFT: Mission/Vision/About cards */}
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
            {/* RIGHT: Canvas */}
            <div className="flex-1 flex flex-col items-center">
              <ExampleCanvas isDark={isDark} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
