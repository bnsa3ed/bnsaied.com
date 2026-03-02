import { useEffect, useRef, useState, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ExternalLink, FileDown, Linkedin, Youtube, Instagram, X, Mail, Menu } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

gsap.registerPlugin(ScrollTrigger);

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const PROJECTS = [
  {
    id: 1,
    title: 'Cinematic Showreel',
    desc: 'A collection of finest visual stories and high-end execution.',
    type: 'Showreel',
    thumbnailVideo: 'https://cdn.bnsaied.com/showreel/showreel.mp4',
    colSpan: 'col-span-1 md:col-span-3',
    video: 'https://cdn.bnsaied.com/showreel/showreel.mp4'
  },
  {
    id: 2,
    title: 'Social Media Reels',
    desc: 'Optimized for 9:16 engagement, vertical storytelling, and dynamic pacing.',
    type: 'Social / Reels',
    thumbnailVideo: 'https://cdn.bnsaied.com/reels/AEE%20Final.mp4',
    colSpan: 'col-span-1 md:col-span-2',
    videoList: [
      'https://cdn.bnsaied.com/reels/AEE%20Final.mp4',
      'https://cdn.bnsaied.com/reels/Video1.mp4',
      'https://cdn.bnsaied.com/reels/video%201.mp4',
      'https://cdn.bnsaied.com/reels/%D8%A7%D8%B9%D9%84%D8%A7%D9%86%20%D9%83%D9%84%D8%A7%D8%B3%20%D8%A7%D9%84%D8%AA%D8%A7%D9%94%D8%B3%D9%8A%D8%B3.MP4',
      'https://cdn.bnsaied.com/reels/%D8%A7%D9%83%D8%AA%D8%A8%20%D8%AA%D9%81%D8%A7%D8%B5%D9%8A%D9%84.mp4',
      'https://cdn.bnsaied.com/reels/%D9%84%D9%85%D8%A7%20%D8%A8%D8%AF%D9%8A%D8%AA%20%D8%A7%D8%B0%D8%A7%D9%83%D8%B1%20%D9%82%D8%AF%D8%B1%D8%A7%D8%AA%20%20-%20%D8%A7%D9%84%D8%A8%D8%A7%D9%8A%D9%88.mp4'
    ]
  },
  {
    id: 3,
    title: 'AI Productivity Tools',
    desc: 'Internal team plugins and workflows built with VibeCoding for generative video and editing efficiency.',
    type: 'UX / Tools',
    image: 'https://cdn.bnsaied.com/tools/dalilk-plugin-interface.jpg',
    colSpan: 'col-span-1 md:col-span-3',
    gallery: [
      'https://cdn.bnsaied.com/tools/dalilk-plugin-interface.jpg',
      'https://cdn.bnsaied.com/tools/dalilk-web-dashboard.jpg',
      'https://cdn.bnsaied.com/tools/genvideo%20ai.PNG',
      'https://cdn.bnsaied.com/tools/team-hub-dashboard.jpg',
      'https://cdn.bnsaied.com/tools/team-hub-details.jpg',
      'https://cdn.bnsaied.com/tools/team-hub-kanban.jpg',
      'https://cdn.bnsaied.com/tools/team-hub-login.jpg'
    ]
  }
];

const AI_VIDEOS = [
  "https://cdn.bnsaied.com/Ai/backyardai.mp4",
  ...Array(7).fill(null)
];

