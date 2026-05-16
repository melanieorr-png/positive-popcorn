export default function App() {
  return (
    <main className="site">
      {/* HERO SECTION */}
      <section className="heroMockup" id="home">
        <div className="heroImage" />
      </section>

      {/* NAVIGATION TABS */}
      <section className="mainTabs">
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#popcorn">Positive Popcorn</a>
        <a href="#contact">Contact</a>
      </section>

      {/* SERVICES */}
      <section id="services" className="pageSection">
        <div className="sectionContainer">
          <span className="sectionEyebrow">What We Create</span>

          <h2>Websites with personality.</h2>

          <p>
            Positive Popcorn creates warm, coastal-inspired websites,
            branding and digital experiences that feel human, creative
            and memorable.
          </p>

          <div className="servicesGrid">
            <div className="serviceCard">
              <h3>Website Design</h3>
              <p>
                Beautiful responsive websites designed to feel modern,
                calming and easy to use across desktop and mobile.
              </p>
            </div>

            <div className="serviceCard">
              <h3>Digital Logos</h3>
              <p>
                Creative logos and visual identities inspired by
                Territory warmth, coastal colours and natural textures.
              </p>
            </div>

            <div className="serviceCard">
              <h3>Brand Design</h3>
              <p>
                Fonts, colours, layouts and branding direction that help
                your business feel polished and consistent online.
              </p>
            </div>

            <div className="serviceCard">
              <h3>Creative Support</h3>
              <p>
                Creative digital support for projects, social graphics,
                presentations, ideas and online storytelling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="pageSection altSection">
        <div className="sectionContainer narrow">
          <span className="sectionEyebrow">About Positive Popcorn</span>

          <h2>Coastal creativity from the Northern Territory.</h2>

          <p>
            Inspired by warm sunsets, coastal textures and Territory
            storytelling, Positive Popcorn blends creativity and strategy
            into websites and digital experiences that feel authentic,
            welcoming and visually memorable.
          </p>

          <p>
            Every design is created to feel calm, elegant and natural —
            balancing modern functionality with personality and warmth.
          </p>
        </div>
      </section>

      {/* POSITIVE POPCORN */}
      <section id="popcorn" className="pageSection popcornSection">
        <div className="sectionContainer popcornGrid">
          <div>
            <span className="sectionEyebrow">Featured Creative Studio</span>

            <h2>Positive Popcorn</h2>

            <p>
              The creative arm of the business focused on digital
              branding, websites, visual storytelling and ideas that pop
              beautifully online.
            </p>

            <a href="#contact" className="textLink">
              Let’s create something that pops →
            </a>
          </div>

          <div className="popcornImageCard">
            <img
              src="/positive_popcorn_logo.png"
              alt="Positive Popcorn logo"
            />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contactSection">
        <div className="sectionContainer contactContent">
          <div>
            <span className="sectionEyebrow light">
              Let’s Work Together
            </span>

            <h2>Create something beautiful online.</h2>

            <p>
              Whether you need a website, branding refresh or digital
              creative support, Positive Popcorn can help bring your
              ideas to life.
            </p>
          </div>

          <div className="contactCard">
            <p>Email</p>
            <a href="mailto:hello@positivepopcorn.com.au">
              hello@positivepopcorn.com.au
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
