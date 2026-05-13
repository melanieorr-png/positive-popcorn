import { useState } from "react";

export default function App() {
  const [activeTab, setActiveTab] = useState("services");

  return (
    <main className="site">
      <section className="heroMockup" id="home">
        <div className="heroImage" />

        <nav className="navHotspots">
          <a href="#home" aria-label="Home" />
          <a href="#about" aria-label="About" />
          <a href="#services" aria-label="Services" />
          <a href="#popcorn" aria-label="Positive Popcorn" />
          <a href="#contact" aria-label="Contact" />
        </nav>
      </section>

      <section className="tabsSection" id="services">
        <div className="tabButtons">
          <button onClick={() => setActiveTab("services")}>Services</button>
          <button onClick={() => setActiveTab("about")}>About</button>
          <button onClick={() => setActiveTab("popcorn")}>Positive Popcorn</button>
          <button onClick={() => setActiveTab("contact")}>Contact</button>
        </div>

        <div className="tabContent">
          {activeTab === "services" && (
            <>
              <h2>Services</h2>
              <p>Websites, digital logos, brand design and creative support for businesses ready to show up beautifully online.</p>
            </>
          )}

          {activeTab === "about" && (
            <>
              <h2>About</h2>
              <p>Positive Popcorn is a coastal-inspired creative studio bringing warm, polished and Territory-flavoured digital ideas to life.</p>
            </>
          )}

          {activeTab === "popcorn" && (
            <>
              <h2>Positive Popcorn</h2>
              <p>Where ideas pop into impact — websites, branding and digital design with a soft NT coastal feel.</p>
            </>
          )}

          {activeTab === "contact" && (
            <>
              <h2>Contact</h2>
              <p>Email: hello@positivepopcorn.com.au</p>
            </>
          )}
        </div>
      </section>

      <section id="about" className="pageSection">
        <h2>About</h2>
        <p>Coastal creative support for businesses, projects and ideas across the Northern Territory.</p>
      </section>

      <section id="popcorn" className="pageSection">
        <h2>Positive Popcorn</h2>
        <p>Creative websites, logos and digital support that feels warm, human and memorable.</p>
      </section>

      <section id="contact" className="pageSection contactSection">
        <h2>Let’s Work Together</h2>
        <p>hello@positivepopcorn.com.au</p>
      </section>
    </main>
  );
}
