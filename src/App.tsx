// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'motion/react';
// import { 
//   ArrowRight, 
//   ArrowLeft,
//   Calendar, 
//   MapPin, 
//   Users, 
//   Zap, 
//   Globe, 
//   Shield, 
//   Briefcase, 
//   Rocket, 
//   Menu, 
//   X,
//   ChevronRight,
//   Instagram,
//   Twitter,
//   Linkedin,
//   Facebook,
//   Monitor,
//   Building2,
//   Target,
//   TrendingUp,
//   Handshake,
//   Star,
//   CheckCircle2
// } from 'lucide-react';
// import { clsx, type ClassValue } from 'clsx';
// import { twMerge } from 'tailwind-merge';
// import logo from "/CMXConnectIbadanLogo.webp"
// import logo2 from "/CMXConnectIbadanLogo2.webp"
// import shirt from "/CMXSHIRT2.webp"
// import hero from "/DSC00118.JPG"
// import past1 from "/DSC00133.JPG"
// import past2 from "/R5__2057.JPG"
// import past3 from "/JKV_0236.jpg"
// import past4 from "/JKV_0237.jpg"

// function cn(...inputs: ClassValue[]) {
//   return twMerge(clsx(inputs));
// }

// type Page = 'home' | 'about' | 'speakers' | 'highlights';

// // ─── Navbar ──────────────────────────────────────────────────────────────────
// const Navbar = ({ currentPage, setPage }: { currentPage: Page; setPage: (p: Page) => void }) => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 20);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navLinks = [
//     { name: 'About', href: '#about' },
//     { name: 'What to Expect', href: '#expect' },
//     { name: 'Speakers', href: '#speakers' },
//     { name: 'Highlights', href: '#highlights' },
//   ];

//   const handleNavClick = (href: string) => {
//     if (currentPage !== 'home') {
//       setPage('home');
//       setTimeout(() => {
//         document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
//       }, 150);
//     }
//     setIsMobileMenuOpen(false);
//   };

//   return (
//     <nav className={cn(
//       "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
//       isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
//     )}>
//       <div className="max-w-7xl mx-auto flex items-center justify-between">
//         <button onClick={() => setPage('home')} className="flex items-center gap-2">
//           <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-xl">
//             <img src={logo} alt="CMX Summit" className="w-full h-auto object-cover" referrerPolicy="no-referrer" />
//           </div>
//           <span className="font-display font-extrabold text-xl tracking-tighter">
//             CMX <span className="text-cmx-blue">CONNECT</span>
//           </span>
//         </button>

//         <div className="hidden md:flex items-center gap-8">
//           {navLinks.map((link) => (
//             <a
//               key={link.name}
//               href={link.href}
//               onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
//               className="text-sm font-semibold hover:text-cmx-blue transition-colors"
//             >
//               {link.name}
//             </a>
//           ))}
//           <button className="bg-cmx-blue text-white px-6 py-2.5 rounded-full text-sm font-bold hover:shadow-lg transition-all active:scale-95">
//             Register Now
//           </button>
//         </div>

//         <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
//           {isMobileMenuOpen ? <X /> : <Menu />}
//         </button>
//       </div>

//       <AnimatePresence>
//         {isMobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             className="absolute top-full left-0 right-0 bg-white border-t p-6 flex flex-col gap-4 md:hidden shadow-xl"
//           >
//             {navLinks.map((link) => (
//               <a
//                 key={link.name}
//                 href={link.href}
//                 className="text-lg font-semibold"
//                 onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
//               >
//                 {link.name}
//               </a>
//             ))}
//             <button className="bg-cmx-blue text-white px-6 py-4 rounded-xl font-bold">
//               Register Now
//             </button>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// };

// const BackButton = ({ onClick }: { onClick: () => void }) => (
//   <button
//     onClick={onClick}
//     className="inline-flex items-center gap-2 text-cmx-blue font-semibold hover:gap-3 transition-all mt-28 mb-4 ml-6 md:ml-12"
//   >
//     <ArrowLeft size={18} /> Back to Home
//   </button>
// );

// // ─── Hero ─────────────────────────────────────────────────────────────────────
// const Hero = () => (
//   <section className="relative pt-32 pb-20 overflow-hidden">
//     <div className="container-custom relative z-10">
//       <div className="grid lg:grid-cols-2 gap-12 items-center">
//         <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
//           <div className="inline-flex items-center gap-2 px-4 py-2 bg-cmx-blue/10 text-cmx-blue rounded-full text-xs font-bold uppercase tracking-widest mb-6">
//             <Zap size={14} /> The Premier Community Event in Africa
//           </div>
//           <h1 className="text-5xl md:text-7xl font-black leading-[0.9] mb-6">
//             BEYOND THE <br /><span className="text-cmx-blue">HORIZON</span>
//           </h1>
//           <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
//             Redefining the strategic importance of community for businesses, entrepreneurs, and tech talent in the African ecosystem.
//           </p>
//           <div className="flex flex-wrap gap-4 mb-12">
//             <div className="flex items-center gap-3 bg-cmx-gray px-5 py-3 rounded-2xl">
//               <Calendar className="text-cmx-blue" size={20} />
//               <div>
//                 <p className="text-[10px] uppercase font-bold text-gray-400 leading-none mb-1">Date</p>
//                 <p className="text-sm font-bold">October 26, 2024</p>
//               </div>
//             </div>
//             <div className="flex items-center gap-3 bg-cmx-gray px-5 py-3 rounded-2xl">
//               <MapPin className="text-cmx-blue" size={20} />
//               <div>
//                 <p className="text-[10px] uppercase font-bold text-gray-400 leading-none mb-1">Location</p>
//                 <p className="text-sm font-bold">Ibadan, Nigeria</p>
//               </div>
//             </div>
//           </div>
//           <div className="flex flex-col sm:flex-row gap-4">
//             <button className="btn-primary flex items-center justify-center gap-2">
//               Get Your Ticket <ArrowRight size={18} />
//             </button>
//             <button className="btn-outline">View Schedule</button>
//           </div>
//         </motion.div>
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1, delay: 0.2 }}
//           className="relative"
//         >
//           <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-700">
//             <img src={hero} alt="CMX Summit" className="w-full h-auto object-cover" referrerPolicy="no-referrer" />
//           </div>
//           <div className="absolute -top-10 -right-10 w-40 h-40 bg-cmx-orange/20 rounded-full blur-3xl" />
//           <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-cmx-blue/20 rounded-full blur-3xl" />
//           <div className="absolute top-1/2 -translate-y-1/2 -right-4 w-24 h-24 bg-white rounded-2xl shadow-xl flex items-center justify-center z-20 animate-bounce">
//             <Users size={40} className="text-cmx-blue" />
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   </section>
// );

// const ThemeSection = () => (
//   <section className="py-12 bg-cmx-blue text-white overflow-hidden">
//     <div className="container-custom">
//       <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
//         <div className="flex-shrink-0">
//           <p className="text-xs font-bold uppercase tracking-[0.3em] opacity-60 mb-2">2024 Theme</p>
//           <h2 className="text-3xl md:text-5xl font-black">BEYOND THE <br /> HORIZON</h2>
//         </div>
//         <div className="w-px h-20 bg-white/20 hidden md:block" />
//         <p className="text-xl md:text-2xl font-light leading-relaxed max-w-2xl">
//           Exploring the <span className="font-bold">Community Landscape</span> and redefining how we build, scale, and sustain ecosystems in Africa.
//         </p>
//       </div>
//     </div>
//   </section>
// );

// // ─── About (home preview) ─────────────────────────────────────────────────────
// const About = ({ onViewMore }: { onViewMore: () => void }) => (
//   <section id="about" className="py-24 bg-cmx-gray">
//     <div className="container-custom">
//       <div className="max-w-3xl mx-auto text-center mb-16">
//         <h2 className="text-4xl md:text-5xl mb-6">About the Summit</h2>
//         <p className="text-xl text-gray-600 leading-relaxed">
//           The CMX Nigeria Summit is a landmark event designed to redefine the strategic importance of community for businesses, entrepreneurs, and tech talent in the African tech ecosystem.
//         </p>
//       </div>
//       <div className="grid md:grid-cols-3 gap-8 mb-12">
//         {[
//           { icon: <Users className="text-cmx-blue" />, title: "Connect", desc: "Network with over 300+ community professionals and industry leaders from across Africa." },
//           { icon: <Zap className="text-cmx-blue" />, title: "Learn", desc: "Gain insights from global experts on building sustainable ecosystems through 5 virtual masterclasses." },
//           { icon: <Rocket className="text-cmx-blue" />, title: "Grow", desc: "Elevate your career and business through strategic community integration and cross-sector collaboration." }
//         ].map((item, i) => (
//           <motion.div key={i} whileHover={{ y: -10 }} className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
//             <div className="w-14 h-14 bg-cmx-blue/5 rounded-2xl flex items-center justify-center mb-6">{item.icon}</div>
//             <h3 className="text-2xl mb-4">{item.title}</h3>
//             <p className="text-gray-500 leading-relaxed">{item.desc}</p>
//           </motion.div>
//         ))}
//       </div>
//       <div className="text-center">
//         <button onClick={onViewMore} className="inline-flex items-center gap-2 bg-cmx-blue text-white px-8 py-4 rounded-full font-bold hover:shadow-lg hover:scale-105 transition-all">
//           View More <ChevronRight size={18} />
//         </button>
//       </div>
//     </div>
//   </section>
// );

