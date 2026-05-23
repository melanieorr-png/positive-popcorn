import "./index.css";

function App() {
  return (
    <main className="page">

      {/* HERO SECTION */}
      <section className="hero">
        <div className="heroOverlay">
          <p className="eyebrow">Local • Creative • AI-powered</p>

          <h1>Positive Popcorn</h1>

          <p className="heroText">
            From the Top End coast to Central Australia, inspired by warm
            sunsets, coastal textures, red dirt landscapes and rugged remote
            locations, Positive Popcorn creates websites, logos and digital
            experiences that help businesses stand out.
          </p>

          <a href="#services" className="button">
            Let’s Create Something
          </a>
        </div>
      </section>

      {/* INTRO */}
      <section className="section intro">
        <h2>Creative websites, branding and applications with pop.</h2>

        <p>
          Positive Popcorn uses cutting-edge AI technology combined with
          creative direction to build modern websites, unique branding and
          memorable visuals that help businesses stand out in a crowded digital
          world.
        </p>

        <p>
          I’m local, I understand the Territory, and I know how hard it can be
          for small businesses, community groups and organisations to get
          noticed, win opportunities and tell their story clearly.
        </p>
      </section>

      {/* ABOUT */}
      <section className="section about">
        <div>
          <p className="eyebrow">Meet Mel</p>

          <h2>
            Built from creative, business and strategic experience.
          </h2>
        </div>

        <div>
          <p>
            Before Positive Popcorn, I ran my own business for over 10 years and
            created multiple websites using Wix. Through that experience, I saw
            first-hand how important it is to have a brand, website and message
            that feels professional, memorable and true to who you are.
          </p>

          <p>
            I also understand the pressure of trying to stand out, apply for
            grants, respond to tenders and explain your value in a way that
            people actually connect with.
          </p>

          <p>
            Alongside my creative business experience, I also bring years of
            strategic leadership and project experience working within Charles
            Darwin University and the Northern Territory vocational education
            sector.
          </p>

          <p>
            This experience has given me strong insight into strategic planning,
            stakeholder engagement, funding priorities, grants, tenders and how
            to communicate ideas in a way that connects with decision-makers.
          </p>

          <p>
            Now, I combine creative thinking, AI-powered design tools and
            strategic writing to help businesses, community organisations and
            local brands stand out with confidence.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section services" id="services">
        <p className="eyebrow">What I can help with</p>

        <h2>Creative support for your next big idea.</h2>

        <div className="cards">

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
            <h3>Grant Writing</h3>

            <p>
              Support to shape clear, persuasive grant applications that tell
              your story and strengthen your case.
            </p>
          </div>

          <div className="card">
            <h3>Tender & Application Support</h3>

            <p>
              Help turning your ideas, services and experience into strong,
              structured written responses.
            </p>
          </div>

          <div className="card">
            <h3>Merchandise Ideas</h3>

            <p>
              Creative product, campaign and merchandise concepts to help your
              brand feel fun and memorable.
            </p>
          </div>

          <div className="card">
            <h3>Creative Strategy</h3>

            <p>
              Big-picture thinking to help you refine your message, visual style
              and customer experience.
            </p>
          </div>

        </div>
      </section>

      {/* FINAL STATEMENT */}
      <section className="section statement">
        <h2>Local stories deserve to stand out.</h2>

        <p>
          Whether you need a website, a logo, a grant application, a tender
          response or just someone to help turn your idea into something that
          feels exciting and professional — Positive Popcorn is here to help you
          pop.
        </p>
      </section>

      {/* FOOTER */}
      <footer>
        <p>
          Positive Popcorn — designed in the Territory, inspired by coastlines,
          red dirt and real stories.
        </p>
      </footer>

    </main>
  );
}

export default App;