import {
  ArrowRight,
  Sparkles,
  Globe,
  Palette,
  PenTool,
  Camera,
  Mail,
  Waves,
  Sun,
  Heart,
} from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-[#fbf5ec] text-[#1f2933]">
      {/* NAV */}
      <header className="sticky top-0 z-50 bg-[#fbf5ec]/90 backdrop-blur border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <img
              src="/positive_popcorn_logo.png"
              alt="Positive Popcorn Logo"
              className="w-28 h-auto"
            />
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
            <a href="#about" className="hover:text-orange-500">About</a>
            <a href="#services" className="hover:text-orange-500">Services</a>
            <a href="#portfolio" className="hover:text-orange-500">Portfolio</a>
            <a href="#process" className="hover:text-orange-500">Process</a>
            <a href="#contact" className="hover:text-orange-500">Contact</a>
          </nav>

          <a
            href="#contact"
            className="hidden md:inline-flex bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-full font-bold shadow-md"
          >
            Let’s Create
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#fff0d8] via-[#fbf5ec] to-[#fde8ef]" />

        <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow-sm mb-6">
              <Sparkles className="w-4 h-4 text-orange-500" />
              <span className="text-sm font-semibold">
                Coastal Boho Digital Studio
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-black leading-tight text-slate-900">
              Creative websites
              <span className="block text-orange-500">with personality.</span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-slate-600 max-w-xl">
              Positive Popcorn creates warm, modern websites, branding and digital
              content for small businesses who want to show up online with
              confidence, colour and heart.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="#services"
                className="bg-orange-500 hover:bg-orange-600 text-white px-7 py-4 rounded-2xl font-bold shadow-lg flex items-center gap-2"
              >
                View Services <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="#contact"
                className="bg-white hover:bg-orange-50 px-7 py-4 rounded-2xl font-bold shadow-md"
              >
                Start a Project
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-8 -left-8 w-28 h-28 bg-orange-200 rounded-full blur-2xl opacity-70" />
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-pink-200 rounded-full blur-2xl opacity-70" />

            <div className="relative bg-white/80 rounded-[44px] shadow-2xl p-10">
              <img
                src="/positive_popcorn_logo.png"
                alt="Positive Popcorn Logo"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="bg-white rounded-[36px] p-8 shadow-lg border border-orange-100">
            <div className="flex gap-4 mb-6">
              <div className="bg-orange-100 p-4 rounded-2xl">
                <Waves className="w-8 h-8 text-orange-500" />
              </div>
              <div className="bg-green-100 p-4 rounded-2xl">
                <Sun className="w-8 h-8 text-green-700" />
              </div>
              <div className="bg-pink-100 p-4 rounded-2xl">
                <Heart className="w-8 h-8 text-pink-500" />
              </div>
            </div>

            <h2 className="text-4xl font-black mb-4">
              Built for brands with a little spark.
            </h2>

            <p className="text-slate-600 leading-relaxed">
              Positive Popcorn is for business owners who want their online
              presence to feel bright, professional and memorable — without
              losing the warmth and story behind the brand.
            </p>
          </div>

          <div>
            <p className="uppercase tracking-[0.25em] text-orange-500 text-sm font-bold mb-3">
              About Positive Popcorn
            </p>

            <h2 className="text-4xl lg:text-5xl font-black leading-tight mb-6">
              Digital design with coastal calm and Territory energy.
            </h2>

            <p className="text-slate-600 leading-relaxed mb-5">
              Inspired by the NT coastline, creative small business culture and
              the magic of bringing ideas to life, Positive Popcorn helps turn
              scattered ideas into clear, polished digital experiences.
            </p>

            <p className="text-slate-600 leading-relaxed">
              Whether you need a website, a fresh brand feel, social content or
              a simple online presence that finally feels like you — this is
              where ideas pop into impact.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-white/60 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="uppercase tracking-[0.25em] text-orange-500 text-sm font-bold mb-3">
              Services
            </p>
            <h2 className="text-4xl lg:text-5xl font-black mb-4">
              What We Create
            </h2>
            <p className="text-slate-600 text-lg">
              Creative digital support for small businesses ready to be seen.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Globe />}
              title="Website Design"
              text="Modern, mobile-friendly websites that feel warm, clear and easy for your customers to use."
            />
            <ServiceCard
              icon={<Palette />}
              title="Branding & Logos"
              text="Logo concepts, colour palettes and brand direction that help your business feel polished and memorable."
            />
            <ServiceCard
              icon={<PenTool />}
              title="Digital Content"
              text="Website copy, social graphics and creative content that helps your message land beautifully."
            />
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-12">
          <p className="uppercase tracking-[0.25em] text-orange-500 text-sm font-bold mb-3">
            Portfolio
          </p>
          <h2 className="text-4xl lg:text-5xl font-black">
            Recent Creative Direction
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <PortfolioCard title="Coastal Website Concept" tag="Website Design" />
          <PortfolioCard title="Boho Brand Identity" tag="Branding" />
          <PortfolioCard title="Social Launch Kit" tag="Digital Content" />
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="bg-[#23352d] text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="uppercase tracking-[0.25em] text-orange-300 text-sm font-bold mb-3">
            Process
          </p>

          <h2 className="text-4xl lg:text-5xl font-black mb-12">
            Simple, friendly and clear from start to launch.
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Step number="01" title="Dream It" text="We chat through your ideas, goals, audience and the feeling you want your brand to create." />
            <Step number="02" title="Design It" text="Your website or brand starts to take shape with colours, layout, words and visual direction." />
            <Step number="03" title="Launch It" text="We polish, publish and make sure your online presence feels ready to share with the world." />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-br from-orange-100 via-white to-pink-100 rounded-[44px] p-10 lg:p-16 shadow-xl text-center">
          <Mail className="w-10 h-10 text-orange-500 mx-auto mb-5" />

          <h2 className="text-4xl lg:text-5xl font-black mb-5">
            Ready to make your idea pop?
          </h2>

          <p className="text-slate-600 max-w-2xl mx-auto mb-8 text-lg">
            Let’s create a website, brand or digital presence that feels warm,
            confident and completely you.
          </p>

          <a
            href="mailto:hello@positivepopcorn.com.au"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-2xl font-bold shadow-lg"
          >
            Email Positive Popcorn <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-orange-100 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500">
            © 2026 Positive Popcorn. Where ideas pop into impact.
          </p>
          <p className="text-slate-500">
            Coastal boho digital design from the Northern Territory.
          </p>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ icon, title, text }) {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border border-orange-100">
      <div className="bg-orange-100 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-orange-500">
        {icon}
      </div>
      <h3 className="text-2xl font-black mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{text}</p>
    </div>
  );
}

function PortfolioCard({ title, tag }) {
  return (
    <div className="group rounded-[32px] overflow-hidden shadow-lg bg-white border border-orange-100">
      <div className="h-56 bg-gradient-to-br from-orange-100 via-pink-100 to-green-100 flex items-center justify-center">
        <Camera className="w-12 h-12 text-orange-500 group-hover:scale-110 transition-transform" />
      </div>
      <div className="p-7">
        <p className="text-orange-500 text-sm font-bold mb-2">{tag}</p>
        <h3 className="text-2xl font-black">{title}</h3>
      </div>
    </div>
  );
}

function Step({ number, title, text }) {
  return (
    <div className="bg-white/10 rounded-3xl p-8 border border-white/10">
      <p className="text-orange-300 font-black text-3xl mb-4">{number}</p>
      <h3 className="text-2xl font-black mb-3">{title}</h3>
      <p className="text-white/75 leading-relaxed">{text}</p>
    </div>
  );
}
