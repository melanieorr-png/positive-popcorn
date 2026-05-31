import './index.css'

function App() {
  return (
    <div className="siteWrapper">

      {/* HERO */}
      <section className="hero">
        <div className="heroContent">

          <h1>
            Positive Popcorn
          </h1>

          <p>
            From the Top End coast to Central Australia, Positive Popcorn
            creates websites, logos, branding and digital stories with
            Territory heart.
          </p>

          <a href="#services" className="heroBtn">
            LET’S CREATE SOMETHING
          </a>

        </div>
      </section>

      {/* SERVICES */}
      <section className="services" id="services">

        <p className="eyebrow">
          What I Can Help With
        </p>

        <h2>
          Creative support for your next big idea.
        </h2>

        <div className="serviceGrid">

          <div className="serviceCard">
            <h3>AI Website Design</h3>
            <p>
              Modern, eye-catching websites designed to feel authentic,
              welcoming and easy to navigate.
            </p>
          </div>

          <div className="serviceCard">
            <h3>Logos & Branding</h3>
            <p>
              Unique logo concepts, colour direction and brand ideas that
              help your business get noticed.
            </p>
          </div>

          <div className="serviceCard">
            <h3>Applications & Grants</h3>
            <p>
              Strategic writing support to help you explain your value
              clearly and confidently.
            </p>
          </div>

          <div className="serviceCard">
            <h3>Digital Storytelling</h3>
            <p>
              Creative words, visuals and messaging that bring your story
              to life with pop.
            </p>
          </div>

        </div>
      </section>

      {/* NT PROUD SECTION */}
      <section className="territorySection">

        <div className="territoryContent">

          <h2>
            NT proud. Creative by nature. Built with pop.
          </h2>

          <p>
            Positive Popcorn was inspired by the idea that businesses
            shouldn’t blend in. Born from the Territory’s bold landscapes,
            rugged spirit and creative energy, we help brands stand out,
            be remembered and make noise in a crowded digital world.
          </p>

        </div>

      </section>

      {/* MEET MEL */}
      <section className="meetMel" id="meet">

        <div className="meetMelContent">

          <p className="eyebrow">
            Meet Mel
          </p>

          <h2>
            Built from creative thinking, real business experience and
            strategic leadership.
          </h2>

          <p>
            Before Positive Popcorn, I spent over 10 years running my own
            business, where I created our brand, built our websites and
            learnt first-hand what it takes to stand out in a competitive
            world.
          </p>

          <p>
            That experience taught me how important it is for businesses
            to have a strong identity, clear messaging and an online
            presence that people remember.
          </p>

          <p>
            Alongside business ownership, I also worked within leadership
            and executive support roles at Charles Darwin University and
            CDU TAFE, contributing to strategic initiatives, major
            projects and award-winning applications that helped showcase
            Territory education on a national stage.
          </p>

          <p>
            I’m local, I understand the Territory, and I know how hard
            businesses, community groups and organisations work to build
            something meaningful. Positive Popcorn was created to help
            those stories stand out with confidence, creativity and
            impact.
          </p>

        </div>

      </section>

    </div>
  )
}

export default App
