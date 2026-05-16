import "./index.css";

export default function App() {
  return (
    <main className="siteWrapper">
      
      {/* HERO MOCKUP */}
      <section className="heroMockup" id="home">
        <img
          src="/hero-mockup.png"
          alt="Positive Popcorn"
          className="heroMockupImage"
        />
      </section>

      {/* NAVIGATION TABS */}
      <section className="floatingTabs">
        <div className="tabsWrap">
          <a href="#services" className="tabButton">Services</a>
          <a href="#about" className="tabButton">About</a>
          <a href="#positive-popcorn" className="tabButton">Positive Popcorn</a>
          <a href="#contact" className="tabButton">Contact</a>
        </div>
      </section>

      {/* SERVICES */}
      <section className="contentSection" id="services">
        <div className="contentInner">
          <span className="sectionEyebrow">What We Create</span>

          <h2 className="sectionHeading">
            Websites with personality.
          </h2>

          <p className="sectionText">
            Positive Popcorn creates websites, branding and 
            digital experiences that feel human,
            creative and memorable.
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
                Fonts, colours, layouts and branding direction that
                help your business feel polished and consistent online.
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
      <section className="aboutSection" id="about">
        <div className="contentInner narrow">
          
          <span className="sectionEyebrow">
            About Positive Popcorn
          </span>

          <h2 className="sectionHeading">
            Coastal creativity from the Northern Territory.
          </h2>

          <p className="sectionText">
            Inspired by warm sunsets, coastal textures and Territory
            storytelling, Positive Popcorn blends creativity and
            strategy into websites and digital experiences that feel
            authentic, welcoming and visually memorable.
          </p>

          <p className="sectionText">
            Every design is created to feel calm, elegant and natural —
            balancing modern functionality with personality and warmth.
          </p>

        </div>
      </section>

      {/* POSITIVE POPCORN */}
      <section className="logoFeature" id="positive-popcorn">
        <div className="contentInner">

          <h2 className="sectionHeading">
            Positive Popcorn
          </h2>

          <p className="sectionText">
            The creative arm of the business focused on digital branding,
            websites and visual storytelling that feels beautifully online.
          </p>

          <div className="featureLogoWrap">
            <img
              src="/positive_popcorn_logo.png"
              alt="Positive Popcorn logo"
              className="featureLogo"
            />
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section className="contactSection" id="contact">
        <div className="contentInner narrow">

          <span className="sectionEyebrow">
            Let’s Work Together
          </span>

          <h2 className="sectionHeading">
            Create something beautiful online.
          </h2>

          <p className="sectionText">
            Whether you need a website, branding or creative digital support,
            Positive Popcorn can help bring your ideas to life.
          </p>

          <a
            href="mailto:hello@positivepopcorn.com.au"
            className="emailLink"
          >
            hello@positivepopcorn.com.au
          </a>

        </div>
      </section>

    </main>
  );
}
