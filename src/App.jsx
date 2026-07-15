import { useState } from "react";
import "./App.css";
function BohoSunIcon({ className = "" }) {
  return (
    <svg className={`bohoIcon ${className}`} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 78a40 40 0 0 1 80 0" stroke="currentColor" strokeWidth="3" />
      <path d="M30 78a30 30 0 0 1 60 0" stroke="currentColor" strokeWidth="3" />
      <line x1="60" y1="20" x2="60" y2="32" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <line x1="27" y1="35" x2="35" y2="43" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <line x1="93" y1="35" x2="85" y2="43" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M14 92c8-6 16-6 24 0s16 6 24 0 16-6 24 0 16 6 24 0" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
function WebDesignIcon({ className = "" }) {
  return (
    <svg className={`bohoIcon ${className}`} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="18" y="28" width="84" height="58" rx="10" stroke="currentColor" strokeWidth="3" />
      <path d="M18 42h84" stroke="currentColor" strokeWidth="3" />
      <circle cx="28" cy="35" r="2.4" fill="currentColor" />
      <circle cx="37" cy="35" r="2.4" fill="currentColor" />
      <circle cx="46" cy="35" r="2.4" fill="currentColor" />
      <path d="M32 66c8-8 16-8 24 0s16 8 24 0" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <line x1="42" y1="96" x2="78" y2="96" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <line x1="60" y1="86" x2="60" y2="96" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
function RoomDesignIcon({ className = "" }) {
  return (
    <svg className={`bohoIcon ${className}`} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 62v30h80V62" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
      <path d="M20 62c0-10 8-16 18-16h44c10 0 18 6 18 16" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
      <path d="M20 78h80" stroke="currentColor" strokeWidth="3" />
      <line x1="32" y1="78" x2="32" y2="92" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <line x1="88" y1="78" x2="88" y2="92" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <circle cx="94" cy="34" r="7" stroke="currentColor" strokeWidth="3" />
      <line x1="94" y1="41" x2="94" y2="50" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
function TemplatesIcon({ className = "" }) {
  return (
    <svg className={`bohoIcon ${className}`} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="28" y="20" width="64" height="82" rx="8" stroke="currentColor" strokeWidth="3" />
      <rect x="44" y="14" width="32" height="14" rx="5" stroke="currentColor" strokeWidth="3" />
      <path d="M42 46l6 6 10-12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="66" y1="48" x2="82" y2="48" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M42 68l6 6 10-12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="66" y1="70" x2="82" y2="70" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <line x1="42" y1="88" x2="82" y2="88" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
function VideoIcon({ className = "" }) {
  return (
    <svg className={`bohoIcon ${className}`} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="16" y="34" width="62" height="52" rx="10" stroke="currentColor" strokeWidth="3" />
      <path d="M78 52l26-14v44l-26-14" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
      <path d="M40 50l16 10-16 10z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
      <line x1="26" y1="96" x2="68" y2="96" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
// ---------- Service data ----------
const services = [
  {
    id: "websites",
    emoji: "💻",
    cardTitle: "AI Website Design",
    cardTeaser: "Modern, eye-catching websites designed to feel authentic, welcoming and easy to navigate.",
    eyebrow: "Websites that work beautifully",
    title: "AI Website Design",
    description: "I create modern, mobile-friendly websites that look beautiful, feel personal and help your business show up online with confidence.",
    bullets: ["Responsive website design", "SEO-friendly page structure", "Easy-to-update content", "Contact forms and enquiry pathways", "Domain and hosting support", "AI-assisted content and design support"],
    Icon: WebDesignIcon,
  },
  {
    id: "branding",
    emoji: "🎨",
    cardTitle: "Logos & Branding",
    cardTeaser: "Unique logo concepts, colour direction and brand ideas that help your business get noticed.",
    eyebrow: "Brands that feel like you",
    title: "Logos & Branding",
    description: "From logo concepts to full brand identity, I help create visual direction that feels warm, memorable and aligned to your business.",
    bullets: ["Logo design concepts", "Colour palettes", "Typography direction", "Business cards", "Social media graphics", "Brand style direction"],
    Icon: BohoSunIcon,
  },
  {
    id: "grants",
    emoji: "📝",
    cardTitle: "Grants & Tenders",
    cardTeaser: "Strategic writing support to help you explain your value clearly and confidently.",
    eyebrow: "Turning good ideas into clear applications",
    title: "Applications, Grants & Tenders",
    description: "I help businesses and organisations explain their value clearly, professionally and strategically so applications feel polished, purposeful and easy to understand.",
    bullets: ["Government grants", "Tender responses", "Capability statements", "Business cases", "Expressions of interest", "Award applications", "Government acquittals", "Strategic report writing"],
    Icon: BohoSunIcon,
  },
  {
    id: "storytelling",
    emoji: "📸",
    cardTitle: "Digital Storytelling",
    cardTeaser: "Creative words, visuals and messaging that bring your story to life with pop.",
    eyebrow: "Stories that connect",
    title: "Digital Storytelling",
    description: "Every business has a story worth telling. I help bring that story to life through words, visuals and messaging that feel clear, confident and memorable.",
    bullets: ["Website copy", "About pages", "Social media content", "Newsletters", "Case studies", "Marketing material"],
    Icon: BohoSunIcon,
  },
  {
    id: "roomdesign",
    emoji: "🛋️",
    cardTitle: "Room Design",
    cardTeaser: "Warm, considered interiors and styling advice that turn a space into somewhere you actually want to be.",
    eyebrow: "Spaces that feel like you",
    title: "Room Design",
    description: "Two ways to work together: send through a photo of your room for a quick AI-generated concept from $50, or go all in with a full styling plan and mood board.",
    bullets: ["AI room concepts from a single photo", "Room layout & styling plans", "Colour & texture direction", "Furniture & decor sourcing", "Mood boards", "Coastal & boho interior styling"],
    Icon: RoomDesignIcon,
  },
  {
    id: "templates",
    emoji: "📋",
    cardTitle: "Templates & Business Tools",
    cardTeaser: "Custom templates and trackers that save you time and keep your business organised, built around the way you work.",
    eyebrow: "Systems that save you time",
    title: "Templates & Business Tools",
    description: "Beautiful, practical templates designed to save time and keep your business organised. From newsletters and client documents to tracking systems, project planners and operational logbooks — every template is customised to the way you work.",
    bullets: ["Business documents & Word templates", "Trackers, registers & KPI dashboards", "Operational logbooks & checklists", "Newsletters & marketing templates", "Notion, Smartsheet & AI-powered workflows", "Custom-built to suit your business"],
    Icon: TemplatesIcon,
  },
  {
    id: "video",
    emoji: "🎬",
    cardTitle: "Video & Social Content",
    cardTeaser: "Help growing your YouTube channel, TikTok or Facebook page — content made to pop into impact.",
    eyebrow: "Content that gets watched",
    title: "Video & Social Content",
    description: "Whether you need help getting a YouTube channel off the ground, keeping up a consistent TikTok presence, or making your Facebook page actually work for your business — I make video content that feels authentic, on-brand and made to pop into impact, not just noise in the feed.",
    bullets: ["YouTube channel strategy & growth", "TikTok content creation", "Facebook page content & management", "Instagram Reels", "Scripting, filming & editing", "Content calendars & posting schedules"],
    Icon: VideoIcon,
  },
];
function Nav({ onHome, showHome }) {
  return (
    <nav className="mainNav">
      
        href="#home"
        className="brandLogo"
        onClick={(e) => {
          e.preventDefault();
          onHome();
        }}>
        <span className="brandScript">Positive</span>
        <span className="brandBlock">Popcorn</span>
      </a>
      <div className="navLinks">
        {showHome && (
          
            href="#home"
            className="homeLink"
            onClick={(e) => {
              e.preventDefault();
              onHome();
            }}>
            ← Home
          </a>
        )}
        {!showHome && (
          <>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact">Contact</a>
          </>
        )}
      </div>
    </nav>
  );
}
function ServicePage({ service, onHome }) {
  const Icon = service.Icon;
  return (
    <>
      <section className="splitSection servicePage">
        <div>
          <p className="eyebrow">{service.eyebrow}</p>
          <h2>{service.title}</h2>
          <p>{service.description}</p>
          <ul>
            {service.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          <a href="mailto:melanieorr@gmail.com" className="button">
            Get in Touch
          </a>
        </div>
        <div className="featureVisual">
          <Icon />
        </div>
      </section>
      <div className="backToHomeRow">
        
          href="#home"
          className="backLink"
          onClick={(e) => {
            e.preventDefault();
            onHome();
          }}>
          ← Back to Home
        </a>
      </div>
    </>
  );
}
function App() {
  const [page, setPage] = useState("home");
  const goHome = () => {
    setPage("home");
    window.scrollTo(0, 0);
  };
  const goToService = (id) => {
    setPage(id);
    window.scrollTo(0, 0);
  };
  const activeService = services.find((s) => s.id === page);
  return (
    <main className="siteWrapper">
      <Nav onHome={goHome} showHome={page !== "home"} />
      {page !== "home" && activeService && (
        <ServicePage service={activeService} onHome={goHome} />
      )}
      {page === "home" && (
        <>
          {/* HERO */}
          <section id="home" className="hero">
            <img
              src="/hero1.png"
              alt="Positive Popcorn coastal sunset hero"
              className="heroImage"
            />
            <div className="heroContent">
              <div className="heroButtons">
                <a href="#services" className="button">
                  Explore Services
                </a>
                <a href="#contact" className="button secondary">
                  Get in Touch
                </a>
              </div>
            </div>
          </section>
          {/* SERVICES OVERVIEW */}
          <section id="services" className="section servicesIntro">
            <p className="eyebrow">What I can help with</p>
            <h2>Creative support for your next big idea.</h2>
            <div className="servicesGrid">
              {services.map((service) => (
                
                  key={service.id}
                  href={`#${service.id}`}
                  className="serviceCard"
                  onClick={(e) => {
                    e.preventDefault();
                    goToService(service.id);
                  }}>
                  <div className="serviceIcon">{service.emoji}</div>
                  <h3>{service.cardTitle}</h3>
                  <p>{service.cardTeaser}</p>
                  <span>Learn more →</span>
                </a>
              ))}
            </div>
          </section>
          {/* PORTFOLIO */}
          <section id="portfolio" className="section portfolioSection">
            <p className="eyebrow">Real projects. Real stories. Real results.</p>
            <h2>From idea to impact.</h2>
            <p className="portfolioIntro">
              Every great project starts with an idea. Sometimes it’s a
              sketch on paper. Sometimes it’s a conversation over coffee.
              Sometimes it’s someone saying, “I’ve always wanted to...” Here
              are a few ideas I’ve had the privilege of bringing to life.
            </p>
            <div className="projectGrid">
              <div className="projectCard">
                <div className="projectVisual">
                  <img src="/portfolio-mike.png" alt="Mike Hamilton consulting website" />
                </div>
                <div className="projectBody">
                  <p className="eyebrow">Executive Consultant | Website &amp; Brand</p>
                  <h3>Mike Hamilton</h3>
                  <p>
                    Helping one of Australia’s most experienced VET leaders
                    establish a professional consulting brand through a
                    modern website, clear messaging and polished business
                    resources.
                  </p>