// // ─── About Full Page ──────────────────────────────────────────────────────────
// const AboutPage = ({ onBack }: { onBack: () => void }) => {
//   const objectives = [
//     { icon: <Target size={22} />, title: "Extract Valuable Perspectives", desc: "Get invaluable insights from the most brilliant minds in community tech and innovation." },
//     { icon: <Users size={22} />, title: "Meet the Biggest Players", desc: "Connect with Africa's top innovators and community leaders in one place." },
//     { icon: <TrendingUp size={22} />, title: "Brand Visibility", desc: "Get your brand in front of the people that matter in tech and business communities." },
//     { icon: <Handshake size={22} />, title: "Collaboration Opportunities", desc: "Find opportunities to collaborate and create new solutions that impact Africa's ecosystem." },
//     { icon: <Globe size={22} />, title: "Ecosystem Sustainability", desc: "Learn how to build communities that thrive long-term and drive sustainable growth." },
//     { icon: <Star size={22} />, title: "Cross-Functional Integration", desc: "Discover how community fits into product, marketing, engineering and leadership teams." },
//     { icon: <Briefcase size={22} />, title: "Professional Elevation", desc: "Workshops and sessions designed to sharpen your leadership and management skills." },
//     { icon: <Zap size={22} />, title: "Impact & Growth", desc: "Measure and amplify community impact across businesses, startups and nonprofits." },
//   ];
//   const partners = ["CMX", "Community Collective", "Community Leads in Africa", "Community Manager Guide"];

//   return (
//     <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
//       <BackButton onClick={onBack} />
//       <div className="bg-cmx-blue text-white py-20 px-6 md:px-12">
//         <div className="max-w-7xl mx-auto">
//           <p className="text-xs font-bold uppercase tracking-widest opacity-70 mb-3">CMX Nigeria Summit</p>
//           <h1 className="text-4xl md:text-6xl font-black mb-6">About the Summit</h1>
//           <p className="text-xl text-white/80 max-w-2xl leading-relaxed">
//             An initiative designed to redefine the strategic importance of community for businesses, entrepreneurs, and tech talent within the African tech ecosystem.
//           </p>
//         </div>
//       </div>

//       <section className="py-20 bg-white">
//         <div className="container-custom">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <div>
//               <h2 className="text-3xl md:text-5xl mb-6">Our Mission</h2>
//               <p className="text-lg text-gray-600 leading-relaxed mb-6">
//                 The CMX Nigeria Summit fosters cross-sector collaboration and unlocks high-value opportunities for Community Managers, HR Professionals, Project Managers, Product Managers, and Founders within the African tech ecosystem.
//               </p>
//               <p className="text-lg text-gray-600 leading-relaxed mb-8">
//                 Through a curated blend of deep-dive sessions and prominent branding opportunities, this event serves as a premier showcase for the talent and innovation driving the African community ecosystem.
//               </p>
//               <div className="grid grid-cols-2 gap-4">
//                 {[
//                   { label: "300+", sub: "Expected Participants" },
//                   { label: "10+", sub: "Expert Speakers" },
//                   { label: "6+", sub: "Partner Organisations" },
//                   { label: "6 Days", sub: "Summit Experience" }
//                 ].map((stat, i) => (
//                   <div key={i} className="bg-cmx-gray rounded-2xl p-6">
//                     <p className="text-3xl font-black text-cmx-blue mb-1">{stat.label}</p>
//                     <p className="text-sm text-gray-500 font-semibold">{stat.sub}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <div className="rounded-[3rem] overflow-hidden shadow-2xl">
//               <img src="https://picsum.photos/seed/about-full/800/700" className="w-full h-auto" referrerPolicy="no-referrer" />
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="py-20 bg-cmx-gray">
//         <div className="container-custom">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-5xl mb-4">Core Objectives</h2>
//             <p className="text-gray-500 max-w-xl mx-auto">Everything we do at CMX Nigeria is purpose-driven and ecosystem-focused.</p>
//           </div>
//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {objectives.map((obj, i) => (
//               <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }} className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
//                 <div className="w-12 h-12 bg-cmx-blue/10 text-cmx-blue rounded-2xl flex items-center justify-center mb-5">{obj.icon}</div>
//                 <h3 className="text-lg font-bold mb-3">{obj.title}</h3>
//                 <p className="text-sm text-gray-500 leading-relaxed">{obj.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="py-20 bg-white">
//         <div className="container-custom">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <div className="rounded-[3rem] overflow-hidden shadow-xl">
//               <img src="https://picsum.photos/seed/track/800/550" className="w-full h-auto" referrerPolicy="no-referrer" />
//             </div>
//             <div>
//               <h2 className="text-3xl md:text-4xl mb-6">A Proven Track Record</h2>
//               <p className="text-lg text-gray-600 leading-relaxed mb-6">
//                 Over the past two years, CMX Connect has established a reputation for delivering high-impact tech and community-focused events, consistently drawing 300–500 participants per session.
//               </p>
//               <p className="text-lg text-gray-600 leading-relaxed mb-8">
//                 These numbers reflect a deeply engaged ecosystem and a sustained demand for high-level community connection.
//               </p>
//               <div className="space-y-3">
//                 {["Panel Sessions with industry experts", "Live networking and deal-making", "Startup showcases and demos", "Curated community masterclasses"].map((pt, i) => (
//                   <div key={i} className="flex items-center gap-3">
//                     <CheckCircle2 size={18} className="text-cmx-blue flex-shrink-0" />
//                     <span className="text-gray-700 font-medium">{pt}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="py-16 bg-cmx-blue text-white">
//         <div className="container-custom text-center">
//           <p className="text-xs font-bold uppercase tracking-widest opacity-70 mb-4">Media & Community Partners</p>
//           <h2 className="text-3xl md:text-4xl font-black mb-10">Backed by the best in community</h2>
//           <div className="flex flex-wrap justify-center gap-6">
//             {partners.map((p, i) => (
//               <div key={i} className="bg-white/10 border border-white/20 px-8 py-4 rounded-2xl text-lg font-bold">{p}</div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </motion.div>
//   );
// };

// // ─── Event Structure ──────────────────────────────────────────────────────────
// const EventStructure = () => {
//   const days = [
//     { day: 1, title: "Community Strategy & ROI", desc: "How to build community programs that deliver measurable business value.", tag: "Virtual" },
//     { day: 2, title: "HR & People Operations", desc: "Integrating community thinking into talent acquisition and employee experience.", tag: "Virtual" },
//     { day: 3, title: "Product & Community Synergy", desc: "How product managers and community managers co-create better products.", tag: "Virtual" },
//     { day: 4, title: "Founder-led Communities", desc: "Building movements and ecosystems that outlast early-stage hype.", tag: "Virtual" },
//     { day: 5, title: "Future of Community Tech", desc: "AI, tools, platforms and what community management looks like in 2030.", tag: "Virtual" },
//     { day: 6, title: "Physical Summit — Ibadan", desc: "High-value networking, deal-making, keynotes and ecosystem convergence.", tag: "In-Person" },
//   ];

//   return (
//     <section id="structure" className="py-24 bg-white">
//       <div className="container-custom">
//         <div className="max-w-3xl mx-auto text-center mb-16">
//           <div className="inline-flex items-center gap-2 px-4 py-2 bg-cmx-blue/10 text-cmx-blue rounded-full text-xs font-bold uppercase tracking-widest mb-6">
//             <Calendar size={14} /> 6-Day Experience
//           </div>
//           <h2 className="text-4xl md:text-5xl mb-6">Summit Structure</h2>
//           <p className="text-lg text-gray-500">A carefully designed journey — 5 days of virtual masterclasses followed by 1 high-energy physical day in Ibadan.</p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-6 mb-14">
//           <div className="bg-cmx-blue text-white rounded-[2.5rem] p-10 flex gap-6 items-start">
//             <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0"><Monitor size={28} /></div>
//             <div>
//               <p className="text-xs font-bold uppercase tracking-widest opacity-70 mb-2">Days 1–5</p>
//               <h3 className="text-2xl font-black mb-3">Virtual Masterclasses</h3>
//               <p className="text-white/80 leading-relaxed">Focused, practical, outcome-driven sessions led by Africa's foremost community and tech professionals. Join from anywhere.</p>
//             </div>
//           </div>
//           <div className="bg-cmx-orange text-white rounded-[2.5rem] p-10 flex gap-6 items-start">
//             <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0"><Building2 size={28} /></div>
//             <div>
//               <p className="text-xs font-bold uppercase tracking-widest opacity-70 mb-2">Day 6</p>
//               <h3 className="text-2xl font-black mb-3">Physical Experience — Ibadan</h3>
//               <p className="text-white/80 leading-relaxed">High-value networking, deal-making, showcases and ecosystem convergence. The grand in-person finale.</p>
//             </div>
//           </div>
//         </div>

