import "./App.css";

function BohoSunIcon({ className = "" }) {
  return (
    <svg
      className={`bohoIcon ${className}`}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 78a40 40 0 0 1 80 0"
        stroke="currentColor"
        strokeWidth="3"
      />
      <path
        d="M30 78a30 30 0 0 1 60 0"
        stroke="currentColor"
        strokeWidth="3"
      />
      <line x1="60" y1="20" x2="60" y2="32" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <line x1="27" y1="35" x2="35" y2="43" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <line x1="93" y1="35" x2="85" y2="43" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path
        d="M14 92c8-6 16-6 24 0s16 6 24 0 16-6 24 0 16 6 24 0"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function WebDesignIcon({ className = "" }) {
  return (
    <svg
      className={`bohoIcon ${className}`}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="18" y="28" width="84" height="58" rx="10" stroke="currentColor" strokeWidth="3" />
      <path d="M18 42h84" stroke="currentColor" strokeWidth="3" />
      <circle cx="28" cy="35" r="2.4" fill="currentColor" />
      <circle cx="37" cy="35" r="2.4" fill="currentColor" />
      <circle cx="46" cy="35" r="2.4" fill="currentColor" />
      <path
        d="M32 66c8-8 16-8 24 0s16 8 24 0"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <line x1="42" y1="96" x2="78" y2="96" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <line x1="60" y1="86" x2="60" y2="96" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function RoomDesignIcon({ className = "" }) {
  return (
    <svg
      className={`bohoIcon ${className}`}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
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

function App() {
  return (
    <main className="siteWrapper">
      {/* NAV */}
      <nav className="mainNav">
        <a href="#home" className="brandLogo">
          <span className="brandScript">Positive</span>
          <span className="brandBlock">Popcorn</span>
        </a>

        <div className="navLinks">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="hero">
        <img
          src="/hero1.png"
          alt="Positive Popcorn coastal sunset hero"
          className="heroImage"
        />

        <div className="heroContent">
          <h1>Creative websites, <span className="brandingWord">branding</span> &amp; storytelling</h1>

          <p>
            Helping Territory businesses, community organisations and
            professionals stand out with heart, clarity and creativity.
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
          <a href="#websites" className="serviceCard">
            <div className="serviceIcon">💻</div>
            <h3>AI Website Design</h3>
            <p>
              Modern, eye-catching websites designed to feel authentic,
              welcoming and easy to navigate.
            </p>
            <span>Learn more →</span>
          </a>

          <a href="#branding" className="serviceCard">
            <div className="serviceIcon">🎨</div>
            <h3>Logos & Branding</h3>
            <p>
              Unique logo concepts, colour direction and brand ideas that help
              your business get noticed.
            </p>
            <span>Learn more →</span>
          </a>

          <a href="#grants" className="serviceCard">
            <div className="serviceIcon">📝</div>
            <h3>Grants & Tenders</h3>
            <p>
              Strategic writing support to help you explain your value clearly
              and confidently.
            </p>
            <span>Learn more →</span>
          </a>

          <a href="#storytelling" className="serviceCard">
            <div className="serviceIcon">📸</div>
            <h3>Digital Storytelling</h3>
            <p>
              Creative words, visuals and messaging that bring your story to
              life with pop.
            </p>
            <span>Learn more →</span>
          </a>

          <a href="#roomdesign" className="serviceCard">
            <div className="serviceIcon">🛋️</div>
            <h3>Room Design</h3>
            <p>
              Warm, considered interiors and styling advice that turn a space
              into somewhere you actually want to be.
            </p>
            <span>Learn more →</span>
          </a>
        </div>
      </section>

      {/* AI WEBSITE DESIGN */}
      <section id="websites" className="splitSection">
        <div>
          <p className="eyebrow">Websites that work beautifully</p>
          <h2>AI Website Design</h2>

          <p>
            I create modern, mobile-friendly websites that look beautiful, feel
            personal and help your business show up online with confidence.
          </p>

          <ul>
            <li>Responsive website design</li>
            <li>SEO-friendly page structure</li>
            <li>Easy-to-update content</li>
            <li>Contact forms and enquiry pathways</li>
            <li>Domain and hosting support</li>
            <li>AI-assisted content and design support</li>
          </ul>
        </div>

        <div className="featureVisual">
          <WebDesignIcon />
        </div>
      </section>

      {/* BRANDING */}
      <section id="branding" className="splitSection reverse">
        <div>
          <p className="eyebrow">Brands that feel like you</p>
          <h2>Logos & Branding</h2>

          <p>
            From logo concepts to full brand identity, I help create visual
            direction that feels warm, memorable and aligned to your business.
          </p>

          <ul>
            <li>Logo design concepts</li>
            <li>Colour palettes</li>
            <li>Typography direction</li>
            <li>Business cards</li>
            <li>Social media graphics</li>
            <li>Brand style direction</li>
          </ul>
        </div>

        <div className="featureVisual alt">
          <BohoSunIcon />
        </div>
      </section>

      {/* GRANTS */}
      <section id="grants" className="splitSection">
        <div>
          <p className="eyebrow">Turning good ideas into clear applications</p>
          <h2>Applications, Grants & Tenders</h2>

          <p>
            I help businesses and organisations explain their value clearly,
            professionally and strategically so applications feel polished,
            purposeful and easy to understand.
          </p>

          <ul>
            <li>Government grants</li>
            <li>Tender responses</li>
            <li>Capability statements</li>
            <li>Business cases</li>
            <li>Expressions of interest</li>
            <li>Award applications</li>
          </ul>
        </div>

        <div className="featureVisual">
          <BohoSunIcon />
        </div>
      </section>

      {/* STORYTELLING */}
      <section id="storytelling" className="splitSection reverse">
        <div>
          <p className="eyebrow">Stories that connect</p>
          <h2>Digital Storytelling</h2>

          <p>
            Every business has a story worth telling. I help bring that story to
            life through words, visuals and messaging that feel clear,
            confident and memorable.
          </p>

          <ul>
            <li>Website copy</li>
            <li>About pages</li>
            <li>Social media content</li>
            <li>Newsletters</li>
            <li>Case studies</li>
            <li>Marketing material</li>
          </ul>
        </div>

        <div className="featureVisual alt">
          <BohoSunIcon />
        </div>
      </section>

      {/* ROOM DESIGN */}
      <section id="roomdesign" className="splitSection">
        <div>
          <p className="eyebrow">Spaces that feel like you</p>
          <h2>Room Design</h2>

          <p>
            From a single room refresh to a full styling plan, I help you
            create spaces that feel warm, considered and genuinely yours.
          </p>

          <ul>
            <li>Room layout &amp; styling plans</li>
            <li>Colour &amp; texture direction</li>
            <li>Furniture &amp; decor sourcing</li>
            <li>Mood boards</li>
            <li>Small-space solutions</li>
            <li>Coastal &amp; boho interior styling</li>
          </ul>
        </div>

        <div className="featureVisual">
          <RoomDesignIcon />
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="section portfolioSection">
        <p className="eyebrow">Recent work</p>
        <h2>Portfolio</h2>

        <div className="portfolioGrid">
          <div className="portfolioCard">
            <div className="portfolioVisual">
              <BohoSunIcon />
            </div>
            <h3>Positive Popcorn</h3>
            <p>Brand identity, website design and creative direction.</p>
          </div>

          <div className="portfolioCard">
            <div className="portfolioVisual">
              <BohoSunIcon />
            </div>
            <h3>Mike Hamilton Consulting</h3>
            <p>Website design, content structure and professional positioning.</p>
          </div>

          <div className="portfolioCard">
            <div className="portfolioVisual">
              <BohoSunIcon />
            </div>
            <h3>Business Cards</h3>
            <p>Coastal NT-inspired print design and QR-ready contact cards.</p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="aboutSection">
        <div>
          <p className="eyebrow">About Mel</p>
          <h2>Creative thinking with real business experience.</h2>

          <p>
            Hi, I’m Mel. I created Positive Popcorn to help good ideas come to
            life through beautiful websites, memorable branding and clear
            storytelling.
          </p>

          <p>
            With experience across business, government, education and creative
            projects, I bring together strategic thinking and warm creative
            direction to help businesses and organisations stand out.
          </p>

          <a href="#contact" className="button">
            Let’s Work Together
          </a>
        </div>

        <div className="aboutVisual">
          <BohoSunIcon />
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
            <h3>Room Design</h3>
            <p className="price">From $50</p>
            <p>A simple change design of a single room to a styling plan and mood board for an entire commercial building.</p>
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
              No — I also offer room design, from single-room styling plans
              to full mood boards and furniture sourcing for commercial plans.
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