export default function App() {
  const containerRef = useRef(null);
  const cursorRef = useRef(null);
  const scrollProgressRef = useRef(null);
  const curtainRef = useRef(null);

  // Hover & Modal States
  const [isHovering, setIsHovering] = useState(false);
  const [lightboxData, setLightboxData] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Setup Core Infrastructure (Cursor & Curtain)
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Intro Curtain Animation
      gsap.to(curtainRef.current, {
        yPercent: -100,
        duration: 1.2,
        ease: 'power4.inOut',
        delay: 0.1,
      });

      // Scroll Progress
      gsap.to(scrollProgressRef.current, {
        scaleX: 1,
        transformOrigin: "left center",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0,
        }
      });

      // Hero Stagger Animation
      gsap.fromTo(".hero-char",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.07,
          ease: 'power3.out',
          delay: 0.6
        }
      );

      gsap.fromTo(".hero-fade",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.2,
          ease: 'power3.out',
          delay: 1.4
        }
      );

      gsap.fromTo(".hero-bg-anim",
        { opacity: 0, scale: 1.05 },
        {
          opacity: 1,
          scale: 1,
          duration: 2,
          ease: 'power2.out',
          delay: 0.8
        }
      );

      // Work Gallery Animation
      gsap.fromTo(".project-card",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.12,
          scrollTrigger: {
            trigger: "#work",
            start: "top 80%",
          }
        }
      );

      // About Section Animation
      gsap.fromTo(".about-img-wrap",
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: "#about",
            start: "top 75%",
          }
        }
      );

      // Skills Ticker Animation
      gsap.to(".skill-rail-1", {
        xPercent: -50,
        ease: "none",
        duration: 20,
        repeat: -1,
      });

      gsap.to(".skill-rail-2", {
        xPercent: 50,
        ease: "none",
        duration: 25,
        repeat: -1,
        // start further left so it can scroll right seamlessly
        modifiers: {
          xPercent: gsap.utils.unitize(x => parseFloat(x) - 50)
        }
      });

      // Process Cards Stacking Animation
      const processCards = gsap.utils.toArray('.process-card');
      processCards.forEach((card, i) => {
        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          end: "bottom+=100% top",
          pin: true,
          pinSpacing: false,
          scrub: true,
        });

        // If not the last card, animate it out when the next one covers it
        if (i !== processCards.length - 1) {
          gsap.to(card, {
            scale: 0.92,
            opacity: 0.3,
            filter: "blur(4px)",
            ease: "none",
            scrollTrigger: {
              trigger: processCards[i + 1],
              start: "top bottom",
              end: "top top",
              scrub: true,
            }
          });
        }
      });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  // Custom Cursor
  useEffect(() => {
    let ctx = gsap.context(() => {
      const xTo = gsap.quickTo(cursorRef.current, "x", { duration: 0.1, ease: "power3.out" });
      const yTo = gsap.quickTo(cursorRef.current, "y", { duration: 0.1, ease: "power3.out" });

      const moveCursor = (e) => {
        xTo(e.clientX);
        yTo(e.clientY);
      };

      window.addEventListener("mousemove", moveCursor);
      return () => window.removeEventListener("mousemove", moveCursor);
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-background text-text selection:bg-accent/30 selection:text-text rounded-[0px]">
      {/* Scroll Progress */}
      <div
        ref={scrollProgressRef}
        className="fixed top-0 left-0 w-full h-[2px] bg-accent z-[120] origin-left scale-x-0"
      />

      {/* Intro Curtain */}
      <div
        ref={curtainRef}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-accent"
      >
        <span className="text-mono-small text-background animate-pulse">
          Initializing.
        </span>
      </div>

      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className={cn(
          "fixed top-0 left-0 w-10 h-10 border border-accent rounded-full pointer-events-none z-[60] -translate-x-1/2 -translate-y-1/2 mix-blend-difference transition-all duration-300 hidden md:block",
          isHovering ? "scale-[1.8] bg-text border-text mix-blend-exclusion" : "scale-100 bg-transparent"
        )}
      />

      {/* Mobile Header */}
      <div className="fixed top-0 left-0 w-full z-50 p-6 flex justify-end md:hidden pointer-events-none">
        <button
          className="pointer-events-auto p-4 bg-background/80 backdrop-blur-md rounded-full border border-surface text-text hover:text-accent transition-colors"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={cn(
        "fixed inset-0 z-[200] bg-background/95 backdrop-blur-3xl flex flex-col items-center justify-center transition-all duration-500 md:hidden",
        isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}>
        <button
          className="absolute top-6 right-6 p-4 rounded-full bg-surface hover:bg-accent text-background transition-colors"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <X className="w-6 h-6" />
        </button>
        <div className="flex flex-col items-center gap-10 text-2xl font-mono uppercase tracking-widest text-text">
          <a href="#work" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-accent transition-colors">Work</a>
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-accent transition-colors">About</a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-accent transition-colors">Contact</a>
          <a href="https://cdn.bnsaied.com/others/Mohamed%20Said%20CV%202025%20UPDATED%202.pdf" target="_blank" rel="noreferrer" className="text-accent hover:text-text transition-colors">CV</a>
        </div>
      </div>

      {/* Navbar Minimal */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-40 px-8 py-3 rounded-full transition-all duration-300 bg-background/70 backdrop-blur-xl border border-surface mix-blend-difference hidden md:block">
        <div className="flex items-center gap-10 text-mono-small text-text">
          <a href="#work" className="hover:text-accent transition-colors" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>Work</a>
          <a href="#about" className="hover:text-accent transition-colors" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>About</a>
          <a href="#contact" className="hover:text-accent transition-colors" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>Contact</a>
          <a href="https://cdn.bnsaied.com/others/Mohamed%20Said%20CV%202025%20UPDATED%202.pdf" target="_blank" rel="noreferrer" className="text-accent hover:text-text transition-colors" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>CV</a>
        </div>
      </nav>

      {/* ----------------- HERO SECTION ----------------- */}
      <section className="relative h-[100dvh] flex flex-col justify-center px-6 md:px-20 pt-20 overflow-hidden">
        {/* Abstract Creative Background */}
        <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-end md:justify-center overflow-hidden opacity-0 hero-bg-anim">
          {/* Subtle glowing ambient light */}
          <div className="absolute right-[-10%] top-[10%] w-[600px] h-[600px] rounded-full bg-accent/20 blur-[120px] mix-blend-screen animate-[pulse_10s_ease-in-out_infinite]" />

          {/* Geometric wireframe accent */}
          <div className="w-[150%] h-[150%] md:w-[120%] md:h-[120%] absolute -right-1/4 top-[-20%] opacity-20 animate-[spin_120s_linear_infinite]">
            <svg viewBox="0 0 100 100" className="w-full h-full text-accent" style={{ mixBlendMode: 'screen' }}>
              <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.05" />
              <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.1" strokeDasharray="1 3" />
              <circle cx="50" cy="50" r="32" fill="none" stroke="currentColor" strokeWidth="0.05" />
              <path d="M50,2 L50,98 M2,50 L98,50" stroke="currentColor" strokeWidth="0.05" strokeDasharray="1 5" />
              <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="0.1" />
              <circle cx="50" cy="50" r="5" fill="currentColor" opacity="0.4" />
            </svg>
          </div>
        </div>

        <div className="max-w-7xl w-full mx-auto relative z-10">
          <h1 className="text-drama text-5xl sm:text-7xl md:text-9xl leading-[1.1] md:leading-[0.9] overflow-hidden -ml-1 md:-ml-2 mb-4">
            {"Mohamed Said.".split('').map((char, index) => (
              <span key={index} className="inline-block hero-char">
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </h1>

          <div className="flex flex-col md:flex-row md:items-center justify-between mt-8 md:mt-16 gap-8">
            <div className="hero-fade max-w-xl">
              <p className="text-mono-small mb-4 text-accent">Senior Multimedia Producer</p>
              <p className="text-lg md:text-2xl font-sans font-light leading-relaxed text-text/80">
                Turning Ideas into visual stories.
                Focusing on high-end video editing, videography, and AI tools integration.
              </p>
            </div>

            <div className="hero-fade flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-mono-small">Available for work — 2026</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hero-fade absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
          <span className="text-mono-small">Scroll</span>
          <div className="w-[1px] h-12 bg-accent/30 overflow-hidden relative">
            <div className="w-full h-full bg-accent absolute top-[-100%] animate-[scrollLine_2s_infinite]" />
          </div>
        </div>
      </section>

      {/* ----------------- WORK SECTION ----------------- */}
      <section id="work" className="py-32 px-6 md:px-20 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl text-drama mb-16">Selected Work.</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className={cn("project-card relative group cursor-pointer overflow-hidden rounded-4xl bg-surface/50", project.colSpan)}
              onClick={() => setLightboxData(project)}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div className="aspect-[4/3] md:aspect-auto md:h-[400px] w-full overflow-hidden bg-black/50">
                {project.thumbnailVideo ? (
                  <video
                    src={project.thumbnailVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover grayscale mix-blend-luminosity opacity-60 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0 group-hover:mix-blend-normal transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
                  />
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale mix-blend-luminosity opacity-60 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0 group-hover:mix-blend-normal transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
                  />
                )}
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-100 flex flex-col justify-end p-8">
                <span className="text-mono-small text-accent mb-3 inline-block px-3 py-1 bg-background/50 backdrop-blur-md rounded-full w-fit">
                  {project.type}
                </span>
                <h3 className="text-3xl font-sans font-medium mb-2">{project.title}</h3>
                <p className="text-text/70">{project.desc}</p>

                {/* View CTA Overlay */}
                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[power3.out] bg-accent/90 backdrop-blur-md flex items-center justify-between">
                  <span className="font-mono uppercase tracking-widest text-sm font-semibold">Play Project</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Work Lightbox Modal */}
      {lightboxData && (
        <div className="fixed inset-0 z-[200] bg-background/95 backdrop-blur-3xl flex items-center justify-center p-6 md:p-12 animate-in fade-in duration-300 overflow-y-auto">
          <button
            onClick={() => setLightboxData(null)}
            className="fixed top-8 right-8 z-[300] p-4 rounded-full bg-surface hover:bg-accent hover:text-background transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="w-full max-w-7xl mx-auto flex flex-col pt-16 pb-8 min-h-full justify-start">
            <div className="mb-12">
              <span className="text-mono-small text-accent mb-4 block">{lightboxData.type}</span>
              <h2 className="text-5xl md:text-7xl text-drama mb-4">{lightboxData.title}</h2>
              <p className="text-xl font-light text-text/80 leading-relaxed max-w-3xl">
                {lightboxData.desc}
              </p>
            </div>

            <div className="w-full flex-grow flex flex-col justify-center">
              {/* Main Showreel Video */}
              {lightboxData.video && (
                <div className="w-full aspect-video bg-black/50 rounded-4xl overflow-hidden border border-surface/50 shadow-2xl">
                  <video
                    src={lightboxData.video}
                    controls
                    preload="metadata"
                    autoPlay
                    className="w-full h-full object-contain bg-black"
                  />
                </div>
              )}

              {/* Gallery for Images (e.g., Tools) */}
              {lightboxData.gallery && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {lightboxData.gallery.map((imgUrl, idx) => (
                    <div key={idx} className="aspect-video md:aspect-square lg:aspect-[4/3] rounded-3xl overflow-hidden bg-surface/30 group">
                      <img
                        src={imgUrl}
                        alt="Project screenshot"
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* Video List for Reels ( Vertical Videos ) */}
              {lightboxData.videoList && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                  {lightboxData.videoList.map((vidUrl, idx) => (
                    <div key={idx} className="aspect-[9/16] bg-surface rounded-[2rem] overflow-hidden border border-surface/50 shadow-xl relative group">
                      <video
                        src={vidUrl}
                        controls
                        preload="metadata"
                        className="w-full h-full object-cover bg-black"
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* Removed redundant videoPlaceholders renderer because it has been moved to its own section */}
            </div>
          </div>
        </div>
      )}

      {/* ----------------- ABOUT SECTION ----------------- */}
      <section id="about" className="py-32 px-6 md:px-20 bg-surface/30 relative">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">
          <div className="w-full md:w-1/2 aspect-square md:aspect-[4/5] overflow-hidden rounded-[3rem] relative about-img-wrap">
            <img
              src="/IMG_0838.PNG"
              alt="Mohamed Said Portrait"
              className="w-full h-full object-cover grayscale mix-blend-luminosity hover:grayscale-0 transition-all duration-700 hover:scale-105"
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h2 className="text-xl md:text-2xl font-sans font-light text-text/60 mb-2">
              I'm not exactly a standard creator.
            </h2>
            <h2 className="text-4xl md:text-6xl text-drama mb-10">
              I'm a <span className="text-accent not-italic font-sans font-medium tracking-tight">visual architect.</span>
            </h2>
            <p className="text-lg text-text/80 font-light leading-relaxed mb-12 max-w-lg">
              Every cut is calculated. Every frame holds intent. With deep expertise across high-end videography and AI-driven video synthesis, I don't just capture moments—I engineer visual experiences that demand attention.
            </p>

            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-surface/50">
              <div>
                <span className="text-4xl text-accent font-serif tracking-tight about-stat">
                  Reacting
                </span>
                <p className="text-mono-small mt-2">To The Moment</p>
              </div>
              <div>
                <span className="text-4xl text-accent font-serif tracking-tight about-stat">
                  Crafting
                </span>
                <p className="text-mono-small mt-2">The Future</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- AI VIDEOS SECTION ----------------- */}
      <section id="ai-videos" className="py-32 px-6 md:px-20 bg-background max-w-7xl mx-auto border-t border-surface">
        <div className="mb-16">
          <span className="text-mono-small text-accent mb-4 block">Future Generation</span>
          <h2 className="text-4xl md:text-6xl text-drama mb-4">Synthesized Reality.</h2>
          <p className="text-lg text-text/60 max-w-2xl font-light">
            Fully generated and strictly prompted AI videos pushing the boundaries of what is possible without a camera.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {AI_VIDEOS.map((videoUrl, idx) => (
            <div
              key={idx}
              className={cn("aspect-video bg-surface/30 rounded-[2rem] border border-surface flex flex-col items-center justify-center p-8 relative overflow-hidden group transition-colors", videoUrl ? "cursor-pointer hover:bg-surface/50" : "")}
              onClick={() => {
                if (videoUrl) {
                  setLightboxData({
                    title: 'Synthesized Reality',
                    type: 'AI Generation',
                    desc: 'Fully generated sequence using advanced prompt engineering and AI video models. No traditional camera was used for this footage.',
                    video: videoUrl
                  });
                }
              }}
              onMouseEnter={() => videoUrl && setIsHovering(true)}
              onMouseLeave={() => videoUrl && setIsHovering(false)}
            >
              {videoUrl ? (
                <video
                  src={videoUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                />
              ) : (
                <>
                  <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="w-12 h-12 rounded-full border border-accent/30 flex items-center justify-center relative mb-4 group-hover:scale-110 transition-transform">
                    <div className="w-2 h-2 rounded-full bg-accent animate-ping absolute" />
                    <div className="w-2 h-2 rounded-full bg-accent relative" />
                  </div>
                  <span className="font-mono text-xs text-accent tracking-widest uppercase text-center">Processing</span>
                  <span className="opacity-40 text-[10px] mt-2 text-center uppercase tracking-widest">Incoming Render</span>
                </>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ----------------- SKILLS SECITON ----------------- */}
      <section id="skills" className="py-32 overflow-hidden bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-20 mb-16 text-center">
          <span className="text-mono-small text-accent mb-4 block">The Arsenal</span>
          <h2 className="text-4xl text-drama">Precision tools for modern storytelling.</h2>
        </div>

        {/* Rail 1 (Left to Right) */}
        <div className="flex w-max mb-6 gap-6 skill-rail-1 whitespace-nowrap px-6">
          {[...Array(3)].map((_, i) => (
            <div key={`rail-1-${i}`} className="flex gap-6">
              <span className="px-8 py-4 rounded-full border border-surface bg-surface/20 text-lg font-mono">Video Editing</span>
              <span className="px-8 py-4 rounded-full border border-surface bg-surface/20 text-lg font-mono text-accent">DaVinci Resolve</span>
              <span className="px-8 py-4 rounded-full border border-surface bg-surface/20 text-lg font-mono">Adobe Premiere</span>
              <span className="px-8 py-4 rounded-full border border-surface bg-surface/20 text-lg font-mono text-accent">After Effects</span>
              <span className="px-8 py-4 rounded-full border border-surface bg-surface/20 text-lg font-mono">Color Grading</span>
            </div>
          ))}
        </div>

        {/* Rail 2 (Right to Left) */}
        <div className="flex w-max gap-6 skill-rail-2 whitespace-nowrap px-6">
          {[...Array(3)].map((_, i) => (
            <div key={`rail-2-${i}`} className="flex gap-6">
              <span className="px-8 py-4 rounded-full border border-surface bg-surface/20 text-lg font-mono text-accent">Videography</span>
              <span className="px-8 py-4 rounded-full border border-surface bg-surface/20 text-lg font-mono">AI Videos</span>
              <span className="px-8 py-4 rounded-full border border-surface bg-surface/20 text-lg font-mono">Midjourney</span>
              <span className="px-8 py-4 rounded-full border border-surface bg-surface/20 text-lg font-mono text-accent">Runway Gen-3</span>
              <span className="px-8 py-4 rounded-full border border-surface bg-surface/20 text-lg font-mono">ComfyUI</span>
            </div>
          ))}
        </div>
      </section>

      {/* ----------------- PROCESS SECTION ----------------- */}
      <section id="process" className="bg-background relative">
        {/* We use sticky positioning for the stacking effect */}
        <div className="process-card sticky top-0 h-[100dvh] bg-background flex flex-col justify-center px-6 md:px-20 border-t border-surface overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-end pr-20">
            <svg viewBox="0 0 100 100" className="w-[80vh] h-[80vh] text-text animate-[spin_60s_linear_infinite]">
              <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
              <line x1="5" y1="50" x2="95" y2="50" stroke="currentColor" strokeWidth="0.2" />
              <line x1="50" y1="5" x2="50" y2="95" stroke="currentColor" strokeWidth="0.2" />
            </svg>
          </div>
          <div className="max-w-7xl mx-auto w-full z-10">
            <span className="text-display-mono text-7xl sm:text-9xl md:text-[12rem] text-surface font-black absolute top-10 left-6 md:left-20 -z-10 select-none">01</span>
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-8xl text-drama mb-6 md:mb-8">Conceptualize.</h2>
              <p className="text-xl md:text-2xl font-light text-text/80 leading-relaxed">
                Before the timeline opens, the story is engineered. Understanding the core brand architecture and mapping exactly how AI and traditional footage will seamlessly merge.
              </p>
            </div>
          </div>
        </div>

        <div className="process-card sticky top-0 h-[100dvh] bg-[#111113] flex flex-col justify-center px-6 md:px-20 border-t border-surface overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-end pr-20">
            <div className="w-[80vh] h-[80vh] border border-surface rounded-full flex items-center justify-center relative">
              <div className="absolute w-full h-[1px] bg-accent/50 animate-[pulse_2s_ease-in-out_infinite]" style={{ top: '50%' }} />
            </div>
          </div>
          <div className="max-w-7xl mx-auto w-full z-10">
            <span className="text-display-mono text-7xl sm:text-9xl md:text-[12rem] text-surface font-black absolute top-10 left-6 md:left-20 -z-10 select-none">02</span>
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-8xl text-drama mb-6 md:mb-8">Synthesize.</h2>
              <p className="text-xl md:text-2xl font-light text-text/80 leading-relaxed">
                The execution phase. Blending high-end camera work with advanced generative models to produce assets that feel impossibly perfect, yet entirely grounded.
              </p>
            </div>
          </div>
        </div>

        <div className="process-card sticky top-0 h-[100dvh] bg-[#1a1a1e] flex flex-col justify-center px-6 md:px-20 border-t border-surface overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-end pr-20">
            <svg viewBox="0 0 100 100" className="w-[80vh] h-[80vh] text-text">
              <path d="M0,50 Q25,10 50,50 T100,50" fill="none" stroke="currentColor" strokeWidth="0.5" className="animate-[pulse_3s_infinite]" />
            </svg>
          </div>
          <div className="max-w-7xl mx-auto w-full z-10">
            <span className="text-display-mono text-7xl sm:text-9xl md:text-[12rem] text-surface font-black absolute top-10 left-6 md:left-20 -z-10 select-none">03</span>
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-8xl text-drama mb-6 md:mb-8">Finalize.</h2>
              <p className="text-xl md:text-2xl font-light text-text/80 leading-relaxed">
                Relentless pacing, precise color science, and dynamic sound design. Every element is refined until the final output isn't just watched—it's experienced.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- CONTACT SECTION ----------------- */}
      <section id="contact" className="py-32 px-6 md:px-20 bg-surface rounded-t-[3rem] mt-[-3rem] relative z-20">
        <div className="max-w-7xl mx-auto pt-16 pb-20 border-b border-text/10">
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-sans font-bold tracking-tight mb-4 leading-tight">Let's build something</h2>
          <h2 className="text-4xl sm:text-6xl md:text-8xl text-drama mb-16 text-accent leading-tight">worth remembering.</h2>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
            <a
              href="https://cdn.bnsaied.com/others/Mohamed%20Said%20CV%202025%20UPDATED%202.pdf"
              target="_blank"
              className="magnetic-button px-12 py-5 bg-text text-background rounded-full font-mono uppercase tracking-widest text-sm inline-flex gap-3 hover:bg-accent hover:text-white"
            >
              View My CV <FileDown className="w-4 h-4" />
            </a>

            <button
              className="group flex items-center gap-3 text-text/60 hover:text-text transition-colors"
              onClick={(e) => {
                navigator.clipboard.writeText('contact@bnsaied.com');
                const span = e.currentTarget.querySelector('span');
                const oldText = span.innerText;
                span.innerText = 'Copied ✓';
                setTimeout(() => span.innerText = oldText, 2000);
              }}
            >
              <Mail className="w-5 h-5 transition-transform group-hover:scale-110" />
              <span className="font-mono text-lg transition-all">contact@bnsaied.com</span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="max-w-7xl mx-auto mt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-text/50 font-sans">Mohamed Said © 2026</div>

          <div className="flex items-center gap-8">
            <a href="https://www.linkedin.com/in/bnsaied" target="_blank" rel="noreferrer" className="text-text/50 hover:text-text transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href="https://www.instagram.com/mosacontent" target="_blank" rel="noreferrer" className="text-text/50 hover:text-text transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="https://youtube.com/@mohammedsaeedai" target="_blank" rel="noreferrer" className="text-text/50 hover:text-text transition-colors"><Youtube className="w-5 h-5" /></a>
          </div>

          <div className="flex items-center gap-3 text-text/50 font-mono text-xs uppercase tracking-widest">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Status: Creating
          </div>
        </div>
      </section>

      {/* Global Style overrides for keyframes */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes scrollLine {
          0% { top: -100%; }
          100% { top: 100%; }
        }
      `}} />
    </div>
  );
}
