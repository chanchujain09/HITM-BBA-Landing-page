/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Users, Globe, Lightbulb, GraduationCap, CheckCircle2, ChevronDown, ArrowRight, Lock, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const faqs = [
  {
    question: "Is the BBA program at HITM Ranchi AICTE approved?",
    answer: "Yes. HITM Ranchi is an AICTE-approved institution, committed to delivering quality, industry-oriented education."
  },
  {
    question: "What is the duration of the BBA program?",
    answer: "The BBA program at HITM Ranchi is a 3-year full-time undergraduate program."
  },
  {
    question: "What makes BBA at HITM Ranchi different?",
    answer: "HITM Ranchi is one of the biggest dedicated private Technology & Management Campuses in Jharkhand, offering IIT Faculty & Academic Guidance, industry-oriented learning, and a modern campus environment."
  },
  {
    question: "What will I learn during the BBA program?",
    answer: "The curriculum covers Business Management, Marketing, FinTech, Digital Business, Economics, Soft Skills, and other industry-relevant business subjects."
  },
  {
    question: "What career opportunities are available after BBA?",
    answer: "BBA graduates can build careers in Marketing, Finance, Human Resources, Operations, Business Development, Entrepreneurship, or pursue higher studies such as an MBA."
  },
  {
    question: "Does the BBA program include practical learning?",
    answer: "Yes. Students gain practical exposure through case studies, business presentations, projects, and industry-oriented learning."
  },
  {
    question: "Are admissions open for the 2026–27 academic session?",
    answer: "Yes. Admissions are now open for the Founding Batch of the BBA program at HITM Ranchi."
  }
];

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(1); // Open second one by default as per common patterns or just first one

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans selection:bg-[#2A3464] selection:text-white">
      {/* Hero Section */}
      <div className="relative w-full pb-32 md:pb-40 bg-[#0A0D14] pt-24 lg:pt-32 min-h-[90vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full overflow-hidden bg-[#0A0D14]">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
            alt="HITM Campus"
            className="w-full h-full object-cover object-center opacity-30 mix-blend-luminosity"
          />
          {/* Main Gradient overlay - dark on left, fading out on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0D14] via-[#0A0D14]/90 to-transparent"></div>
          {/* Bottom gradient to blend with next section */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0A0D14] to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 text-white space-y-6"
            >
              {/* Top Label */}
              <div className="flex items-center gap-3 mb-6 pl-1">
                <div className="flex items-center justify-center w-5 h-5 rounded-full border border-[#FFD700]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FFD700]"></div>
                </div>
                <span className="text-xs sm:text-sm font-bold text-[#FFD700] tracking-[0.15em] uppercase">
                  BBA - HITM Ranchi
                </span>
              </div>

              <div className="space-y-2">
                <h1 className="flex flex-col gap-1 text-4xl md:text-5xl lg:text-[4.5rem] font-black text-white leading-[1.1] tracking-tight uppercase">
                  <span>Future Managers &</span>
                  <span className="text-[#FFD700]">Entrepreneurs</span>
                </h1>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-100 mt-4 tracking-tight">
                  Yahin Se Shuruaat Karte Hain.
                </h2>
              </div>

              <p className="text-base md:text-lg text-gray-300 max-w-xl leading-relaxed mt-6">
                Build a strong foundation in business, management, leadership, and entrepreneurship at one of Jharkhand's biggest dedicated private Technology & Management Campuses.
              </p>


              <div className="mt-10 pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="flex items-center gap-2 bg-[#0A0D14]/80 border border-white/10 text-white text-[10px] sm:text-xs font-bold px-4 py-3.5 rounded uppercase tracking-wider backdrop-blur-sm">
                  <span className="w-2 h-2 rounded-full bg-[#FFD700] animate-pulse"></span>
                  Admissions Open - 2026 Intake
                </div>
                <button className="bg-[#FFD700] text-black font-bold px-8 py-3.5 rounded text-sm uppercase tracking-wider flex items-center gap-2 hover:bg-[#F0C800] transition-colors shadow-lg">
                  Apply Now <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>

            {/* Right Content - Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 relative mt-12 lg:mt-0"
            >
              <div className="bg-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] w-full max-w-md mx-auto lg:mr-0 overflow-hidden relative border border-white/10">
                <div className="bg-[#121C8A] p-6 text-white text-left">
                  <h3 className="text-lg md:text-xl font-bold mb-1.5 leading-tight">
                    BBA Career Counseling Session
                  </h3>
                  <p className="text-xs text-white/90 font-medium opacity-90">Fill in your details and our counselor will reach out within 24 hrs.</p>
                </div>
                
                <div className="p-6 md:p-8">
                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div>
                      <label className="block text-[11px] font-bold text-gray-800 mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        placeholder="Enter your full name"
                        required
                        className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-md focus:ring-2 focus:ring-[#121C8A]/20 focus:border-[#121C8A] outline-none transition-all text-sm text-gray-800 placeholder-gray-400"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-gray-800 mb-1.5">Phone Number *</label>
                      <input
                        type="tel"
                        placeholder="+91 00000 00000"
                        required
                        className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-md focus:ring-2 focus:ring-[#121C8A]/20 focus:border-[#121C8A] outline-none transition-all text-sm text-gray-800 placeholder-gray-400"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-gray-800 mb-1.5">Course Interest *</label>
                      <input
                        type="text"
                        defaultValue="BBA"
                        readOnly
                        className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-md focus:outline-none text-sm text-gray-600 cursor-not-allowed"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-gray-800 mb-1.5">City *</label>
                      <input
                        type="text"
                        placeholder="Your city"
                        required
                        className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-md focus:ring-2 focus:ring-[#121C8A]/20 focus:border-[#121C8A] outline-none transition-all text-sm text-gray-800 placeholder-gray-400"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-[#FFD700] hover:bg-[#F0C800] text-black font-bold py-3.5 px-4 rounded-md transition-colors mt-6 text-sm uppercase tracking-wider"
                    >
                      Apply Now
                    </button>
                  </form>
                  <div className="mt-5 flex items-center justify-center gap-1.5 text-[10px] text-gray-500 font-semibold">
                    <Lock className="w-3 h-3 text-gray-400" />
                    <span>Your information is 100% secure and confidential</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Why Choose BBA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Why Choose BBA at HITM Ranchi?
            </h2>
            <span className="inline-block bg-[#ff7300] text-white px-6 py-2.5 rounded-full text-sm font-medium shadow-md">
              Shaping Future Business Leaders
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            
            {/* Card 1 */}
            <div className="bg-white border border-orange-300 rounded-2xl p-6 md:p-8 flex gap-6 items-start shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(255,115,0,0.1)] transition-all duration-300">
              <div className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-[#ff4d4d] to-[#ff9900] leading-none tracking-tighter">
                1
              </div>
              <div className="pt-1">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                  Industry-Focused Curriculum
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Designed to bridge classroom learning with real-world business practices and evolving industry requirements.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-orange-300 rounded-2xl p-6 md:p-8 flex gap-6 items-start shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(255,115,0,0.1)] transition-all duration-300">
              <div className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-[#ff4d4d] to-[#ff9900] leading-none tracking-tighter">
                2
              </div>
              <div className="pt-1">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                  IIT Faculty & Academic Guidance
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Learn under the guidance of IIT faculty and experienced academicians who bring valuable academic and industry perspectives.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-orange-300 rounded-2xl p-6 md:p-8 flex gap-6 items-start shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(255,115,0,0.1)] transition-all duration-300">
              <div className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-[#ff4d4d] to-[#ff9900] leading-none tracking-tighter">
                3
              </div>
              <div className="pt-1">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                  Practical Business Learning
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Build practical skills through case studies, business presentations, projects, and real-world applications.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white border border-orange-300 rounded-2xl p-6 md:p-8 flex gap-6 items-start shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(255,115,0,0.1)] transition-all duration-300">
              <div className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-[#ff4d4d] to-[#ff9900] leading-none tracking-tighter">
                4
              </div>
              <div className="pt-1">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                  Future-Ready Learning Environment
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Study in an AICTE-approved institution with modern infrastructure, smart classrooms, and a dedicated Technology & Management Campus.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Career Opportunities Section */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:24px_24px] opacity-50"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Career Opportunities After BBA
            </h2>
            <div className="inline-block relative">
              {/* Decorative brackets/lines for subtitle */}
              <div className="hidden md:block absolute left-0 top-1/2 w-12 h-[1px] bg-gray-300 -ml-16"></div>
              <div className="hidden md:block absolute right-0 top-1/2 w-12 h-[1px] bg-gray-300 -mr-16"></div>
              <p className="text-lg md:text-xl text-gray-600 font-medium italic px-4">
                Your BBA Can Open Doors To Careers Like:
              </p>
            </div>
            <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto mt-6">
              Build the business knowledge, leadership mindset, and practical skills required to succeed across industries.
            </p>
          </div>

          {/* Venn Diagram layout using negative margins and mix-blend-multiply */}
          <div className="flex flex-col lg:flex-row items-center justify-center -space-y-12 lg:space-y-0 lg:-space-x-12 relative max-w-6xl mx-auto pb-10">
            
            {/* Circle 1 - Yellow */}
            <div className="w-72 h-72 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-[#ffe58f] to-[#ffd633] mix-blend-multiply opacity-90 flex flex-col items-center justify-center p-8 text-center transition-transform hover:scale-[1.02] z-10 border-[6px] border-white/10">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Marketing</h3>
              <div className="space-y-3 w-full px-2">
                <div className="bg-white/95 backdrop-blur-md py-2.5 px-4 rounded-full text-xs md:text-sm font-semibold text-gray-800 shadow-sm transition-all hover:bg-white hover:shadow-md cursor-default border border-white/50">
                  Marketing Executive
                </div>
                <div className="bg-white/95 backdrop-blur-md py-2.5 px-4 rounded-full text-xs md:text-sm font-semibold text-gray-800 shadow-sm transition-all hover:bg-white hover:shadow-md cursor-default border border-white/50">
                  Digital Marketing Executive
                </div>
              </div>
            </div>

            {/* Circle 2 - Green */}
            <div className="w-72 h-72 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-[#80ffb3] to-[#33ff85] mix-blend-multiply opacity-90 flex flex-col items-center justify-center p-8 text-center transition-transform hover:scale-[1.02] z-20 border-[6px] border-white/10">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Operations</h3>
              <div className="space-y-3 w-full px-2">
                <div className="bg-white/95 backdrop-blur-md py-2.5 px-4 rounded-full text-xs md:text-sm font-semibold text-gray-800 shadow-sm transition-all hover:bg-white hover:shadow-md cursor-default border border-white/50">
                  Business Development
                </div>
                <div className="bg-white/95 backdrop-blur-md py-2.5 px-4 rounded-full text-xs md:text-sm font-semibold text-gray-800 shadow-sm transition-all hover:bg-white hover:shadow-md cursor-default border border-white/50">
                  Operations Executive
                </div>
              </div>
            </div>

            {/* Circle 3 - Blue */}
            <div className="w-72 h-72 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-[#80d4ff] to-[#33bbff] mix-blend-multiply opacity-90 flex flex-col items-center justify-center p-8 text-center transition-transform hover:scale-[1.02] z-30 border-[6px] border-white/10">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Finance & HR</h3>
              <div className="space-y-3 w-full px-2">
                <div className="bg-white/95 backdrop-blur-md py-2.5 px-4 rounded-full text-xs md:text-sm font-semibold text-gray-800 shadow-sm transition-all hover:bg-white hover:shadow-md cursor-default border border-white/50">
                  Human Resource Exec
                </div>
                <div className="bg-white/95 backdrop-blur-md py-2.5 px-4 rounded-full text-xs md:text-sm font-semibold text-gray-800 shadow-sm transition-all hover:bg-white hover:shadow-md cursor-default border border-white/50">
                  Financial Analyst
                </div>
              </div>
            </div>

            {/* Circle 4 - Pink */}
            <div className="w-72 h-72 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-[#ff99e6] to-[#ff4dcc] mix-blend-multiply opacity-90 flex flex-col items-center justify-center p-8 text-center transition-transform hover:scale-[1.02] z-40 border-[6px] border-white/10">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Leadership</h3>
              <div className="space-y-3 w-full px-2">
                <div className="bg-white/95 backdrop-blur-md py-2.5 px-4 rounded-full text-xs md:text-sm font-semibold text-gray-800 shadow-sm transition-all hover:bg-white hover:shadow-md cursor-default border border-white/50">
                  Management Trainee
                </div>
                <div className="bg-white/95 backdrop-blur-md py-2.5 px-4 rounded-full text-xs md:text-sm font-semibold text-gray-800 shadow-sm transition-all hover:bg-white hover:shadow-md cursor-default border border-white/50">
                  Entrepreneur
                </div>
              </div>
            </div>

          </div>
          
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28 bg-[#f8f9fa] relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2A3464] mb-4 tracking-tight">
              Frequently <span className="font-serif italic font-medium">Asked Questions</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg">
              Got questions? We've got answers. If you have some other questions, feel free to reach out.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className={`bg-white rounded-xl overflow-hidden transition-all duration-300 cursor-pointer border ${
                    isOpen 
                      ? 'border-[#2A3464] shadow-md ring-1 ring-[#2A3464]' 
                      : 'border-gray-200 shadow-sm hover:border-gray-300'
                  }`}
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                >
                  <div className="px-6 py-5 flex justify-between items-center gap-4">
                    <h3 className={`font-semibold text-base md:text-lg transition-colors ${isOpen ? 'text-[#2A3464]' : 'text-gray-800'}`}>
                      {faq.question}
                    </h3>
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen ? 'bg-[#2A3464] text-white' : 'bg-gray-100 text-gray-500'}`}>
                      <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                    </div>
                  </div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 pt-1">
                          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-[#f8f9fa]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1A1744] rounded-2xl px-6 py-10 md:py-12 text-center shadow-lg border border-[#272457]">
            <div className="max-w-2xl mx-auto flex flex-col items-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl text-white font-medium tracking-tight mb-3 leading-tight font-serif">
                Don't Just Prepare For A Career.<br className="hidden sm:block" />
                <span className="italic"> Prepare To Lead.</span>
              </h2>
              
              <div className="mb-5">
                <svg width="60" height="8" viewBox="0 0 100 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 9.5C6.5 2.5 9.5 2.5 14 9.5C18.5 16.5 21.5 16.5 26 9.5C30.5 2.5 33.5 2.5 38 9.5C42.5 16.5 45.5 16.5 50 9.5C54.5 2.5 57.5 2.5 62 9.5C66.5 16.5 69.5 16.5 74 9.5C78.5 2.5 81.5 2.5 86 9.5C90.5 16.5 93.5 16.5 98 9.5" stroke="#FF5722" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              <p className="text-[#a5a3c4] text-sm md:text-base leading-relaxed mb-8 max-w-lg">
                Join the Founding BBA Batch at HITM Ranchi and take the first step towards becoming a future business leader.
              </p>

              <button className="bg-white text-[#1A1744] font-semibold py-2.5 px-6 rounded-full shadow hover:bg-gray-100 transition-colors text-sm md:text-base">
                Apply Now 🚀
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
