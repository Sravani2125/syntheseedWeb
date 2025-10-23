import { useTheme } from '../contexts/ThemeContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const steps = [
  {
    number: 'STEP 1',
    title: 'Capture and Develop',
    description: 'Capture your thoughts and start developing your idea.',
    image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    number: 'STEP 2',
    title: 'Expand and Validate',
    description:
      'Let AI surface assumptions, risks, and market signals. Collaborate with expert agents and prioritize the strongest wedge to strengthen your idea.',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    number: 'STEP 3',
    title: 'Structure and Finalize',
    description:
      'Deep dive into patent research. Shape pricing, packaging, and go-to-market paths.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    number: 'STEP 4',
    title: 'Build and Launch',
    description:
      'Produce and export investor‑ready briefs. Finalize plans and build your idea. Ready it for launch.',
    image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

const circleSize = 170;

const ProcessSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const cyan = "#06b6d4";

  return (
    <section
      id="process"
      style={{
        background: isDark ? '#181e27' : '#f5fafd',
        color: isDark ? '#fff' : '#181e27',
      }}
      className="py-16 w-full"
    >
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="text-center mb-2">
            <span
              className="inline-block rounded-full px-3 py-1 font-semibold tracking-wide uppercase"
              style={{
                fontSize: "0.95rem",
                background: isDark ? "#232a37" : "#ecfeff",
                color: cyan,
                letterSpacing: "0.04em"
              }}
            >
              How it works
            </span>
          </div>
          <h2
            className="text-4xl font-extrabold tracking-tight mb-3 text-center"
            style={{ color: cyan }}
          >
            From spark &rarr; reality in 4 steps
          </h2>
          <div
            className="text-center max-w-2xl mx-auto text-base font-medium mb-10"
            style={{ color: isDark ? '#e6e6e6' : '#333' }}
          >
            Capture and expand ideas, validate with AI and experts, research patents deeply, align go-to-market plans, and build your idea—all in one place.
          </div>
          {/* Steps */}
          <div className="flex flex-row flex-nowrap justify-center items-start w-full gap-x-2 max-w-[1460px] mx-auto">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex flex-col items-center text-center"
                style={{
                  width: 'min(370px,24vw)',
                  minWidth: 240,
                  maxWidth: 370
                }}
              >
                <div
                  className="rounded-full flex items-center justify-center border-4 shadow-lg bg-white dark:bg-[#232a37] mb-2"
                  style={{
                    width: circleSize,
                    height: circleSize,
                    borderColor: cyan,
                  }}
                >
                  <img
                    src={step.image}
                    alt={step.title}
                    className="rounded-full object-cover"
                    style={{
                      width: circleSize - 28,
                      height: circleSize - 28,
                    }}
                  />
                </div>
                <div
                  className="font-bold text-base uppercase tracking-widest mt-2"
                  style={{ color: cyan }}
                >
                  {step.number}
                </div>
                <div className="font-semibold text-xl mt-1 mb-2" style={{ color: isDark ? '#fff' : '#181e27' }}>
                  {step.title}
                </div>
                <div className="text-base leading-relaxed px-2" style={{ color: isDark ? '#e0e0e0' : '#555', whiteSpace: "pre-line" }}>
                  {step.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
