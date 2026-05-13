import {
  ArrowRight,
  Monitor,
  PenTool,
  Palette,
  Lightbulb,
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  Leaf,
  Armchair,
  ClipboardPenLine,
  Smartphone,
  MessageCircle,
} from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-[#f7efe5] text-[#222]">
      {/* HERO */}
      <section
        id="home"
        className="relative min-h-[760px] bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(247,239,229,0.98) 0%, rgba(247,239,229,0.86) 38%, rgba(247,239,229,0.18) 100%), url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2200&q=90')",
        }}
      >
        <header className="relative z-20 max-w-[1500px] mx-auto px-8 py-8 flex items-start justify-between">
          <a href="#home">
            <img
              src="/positive_popcorn_logo.png"
              alt="Positive Popcorn Logo"
              className="w-[360px] max-w-[42vw] h-auto"
            />
          </a>

          <nav className="hidden lg:flex items-center gap-8 pt-8 text-[13px] font-bold tracking-wide uppercase">
            <a href="#home" className="border-b-2 border-[#63725f] pb-2">
              Home
            </a>
            <a href="#about" className="hover:text-[#c66f45]">About</a>
            <a href="#services" className="hover:text-[#c66f45] flex items-center gap-1">
              Services <ChevronDown className="w-3 h-3" />
            </a>
            <a href="#popcorn" className="hover:text-[#c66f45]">Positive Popcorn</a>
            <a href="#projects" className="hover:text-[#c66f45]">Projects</a>
            <a href="#contact" className="hover:text-[#c66f45]">Contact</a>
            <a
              href="#contact"
              className="bg-[#63725f] text-white px-6 py-4 rounded-sm hover:bg-[#4e5c4b]"
            >
              Let’s Work Together
            </a>
          </nav>
        </header>

        <div className="relative z-10 max-w-[1500px] mx-auto px-8 pt-16 lg:pt-24">
          <div className="max-w-[620px]">
            <h1 className="font-serif text-[56px] lg:text-[76px] leading-[1.08] text-[#242424]">
              Strategic thinking.
              <br />
              Creative solutions.
            </h1>

            <div className="w-24 h-[5px] bg-[#c66f45] mt-8 mb-8 rounded-full" />

            <p className="text-[21px] leading-[1.7] text-[#333] max-w-[520px]">
              Supporting businesses, projects and communities with websites,
              digital design and creative support that bring ideas to life.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-3 mt-10 bg-[#63725f] text-white px-9 py-5 rounded-sm text-sm font-bold uppercase tracking-wide hover:bg-[#4e5c4b]"
            >
              Start Your Project
            </a>
          </div>
        </div>

        <div className="absolute right-12 bottom-10 text-[#c66f45] text-7xl opacity-75 rotate-[-8deg]">
          ♡
        </div>
      </section>

      {/* WHAT I DO */}
      <section id="services" className="bg-[#fffaf4] py-14">
        <div className="max-w-[1450px] mx-auto px-8">
          <SectionTitle title="What I Do" />

          <div className="grid md:grid-cols-4 gap-0 mt-12 text-center">
            <Service
              icon={<Armchair />}
              title="Space Design"
              text="Functional, beautiful spaces that support how people live and work."
            />
            <Service
              icon={<ClipboardPenLine />}
              title="Application & Tender Writing"
              text="Clear, compelling responses that meet the brief and stand out."
            />
            <Service
              icon={<Monitor />}
              title="Websites & Digital"
              text="User-friendly websites and digital solutions that look great and work seamlessly."
            />
            <Service
              icon={<Lightbulb />}
              title="Creative Brand Support"
              text="Logos, branding and graphics that help your ideas pop and your brand shine."
            />
          </div>
        </div>
      </section>

      {/* FEATURED POSITIVE POPCORN */}
      <section id="popcorn" className="relative bg-[#e7dfd2] overflow-hidden">
        <div className="grid lg:grid-cols-[0.9fr_1.4fr] min-h-[360px]">
          <div className="relative z-10 p-10 lg:p-16 flex items-center bg-[#e7dfd2]/95">
            <div>
              <p className="uppercase tracking-[0.28em] text-[#63725f] text-sm mb-5">
                Featured Creative Studio
              </p>

              <h2 className="font-serif text-5xl lg:text-6xl mb-5">
                Positive Popcorn
              </h2>

              <p className="text-xl leading-8 max-w-md mb-7">
                The creative arm for websites, digital logos and ideas that pop.
              </p>

              <a
                href="#services"
                className="inline-flex items-center gap-3 text-[#c66f45] uppercase tracking-[0.16em] font-bold text-sm"
              >
                Explore Positive Popcorn <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="relative min-h-[360px] bg-[#f1e7da] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_35%,rgba(255,255,255,0.8),transparent_32%),linear-gradient(120deg,rgba(255,250,244,0.6),rgba(214,194,174,0.45))]" />

            <Leaf className="absolute left-16 top-24 w-28 h-28 text-[#63725f]/35 rotate-[-20deg]" />
            <div className="absolute right-10 top-8 w-28 h-28 rounded-full bg-white/45 blur-xl" />
            <div className="absolute right-28 bottom-8 w-52 h-52 rounded-full bg-[#63725f]/10 blur-2xl" />

            <div className="relative bg-[#fffaf4] shadow-2xl rotate-[-3deg] px-10 py-8 w-[520px] max-w-[80%]">
              <img
                src="/positive_popcorn_logo.png"
                alt="Positive Popcorn Logo"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* GREEN LOCATION STRIP */}
      <section className="bg-[#63725f] text-white">
        <div className="max-w-[1450px] mx-auto px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm uppercase tracking-wide">
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5" />
            Darwin Based • Working Across the NT & Australia
          </div>

          <div className="flex items-center gap-7">
            <Mail className="w-6 h-6" />
            <Phone className="w-6 h-6" />
          </div>
        </div>
      </section>

      {/* HOW I CAN HELP */}
      <section className="bg-[#fffaf4] py-20">
        <div className="max-w-[1450px] mx-auto px-8">
          <SectionTitle title="How I Can Help" />

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-10 text-center mt-12">
            <MiniService
              icon={<Monitor />}
              title="Website Design"
              text="Beautiful, responsive websites that are easy to use and built to grow with your business."
            />
            <MiniService
              icon={<PenTool />}
              title="Digital Logos"
              text="Custom logo concepts that capture your brand and leave a lasting impression."
            />
            <MiniService
              icon={<Palette />}
              title="Brand Look & Feel"
              text="Colour palettes, fonts and style direction that bring your brand to life."
            />
            <MiniService
              icon={<Smartphone />}
              title="Social Media Graphics"
              text="Eye-catching graphics that help your content stand out and connect."
            />
            <MiniService
              icon={<Monitor />}
              title="LinkedIn Banners"
              text="Professional banners that strengthen your profile and brand presence."
            />
            <MiniService
              icon={<MessageCircle />}
              title="Content & Copy Support"
              text="Simple, clear words that tell your story and connect with your audience."
            />
          </div>
        </div>
      </section>

      {/* TERRACOTTA CTA */}
      <section id="contact" className="relative bg-[#c66f45] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(255,255,255,0.22),transparent_30%)]" />

        <div className="relative max-w-[1450px] mx-auto px-8 py-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-6xl rotate-[-8deg] opacity-90">♡</div>

          <p className="font-serif italic text-4xl lg:text-5xl">
            Let’s create something that pops.
          </p>

          <a
            href="mailto:hello@positivepopcorn.com.au"
            className="bg-[#fffaf4] text-[#222] px-14 py-5 rounded-sm uppercase tracking-wide font-bold hover:bg-white"
          >
            Let’s Chat
          </a>
        </div>
      </section>

      <footer className="bg-[#263029] text-white/70 py-8 text-center text-sm">
        © 2026 Positive Popcorn • Coastal digital design from the Northern Territory
      </footer>
    </div>
  );
}

