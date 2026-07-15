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
      <a href="#home" className="brandLogo" onClick={(e) => { e.preventDefault(); onHome(); }}>
        <span className="brandScript">Positive</span>
        <span className="brandBlock">Popcorn</span>
      </a>

      <div className="navLinks">
        {showHome && (
          <a href="#home" className="homeLink" onClick={(e) => { e.preventDefault(); onHome(); }}>
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
        <a href="#home" className="backLink" onClick={(e) => { e.preventDefault(); onHome(); }}>
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
                <a key={service.id} href={`#${service.id}`} className="serviceCard" onClick={(e) => { e.preventDefault(); goToService(service.id); }}>
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
                  <div className="projectTags">
                    <span className="tag">Brand Identity</span>
                    <span className="tag">Website Design</span>
                    <span className="tag">SEO</span>
                  </div>
                  <a href="https://mikehamilton.com.au" target="_blank" rel="noopener noreferrer" className="projectLink">
                    View Project → mikehamilton.com.au
                  </a>
                </div>
              </div>

              <div className="projectCard">
                <div className="projectVisual logoVisual">
                  <img src="/portfolio-barefoot-logo.jpg" alt="The Barefoot Prospector logo" />
                </div>
                <div className="projectBody">
                  <p className="eyebrow">Adventure Storytelling | YouTube Brand</p>
                  <h3>Barefoot Prospector</h3>
                  <p>
                    Creating the creative identity behind a YouTube channel
                    that captures real Territory adventures, remote gold
                    prospecting and authentic storytelling.
                  </p>
                  <div className="projectTags">
                    <span className="tag">Brand Identity</span>
                    <span className="tag">Channel Artwork</span>
                    <span className="tag">Content Strategy</span>
                  </div>
                </div>
              </div>

              <div className="projectCard">
                <div className="projectVisual alt logoVisual">
                  <img src="/portfolio-popcorn.png" alt="Positive Popcorn logo" />
                </div>
                <div className="projectBody">
                  <p className="eyebrow">My Creative Playground</p>
                  <h3>Positive Popcorn</h3>
                  <p>
                    Every designer should have a space to experiment.
                    Positive Popcorn is where I test ideas, explore new
                    technology, refine my craft and build better ways to
                    help businesses grow.
                  </p>
                </div>
              </div>
            </div>

            <div className="portfolioWhy">
              <h3>Why Positive Popcorn?</h3>
              <p>
                I believe the best ideas don’t need to be the biggest — they
                just need someone who believes in them.
              </p>
              <p>
                Whether you’re launching a business, applying for funding,
                building a brand or simply trying to get organised, I’m here
                to help turn scattered thoughts into something clear,
                professional and purposeful.
              </p>
              <p>
                Every project is created with creativity, strategy and
                genuine care, so your ideas don’t just stay ideas.
              </p>
              <p className="popLines">They pop into impact.</p>
            </div>

            <div className="projectCta">
              <p className="eyebrow">Your business?</p>
              <p>Maybe the next success story belongs here.</p>
              <a href="#contact" className="button">
                Let’s Build Something Worth Talking About
              </a>
            </div>
          </section>

          {/* ABOUT */}
          <section id="about" className="aboutSection">
            <div>
              <p className="eyebrow">About Mel</p>
              <h2>I believe every great idea deserves the chance to grow.</h2>

              <p>Hi, I’m Mel — founder of Positive Popcorn.</p>

              <p>
                Too many ideas stay scribbled in notebooks, waiting for the
                “perfect time.” I love helping people take those ideas and
                turn them into something real — whether that’s a beautiful
                website, a memorable brand, a winning grant application or a
                business that finally feels like them.
              </p>

              <p>
                My career has taken me through executive leadership,
                strategic planning, communications and business improvement,
                but one thing has always stayed the same...
              </p>

              <p>I’ve always been the person who loves making ideas happen.</p>

              <p>
                I realised the work that energised me most wasn’t ticking
                off project plans or writing reports — it was helping people
                find clarity, solve problems creatively and build something
                they’re genuinely proud of.
              </p>

              <p>So I created Positive Popcorn.</p>

              <p>
                Today, I combine creativity with practical business
                experience to help small businesses, community
                organisations and passionate people bring their ideas to
                life.
              </p>

              <p>
                Whether we’re creating a website, building a brand,
                designing business templates, developing content, writing
                funding applications or streamlining the way you work, my
                approach is always the same:
              </p>

              <ul className="tickList">
                <li>Create something authentic.</li>
                <li>Make it memorable.</li>
                <li>Keep it practical.</li>
                <li>Deliver something that works.</li>
              </ul>

              <h3>What You’ll Get Working With Me</h3>
              <ul className="whyList">
                <li>Creative thinking backed by real business experience.</li>
                <li>Honest advice — not confusing jargon.</li>
                <li>Practical solutions that actually work.</li>
                <li>Beautiful websites and branding with purpose.</li>
                <li>AI-powered tools and systems that save time.</li>
                <li>A genuine collaborator who cares about your success.</li>
              </ul>

              <h3>Where I Find Inspiration</h3>
              <p>
                When I’m not behind the computer, you’ll usually find me
                fishing somewhere around the Top End, exploring remote
                places, spending time with family, or planning my next
                creative adventure over a good coffee.
              </p>
              <p>
                People often ask where ideas come from. I don’t hunt for
                them — I go fishing. I cast a line, stay curious, and before
                long something exciting bites.
              </p>
              <p>
                Maybe that’s why I love this work so much. I’m always
                looking for the next great catch... the next idea with
                potential, the next story waiting to be told, or the next
                business ready to grow.
              </p>
              <p>
                Living in the Northern Territory has taught me to value
                authenticity, resilience and community. Those values shape
                everything I do.
              </p>

              <p>
                <strong>Let’s make something worth sharing.</strong>
              </p>
              <p>
                Whether you’re launching something new, refreshing your
                brand, applying for funding or simply trying to organise the
                ideas swirling around in your head, I’d love to help.
              </p>
              <p>Let’s turn your next idea into something that truly pops.</p>

              <a href="#contact" className="button">
                Let’s Work Together
              </a>
            </div>

            <div className="aboutVisual">
              <img src="/mel-logo.png" alt="Mel, founder of Positive Popcorn" />
            </div>
          </section>

          {/* PRICING */}
          <section id="pricing" className="section pricingSection">
            <p className="eyebrow">Simple starting points</p>
            <h2>Pricing</h2>
            <p className="pricingNote">
              Every project is unique. These prices are starting points to
              help you plan your investment. Once we chat about your goals,
              I’ll provide a tailored quote with no surprises.
            </p>

            <div className="pricingGrid">
              <div className="priceCard">
                <h3>Website Starter</h3>
                <p className="price">From $1,950</p>
                <p>Perfect for a simple, polished business website.</p>
              </div>

              <div className="priceCard">
                <h3>Website Plus</h3>
                <p className="price">From $3,250</p>
                <p>For growing businesses needing more pages and functionality.</p>
              </div>

              <div className="priceCard">
                <h3>Branding Package</h3>
                <p className="price">From $950</p>
                <p>Logo concepts, colours and visual direction.</p>
              </div>

              <div className="priceCard">
                <h3>Grant & Tender Support</h3>
                <p className="price">Custom Quote</p>
                <p>Strategic writing support tailored to the opportunity.</p>
              </div>

              <div className="priceCard">
                <h3>Templates &amp; Business Tools</h3>
                <p className="price">From $150</p>
                <p>A custom template or tracker built around how you work.</p>
              </div>

              <div className="priceCard">
                <h3>AI Room Concept</h3>
                <p className="price">From $50</p>
                <p>Send a photo of your room and get back an AI-redesigned concept.</p>
              </div>

              <div className="priceCard">
                <h3>Room Design</h3>
                <p className="price">From $650</p>
                <p>A full styling plan and mood board for a single room.</p>
              </div>

              <div className="priceCard">
                <h3>Video &amp; Social Content</h3>
                <p className="price">From $150</p>
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

              <p>
                <strong>LinkedIn:</strong>{" "}
                <a href="https://www.linkedin.com/in/melanie-grant-darwin/" target="_blank" rel="noopener noreferrer">
                  melanie-grant-darwin
                </a>
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
          <a href="https://www.linkedin.com/in/melanie-grant-darwin/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </footer>
    </main>
  );
}

export default App;