//         <div className="space-y-4">
//           {days.map((d, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.08 }}
//               className={cn(
//                 "flex items-start gap-6 p-8 rounded-[2rem] border transition-all hover:shadow-md",
//                 d.tag === "In-Person" ? "bg-cmx-orange/5 border-cmx-orange/20" : "bg-cmx-gray border-gray-100"
//               )}
//             >
//               <div className={cn(
//                 "w-16 h-16 rounded-2xl flex flex-col items-center justify-center text-white flex-shrink-0 font-black",
//                 d.tag === "In-Person" ? "bg-cmx-orange" : "bg-cmx-blue"
//               )}>
//                 <span className="text-[10px] uppercase font-bold opacity-70">Day</span>
//                 <span className="text-xl">{d.day}</span>
//               </div>
//               <div className="flex-1">
//                 <div className="flex items-center gap-3 mb-2 flex-wrap">
//                   <h3 className="text-lg font-bold">{d.title}</h3>
//                   <span className={cn("text-[10px] uppercase font-bold px-3 py-1 rounded-full", d.tag === "In-Person" ? "bg-cmx-orange/10 text-cmx-orange" : "bg-cmx-blue/10 text-cmx-blue")}>
//                     {d.tag}
//                   </span>
//                 </div>
//                 <p className="text-gray-500">{d.desc}</p>
//               </div>
//               {d.tag === "In-Person" && (
//                 <div className="hidden md:flex items-center gap-2 text-cmx-orange font-bold text-sm"><MapPin size={16} /> Ibadan</div>
//               )}
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // ─── What to Expect ───────────────────────────────────────────────────────────
// const WhatToExpect = () => {
//   const expectations = [
//     { title: "Industry Education", desc: "Deep dives into the latest community management trends and strategies.", icon: <Briefcase size={24} /> },
//     { title: "Professional Elevation", desc: "Workshops designed to sharpen your leadership and management skills.", icon: <Zap size={24} /> },
//     { title: "Future of Networking", desc: "Experience new ways of connecting that go beyond simple business cards.", icon: <Users size={24} /> },
//     { title: "Ecosystem Sustainability", desc: "Learning how to build communities that thrive in the long term.", icon: <Globe size={24} /> },
//     { title: "Cross-Functional Integration", desc: "How community fits into product, marketing, and engineering.", icon: <Shield size={24} /> },
//   ];

