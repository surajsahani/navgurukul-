import React, { useEffect, useState } from 'react';
import { Menu, ExternalLink, Clock, Trophy, Users, UserPlus, CheckCircle } from 'lucide-react';
import ReactConfetti from 'react-confetti';
import { ArrowTopRightOnSquareIcon, UserGroupIcon, DocumentTextIcon, UserIcon } from '@heroicons/react/24/outline';


function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isCompleted, setIsCompleted] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const endDate = new Date('March 1, 2025 23:59:59 GMT+0530');

    const timer = setInterval(() => {
      const now = new Date();
      const difference = endDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setIsCompleted(true);
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

  if (isCompleted) {
    return (
      <>
        <ReactConfetti
          width={windowSize.width}
          height={windowSize.height}
          numberOfPieces={200}
          recycle={false}
          style={{ position: 'fixed', top: 0, left: 0, zIndex: 1000 }}
        />
        <div className="bg-green-600 text-white p-6 rounded-lg text-center animate-bounce">
          <div className="text-3xl font-bold mb-2">🎉 Hackathon Completed! 🎉</div>
          <div className="text-lg">Thank you for participating!</div>
        </div>
      </>
    );
  }

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
              Join us at Developathon 2025, where innovation meets simplicity! This hackathon is designed for developers, creators, and visionaries looking to harness the power of AI-driven Low-Code/No-Code solutions.
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
      {/* Winners Section - NEW */}
      <section className="bg-gradient-to-b from-purple-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-12 flex items-center">
            <Trophy className="mr-4 text-yellow-500 h-12 w-12" />
            Winners
          </h2>

          {/* Team Winners  abhi data add karna baki hai*/}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* First Place */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-yellow-400 transform hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center mb-4">
                <Trophy className="h-8 w-8 text-yellow-400 mr-3" />
                <h3 className="text-2xl font-bold">First Place Team</h3>
              </div>
              <p className="text-xl font-semibold text-purple-600 mb-2">Team name To be announced</p>
              <p className="text-gray-600">Created an innovative AI-powered learning platform that adapts to individual student needs.</p>
            </div>

            {/* Second Place */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-300 transform hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center mb-4">
                <Trophy className="h-8 w-8 text-gray-400 mr-3" />
                <h3 className="text-2xl font-bold">Second Place Team</h3>
              </div>
              <p className="text-xl font-semibold text-purple-600 mb-2">Team name To be announced</p>
              <p className="text-gray-600">Developed a revolutionary peer-to-peer skill-sharing marketplace.</p>
            </div>
          </div>

          {/* Individual Winner - Hackathon Hero */}
          <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-purple-400 mb-16">
            <h3 className="text-2xl font-bold mb-4">Hackathon Hero</h3>
            <p className="text-xl font-semibold text-purple-600 mb-2">[To be announced]</p>
            <p className="text-gray-600">Recognition for exceptional individual contribution and technical excellence throughout the hackathon.</p>
          </div>

          {/* Participation Statistics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Users className="h-8 w-8 mx-auto mb-4 text-purple-600" />
              <div className="text-3xl font-bold text-gray-800 mb-2">31</div>
              <div className="text-gray-600">Total Participants</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <UserPlus className="h-8 w-8 mx-auto mb-4 text-purple-600" />
              <div className="text-3xl font-bold text-gray-800 mb-2">6</div>
              <div className="text-gray-600">Teams Formed</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <CheckCircle className="h-8 w-8 mx-auto mb-4 text-purple-600" />
              <div className="text-3xl font-bold text-gray-800 mb-2">4</div>
              <div className="text-gray-600">Final Submissions</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Trophy className="h-8 w-8 mx-auto mb-4 text-purple-600" />
              <div className="text-3xl font-bold text-gray-800 mb-2">2</div>
              <div className="text-gray-600">Winning Teams</div>
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
                <div>
                  <h4 className="font-semibold mb-1">Result Announcement</h4>
                  <p className="text-gray-600">Final results will be announced on <span className="font-semibold">7th March 2025</span>.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Events Section*/}
      <section id="events" className="min-h-screen flex items-center bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-12">Events</h2>
          <p className="text-gray-600 text-lg max-w-2xl">
            Join our innovative platforms and tools designed to enhance your hackathon experience
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Registration Portal Card */}
            <a
              href="https://dainty-madeleine-46a421.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block rounded-xl bg-white hover:bg-purple-600 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl overflow-hidden"
            >
              <div className="absolute top-4 right-4 text-gray-400 group-hover:text-white/70">
                <ArrowTopRightOnSquareIcon className="h-6 w-6" />
              </div>
              <div className="p-8">
                <div className="mb-6 inline-block p-3 bg-purple-100 rounded-lg group-hover:bg-white/10">
                  <UserGroupIcon className="h-8 w-8 text-purple-600 group-hover:text-white" />
                </div>
                <h3 className="font-bold mb-3 text-2xl group-hover:text-white transition-colors">
                  Registration Portal
                </h3>
                <p className="text-gray-600 group-hover:text-white/90 transition-colors mb-4">
                  Sign up and join the hackathon! Get ready to showcase your skills and collaborate with fellow developers.
                </p>
                <span className="inline-flex items-center text-purple-600 group-hover:text-white font-medium">
                  Register Now
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </a>

            {/* ATS Resume Score Card */}
            <a
              href="https://navgurukul-ai-resume-builder1.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block rounded-xl bg-white hover:bg-purple-600 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl overflow-hidden"
            >
              <div className="absolute top-4 right-4 text-gray-400 group-hover:text-white/70">
                <ArrowTopRightOnSquareIcon className="h-6 w-6" />
              </div>
              <div className="p-8">
                <div className="mb-6 inline-block p-3 bg-purple-100 rounded-lg group-hover:bg-white/10">
                  <DocumentTextIcon className="h-8 w-8 text-purple-600 group-hover:text-white" />
                </div>
                <h3 className="font-bold mb-3 text-2xl group-hover:text-white transition-colors">
                  ATS Resume Score
                </h3>
                <p className="text-gray-600 group-hover:text-white/90 transition-colors mb-4">
                  Optimize your resume for ATS systems. Get instant feedback and improve your chances of landing interviews.
                </p>
                <span className="inline-flex items-center text-purple-600 group-hover:text-white font-medium">
                  Analyze Resume
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </a>

            {/* Peer Interview Platform Card */}
            <a
              href="https://peer-interview-project.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block rounded-xl bg-white hover:bg-purple-600 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl overflow-hidden"
            >
              <div className="absolute top-4 right-4 text-gray-400 group-hover:text-white/70">
                <ArrowTopRightOnSquareIcon className="h-6 w-6" />
              </div>
              <div className="p-8">
                <div className="mb-6 inline-block p-3 bg-purple-100 rounded-lg group-hover:bg-white/10">
                  <UserIcon className="h-8 w-8 text-purple-600 group-hover:text-white" />
                </div>
                <h3 className="font-bold mb-3 text-2xl group-hover:text-white transition-colors">
                  Peer Interview Platform
                </h3>
                <p className="text-gray-600 group-hover:text-white/90 transition-colors mb-4">
                  Practice interviews with peers, give and receive feedback, and improve your interview skills together.
                </p>
                <span className="inline-flex items-center text-purple-600 group-hover:text-white font-medium">
                  Start Practicing
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
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



      {/* Lead Organizer Section
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
      </section> */}
      {/* Lead & Co-Organizers Section */}
      <section id="organizer" className="min-h-screen flex items-center bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-12">Organizers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {/* Lead Organizer */}
            <div>
              <img src="https://martialcoder.com/photos/bg.png" alt="Suraj Sahani" className="w-48 h-48 rounded-full mx-auto mb-4" />
              <h3 className="text-2xl font-bold">Suraj Sahani</h3>
            </div>
            {/* Co-Organizers */}
            <div>
              <img src="https://i.postimg.cc/dDPWh0Cb/IMG-20250303-WA0009.jpg" alt="Swati Kapgate" className="w-48 h-48 rounded-full mx-auto mb-4" />
              <h3 className="text-2xl font-bold">Swati Kapgate</h3>
            </div>
            <div>
              <img src="https://i.postimg.cc/2S8g0NtP/HXdq59-A-Imgur.png" alt="Description of Image" class="w-48 h-48 rounded-full mx-auto mb-4" />
              <h3 className="text-2xl font-bold">Ujala</h3>
            </div>
            <div>
              <img src="https://s3.ap-south-1.amazonaws.com/chanakya-dev/profileImg/02ca630f-2e41-4bf2-b490-b72cef13a8a7-WhatsApp%20Image%202024-11-14%20at%2018.34.01.jpeg" alt="Aadarsh" className="w-48 h-48 rounded-full mx-auto mb-4" />
              <h3 className="text-2xl font-bold">Aadarsh</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsored Section */}
      <div className="bg-white text-center py-12 mt-16 w-full">
        <div className="max-w-4xl mx-auto px-6">
          {/* Logo and Title */}
          <div className="flex items-center justify-center space-x-4">
            <img src="data:image/png;base64,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" alt="NavGurukul Logo" className="h-12" />
            <h2 className="text-5xl font-extrabold tracking-wide text-black">presents</h2>
          </div>

          {/* Content */}
          <p className="text-xl mt-6 text-black opacity-90">
            An exclusive hackathon for the <span className="font-semibold underline">residential students</span>.
          </p>
        </div>
      </div>

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

