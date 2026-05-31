import "./index.css";

function App() {
  return (
    <main className="siteWrapper">
      <section className="hero">
        <div className="heroOverlay">
          <p className="eyebrow">Local • Creative • AI-powered</p>
          <h1>Positive Popcorn</h1>
          <p className="heroText">
            From the Top End coast to Central Australia, Positive Popcorn creates
            websites, logos, branding and digital stories with Territory heart.
          </p>
          <a href="#services" className="button">Let’s Create Something</a>
        </div>
      </section>

      <nav className="tabs">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#story">Story</a>
        <a href="#contact">Contact</a>
      </nav>

      <section id="about" className="section">
        <p className="eyebrow">Meet Mel</p>
        <h2>Built from creative, business and strategic experience.</h2>
        <p>
          Before Positive Popcorn, I ran my own business for over 10 years and
          created multiple websites using Wix. Through that experience, I saw
          first-hand how important it is to have a brand, website and message
          that feels professional, memorable and true to who you are.
        </p>
        <p>
          I’m local, I understand the Territory, and I know how hard it can be
          for small businesses, community groups and organisations to stand out,
          win opportunities and tell their story clearly.
        </p>
      </section>

      <section id="services" className="section soft">
        <p className="eyebrow">What I can help with</p>
        <h2>Creative support for your next big idea.</h2>

        <div className="servicesGrid">
          <div className="card">
            <h3>AI Website Design</h3>
            <p>Modern, eye-catching websites designed to feel authentic, welcoming and easy to navigate.</p>
          </div>

          <div className="card">
            <h3>Logos & Branding</h3>
            <p>Unique logo concepts, colour direction and brand ideas that help your business get noticed.</p>
          </div>

          <div className="card">
            <h3>Applications & Grants</h3>
            <p>Strategic writing support to help you explain your value clearly and confidently.</p>
          </div>

          <div className="card">
            <h3>Digital Storytelling</h3>
            <p>Creative words, visuals and messaging that bring your story to life with pop.</p>
          </div>
        </div>
      </section>

      <section id="story" className="section statement">
        <h2>NT proud. Creative by nature. Built with pop.</h2>
        <p>
          Positive Popcorn is inspired by warm sunsets, coastal textures, red dirt
          landscapes and rugged remote locations — because Territory businesses
          deserve branding that feels bold, local and unforgettable.
        </p>
      </section>

      <section id="contact" className="section contact">
        <p className="eyebrow">Ready when you are</p>
        <h2>Let’s make your idea stand out.</h2>
        <a href="mailto:hello@positivepopcorn.com.au" className="emailLink">
          hello@positivepopcorn.com.au
        </a>
      </section>
    </main>
  );
}

export default App;
