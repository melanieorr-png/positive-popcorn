import "./index.css";
import heroImage from "./assets/hero.png";

function App() {
  return (
    <main className="siteWrapper">

      {/* HERO IMAGE ONLY */}
      <section className="hero">
        <img
          src={heroImage}
          alt="Positive Popcorn coastal sunset hero"
          className="heroImage"
        />
      </section>

      {/* NAVIGATION */}
      <nav className="tabs">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#story">Story</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* INTRO SECTION BELOW NAV */}
      <section className="heroOverlay">
        <p className="eyebrow">Local • Creative • AI-powered</p>

        <h1>Positive Popcorn</h1>

        <p className="heroText">
          From the Top End coast to Central Australia, Positive Popcorn creates
          websites, logos, branding and digital stories with Territory heart.
        </p>

        <a href="#services" className="button">
          Let’s Create Something
        </a>
      </section>

      {/* ABOUT */}
      
      {/* SERVICES */}
      <section id="services" className="section soft">
        <p className="eyebrow">What I can help with</p>

        <h2>Creative support for your next big idea.</h2>

        <div className="servicesGrid">

          <div className="card">
            <h3>AI Website Design</h3>
            <p>
              Modern, eye-catching websites designed to feel authentic,
              welcoming and easy to navigate.
            </p>
          </div>

          <div className="card">
            <h3>Logos & Branding</h3>
            <p>
              Unique logo concepts, colour direction and brand ideas that help
              your business get noticed.
            </p>
          </div>

          <div className="card">
            <h3>Applications & Grants</h3>
            <p>
              Strategic writing support to help you explain your value clearly
              and confidently.
            </p>
          </div>

          <div className="card">
            <h3>Digital Storytelling</h3>
            <p>
              Creative words, visuals and messaging that bring your story to
              life with pop.
            </p>
          </div>

        </div>
      </section>

      {/* STORY */}
      <section id="story" className="section statement">
        <h2>NT proud. Creative by nature. Built with pop.</h2>

        <p>
          Positive Popcorn was inspired by the idea that businesses shouldn't 
          blend in. Born from the Territory's bold lanscapes, rugged spirit and creative energy,
          we help brands stand out, be remembered and make noise in a crowded digital world.
        </p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section contact">
        <p className="eyebrow">Ready when you are</p>

        <h2>Let’s make your idea stand out.</h2>

        <a href="mailto:melanieorr@gmail.com" className="emailLink">
          melanieorr@gmail.com
        </a>
      </section>

    </main>
  );
}

export default App;
