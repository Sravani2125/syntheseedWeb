import { Zap, Target, FileText, Lightbulb, TrendingUp, Sparkles } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import FeatureCard from './FeatureCard';

const products = [
  {
    icon: Lightbulb,
    title: 'Instant Idea Expansion',
    description: 'Transform a single thought into a comprehensive concept with AI-powered brainstorming that expands your ideas in seconds.'
  },
  {
    icon: Target,
    title: 'Real-Time Feasibility Analysis',
    description: 'Get instant feedback on your ideas with intelligent analysis that evaluates market potential, technical requirements, and resource needs.'
  },
  {
    icon: FileText,
    title: 'Effortless Pitch & Plan Automation',
    description: 'Generate professional pitch decks and detailed business plans automatically, saving hours of work and ensuring nothing is overlooked.'
  },
  {
    icon: Sparkles,
    title: 'AI-Powered Insights',
    description: 'Leverage artificial intelligence to uncover hidden opportunities and innovative solutions you might have missed.'
  },
  {
    icon: TrendingUp,
    title: 'Innovation Acceleration',
    description: 'Speed up your innovation process from concept to execution with intelligent automation and strategic guidance.'
  },
  {
    icon: Zap,
    title: 'Digital Integration',
    description: 'Seamlessly integrate human creativity with AI capabilities to maximize your potential and achieve breakthrough results.'
  }
];

const ProductFeaturesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="product" className="py-12">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`max-w-6xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-16">
           <p className="text-sm font-semibold tracking-widest text-cyan-500 mb-1">PRODUCT</p>
            <p className="text-3xl text-gradient font-bold max-w-3xl mx-auto mb-4">
              Everything you need to go from spark to strategy
            </p>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              Capture and expand ideas, validate with AI, research patents deeply, align go-to-market plans, and build ideas — all in one place.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <FeatureCard
                key={index}
                {...product}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductFeaturesSection;
