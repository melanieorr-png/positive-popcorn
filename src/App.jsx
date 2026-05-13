import { ArrowRight, Monitor, PenTool, Palette, Lightbulb, Mail, Phone, MapPin } from "lucide-react";

export default function App() {
  return (
    <main className="site">
      <section className="hero">
        <header className="header">
          <img className="smallLogo" src="/positive_popcorn_logo.png" alt="Positive Popcorn" />

          <nav className="nav">
            <a className="active" href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Positive Popcorn</a>
            <a href="#">Contact</a>
            <a className="navButton" href="#">Let’s Work Together</a>
          </nav>
        </header>

        <img className="watermarkLogo" src="/positive_popcorn_logo.png" alt="" />

        <div className="heroText">
          <h1>
            Strategic thinking.
            <br />
            Creative solutions.
          </h1>

          <div className="brushLine"></div>

          <p>
            Supporting businesses, projects and communities with websites,
            digital design and creative support that bring ideas to life.
          </p>

          <a className="ctaButton" href="#">
            Start Your Project <ArrowRight size={22} />
          </a>
        </div>

        <div className="heart">♡</div>
        <div className="topBrush"></div>
        <div className="sideBrush"></div>
      </section>

      <section className="services">
        <Service icon={<Monitor />} title="Websites & Digital" />
        <Service icon={<PenTool />} title="Application & Tender Writing" />
        <Service icon={<Palette />} title="Brand Design" />
        <Service icon={<Lightbulb />} title="Creative Support" />
      </section>

      <section className="location">
        <div>
          <MapPin size={28} />
          <span>Darwin Based • Working Across the NT & Australia</span>
        </div>

        <div className="contactIcons">
          <Mail size={32} />
          <Phone size={32} />
        </div>
      </section>
    </main>
  );
}

function Service({ icon, title }) {
  return (
    <div className="serviceItem">
      <div className="serviceIcon">{icon}</div>
      <h3>{title}</h3>
    </div>
  );
}