function SectionTitle({ title }) {
  return (
    <div className="flex items-center justify-center gap-5">
      <div className="w-14 h-px bg-[#c66f45]" />
      <h2 className="uppercase tracking-[0.35em] text-sm font-bold text-[#222]">
        {title}
      </h2>
      <div className="w-14 h-px bg-[#c66f45]" />
    </div>
  );
}

function Service({ icon, title, text }) {
  return (
    <div className="px-8 md:border-r md:last:border-r-0 border-[#c66f45]/35">
      <div className="mx-auto mb-5 w-20 h-20 text-[#63725f] flex items-center justify-center [&>svg]:w-14 [&>svg]:h-14 stroke-[1.4]">
        {icon}
      </div>

      <h3 className="font-serif text-2xl mb-4">{title}</h3>

      <p className="text-[15px] leading-7 text-[#333] max-w-[230px] mx-auto">
        {text}
      </p>
    </div>
  );
}

function MiniService({ icon, title, text }) {
  return (
    <div>
      <div className="mx-auto mb-4 w-20 h-20 rounded-full bg-[#f0dfd2] flex items-center justify-center text-[#63725f] [&>svg]:w-9 [&>svg]:h-9 stroke-[1.5]">
        {icon}
      </div>

      <h3 className="font-serif text-xl mb-3">{title}</h3>

      <p className="text-sm leading-6 text-[#444]">
        {text}
      </p>
    </div>
  );
}
