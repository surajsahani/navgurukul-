import React, { useEffect, useState } from 'react';
import { Menu, ExternalLink, Clock } from 'lucide-react';

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const endDate = new Date('March 1, 2025 23:59:59 GMT+0530');

    const timer = setInterval(() => {
      const now = new Date();
      const difference = endDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(timer);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center space-x-4 text-center">
      <div className="bg-purple-600 text-white p-4 rounded-lg min-w-[80px]">
        <div className="text-2xl font-bold">{timeLeft.days}</div>
        <div className="text-xs">Days</div>
      </div>
      <div className="bg-purple-600 text-white p-4 rounded-lg min-w-[80px]">
        <div className="text-2xl font-bold">{timeLeft.hours}</div>
        <div className="text-xs">Hours</div>
      </div>
      <div className="bg-purple-600 text-white p-4 rounded-lg min-w-[80px]">
        <div className="text-2xl font-bold">{timeLeft.minutes}</div>
        <div className="text-xs">Minutes</div>
      </div>
      <div className="bg-purple-600 text-white p-4 rounded-lg min-w-[80px]">
        <div className="text-2xl font-bold">{timeLeft.seconds}</div>
        <div className="text-xs">Seconds</div>
      </div>
    </div>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white z-50 px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <span className="text-black">Develop</span>
          <span className="text-purple-600">athon</span>
        </div>
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden"
        >
          <Menu className="h-6 w-6" />
        </button>
        <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:block absolute lg:relative top-full right-0 w-auto lg:w-auto bg-white lg:bg-transparent rounded-lg shadow-lg lg:shadow-none`}>
          <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-8 p-4 lg:p-0">
            <a href="#home" className="hover:text-purple-600 font-medium">Home</a>
            <a href="#about" className="hover:text-purple-600 font-medium">About</a>
            <a href="#events" className="hover:text-purple-600 font-medium">Events</a>
            <a href="#blog" className="hover:text-purple-600 font-medium">Blog</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 min-h-screen flex items-center bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-7xl sm:text-8xl font-bold mb-8 leading-tight">
              <span className="block">Empowering</span>
              <span className="block text-purple-600">Builders</span>
              <span className="block">Enabling</span>
              <span className="block text-orange-400">Innovation</span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl">
              Join us at Developathon 2024, where innovation meets simplicity! This hackathon is designed for developers, creators, and visionaries looking to harness the power of AI-driven Low-Code/No-Code solutions.
            </p>
            <div className="space-y-8">
              <div className="relative inline-block">
                <a
                  href="https://discord.gg/NCykkDgU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 rounded-full bg-orange-400 text-white hover:bg-orange-500 transition-colors text-lg font-medium"
                >
                  Join the Community <ExternalLink className="ml-2 h-5 w-5" />
                </a>
                <div className="absolute -right-24 -bottom-24 w-48 h-48 bg-orange-400 rounded-full opacity-20 blur-3xl"></div>
              </div>
              <div className="pt-8">
                <p className="text-lg font-semibold mb-4 flex items-center">
                  <Clock className="mr-2 h-5 w-5 text-purple-600" /> Time Remaining:
                </p>
                <CountdownTimer />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-12">About</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-xl text-gray-600 mb-6">
                Developathon 2024 is where innovation meets simplicity. We're bringing together developers, creators, and visionaries to harness the power of AI-driven Low-Code/No-Code solutions.
              </p>
              <p className="text-xl text-gray-600 mb-6">
                Whether you're an experienced coder or just starting out, this is your chance to build groundbreaking applications with minimal coding effort.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-12">
                <div className="p-6 bg-gray-50 rounded-lg">
                  <h3 className="font-bold text-2xl mb-2">13</h3>
                  <p className="text-gray-600">Days of Innovation</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg">
                  <h3 className="font-bold text-2xl mb-2">Feb 17</h3>
                  <p className="text-gray-600">Starting Date</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Event Details</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-1">Date</h4>
                  <p className="text-gray-600">17th February – 1st March 2025</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Location</h4>
                  <p className="text-gray-600">Dantewada Campus, NavGurukul</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Who Can Join?</h4>
                  <p className="text-gray-600">Anyone passionate about technology, AI, and innovation!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="min-h-screen flex items-center bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-12">Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a
              href="https://dainty-madeleine-46a421.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-8 rounded-lg bg-white hover:bg-purple-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
            >
              <h3 className="font-semibold mb-4 text-xl group-hover:text-white transition-colors">Registration Portal</h3>
              <p className="text-gray-600 group-hover:text-white/90 transition-colors">Sign up and join the hackathon!</p>
            </a>
            <a
              href="https://navgurukul-ai-resume-builder1.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-8 rounded-lg bg-white hover:bg-purple-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
            >
              <h3 className="font-semibold mb-4 text-xl group-hover:text-white transition-colors">ATS Resume Score</h3>
              <p className="text-gray-600 group-hover:text-white/90 transition-colors">A platform to analyze and improve resumes.</p>
            </a>
            <a
              href="https://peer-interview-project.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-8 rounded-lg bg-white hover:bg-purple-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
            >
              <h3 className="font-semibold mb-4 text-xl group-hover:text-white transition-colors">Peer Interview Platform</h3>
              <p className="text-gray-600 group-hover:text-white/90 transition-colors">A collaborative platform for peer interviews.</p>
            </a>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="min-h-screen flex items-center bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-12">Blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Why Low-Code/No-Code?</h3>
              <p className="text-gray-600 mb-4">Discover how AI-powered Low-Code/No-Code solutions are revolutionizing software development.</p>
              <a href="#" className="text-purple-600 hover:text-purple-700">Read more →</a>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Getting Started with AI</h3>
              <p className="text-gray-600 mb-4">Learn the basics of AI and how to integrate it into your projects using simple tools.</p>
              <a href="#" className="text-purple-600 hover:text-purple-700">Read more →</a>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Community Success Stories</h3>
              <p className="text-gray-600 mb-4">Read about the amazing projects built by our community members.</p>
              <a href="#" className="text-purple-600 hover:text-purple-700">Read more →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Organizer Section */}
      <section id="organizer" className="min-h-screen flex items-center bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-12">Lead Organizer</h2>
          <div className="flex flex-col lg:flex-row items-center lg:space-x-12">
            <img src="https://martialcoder.com/photos/bg.png" alt="Suraj Sahani" className="w-48 h-48 rounded-full mb-6 lg:mb-0" />
            <div>
              <h3 className="text-2xl font-bold mb-4">Suraj Sahani</h3>
              <p className="text-xl text-gray-600 mb-4">Suraj is the lead organizer of Developathon 2024. With a passion for technology and innovation, he is dedicated to creating an inclusive environment for developers to thrive and build groundbreaking applications.</p>
              <p className="text-xl text-gray-600">Reach out to Suraj for any queries or assistance related to the event.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-600">
            For any queries, reach out to us at{' '}
            <a href="mailto:surajsahani@navgurukul.org" className="text-purple-600 hover:text-purple-700">
              surajsahani@navgurukul.org
            </a>
          </p>
          <p className="mt-4 text-gray-600">© 2025 Developathon. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;