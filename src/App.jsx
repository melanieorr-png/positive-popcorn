import './index.css'

function App() {
  return (
    <div className="siteWrapper">

      <section className="hero">
        <img
          src="/positive-popcorn-hero.png"
          alt="Positive Popcorn"
          className="heroImage"
        />
      </section>

      <nav className="tabs">
        <a href="#services">Services</a>
        <a href="#territory">NT Proud</a>
        <a href="#meet">Meet Mel</a>
        <a href="#contact">Contact</a>
      </nav>

      <section className="heroOverlay">
        <p className="eyebrow">Positive Popcorn</p>

        <h1>Positive Popcorn</h1>

        <p className="heroText">
          From the Top End coast to Central Australia, Positive Popcorn creates
          websites, logos, branding and digital stories with Territory heart.
        </p>

        <a href="#contact" className="button">
          Let’s Create Something
        </a>
      </section>

      <section className="section soft" id="services">
        <p className="eyebrow">What I Can Help With</p>

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

      <section className="section statement" id="territory">
        <h2>NT proud. Creative by nature. Built with pop.</h2>

        <p>
          Positive Popcorn was inspired by the idea that businesses shouldn’t
          blend in. Born from the Territory’s bold landscapes, rugged spirit and
          creative energy, we help brands stand out, be remembered and make
          noise in a crowded digital world.
        </p>
      </section>

      <section className="section" id="meet">
        <p className="eyebrow">Meet Mel</p>

        <h2>
          Built from creative thinking, real business experience and strategic
          leadership.
        </h2>

        <p>
          Before Positive Popcorn, I spent over 10 years running my own business,
          where I created our brand, built our websites and learnt first-hand
          what it takes to stand out in a competitive world.
        </p>

        <p>
          That experience taught me how important it is for businesses to have a
          strong identity, clear messaging and an online presence that people
          remember.
        </p>

        <p>
          Alongside business ownership, I also worked within leadership and
          executive support roles at Charles Darwin University and CDU TAFE,
          contributing to strategic initiatives, major projects and
          award-winning applications that helped showcase Territory education on
          a national stage.
        </p>

        <p>
          I’m local, I understand the Territory, and I know how hard businesses,
          community groups and organisations work to build something meaningful.
          Positive Popcorn was created to help those stories stand out with
          confidence, creativity and impact.
        </p>
      </section>

      <section className="section contact" id="contact">
        <p className="eyebrow">Let’s Talk</p>

        <h2>Ready to make your idea pop?</h2>

        <p>
          Whether you need a website, logo, brand direction, digital story or
          help shaping an application, Positive Popcorn can help bring your idea
          to life.
        </p>

        <a href="mailto:hello@positivepopcorn.com.au" className="emailLink">
          Email Positive Popcorn
        </a>
      </section>

    </div>
  )
}

export default App
