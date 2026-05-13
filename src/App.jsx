import {
  ArrowRight,
  Monitor,
  PenTool,
  Palette,
  Lightbulb,
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  Armchair,
  ClipboardPenLine,
} from "lucide-react";

export default function App() {
  return (
    <main className="site">
      <section className="hero" id="home">
        <div className="heroOverlay" />

        <header className="header">
          <a className="brand" href="#home">
            <div className="brandScript">Positive</div>
            <div className="brandRow">
              <span>Popcorn</span>
              <span className="popIcon">☁</span>
            </div>
            <div className="brandTag">Ideas that pop</div>
          </a>

          <nav className="nav">
            <a className="active" href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services" className="navDrop">
              Services <ChevronDown size={12} />
            </a>
            <a href="#popcorn">Positive Popcorn</a>
            <a href="#projects">Projects</a>
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
            icon={<Armchair />}
            title="Space Design"
            text="Functional, beautiful spaces that support how people live and work."
          />
          <Service
            icon={<ClipboardPenLine />}
            title="Application & Tender Writing"
            text="Clear, compelling responses that meet the brief and stand out."
          />
          <Service
            icon={<Monitor />}
            title="Websites & Digital"
            text="User-friendly websites and digital solutions that look great and work seamlessly."
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
            The creative arm for websites, digital logos and ideas that pop.
          </p>
          <a href="#services">
            Explore Positive Popcorn <ArrowRight size={16} />
          </a>
        </div>

        <div className="featureVisual">
          <div className="paperCard">
            <div className="paperBrand">
              <div className="brandScript">Positive</div>
              <div className="brandRow">
                <span>Popcorn</span>
                <span className="popIcon">☁</span>
              </div>
              <div className="brandTag">Ideas that pop</div>
            </div>
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
          <MiniService icon={<Phone />} title="Social Media Graphics" />
          <MiniService icon={<Monitor />} title="LinkedIn Banners" />
          <MiniService icon={<Mail />} title="Content & Copy Support" />
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
