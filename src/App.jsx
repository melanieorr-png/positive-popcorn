import { useState } from "react";

export default function App() {
  const [activeTab, setActiveTab] = useState("services");

  return (
    <main className="site">
      <section className="heroMockup" id="home">
        <div className="heroImage" />

        <div className="navHotspots">
          <a href="#services" aria-label="Services"></a>
          <a href="#about" aria-label="About"></a>
          <a href="#popcorn" aria-label="Positive Popcorn"></a>
          <a href="#contact" aria-label="Contact"></a>
        </div>
      </section>

      <section className="tabsSection">
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
              <p>
                Websites, digital logos, brand design and creative support for
                businesses ready to show up beautifully online.
              </p>
            </>
          )}

          {activeTab === "about" && (
            <>
              <h2>About</h2>
              <p>
                Coastal creative support for businesses, projects and ideas
                across the Northern Territory.
              </p>
            </>
          )}

          {activeTab === "popcorn" && (
            <>
              <h2>Positive Popcorn</h2>
              <p>
                Creative websites, logos and digital support that feels warm,
                human and memorable.
              </p>
            </>
          )}

          {activeTab === "contact" && (
            <>
              <h2>Let’s Work Together</h2>
              <p>hello@positivepopcorn.com.au</p>
            </>
          )}
        </div>
      </section>
    </main>
  );
}
