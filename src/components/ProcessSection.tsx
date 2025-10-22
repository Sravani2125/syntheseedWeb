import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ProcessSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [currentStep, setCurrentStep] = useState(0);

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
      description: 'Let AI surface assumptions, risks, and market signals. Collaborate with expert agents and prioritize the strongest wedge to strengthen your idea.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      number: 'STEP 3',
      title: 'Structure and Finalize',
      description: 'Deep dive into patent research and shape pricing, packaging, and go-to-market paths.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      number: 'STEP 4',
      title: 'Build and Launch',
      description: 'Produce and export investor‑ready briefs, finalize plans, build your idea and ready it for launch.',
      image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  // Only allow next if not at the last step
  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };
  // Only allow prev if not at the first step
  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <section id="process" className="py-12 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="text-center mb-12">
            <p className="text-sm font-semibold tracking-widest text-cyan-500 mb-1">HOW IT WORKS</p>
            <h2 className="text-3xl md:text-3xl font-bold text-primary mb-3">
              <span className="text-gradient">From spark → reality in 4 steps</span>
            </h2>
          </div>

          <div className="relative max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Slide Images Horizontally */}
              <div className="relative h-[350px] lg:h-[400px] order-2 lg:order-1 overflow-hidden">
                <div
                  className="absolute inset-0 w-full h-full flex transition-transform duration-700"
                  style={{
                    transform: `translateX(-${currentStep * 100}%)`,
                    transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
                  }}>
                  {steps.map((step) => (
                    <div key={step.title} className="relative w-full h-full shrink-0 px-1">
                      <div className="h-full rounded-2xl overflow-hidden shadow-2xl">
                        <img
                          src={step.image}
                          alt={step.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Slide Content Horizontally */}
              <div className="order-1 lg:order-2 space-y-6 overflow-hidden">
                <div
                  className="w-full flex transition-transform duration-700"
                  style={{
                    transform: `translateX(-${currentStep * 100}%)`,
                    transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
                  }}>
                  {steps.map((step, idx) => (
                    <div key={step.title} className="w-full shrink-0">
                      <div className="text-cyan-400 font-bold text-xs tracking-wider mb-3">{step.number}</div>
                      <h3 className="text-3xl md:text-3xl font-bold text-primary mb-4 leading-tight">{step.title}</h3>
                      <p className="text-base text-secondary leading-relaxed mb-8">{step.description}</p>
                      <div className="flex items-center space-x-6">
                        <button
                          onClick={prevStep}
                          disabled={currentStep === 0}
                          className={`w-14 h-14 glass-effect hover:bg-cyan-500 text-primary hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm border-2 border-cyan-500/30 hover:border-cyan-500
                            ${currentStep === 0 ? 'opacity-40 cursor-not-allowed hover:bg-inherit hover:text-primary border-none' : ''}`}
                          aria-label="Previous step"
                        >
                          <ChevronLeft className="w-6 h-6" />
                        </button>
                        <div className="flex space-x-3">
                          {steps.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentStep(index)}
                              className={`transition-all duration-300 rounded-full ${
                                index === idx
                                  ? 'w-12 h-3 bg-cyan-500'
                                  : 'w-3 h-3 bg-cyan-500/30 hover:bg-cyan-500/50'
                              }`}
                              aria-label={`Go to step ${index + 1}`}
                            />
                          ))}
                        </div>
                        <button
                          onClick={nextStep}
                          disabled={currentStep === steps.length - 1}
                          className={`w-14 h-14 glass-effect hover:bg-cyan-500 text-primary hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm border-2 border-cyan-500/30 hover:border-cyan-500
                            ${currentStep === steps.length - 1 ? 'opacity-40 cursor-not-allowed hover:bg-inherit hover:text-primary border-none' : ''}`}
                          aria-label="Next step"
                        >
                          <ChevronRight className="w-6 h-6" />
                        </button>
                      </div>
                      <div className="mt-8 text-secondary text-sm">{idx + 1} / {steps.length}</div>
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

export default ProcessSection;
