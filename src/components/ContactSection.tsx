import { useState } from 'react';
import { Mail, Send } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const contacts = [
  {
    icon: Mail,
    title: 'General Information',
    email: 'info@syntheseed.com',
  },
  {
    icon: Mail,
    title: 'Support',
    email: 'help@syntheseed.com',
  },
  {
    icon: Mail,
    title: 'Careers',
    email: 'career@syntheseed.com',
  },
  {
    icon: Mail,
    title: 'Investment',
    email: 'invest@syntheseed.com',
  },
];

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <section id="contact" className="py-12 relative">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`max-w-6xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-12">
            <p className="text-sm font-semibold tracking-widest text-cyan-500 mb-1">CONTACT</p>
            <h2 className="text-3xl md:text-3xl font-extrabold mb-4 text-cyan-500">
              <span className="bg-gradient-to-r from-cyan-400 via-cyan-600 to-cyan-400 bg-clip-text text-transparent">Get In Touch</span>
            </h2>
            <p className="text-lg md:text-xl text-secondary max-w-2xl mx-auto">
              Ready to transform your ideas into reality? Let's start a conversation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Contact Information Card */}
            <div className="glass-effect rounded-2xl shadow-lg p-8 flex flex-col justify-center min-h-[370px]">
              <h3 className="text-2xl font-bold mb-7 text-primary">Contact Us</h3>
              <div className="space-y-6">
                {contacts.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 transition-all">
                    <span className="w-12 h-12 rounded-xl flex items-center justify-center bg-cyan-500 shadow">
                      <item.icon className="w-6 h-6 text-white" />
                    </span>
                    <div>
                      <h4 className="text-base font-bold mb-0.5 text-primary">{item.title}</h4>
                      <a
                        href={`mailto:${item.email}`}
                        className="text-cyan-500 hover:text-cyan-700 text-sm transition"
                        tabIndex={0}
                      >
                        {item.email}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Contact Form Card */}
            <div className="glass-effect rounded-2xl shadow-lg p-8 flex flex-col justify-center">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-cyan-600 font-medium mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="input-field w-full"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-cyan-600 font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className="input-field w-full"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-cyan-600 font-medium mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this about?"
                    className="input-field w-full"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-cyan-600 font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your project or inquiry..."
                    rows={5}
                    className="input-field w-full resize-none"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center gap-2 py-3 text-lg font-semibold rounded-xl transition"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
