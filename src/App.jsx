import { ArrowRight } from "lucide-react";

export default function App() {
  return (
    <main className="site">
      <section className="heroMockup">
        <div className="heroImage" />

        <nav className="navOverlay">
          <a className="active" href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Positive Popcorn</a>
          <a href="#">Contact</a>
          <a className="navButton" href="#">Let’s Work Together</a>
        </nav>

        <a className="buttonOverlay" href="#">
          Start Your Project <ArrowRight size={22} />
        </a>
      </section>
    </main>
  );
}
