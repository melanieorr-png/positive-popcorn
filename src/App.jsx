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
      <a
        href="#home"
        className="brandLogo"
        onClick={(e) => {
          e.preventDefault();
          onHome();
        }}
      >
        <span className="brandScript">Positive</span>
        <span className="brandBlock">Popcorn</span>
      </a>

      <div className="navLinks">
        {showHome && (
          <a
            href="#home"
            className="homeLink"
            onClick={(e) => {
              e.preventDefault();
              onHome();
            }}
          >
            ← Home
          </a>
        )}
        {!showHome && (
          <>
            <a href="#about">About</a>
            <a href="#services">Services</a>
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
        <a
          href="#home"
          className="backLink"
          onClick={(e) => {
            e.preventDefault();
            onHome();
          }}
        >
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
              <p>
                Helping businesses, community organisations and professionals
                stand out with heart, clarity and creativity.
              </p>
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
                <a
                  key={service.id}
                  href={`#${service.id}`}
                  className="serviceCard"
                  onClick={(e) => {
                    e.preventDefault();
                    goToService(service.id);
                  }}
                >
                  <div className="serviceIcon">{service.emoji}</div>
                  <h3>{service.cardTitle}</h3>
                  <p>{service.cardTeaser}</p>
                  <span>Learn more →</span>
                </a>
              ))}
            </div>
          </section>

          {/* ABOUT */}
          <section id="about" className="aboutSection">
            <div>
              <p className="eyebrow">About Mel</p>
              <h2>Creative thinking backed by real-world experience.</h2>

              <p>Hi, I’m Mel, founder of Positive Popcorn.</p>

              <p>
                I believe every great idea deserves to be presented
                beautifully — whether that’s through a website, a brand, a
                funding application or a well-designed business system.
              </p>

              <p>
                For many years I’ve worked across government, education and
                industry, leading strategic projects, executive
                communications and large-scale reporting. Along the way I
                discovered that my favourite part of every role was helping
                people take an idea and turn it into something people could
                genuinely connect with.
              </p>

              <p>That’s why I created Positive Popcorn.</p>

              <p>
                Today I help small businesses, creators and organisations
                bring their ideas to life through thoughtful design, clear
                communication and practical business solutions.
              </p>

              <p>
                From AI-powered websites and branding to grant writing,
                templates, content creation and creative strategy, I love
                building things that are not only beautiful but genuinely
                useful.
              </p>

              <p>
                Whether you’re starting from scratch or looking to refresh
                what you’ve already built, I’d love to help make your next
                idea pop.
              </p>

              <p>
                Alongside Positive Popcorn, I provide strategic reporting and
                grant writing support, drawing on extensive experience
                preparing executive reports, funding acquittals and
                government documentation. I understand how to communicate
                complex information clearly and what funding bodies are
                looking for when assessing applications.
              </p>

              <h3>Why work with me?</h3>
              <ul className="whyList">
                <li>✔ Creative with a strategic mindset</li>
                <li>✔ Real experience across government, education and business</li>
                <li>✔ Friendly, collaborative approach</li>
                <li>✔ AI-powered tools that save you time</li>
                <li>✔ Beautiful design with practical outcomes</li>
                <li>✔ One-on-one support from start to finish</li>
              </ul>

              <h3>A little about me...</h3>
              <p>
                When I’m not designing websites or creating content, you’ll
                usually find me exploring the Northern Territory, camping,
                prospecting for gold, or dreaming up the next creative
                project over a good coffee.
              </p>

              <p>
                I believe the best ideas often come from getting outside,
                slowing down and seeing things differently.
              </p>

              <p>
                <strong>Let’s create something you’re proud to share.</strong>
              </p>

              <a href="#contact" className="button">
                Let’s Work Together
              </a>
            </div>

            <div className="aboutVisual">
              <img src="/mel-photo.jpeg" alt="Mel, founder of Positive Popcorn" />
            </div>
          </section>

          {/* PRICING */}
          <section id="pricing" className="section pricingSection">
            <p className="eyebrow">Simple starting points</p>
            <h2>Pricing</h2>

            <div className="pricingGrid">
              <div className="priceCard">
                <h3>Website Starter</h3>
                <p className="price">From $1,200</p>
                <p>Perfect for a simple, polished business website.</p>
              </div>

              <div className="priceCard">
                <h3>Website Plus</h3>
                <p className="price">From $2,200</p>
                <p>For growing businesses needing more pages and functionality.</p>
              </div>

              <div className="priceCard">
                <h3>Branding Package</h3>
                <p className="price">From $650</p>
                <p>Logo concepts, colours and visual direction.</p>
              </div>

              <div className="priceCard">
                <h3>Grant & Tender Support</h3>
                <p className="price">Custom Quote</p>
                <p>Strategic writing support tailored to the opportunity.</p>
              </div>

              <div className="priceCard">
                <h3>Templates &amp; Business Tools</h3>
                <p className="price">From $100</p>
                <p>A custom template or tracker built around how you work.</p>
              </div>

              <div className="priceCard">
                <h3>AI Room Concept</h3>
                <p className="price">From $50</p>
                <p>Send a photo of your room and get back an AI-redesigned concept.</p>
              </div>

              <div className="priceCard">
                <h3>Room Design</h3>
                <p className="price">From $450</p>
                <p>A full styling plan and mood board for a single room.</p>
              </div>

              <div className="priceCard">
                <h3>Video &amp; Social Content</h3>
                <p className="price">From $70</p>
                <p>From a single short-form video up to a full content package.</p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="section faqSection">
            <p className="eyebrow">Good to know</p>
            <h2>FAQ</h2>

            <div className="faqGrid">
              <div>
                <h3>Do you only work with NT businesses?</h3>
                <p>
                  I love working with Territory businesses, but I can support clients
                  anywhere.
                </p>
              </div>

              <div>
                <h3>Can you redesign an existing website?</h3>
                <p>
                  Yes. I can refresh your current site, improve the structure and
                  update the overall look and feel.
                </p>
              </div>

              <div>
                <h3>Can you help with grants and tenders?</h3>
                <p>
                  Yes. I can help shape your message, structure your response and
                  make your application clearer and stronger.
                </p>
              </div>

              <div>
                <h3>Do you provide ongoing support?</h3>
                <p>
                  Yes. I can help with updates, content, design changes and future
                  improvements.
                </p>
              </div>

              <div>
                <h3>Do you only work on websites and branding?</h3>
                <p>
                  No — I also offer room design (from a $50 AI concept up to a
                  full styling plan), video &amp; social content for TikTok,
                  Reels and YouTube, and custom templates &amp; business tools.
                </p>
              </div>

              <div>
                <h3>Can you build templates or business tools for me?</h3>
                <p>
                  Yes. From Word documents, newsletters and capability statements
                  to trackers, registers and Notion workspaces — I build
                  templates customised to how your business actually works.
                </p>
              </div>
            </div>
          </section>

          {/* CONTACT */}
          <section id="contact" className="contactSection">
            <div className="contactIntro">
              <p className="eyebrow">Let’s connect</p>
              <h2>Ready to make your idea pop?</h2>

              <p>
                Whether you need a website, brand direction, grant support or digital
                storytelling, I’d love to hear what you’re creating.
              </p>

              <p>
                <strong>Email:</strong> melanieorr@gmail.com
              </p>

              <p>
                <strong>Phone:</strong> 0414 271 593
              </p>
            </div>

            <form
              className="contactForm"
              action="https://formspree.io/f/xnnzvdoq"
              method="POST"
            >
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
              <textarea name="message" placeholder="Your Message" required></textarea>

              <button type="submit">Send Message</button>
            </form>
          </section>
        </>
      )}

      {/* FOOTER */}
      <footer className="footer">
        <p>Territorians helping Territorians ♡</p>

        <div>
          <span>melanieorr@gmail.com</span>
          <span>0414 271 593</span>
          <span>www.positivepopcorn.com.au</span>
        </div>
      </footer>
    </main>
  );
}

export default App;
