import {
  ArrowRight,
  Monitor,
  PenTool,
  Palette,
  Lightbulb,
  Mail,
  Phone,
  MapPin,
  Smartphone,
  MessageCircle,
} from "lucide-react";

export default function App() {
  return (
    <main className="site">
      <section className="hero" id="home">
        <header className="header">
          <a href="#home" className="logoWrap">
            <img
              src="/positive_popcorn_logo.png"
              alt="Positive Popcorn Logo"
              className="mainLogo"
            />
          </a>

          <nav className="nav">
            <a className="active" href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#popcorn">Positive Popcorn</a>
            <a href="#contact">Contact</a>
            <a className="navButton" href="#contact">Let’s Work Together</a>
          </nav>
        </header>

        <div className="heroContent">
          <h1>
            Strategic thinking.
            <br />
            Creative solutions.
          </h1>

          <div className="brushLine" />

          <p>
            Supporting businesses, projects and communities with websites,
            digital design and creative support that bring ideas to life.
          </p>

          <a className="primaryButton" href="#contact">
            Start Your Project
          </a>
        </div>

        <div className="heroHeart">♡</div>
      </section>

      <section className="whatIDo" id="services">
        <SectionTitle title="What I Do" />

        <div className="serviceGrid">
          <Service
            icon={<Monitor />}
            title="Website Design"
            text="Beautiful, responsive websites that are easy to use and built to grow with your business."
          />
          <Service
            icon={<PenTool />}
            title="Digital Logos"
            text="Custom logo concepts that capture your brand and leave a lasting impression."
          />
          <Service
            icon={<Palette />}
            title="Brand Look & Feel"
            text="Colour palettes, fonts and style direction that bring your brand to life."
          />
          <Service
            icon={<Lightbulb />}
            title="Creative Brand Support"
            text="Logos, branding and graphics that help your ideas pop and your brand shine."
          />
        </div>
      </section>

      <section className="feature" id="popcorn">
        <div className="featureText">
          <p className="eyebrow">Featured Creative Studio</p>
          <h2>Positive Popcorn</h2>
          <p>
            Websites, digital logos and ideas that pop — with a warm coastal
            feel and a Territory-inspired creative edge.
          </p>
          <a href="#services">
            Explore Positive Popcorn <ArrowRight size={16} />
          </a>
        </div>

        <div className="featureVisual">
          <div className="paperCard">
            <img
              src="/positive_popcorn_logo.png"
              alt="Positive Popcorn Logo"
              className="paperLogo"
            />
          </div>
        </div>
      </section>

      <section className="locationStrip">
        <div>
          <MapPin size={18} />
          Darwin Based • Working Across the NT & Australia
        </div>

        <div className="stripIcons">
          <Mail size={22} />
          <Phone size={22} />
        </div>
      </section>

      <section className="help" id="about">
        <SectionTitle title="How I Can Help" />

        <div className="helpGrid">
          <MiniService icon={<Monitor />} title="Website Design" />
          <MiniService icon={<PenTool />} title="Digital Logos" />
          <MiniService icon={<Palette />} title="Brand Look & Feel" />
          <MiniService icon={<Smartphone />} title="Social Media Graphics" />
          <MiniService icon={<Monitor />} title="LinkedIn Banners" />
          <MiniService icon={<MessageCircle />} title="Content & Copy Support" />
        </div>
      </section>

      <section className="cta" id="contact">
        <div className="ctaHeart">♡</div>
        <p>Let’s create something that pops.</p>
        <a href="mailto:hello@positivepopcorn.com.au">Let’s Chat</a>
      </section>

      <footer>
        © 2026 Positive Popcorn • Coastal digital design from the Northern Territory
      </footer>
    </main>
  );
}

function SectionTitle({ title }) {
  return (
    <div className="sectionTitle">
      <span />
      <h2>{title}</h2>
      <span />
    </div>
  );
}

function Service({ icon, title, text }) {
  return (
    <div className="serviceItem">
      <div className="serviceIcon">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

function MiniService({ icon, title }) {
  return (
    <div className="miniService">
      <div className="miniIcon">{icon}</div>
      <h3>{title}</h3>
      <p>
        Clear, creative support to help your brand feel polished, warm and
        connected.
      </p>
    </div>
  );
}