//   return (
//     <section id="expect" className="py-24">
//       <div className="container-custom">
//         <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
//           <div className="max-w-2xl">
//             <h2 className="text-4xl md:text-6xl mb-6 leading-tight">What to <span className="text-cmx-blue italic">Expect</span></h2>
//             <p className="text-lg text-gray-500">A curated experience designed for the modern community professional.</p>
//           </div>
//           <div className="hidden md:block">
//             <div className="w-24 h-24 border-2 border-cmx-blue rounded-full flex items-center justify-center animate-spin-slow">
//               <ArrowRight className="text-cmx-blue -rotate-45" />
//             </div>
//           </div>
//         </div>
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {expectations.map((item, i) => (
//             <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
//               className={cn("p-8 rounded-[2rem] border transition-all duration-500", i === 0 ? "bg-cmx-blue text-white border-cmx-blue md:col-span-2 lg:col-span-1" : "bg-white border-gray-100 hover:border-cmx-blue/30")}
//             >
//               <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-6", i === 0 ? "bg-white/20" : "bg-cmx-blue/5 text-cmx-blue")}>{item.icon}</div>
//               <h3 className="text-2xl mb-4">{item.title}</h3>
//               <p className={cn("leading-relaxed", i === 0 ? "text-white/80" : "text-gray-500")}>{item.desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // ─── Target Audience ──────────────────────────────────────────────────────────
// const TargetAudience = () => {
//   const audiences = [
//     { title: "Community Managers", icon: <Users size={20} /> },
//     { title: "HR Professionals", icon: <Briefcase size={20} /> },
//     { title: "Project Managers", icon: <Zap size={20} /> },
//     { title: "Product Managers", icon: <Rocket size={20} /> },
//     { title: "Founders", icon: <Globe size={20} /> },
//   ];

//   return (
//     <section className="py-24 bg-white overflow-hidden">
//       <div className="container-custom">
//         <div className="grid lg:grid-cols-2 gap-20 items-center">
//           <div>
//             <h2 className="text-4xl md:text-6xl mb-8">Who is this summit <span className="text-cmx-blue italic">designed for?</span></h2>
//             <p className="text-lg text-gray-500 mb-10">Whether you're building a community from scratch or scaling a global ecosystem, this summit provides the tools and network you need.</p>
//             <div className="grid sm:grid-cols-2 gap-4">
//               {audiences.map((item, i) => (
//                 <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-cmx-gray hover:bg-cmx-blue hover:text-white transition-all group">
//                   <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-cmx-blue group-hover:bg-white/20 group-hover:text-white">{item.icon}</div>
//                   <span className="font-bold">{item.title}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="relative">
//             <div className="rounded-[3rem] overflow-hidden shadow-2xl">
//               <img src="https://picsum.photos/seed/audience/800/800" className="w-full h-auto" referrerPolicy="no-referrer" />
//             </div>
//             <div className="absolute -bottom-6 -right-6 bg-cmx-orange text-white p-8 rounded-3xl shadow-xl max-w-xs">
//               <p className="text-sm font-bold uppercase tracking-widest mb-2">Limited Seats</p>
//               <p className="text-2xl font-black">Join 300+ Industry Peers</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// // ─── Speakers (home preview) ──────────────────────────────────────────────────
// const Speakers = ({ onViewMore }: { onViewMore: () => void }) => {
//   const speakers = [
//     { name: "Samson Goddy", role: "Co-Founder, Open Source Africa", seed: "s1" },
//     { name: "Timothy Oviem", role: "Lead, Community Leads in Africa", seed: "s2" },
//     { name: "Haneefah A. Lekki", role: "Programs & Community Manager", seed: "s3" },
//     { name: "Mfonobong Umondia", role: "Community Manager, She Code Africa", seed: "s4" },
//   ];

//   return (
//     <section id="speakers" className="py-24 bg-cmx-dark text-white overflow-hidden">
//       <div className="container-custom">
//         <div className="mb-16">
//           <h2 className="text-4xl md:text-6xl mb-4">Our Speakers</h2>
//           <p className="text-gray-400 max-w-xl">Learn from the brightest minds in the community and tech landscape.</p>
//         </div>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-12">
//           {speakers.map((speaker, i) => (
//             <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="group cursor-pointer">
//               <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-4">
//                 <img src={`https://picsum.photos/seed/${speaker.seed}/400/500`} alt={speaker.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" referrerPolicy="no-referrer" />
//                 <div className="absolute inset-0 bg-gradient-to-t from-cmx-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
//                   <div className="flex gap-2">
//                     <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"><Twitter size={14} /></div>
//                     <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"><Linkedin size={14} /></div>
//                   </div>
//                 </div>
//               </div>
//               <h4 className="text-lg font-bold mb-1">{speaker.name}</h4>
//               <p className="text-sm text-gray-500">{speaker.role}</p>
//             </motion.div>
//           ))}
//         </div>
//         <div className="text-center">
//           <button onClick={onViewMore} className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-cmx-dark transition-all">
//             View All Speakers <ChevronRight size={18} />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// // ─── Speakers Full Page ───────────────────────────────────────────────────────
// const SpeakersPage = ({ onBack }: { onBack: () => void }) => {
//   const speakers = [
//     { name: "Samson Goddy", role: "Co-Founder, Open Source Africa", bio: "Software engineer and community builder who co-founded Open Source Africa, championing open source culture across the continent.", seed: "s1", track: "Community Strategy" },
//     { name: "Timothy Oviem", role: "Lead, Community Leads in Africa", bio: "Leads one of Africa's most active community-of-practice networks, helping community professionals upskill and find their place in the ecosystem.", seed: "s2", track: "Community Leadership" },
//     { name: "Haneefah A. Lekki", role: "Programs & Community Manager", bio: "Has managed programs and communities across multiple tech organisations, bridging the gap between operations and people-first culture.", seed: "s3", track: "People & Programs" },
//     { name: "Mfonobong Umondia", role: "Community Manager, She Code Africa", bio: "Drives community engagement and inclusion at She Code Africa, empowering women in tech across the continent.", seed: "s4", track: "Inclusion & Diversity" },
//     { name: "Ayomide Ogunrinola", role: "Community Manager, WITECH", bio: "Builds and nurtures the WITECH community, creating spaces for women in tech to thrive, collaborate, and lead.", seed: "s5", track: "Community Building" },
//     { name: "Olawale Omotoso", role: "Director of Product Management", bio: "Brings a cross-functional perspective on how community integrates into product roadmaps and business strategy.", seed: "s6", track: "Product & Community" },
//     { name: "Olabanji Ewenla", role: "Lead Product Manager, Enoverlab", bio: "Shapes the product vision at Enoverlab while championing community-led growth as a core business strategy.", seed: "s7", track: "Product Strategy" },
//     { name: "Florence Ogunbore", role: "Product Manager", bio: "Practitioner at the intersection of product management and community, exploring how both disciplines amplify each other.", seed: "s8", track: "Product & People" },
//     { name: "Emmanuel Faith", role: "Lead Consultant, VisitHRClinic", bio: "Helps organisations build people-first cultures, advising on HR strategy and community building for fast-growing teams.", seed: "s9", track: "HR & Culture" },
//     { name: "Joel Moses Babatunde", role: "The Ọgá HR", bio: "Leading voice in Nigeria's HR community, speaking on workforce development and the future of people management.", seed: "s10", track: "HR & Workforce" },
//   ];

//   return (
//     <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
//       <BackButton onClick={onBack} />
//       <div className="bg-cmx-dark text-white py-20 px-6 md:px-12">
//         <div className="max-w-7xl mx-auto">
//           <p className="text-xs font-bold uppercase tracking-widest opacity-60 mb-3">CMX Nigeria Summit</p>
//           <h1 className="text-4xl md:text-6xl font-black mb-6">All Speakers</h1>
//           <p className="text-xl text-gray-400 max-w-2xl">10+ industry leaders, community builders, and innovators shaping Africa's tech landscape.</p>
//         </div>
//       </div>
//       <section className="py-20 bg-white">
//         <div className="container-custom">
//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {speakers.map((speaker, i) => (
//               <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="group bg-cmx-gray rounded-[2rem] overflow-hidden hover:shadow-xl transition-shadow">
//                 <div className="relative aspect-[3/2] overflow-hidden">
//                   <img src={`https://picsum.photos/seed/${speaker.seed}/600/400`} alt={speaker.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" referrerPolicy="no-referrer" />
//                   <div className="absolute top-4 right-4">
//                     <span className="bg-cmx-blue text-white text-[10px] font-bold uppercase px-3 py-1.5 rounded-full">{speaker.track}</span>
//                   </div>
//                 </div>
//                 <div className="p-8">
//                   <h3 className="text-xl font-black mb-1">{speaker.name}</h3>
//                   <p className="text-cmx-blue font-semibold text-sm mb-4">{speaker.role}</p>
//                   <p className="text-gray-500 text-sm leading-relaxed">{speaker.bio}</p>
//                   <div className="flex gap-3 mt-6">
//                     <a href="#" className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-gray-400 hover:text-cmx-blue hover:shadow-md transition-all"><Twitter size={16} /></a>
//                     <a href="#" className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-gray-400 hover:text-cmx-blue hover:shadow-md transition-all"><Linkedin size={16} /></a>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </motion.div>
//   );
// };

// // ─── Highlights (home preview) ────────────────────────────────────────────────
// const Highlights = ({ onViewMore }: { onViewMore: () => void }) => (
//   <section id="highlights" className="py-24">
//     <div className="container-custom">
//       <div className="text-center mb-16">
//         <h2 className="text-4xl md:text-5xl mb-4">Past Event Highlights</h2>
//         <p className="text-gray-500">A glimpse into the energy and impact of CMX Nigeria.</p>
//       </div>
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
//         <div className="col-span-2 row-span-2 rounded-[2rem] overflow-hidden">
//           <img src="https://picsum.photos/seed/h1/800/800" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
//         </div>
//         <div className="rounded-[2rem] overflow-hidden">
//           <img src="https://picsum.photos/seed/h2/400/400" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
//         </div>
//         <div className="rounded-[2rem] overflow-hidden">
//           <img src="https://picsum.photos/seed/h3/400/400" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
//         </div>
//         <div className="col-span-2 rounded-[2rem] overflow-hidden h-64">
//           <img src="https://picsum.photos/seed/h4/800/400" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
//         </div>
//       </div>
//       <div className="text-center">
//         <button onClick={onViewMore} className="inline-flex items-center gap-2 bg-cmx-blue text-white px-8 py-4 rounded-full font-bold hover:shadow-lg hover:scale-105 transition-all">
//           View All Highlights <ChevronRight size={18} />
//         </button>
//       </div>
//     </div>
//   </section>
// );

// // ─── Highlights Full Page ─────────────────────────────────────────────────────
// const HighlightsPage = ({ onBack }: { onBack: () => void }) => {
//   const gallerySeeds = ["h1","h2","h3","h4","h5","h6","h7","h8","h9","h10","h11","h12"];
//   const eventTypes = [
//     { label: "Panel Sessions", desc: "Thought leaders debate the future of community strategy, product, and tech.", icon: <Users size={22} /> },
//     { label: "Networking", desc: "Curated networking moments connecting professionals across sectors.", icon: <Handshake size={22} /> },
//     { label: "Showcases", desc: "Brands and startups demo their tools and community-powered innovations.", icon: <Star size={22} /> },
//     { label: "Masterclasses", desc: "Hands-on, skill-building sessions with the continent's best practitioners.", icon: <Briefcase size={22} /> },
//   ];
//   const stats = [
//     { value: "2+", label: "Years Running" },
//     { value: "300–500", label: "Attendees per Event" },
//     { value: "10+", label: "Speakers per Summit" },
//     { value: "4+", label: "Past Events" },
//   ];

//   return (
//     <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
//       <BackButton onClick={onBack} />
//       <div className="bg-cmx-blue text-white py-20 px-6 md:px-12">
//         <div className="max-w-7xl mx-auto">
//           <p className="text-xs font-bold uppercase tracking-widest opacity-70 mb-3">Our History</p>
//           <h1 className="text-4xl md:text-6xl font-black mb-6">Event Highlights</h1>
//           <p className="text-xl text-white/80 max-w-2xl">Over two years of high-energy, high-impact community events — panel sessions, networking, showcases and more.</p>
//         </div>
//       </div>

//       <section className="py-16 bg-cmx-dark text-white">
//         <div className="container-custom">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {stats.map((s, i) => (
//               <div key={i} className="text-center">
//                 <p className="text-4xl md:text-5xl font-black text-cmx-blue mb-2">{s.value}</p>
//                 <p className="text-gray-400 font-semibold text-sm">{s.label}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="py-20 bg-white">
//         <div className="container-custom">
//           <h2 className="text-3xl md:text-4xl font-black mb-12 text-center">What Happens at CMX Nigeria</h2>
//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {eventTypes.map((et, i) => (
//               <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-cmx-gray rounded-3xl p-8 text-center">
//                 <div className="w-14 h-14 bg-cmx-blue text-white rounded-2xl flex items-center justify-center mx-auto mb-5">{et.icon}</div>
//                 <h3 className="text-xl font-black mb-3">{et.label}</h3>
//                 <p className="text-sm text-gray-500 leading-relaxed">{et.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="py-20 bg-cmx-gray">
//         <div className="container-custom">
//           <h2 className="text-3xl font-black mb-10 text-center">Photo Gallery</h2>
//           <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
//             {gallerySeeds.map((seed, i) => (
//               <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="break-inside-avoid rounded-2xl overflow-hidden">
//                 <img src={`https://picsum.photos/seed/${seed}/${400 + (i % 3) * 50}/${300 + (i % 4) * 60}`} className="w-full h-auto hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="py-16 bg-cmx-blue text-white">
//         <div className="container-custom text-center max-w-3xl mx-auto">
//           <h2 className="text-3xl md:text-4xl font-black mb-6">CMX Connect — The Series That Built This</h2>
//           <p className="text-xl text-white/80 leading-relaxed mb-8">
//             The CMX Nigeria Summit is the evolution of the wildly successful CMX Connect series — consistently drawing 300–500 professionals per session across Nigeria, and now scaling to a full national summit.
//           </p>
//           <div className="flex flex-wrap justify-center gap-4 text-sm font-bold">
//             {["Ibadan", "Lagos", "Abuja", "Online"].map((city, i) => (
//               <span key={i} className="bg-white/10 border border-white/20 px-6 py-2 rounded-full">{city}</span>
//             ))}
//           </div>
//         </div>
//       </section>
//     </motion.div>
//   );
// };

// // ─── Swags ────────────────────────────────────────────────────────────────────
// const Swags = () => (
//   <section className="py-24 bg-cmx-gray">
//     <div className="container-custom">
//       <div className="bg-cmx-blue rounded-[4rem] p-12 md:p-20 shadow-xl overflow-hidden relative">
//         <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
//           <div>
//             <div className="inline-block px-4 py-2 bg-cmx-orange text-cmx-gray rounded-full text-xs font-bold uppercase mb-6">Exclusive Perks</div>
//             <h2 className="text-4xl text-cmx-gray md:text-5xl mb-6">Premium Swags & Goodies</h2>
//             <p className="text-lg text-cmx-gray mb-8">Every attendee gets a curated CMX Nigeria gift box featuring exclusive merchandise, partner discounts, and more.</p>
//             <div className="flex gap-4">
//               {[{ icon: <Zap className="text-cmx-blue" />, label: "T-Shirts" }, { icon: <Globe className="text-cmx-blue" />, label: "Notebooks" }, { icon: <Rocket className="text-cmx-blue" />, label: "Stickers" }].map((item, i) => (
//                 <div key={i} className="text-center">
//                   <div className="w-16 h-16 bg-cmx-gray rounded-2xl flex items-center justify-center mb-2 mx-auto">{item.icon}</div>
//                   <p className="text-cmx-gray text-xs font-bold">{item.label}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="relative">
//             <img src={shirt} className="rounded-3xl shadow-lg" referrerPolicy="no-referrer" />
//             <div className="absolute top-4 right-4 bg-cmx-blue text-white px-4 py-2 rounded-full text-xs font-bold">Limited Edition</div>
//           </div>
//         </div>
//         <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-cmx-blue/5 rounded-full" />
//       </div>
//     </div>
//   </section>
// );

// // ─── Sponsorship ──────────────────────────────────────────────────────────────
// const Sponsorship = () => (
//   <section className="py-24 bg-cmx-blue text-white">
//     <div className="container-custom">
//       <div className="grid md:grid-cols-2 gap-12 items-center">
//         <div>
//           <h2 className="text-4xl md:text-6xl mb-6">Partner with Us</h2>
//           <p className="text-xl text-white/80 mb-8">Join us in shaping the future of community in Africa. Showcase your brand to 300+ professionals.</p>
//           <ul className="space-y-4 mb-10">
//             {[
//               "Logo on all event materials (banners, tags, fliers, souvenirs)",
//               "Exclusive website slot & social media shout-outs",
//               "Screen visibility throughout the event",
//               "Exhibition booth with dedicated representative",
//               "Keynote brand presentation on main stage",
//               "Customised newsletter to all attendees pre- and post-event",
//               "Featured full-page slot in digital e-magazine"
//             ].map((item, i) => (
//               <li key={i} className="flex items-start gap-3">
//                 <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5"><ChevronRight size={14} /></div>
//                 <span className="font-semibold">{item}</span>
//               </li>
//             ))}
//           </ul>
//           <button className="bg-white text-cmx-blue px-10 py-4 rounded-full font-bold hover:shadow-2xl transition-all">Become a Sponsor</button>
//         </div>
//         <div className="bg-white/10 backdrop-blur-xl p-12 rounded-[3rem] border border-white/20">
//           <h3 className="text-3xl mb-8">Sponsorship Tiers</h3>
//           <div className="space-y-6">
//             {[
//               { name: "Platinum", benefits: "Main stage branding, keynote slot + 10 tickets" },
//               { name: "Gold", benefits: "Workshop branding, exhibition booth + 5 tickets" },
//               { name: "Silver", benefits: "Logo on materials, social shout-outs + 2 tickets" },
//               { name: "Bronze", benefits: "Digital presence + newsletter feature" }
//             ].map((tier, i) => (
//               <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
//                 <h4 className="text-xl font-bold mb-1">{tier.name}</h4>
//                 <p className="text-sm text-white/60">{tier.benefits}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>
// );

// // ─── Footer ───────────────────────────────────────────────────────────────────
// const Footer = ({ setPage }: { setPage: (p: Page) => void }) => (
//   <footer className="py-20 bg-cmx-gray">
//     <div className="container-custom">
//       <div className="grid md:grid-cols-4 gap-12 mb-20">
//         <div className="col-span-2">
//           <div className="flex items-center gap-2 mb-6">
//             <div className="w-50 h-20 rounded-lg flex items-center justify-center text-white font-bold text-xl">
//               <img src={logo2} alt="CMX Summit" className="w-full h-auto object-cover" referrerPolicy="no-referrer" />
//             </div>
//           </div>
//           <p className="text-gray-500 max-w-sm mb-8">The premier community for community professionals in Nigeria. Building the future of connection.</p>
//           <div className="flex gap-4">
//             {[Instagram, Twitter, Linkedin, Facebook].map((Icon, i) => (
//               <a key={i} href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-400 hover:text-cmx-blue hover:shadow-md transition-all"><Icon size={18} /></a>
//             ))}
//           </div>
//         </div>
//         <div>
//           <h4 className="font-bold mb-6">Quick Links</h4>
//           <ul className="space-y-4 text-gray-500">
//             <li><button onClick={() => setPage('about')} className="hover:text-cmx-blue transition-colors">About Us</button></li>
//             <li><button onClick={() => setPage('speakers')} className="hover:text-cmx-blue transition-colors">Speakers</button></li>
//             <li><button onClick={() => setPage('highlights')} className="hover:text-cmx-blue transition-colors">Highlights</button></li>
//             <li><a href="#" className="hover:text-cmx-blue transition-colors">Tickets</a></li>
//           </ul>
//         </div>
//         <div>
//           <h4 className="font-bold mb-6">Contact</h4>
//           <ul className="space-y-4 text-gray-500">
//             <li>Ibadan, Nigeria</li>
//             <li>hello@cmxnigeria.com</li>
//             <li>+234 800 000 0000</li>
//           </ul>
//         </div>
//       </div>
//       <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
//         <p>© 2024 CMX Nigeria. All rights reserved.</p>
//         <div className="flex gap-8">
//           <a href="#" className="hover:text-cmx-blue">Privacy Policy</a>
//           <a href="#" className="hover:text-cmx-blue">Terms of Service</a>
//         </div>
//       </div>
//     </div>
//   </footer>
// );

// // ─── App Root ─────────────────────────────────────────────────────────────────
// export default function App() {
//   const [page, setPage] = useState<Page>('home');

//   const handleSetPage = (p: Page) => {
//     setPage(p);
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   return (
//     <div className="min-h-screen">
//       <Navbar currentPage={page} setPage={handleSetPage} />
//       <AnimatePresence mode="wait">
//         {page === 'home' && (
//           <motion.main key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
//             <Hero />
//             <ThemeSection />
//             <About onViewMore={() => handleSetPage('about')} />
//             <EventStructure />
//             <WhatToExpect />
//             <TargetAudience />
//             <Speakers onViewMore={() => handleSetPage('speakers')} />
//             <Highlights onViewMore={() => handleSetPage('highlights')} />
//             <Swags />
//             <Sponsorship />
//             <Footer setPage={handleSetPage} />
//           </motion.main>
//         )}
//         {page === 'about' && (
//           <motion.div key="about" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
//             <AboutPage onBack={() => handleSetPage('home')} />
//             <Footer setPage={handleSetPage} />
//           </motion.div>
//         )}
//         {page === 'speakers' && (
//           <motion.div key="speakers" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
//             <SpeakersPage onBack={() => handleSetPage('home')} />
//             <Footer setPage={handleSetPage} />
//           </motion.div>
//         )}
//         {page === 'highlights' && (
//           <motion.div key="highlights" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
//             <HighlightsPage onBack={() => handleSetPage('home')} />
//             <Footer setPage={handleSetPage} />
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

/* eslint-disable */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Calendar, 
  MapPin, 
  Users, 
  Zap, 
  Globe, 
  Shield, 
  Briefcase, 
  Rocket, 
  Menu, 
  X,
  ChevronRight,
  Instagram,
  Twitter,
  Linkedin,
  Facebook,
  Monitor,
  Building2,
  Target,
  TrendingUp,
  Handshake,
  Star,
  CheckCircle2
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import logo from "/CMXConnectIbadanLogo.webp"
import logo2 from "/CMXConnectIbadanLogo2.webp"
import shirt from "/CMXSHIRT2.webp"
import hero from "/DSC00118.JPG"
import past1 from "/DSC00133.JPG"
import past2 from "/R5__2057.JPG"
import past3 from "/JKV_0236.jpg"
import past4 from "/JKV_0237.jpg"


function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type Page = 'home' | 'about' | 'speakers' | 'highlights';

// ─── Navbar ──────────────────────────────────────────────────────────────────
const Navbar = ({ currentPage, setPage }: { currentPage: Page; setPage: (p: Page) => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Links with a `page` navigate directly to that detail page.
  // Links with an `href` scroll to a home section.
  const navLinks: { name: string; page?: Page; href?: string }[] = [
    { name: 'Home',          page: 'home' },
    { name: 'About',          page: 'about' },
    // { name: 'What to Expect', href: '#expect' },
    { name: 'Speakers',       page: 'speakers' },
    { name: 'Highlights',     page: 'highlights' },
  ];

  const handleNavClick = (link: { page?: Page; href?: string }) => {
    setIsMobileMenuOpen(false);
    if (link.page) {
      setPage(link.page);
    } else if (link.href) {
      if (currentPage !== 'home') {
        setPage('home');
        setTimeout(() => {
          document.querySelector(link.href!)?.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else {
        document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        (currentPage !== 'home' || isScrolled)
        ? "bg-white/90 backdrop-blur-md shadow-sm"
        : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <button onClick={() => setPage('home')} className="flex items-center gap-2">
          <div className="w-35 h-10 rounded-lg flex items-center justify-center text-white font-bold text-xl">
            <img src={logo2} alt="CMX Summit" className="w-full h-auto object-cover" referrerPolicy="no-referrer" />
          </div>
          <span className="font-display font-extrabold text-xl tracking-tighter">
            {/* CMX <span className="text-cmx-blue">CONNECT</span> */}
          </span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link)}
              className={cn(
                "text-sm font-semibold hover:text-cmx-blue transition-colors",
                link.page && currentPage === link.page ? "text-cmx-blue" : ""
              )}
            >
              {link.name}
            </button>
          ))}
          <button className="bg-cmx-blue text-white px-6 py-2.5 rounded-full text-sm font-bold hover:shadow-lg transition-all active:scale-95">
            Register Now
          </button>
        </div>

        <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-t p-6 flex flex-col gap-4 md:hidden shadow-xl"
          >
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link)}
                className={cn(
                  "text-lg font-semibold text-left",
                  link.page && currentPage === link.page ? "text-cmx-blue" : ""
                )}
              >
                {link.name}
              </button>
            ))}
            <button className="bg-cmx-blue text-white px-6 py-4 rounded-xl font-bold">
              Register Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};



// ─── Hero ─────────────────────────────────────────────────────────────────────
const Hero = () => (
  <section className="relative pt-32 pb-20 overflow-hidden">
    <div className="container-custom relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cmx-blue/10 text-cmx-blue rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            <Zap size={14} /> The Premier Community Event in Africa
          </div>
          <h1 className="text-5xl md:text-7xl font-black leading-[0.9] mb-6">
            BEYOND THE <br /><span className="text-cmx-blue">HORIZON</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
            Redefining the strategic importance of community for businesses, entrepreneurs, and tech talent in the African ecosystem.
          </p>
          <div className="flex flex-wrap gap-4 mb-12">
            <div className="flex items-center gap-3 bg-cmx-gray px-5 py-3 rounded-2xl">
              <Calendar className="text-cmx-blue" size={20} />
              <div>
                <p className="text-[10px] uppercase font-bold text-gray-400 leading-none mb-1">Date</p>
                <p className="text-sm font-bold">October 26, 2024</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-cmx-gray px-5 py-3 rounded-2xl">
              <MapPin className="text-cmx-blue" size={20} />
              <div>
                <p className="text-[10px] uppercase font-bold text-gray-400 leading-none mb-1">Location</p>
                <p className="text-sm font-bold">Ibadan, Nigeria</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="btn-primary flex items-center justify-center gap-2">
              Get Your Ticket <ArrowRight size={18} />
            </button>
            <button className="btn-outline" onClick={() => {
              document.getElementById('structure')?.scrollIntoView({ behavior: 'smooth' });
            }}>View Schedule</button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-700">
            <img src={hero} alt="CMX Summit" className="w-full h-auto object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-cmx-orange/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-cmx-blue/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 w-24 h-24 bg-white rounded-2xl shadow-xl flex items-center justify-center z-20 animate-bounce">
            <Users size={40} className="text-cmx-blue" />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const ThemeSection = () => (
  <section className="py-12 bg-cmx-blue text-white overflow-hidden">
    <div className="container-custom">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
        <div className="flex-shrink-0">
          <p className="text-xs font-bold uppercase tracking-[0.3em] opacity-60 mb-2">2024 Theme</p>
          <h2 className="text-3xl md:text-5xl font-black">BEYOND THE <br /> HORIZON</h2>
        </div>
        <div className="w-px h-20 bg-white/20 hidden md:block" />
        <p className="text-xl md:text-2xl font-light leading-relaxed max-w-2xl">
          Exploring the <span className="font-bold">Community Landscape</span> and redefining how we build, scale, and sustain ecosystems in Africa.
        </p>
      </div>
    </div>
  </section>
);

// ─── About (home preview) ─────────────────────────────────────────────────────
const About = ({ onViewMore }: { onViewMore: () => void }) => (
  <section id="about" className="py-24 bg-cmx-gray">
    <div className="container-custom">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl mb-6">About the Summit</h2>
        <p className="text-xl text-gray-600 leading-relaxed">
          The CMX Nigeria Summit is a landmark event designed to redefine the strategic importance of community for businesses, entrepreneurs, and tech talent in the African tech ecosystem.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {[
          { icon: <Users className="text-cmx-blue" />, title: "Connect", desc: "Network with over 300+ community professionals and industry leaders from across Africa." },
          { icon: <Zap className="text-cmx-blue" />, title: "Learn", desc: "Gain insights from global experts on building sustainable ecosystems through 5 virtual masterclasses." },
          { icon: <Rocket className="text-cmx-blue" />, title: "Grow", desc: "Elevate your career and business through strategic community integration and cross-sector collaboration." }
        ].map((item, i) => (
          <motion.div key={i} whileHover={{ y: -10 }} className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
            <div className="w-14 h-14 bg-cmx-blue/5 rounded-2xl flex items-center justify-center mb-6">{item.icon}</div>
            <h3 className="text-2xl mb-4">{item.title}</h3>
            <p className="text-gray-500 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
      <div className="text-center">
        <button onClick={onViewMore} className="inline-flex items-center gap-2 bg-cmx-blue text-white px-8 py-4 rounded-full font-bold hover:shadow-lg hover:scale-105 transition-all">
          View More <ChevronRight size={18} />
        </button>
      </div>
    </div>
  </section>
);

// ─── About Full Page ──────────────────────────────────────────────────────────
const AboutPage = () => {
  const objectives = [
    { icon: <Target size={22} />, title: "Extract Valuable Perspectives", desc: "Get invaluable insights from the most brilliant minds in community tech and innovation." },
    { icon: <Users size={22} />, title: "Meet the Biggest Players", desc: "Connect with Africa's top innovators and community leaders in one place." },
    { icon: <TrendingUp size={22} />, title: "Brand Visibility", desc: "Get your brand in front of the people that matter in tech and business communities." },
    { icon: <Handshake size={22} />, title: "Collaboration Opportunities", desc: "Find opportunities to collaborate and create new solutions that impact Africa's ecosystem." },
    { icon: <Globe size={22} />, title: "Ecosystem Sustainability", desc: "Learn how to build communities that thrive long-term and drive sustainable growth." },
    { icon: <Star size={22} />, title: "Cross-Functional Integration", desc: "Discover how community fits into product, marketing, engineering and leadership teams." },
    { icon: <Briefcase size={22} />, title: "Professional Elevation", desc: "Workshops and sessions designed to sharpen your leadership and management skills." },
    { icon: <Zap size={22} />, title: "Impact & Growth", desc: "Measure and amplify community impact across businesses, startups and nonprofits." },
  ];
  const partners = ["CMX", "Community Collective", "Community Leads in Africa", "Community Manager Guide"];

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <div className="bg-cmx-blue text-white py-20 px-6 md:px-12 mt-5">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest opacity-70 mb-3">CMX Nigeria Summit</p>
          <h1 className="text-4xl md:text-6xl font-black mb-6">About the Summit</h1>
          <p className="text-xl text-white/80 max-w-2xl leading-relaxed">
            An initiative designed to redefine the strategic importance of community for businesses, entrepreneurs, and tech talent within the African tech ecosystem.
          </p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                The CMX Nigeria Summit fosters cross-sector collaboration and unlocks high-value opportunities for Community Managers, HR Professionals, Project Managers, Product Managers, and Founders within the African tech ecosystem.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Through a curated blend of deep-dive sessions and prominent branding opportunities, this event serves as a premier showcase for the talent and innovation driving the African community ecosystem.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "300+", sub: "Expected Participants" },
                  { label: "10+", sub: "Expert Speakers" },
                  { label: "6+", sub: "Partner Organisations" },
                  { label: "6 Days", sub: "Summit Experience" }
                ].map((stat, i) => (
                  <div key={i} className="bg-cmx-gray rounded-2xl p-6">
                    <p className="text-3xl font-black text-cmx-blue mb-1">{stat.label}</p>
                    <p className="text-sm text-gray-500 font-semibold">{stat.sub}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[3rem] overflow-hidden shadow-2xl">
              <img src="https://picsum.photos/seed/about-full/800/700" className="w-full h-auto" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-cmx-gray">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl mb-4">Core Objectives</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Everything we do at CMX Nigeria is purpose-driven and ecosystem-focused.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {objectives.map((obj, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }} className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-cmx-blue/10 text-cmx-blue rounded-2xl flex items-center justify-center mb-5">{obj.icon}</div>
                <h3 className="text-lg font-bold mb-3">{obj.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{obj.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-[3rem] overflow-hidden shadow-xl">
              <img src="https://picsum.photos/seed/track/800/550" className="w-full h-auto" referrerPolicy="no-referrer" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl mb-6">A Proven Track Record</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Over the past two years, CMX Connect has established a reputation for delivering high-impact tech and community-focused events, consistently drawing 300–500 participants per session.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                These numbers reflect a deeply engaged ecosystem and a sustained demand for high-level community connection.
              </p>
              <div className="space-y-3">
                {["Panel Sessions with industry experts", "Live networking and deal-making", "Startup showcases and demos", "Curated community masterclasses"].map((pt, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-cmx-blue flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cmx-blue text-white">
        <div className="container-custom text-center">
          <p className="text-xs font-bold uppercase tracking-widest opacity-70 mb-4">Media & Community Partners</p>
          <h2 className="text-3xl md:text-4xl font-black mb-10">Backed by the best in community</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {partners.map((p, i) => (
              <div key={i} className="bg-white/10 border border-white/20 px-8 py-4 rounded-2xl text-lg font-bold">{p}</div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

// ─── Event Structure ──────────────────────────────────────────────────────────
const EventStructure = () => {
  const days = [
    { day: 1, title: "Community Strategy & ROI", desc: "How to build community programs that deliver measurable business value.", tag: "Virtual" },
    { day: 2, title: "HR & People Operations", desc: "Integrating community thinking into talent acquisition and employee experience.", tag: "Virtual" },
    { day: 3, title: "Product & Community Synergy", desc: "How product managers and community managers co-create better products.", tag: "Virtual" },
    { day: 4, title: "Founder-led Communities", desc: "Building movements and ecosystems that outlast early-stage hype.", tag: "Virtual" },
    { day: 5, title: "Future of Community Tech", desc: "AI, tools, platforms and what community management looks like in 2030.", tag: "Virtual" },
    { day: 6, title: "Physical Summit — Ibadan", desc: "High-value networking, deal-making, keynotes and ecosystem convergence.", tag: "In-Person" },
  ];

  return (
    <section id="structure" className="py-24 bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cmx-blue/10 text-cmx-blue rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            <Calendar size={14} /> 6-Day Experience
          </div>
          <h2 className="text-4xl md:text-5xl mb-6">Summit Structure</h2>
          <p className="text-lg text-gray-500">A carefully designed journey — 5 days of virtual masterclasses followed by 1 high-energy physical day in Ibadan.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-14">
          <div className="bg-cmx-blue text-white rounded-[2.5rem] p-10 flex gap-6 items-start">
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0"><Monitor size={28} /></div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest opacity-70 mb-2">Days 1–5</p>
              <h3 className="text-2xl font-black mb-3">Virtual Masterclasses</h3>
              <p className="text-white/80 leading-relaxed">Focused, practical, outcome-driven sessions led by Africa's foremost community and tech professionals. Join from anywhere.</p>
            </div>
          </div>
          <div className="bg-cmx-orange text-white rounded-[2.5rem] p-10 flex gap-6 items-start">
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0"><Building2 size={28} /></div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest opacity-70 mb-2">Day 6</p>
              <h3 className="text-2xl font-black mb-3">Physical Experience — Ibadan</h3>
              <p className="text-white/80 leading-relaxed">High-value networking, deal-making, showcases and ecosystem convergence. The grand in-person finale.</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {days.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={cn(
                "flex items-start gap-6 p-8 rounded-[2rem] border transition-all hover:shadow-md",
                d.tag === "In-Person" ? "bg-cmx-orange/5 border-cmx-orange/20" : "bg-cmx-gray border-gray-100"
              )}
            >
              <div className={cn(
                "w-16 h-16 rounded-2xl flex flex-col items-center justify-center text-white flex-shrink-0 font-black",
                d.tag === "In-Person" ? "bg-cmx-orange" : "bg-cmx-blue"
              )}>
                <span className="text-[10px] uppercase font-bold opacity-70">Day</span>
                <span className="text-xl">{d.day}</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <h3 className="text-lg font-bold">{d.title}</h3>
                  <span className={cn("text-[10px] uppercase font-bold px-3 py-1 rounded-full", d.tag === "In-Person" ? "bg-cmx-orange/10 text-cmx-orange" : "bg-cmx-blue/10 text-cmx-blue")}>
                    {d.tag}
                  </span>
                </div>
                <p className="text-gray-500">{d.desc}</p>
              </div>
              {d.tag === "In-Person" && (
                <div className="hidden md:flex items-center gap-2 text-cmx-orange font-bold text-sm"><MapPin size={16} /> Ibadan</div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── What to Expect ───────────────────────────────────────────────────────────
const WhatToExpect = () => {
  const expectations = [
    { title: "Industry Education", desc: "Deep dives into the latest community management trends and strategies.", icon: <Briefcase size={24} /> },
    { title: "Professional Elevation", desc: "Workshops designed to sharpen your leadership and management skills.", icon: <Zap size={24} /> },
    { title: "Future of Networking", desc: "Experience new ways of connecting that go beyond simple business cards.", icon: <Users size={24} /> },
    { title: "Ecosystem Sustainability", desc: "Learning how to build communities that thrive in the long term.", icon: <Globe size={24} /> },
    { title: "Cross-Functional Integration", desc: "How community fits into product, marketing, and engineering.", icon: <Shield size={24} /> },
  ];

  return (
    <section id="expect" className="py-24">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl mb-6 leading-tight">What to <span className="text-cmx-blue italic">Expect</span></h2>
            <p className="text-lg text-gray-500">A curated experience designed for the modern community professional.</p>
          </div>
          <div className="hidden md:block">
            <div className="w-24 h-24 border-2 border-cmx-blue rounded-full flex items-center justify-center animate-spin-slow">
              <ArrowRight className="text-cmx-blue -rotate-45" />
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expectations.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className={cn("p-8 rounded-[2rem] border transition-all duration-500", i === 0 ? "bg-cmx-blue text-white border-cmx-blue md:col-span-2 lg:col-span-1" : "bg-white border-gray-100 hover:border-cmx-blue/30")}
            >
              <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-6", i === 0 ? "bg-white/20" : "bg-cmx-blue/5 text-cmx-blue")}>{item.icon}</div>
              <h3 className="text-2xl mb-4">{item.title}</h3>
              <p className={cn("leading-relaxed", i === 0 ? "text-white/80" : "text-gray-500")}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── Target Audience ──────────────────────────────────────────────────────────
const TargetAudience = () => {
  const audiences = [
    { title: "Community Managers", icon: <Users size={20} /> },
    { title: "HR Professionals", icon: <Briefcase size={20} /> },
    { title: "Project Managers", icon: <Zap size={20} /> },
    { title: "Product Managers", icon: <Rocket size={20} /> },
    { title: "Founders", icon: <Globe size={20} /> },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl mb-8">Who is this summit <span className="text-cmx-blue italic">designed for?</span></h2>
            <p className="text-lg text-gray-500 mb-10">Whether you're building a community from scratch or scaling a global ecosystem, this summit provides the tools and network you need.</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {audiences.map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-cmx-gray hover:bg-cmx-blue hover:text-white transition-all group">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-cmx-blue group-hover:bg-white/20 group-hover:text-white">{item.icon}</div>
                  <span className="font-bold">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="rounded-[3rem] overflow-hidden shadow-2xl">
              <img src="https://picsum.photos/seed/audience/800/800" className="w-full h-auto" referrerPolicy="no-referrer" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-cmx-orange text-white p-8 rounded-3xl shadow-xl max-w-xs">
              <p className="text-sm font-bold uppercase tracking-widest mb-2">Limited Seats</p>
              <p className="text-2xl font-black">Join 300+ Industry Peers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── Speakers (home preview) ──────────────────────────────────────────────────
const Speakers = ({ onViewMore }: { onViewMore: () => void }) => {
  const speakers = [
    { name: "Samson Goddy", role: "Co-Founder, Open Source Africa", seed: "s1" },
    { name: "Timothy Oviem", role: "Lead, Community Leads in Africa", seed: "s2" },
    { name: "Haneefah A. Lekki", role: "Programs & Community Manager", seed: "s3" },
    { name: "Mfonobong Umondia", role: "Community Manager, She Code Africa", seed: "s4" },
  ];

  return (
    <section id="speakers" className="py-24 bg-cmx-dark text-white overflow-hidden">
      <div className="container-custom">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl mb-4">Our Speakers</h2>
          <p className="text-gray-400 max-w-xl">Learn from the brightest minds in the community and tech landscape.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-12">
          {speakers.map((speaker, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="group cursor-pointer">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-4">
                <img src={`https://picsum.photos/seed/${speaker.seed}/400/500`} alt={speaker.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-cmx-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"><Twitter size={14} /></div>
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"><Linkedin size={14} /></div>
                  </div>
                </div>
              </div>
              <h4 className="text-lg font-bold mb-1">{speaker.name}</h4>
              <p className="text-sm text-gray-500">{speaker.role}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center">
          <button onClick={onViewMore} className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-cmx-dark transition-all">
            View All Speakers <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

// ─── Speakers Full Page ───────────────────────────────────────────────────────
const SpeakersPage = () => {
  const speakers = [
    { name: "Samson Goddy", role: "Co-Founder, Open Source Africa", bio: "Software engineer and community builder who co-founded Open Source Africa, championing open source culture across the continent.", seed: "s1", track: "Community Strategy" },
    { name: "Timothy Oviem", role: "Lead, Community Leads in Africa", bio: "Leads one of Africa's most active community-of-practice networks, helping community professionals upskill and find their place in the ecosystem.", seed: "s2", track: "Community Leadership" },
    { name: "Haneefah A. Lekki", role: "Programs & Community Manager", bio: "Has managed programs and communities across multiple tech organisations, bridging the gap between operations and people-first culture.", seed: "s3", track: "People & Programs" },
    { name: "Mfonobong Umondia", role: "Community Manager, She Code Africa", bio: "Drives community engagement and inclusion at She Code Africa, empowering women in tech across the continent.", seed: "s4", track: "Inclusion & Diversity" },
    { name: "Ayomide Ogunrinola", role: "Community Manager, WITECH", bio: "Builds and nurtures the WITECH community, creating spaces for women in tech to thrive, collaborate, and lead.", seed: "s5", track: "Community Building" },
    { name: "Olawale Omotoso", role: "Director of Product Management", bio: "Brings a cross-functional perspective on how community integrates into product roadmaps and business strategy.", seed: "s6", track: "Product & Community" },
    { name: "Olabanji Ewenla", role: "Lead Product Manager, Enoverlab", bio: "Shapes the product vision at Enoverlab while championing community-led growth as a core business strategy.", seed: "s7", track: "Product Strategy" },
    { name: "Florence Ogunbore", role: "Product Manager", bio: "Practitioner at the intersection of product management and community, exploring how both disciplines amplify each other.", seed: "s8", track: "Product & People" },
    { name: "Emmanuel Faith", role: "Lead Consultant, VisitHRClinic", bio: "Helps organisations build people-first cultures, advising on HR strategy and community building for fast-growing teams.", seed: "s9", track: "HR & Culture" },
    { name: "Joel Moses Babatunde", role: "The Ọgá HR", bio: "Leading voice in Nigeria's HR community, speaking on workforce development and the future of people management.", seed: "s10", track: "HR & Workforce" },
  ];

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <div className="bg-cmx-dark text-white py-20 px-6 md:px-12 mt-5">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest opacity-60 mb-3">CMX Nigeria Summit</p>
          <h1 className="text-4xl md:text-6xl font-black mb-6">All Speakers</h1>
          <p className="text-xl text-gray-400 max-w-2xl">10+ industry leaders, community builders, and innovators shaping Africa's tech landscape.</p>
        </div>
      </div>
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {speakers.map((speaker, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="group bg-cmx-gray rounded-[2rem] overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative aspect-[3/2] overflow-hidden">
                  <img src={`https://picsum.photos/seed/${speaker.seed}/600/400`} alt={speaker.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" referrerPolicy="no-referrer" />
                  <div className="absolute top-4 right-4">
                    <span className="bg-cmx-blue text-white text-[10px] font-bold uppercase px-3 py-1.5 rounded-full">{speaker.track}</span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-black mb-1">{speaker.name}</h3>
                  <p className="text-cmx-blue font-semibold text-sm mb-4">{speaker.role}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{speaker.bio}</p>
                  <div className="flex gap-3 mt-6">
                    <a href="#" className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-gray-400 hover:text-cmx-blue hover:shadow-md transition-all"><Twitter size={16} /></a>
                    <a href="#" className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-gray-400 hover:text-cmx-blue hover:shadow-md transition-all"><Linkedin size={16} /></a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

// ─── Highlights (home preview) ────────────────────────────────────────────────
const Highlights = ({ onViewMore }: { onViewMore: () => void }) => (
  <section id="highlights" className="py-24">
    <div className="container-custom">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl mb-4">Past Event Highlights</h2>
        <p className="text-gray-500">A glimpse into the energy and impact of CMX Nigeria.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        <div className="col-span-2 row-span-2 rounded-[2rem] overflow-hidden">
          <img src={past2} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="rounded-[2rem] overflow-hidden">
          <img src={past1} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="rounded-[2rem] overflow-hidden">
          <img src={past3} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="col-span-2 rounded-[2rem] overflow-hidden h-64">
          <img src={past4} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
      </div>
      <div className="text-center">
        <button onClick={onViewMore} className="inline-flex items-center gap-2 bg-cmx-blue text-white px-8 py-4 rounded-full font-bold hover:shadow-lg hover:scale-105 transition-all">
          View All Highlights <ChevronRight size={18} />
        </button>
      </div>
    </div>
  </section>
);

// ─── Highlights Full Page ─────────────────────────────────────────────────────
const HighlightsPage = () => {
  const gallerySeeds = [past1,past2,past3, past4,hero,past1,past2,past3,past4,hero,past1,past2];
  const eventTypes = [
    { label: "Panel Sessions", desc: "Thought leaders debate the future of community strategy, product, and tech.", icon: <Users size={22} /> },
    { label: "Networking", desc: "Curated networking moments connecting professionals across sectors.", icon: <Handshake size={22} /> },
    { label: "Showcases", desc: "Brands and startups demo their tools and community-powered innovations.", icon: <Star size={22} /> },
    { label: "Masterclasses", desc: "Hands-on, skill-building sessions with the continent's best practitioners.", icon: <Briefcase size={22} /> },
  ];
  const stats = [
    { value: "2+", label: "Years Running" },
    { value: "500+", label: "Attendees per Event" },
    { value: "10+", label: "Speakers per Summit" },
    { value: "1", label: "Past Events" },
  ];

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <div className="bg-cmx-blue text-white py-20 px-6 md:px-12 mt-5">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest opacity-70 mb-3">Our History</p>
          <h1 className="text-4xl md:text-6xl font-black mb-6">Event Highlights</h1>
          <p className="text-xl text-white/80 max-w-2xl">Over two years of high-energy, high-impact community events — panel sessions, networking, showcases and more.</p>
        </div>
      </div>

      <section className="py-16 bg-cmx-dark text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-4xl md:text-5xl font-black text-cmx-blue mb-2">{s.value}</p>
                <p className="text-gray-400 font-semibold text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-black mb-12 text-center">What Happens at CMX Nigeria</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {eventTypes.map((et, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-cmx-gray rounded-3xl p-8 text-center">
                <div className="w-14 h-14 bg-cmx-blue text-white rounded-2xl flex items-center justify-center mx-auto mb-5">{et.icon}</div>
                <h3 className="text-xl font-black mb-3">{et.label}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{et.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="py-20 bg-cmx-gray">
        <div className="container-custom">
          <h2 className="text-3xl font-black mb-10 text-center">Photo Gallery</h2>
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {gallerySeeds.map((seed, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="break-inside-avoid rounded-2xl overflow-hidden">
                <img src={`https://picsum.photos/seed/${seed}/${400 + (i % 3) * 50}/${300 + (i % 4) * 60}`} className="w-full h-auto hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      <section className="py-20 bg-cmx-gray">
        <div className="container-custom">
          <h2 className="text-3xl font-black mb-10 text-center">
            Photo Gallery
          </h2>

          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
            {gallerySeeds.map((src, i) => {
              const heights = [
                "h-[260px]",
                "h-[320px]",
                "h-[380px]",
                "h-[300px]",
                "h-[350px]",
              ];

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="break-inside-avoid mb-4 rounded-2xl overflow-hidden"
                >
                  <div className="relative">
                    <img
                      src={src}
                      className={`w-full object-cover ${heights[i % heights.length]} hover:scale-105 transition-transform duration-500`}
                      loading="lazy"
                    />

                    <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition duration-300" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-cmx-blue text-white">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black mb-6">CMX Connect — The Series That Built This</h2>
          <p className="text-xl text-white/80 leading-relaxed mb-8">
            The CMX Nigeria Summit is the evolution of the wildly successful CMX Connect series — consistently drawing 300–500 professionals per session across Nigeria, and now scaling to a full national summit.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-bold">
            {["Ibadan", "Lagos", "Abuja", "Online"].map((city, i) => (
              <span key={i} className="bg-white/10 border border-white/20 px-6 py-2 rounded-full">{city}</span>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

// ─── Swags ────────────────────────────────────────────────────────────────────
const Swags = () => (
  <section className="py-24 bg-cmx-gray">
    <div className="container-custom">
      <div className="bg-cmx-blue rounded-[4rem] p-12 md:p-20 shadow-xl overflow-hidden relative">
        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-2 bg-cmx-orange text-cmx-gray rounded-full text-xs font-bold uppercase mb-6">Exclusive Perks</div>
            <h2 className="text-4xl text-cmx-gray md:text-5xl mb-6">Premium Swags & Goodies</h2>
            <p className="text-lg text-cmx-gray mb-8">Every attendee gets a curated CMX Nigeria gift box featuring exclusive merchandise, partner discounts, and more.</p>
            <div className="flex gap-4">
              {[{ icon: <Zap className="text-cmx-blue" />, label: "T-Shirts" }, { icon: <Globe className="text-cmx-blue" />, label: "Notebooks" }, { icon: <Rocket className="text-cmx-blue" />, label: "Stickers" }].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 bg-cmx-gray rounded-2xl flex items-center justify-center mb-2 mx-auto">{item.icon}</div>
                  <p className="text-cmx-gray text-xs font-bold">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img src={shirt} className="rounded-3xl shadow-lg" referrerPolicy="no-referrer" />
            <div className="absolute top-4 right-4 bg-cmx-blue text-white px-4 py-2 rounded-full text-xs font-bold">Limited Edition</div>
          </div>
        </div>
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-cmx-blue/5 rounded-full" />
      </div>
    </div>
  </section>
);

// ─── Sponsorship ──────────────────────────────────────────────────────────────
const Sponsorship = () => (
  <section className="py-24 bg-cmx-blue text-white">
    <div className="container-custom">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl md:text-6xl mb-6">Partner with Us</h2>
          <p className="text-xl text-white/80 mb-8">Join us in shaping the future of community in Africa. Showcase your brand to 300+ professionals.</p>
          <ul className="space-y-4 mb-10">
            {[
              "Logo on all event materials (banners, tags, fliers, souvenirs)",
              "Exclusive website slot & social media shout-outs",
              "Screen visibility throughout the event",
              "Exhibition booth with dedicated representative",
              "Keynote brand presentation on main stage",
              "Customised newsletter to all attendees pre- and post-event",
              "Featured full-page slot in digital e-magazine"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5"><ChevronRight size={14} /></div>
                <span className="font-semibold">{item}</span>
              </li>
            ))}
          </ul>
          <button className="bg-white text-cmx-blue px-10 py-4 rounded-full font-bold hover:shadow-2xl transition-all">Become a Sponsor</button>
        </div>
        <div className="bg-white/10 backdrop-blur-xl p-12 rounded-[3rem] border border-white/20">
          <h3 className="text-3xl mb-8">Sponsorship Tiers</h3>
          <div className="space-y-6">
            {[
              { name: "Platinum", benefits: "Main stage branding, keynote slot + 10 tickets" },
              { name: "Gold", benefits: "Workshop branding, exhibition booth + 5 tickets" },
              { name: "Silver", benefits: "Logo on materials, social shout-outs + 2 tickets" }
            ].map((tier, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <h4 className="text-xl font-bold mb-1">{tier.name}</h4>
                <p className="text-sm text-white/60">{tier.benefits}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ─── Footer ───────────────────────────────────────────────────────────────────
const Footer = ({ setPage }: { setPage: (p: Page) => void }) => (
  <footer className="py-20 bg-cmx-gray">
    <div className="container-custom">
      <div className="grid md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-50 h-20 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              <img src={logo2} alt="CMX Summit" className="w-full h-auto object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>
          <p className="text-gray-500 max-w-sm mb-8">The premier community for community professionals in Nigeria. Building the future of connection.</p>
          <div className="flex gap-4">
            {[Instagram, Twitter, Linkedin, Facebook].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-400 hover:text-cmx-blue hover:shadow-md transition-all"><Icon size={18} /></a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-gray-500">
            <li><button onClick={() => setPage('about')} className="hover:text-cmx-blue transition-colors">About Us</button></li>
            <li><button onClick={() => setPage('speakers')} className="hover:text-cmx-blue transition-colors">Speakers</button></li>
            <li><button onClick={() => setPage('highlights')} className="hover:text-cmx-blue transition-colors">Highlights</button></li>
            <li><a href="#" className="hover:text-cmx-blue transition-colors">Tickets</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6">Contact</h4>
          <ul className="space-y-4 text-gray-500">
            <li>Ibadan, Nigeria</li>
            <li>hello@cmxnigeria.com</li>
            <li>+234 800 000 0000</li>
          </ul>
        </div>
      </div>
      <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
        <p>© 2024 CMX Nigeria. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-cmx-blue">Privacy Policy</a>
          <a href="#" className="hover:text-cmx-blue">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

// ─── App Root ─────────────────────────────────────────────────────────────────
export default function App() {
  const [page, setPage] = useState<Page>('home');

  const handleSetPage = (p: Page) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Navbar currentPage={page} setPage={handleSetPage} />
      <AnimatePresence mode="wait">
        {page === 'home' && (
          <motion.main key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Hero />
            <ThemeSection />
            <About onViewMore={() => handleSetPage('about')} />
            <EventStructure />
            <WhatToExpect />
            <TargetAudience />
            <Speakers onViewMore={() => handleSetPage('speakers')} />
            <Highlights onViewMore={() => handleSetPage('highlights')} />
            <Swags />
            <Sponsorship />
            <Footer setPage={handleSetPage} />
          </motion.main>
        )}
        {page === 'about' && (
          <motion.div key="about" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <AboutPage />
            <Footer setPage={handleSetPage} />
          </motion.div>
        )}
        {page === 'speakers' && (
          <motion.div key="speakers" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <SpeakersPage />
            <Footer setPage={handleSetPage} />
          </motion.div>
        )}
        {page === 'highlights' && (
          <motion.div key="highlights" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <HighlightsPage />
            <Footer setPage={handleSetPage} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
