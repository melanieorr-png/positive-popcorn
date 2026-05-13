import {
  ArrowRight,
  Mail,
  Phone,
  Monitor,
  PenTool,
  Palette,
  MessageCircle,
  MapPin,
  Sparkles,
  Leaf,
  FilePenLine,
  Lightbulb,
  Smartphone,
} from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-[#f7efe5] text-[#1f1f1f]">
      {/* HERO */}
      <section
        id="home"
        className="relative min-h-[760px] bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(247,239,229,0.98) 0%, rgba(247,239,229,0.88) 36%, rgba(247,239,229,0.20) 100%), url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=80')",
        }}
      >
        {/* HEADER */}
        <header className="max-w-7xl mx-auto px-6 py-7 flex items-start justify-between">
          <a href="#home">
            <img
              src="/positive_popcorn_logo.png"
              alt="Positive Popcorn Logo"
              className="w-72 max-w-[70vw] h-auto"
            />
          </a>

          <nav className="hidden lg:flex items-center gap-8 text-xs font-bold tracking-wide uppercase">
            <a href="#home" className="border-b-2 border-[#6d7b68] pb-2">
              Home
            </a>
            <a href="#about" className="hover:text-[#c66f45]">
              About
            </a>
            <a href="#services" className="hover:text-[#c66f45]">
              Services
            </a>
            <a href="#popcorn" className="hover:text-[#c66f45]">
              Positive Popcorn
            </a>
            <a href="#contact" className="hover:text-[#c66f45]">
              Contact
            </a>
            <a
              href="#contact"
              className="bg-[#6d7b68] text-white px-5 py-3 rounded-sm hover:bg-[#556251]"
            >
              Let’s Work Together
            </a>
          </nav>
        </header>

        {/* HERO TEXT */}
        <div className="max-w-7xl mx-auto px-6 pt-20 lg:pt-24">
          <div className="max-w-xl">
            <h1 className="font-serif text-5xl lg:text-7xl leading-tight text-[#1f1f1f]">
              Strategic thinking.
              <br />
              Creative solutions.
            </h1>

            <div className="w-24 h-1 bg-[#c66f45] mt-8 mb-8 rounded-full" />

            <p className="text-lg leading-8 text-[#263029] max-w-lg">
              Supporting businesses, projects and communities with websites,
              digital design and creative brand support that brings ideas to life.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-3 mt-10 bg-[#6d7b68] text-white px-8 py-4 rounded-sm text-sm font-bold uppercase tracking-wide hover:bg-[#556251]"
            >
              Start Your Project <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* HAND-DRAWN ACCENTS */}
        <div className="absolute right-10 bottom-8 hidden lg:block text-[#c66f45] text-6xl opacity-70">
          ♡
        </div>
      </section>

      {/* WHAT I DO */}
      <section id="services" className="bg-[#fffaf4]">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <SectionTitle title="What I Do" />

          <div className="grid md:grid-cols-4 gap-10 text-center mt-12">
            <Service
              icon={<Monitor />}
              title="Website Design"
              text="Beautiful, responsive websites that are easy to use and built to grow with your business."
            />
            <Service
              icon={<Palette />}
              title="Digital Logos"
              text="Custom logo concepts that capture your brand and leave a lasting impression."
            />
            <Service
              icon={<PenTool />}
              title="Brand Look & Feel"
              text="Colour palettes, fonts and style direction that bring your brand to life."
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
      <section id="popcorn" className="grid lg:grid-cols-2 bg-[#e8e0d3]">
        <div className="p-10 lg:p-20 flex items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-[#6d7b68] text-sm mb-5">
              Featured Creative Studio
            </p>

            <h2 className="font-serif text-5xl mb-6">Positive Popcorn</h2>

            <p className="text-xl leading-8 max-w-md mb-8">
              Websites, digital logos and ideas that pop — with a warm coastal
              feel and a Territory-inspired creative edge.
            </p>

            <a
              href="#services"
              className="inline-flex items-center gap-3 text-[#c66f45] uppercase tracking-wide font-bold"
            >
              Explore Positive Popcorn <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="relative min-h-[420px] bg-[#f5eadf] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-transparent to-[#d7c2ad]/50" />

          <div className="absolute top-8 left-10 w-28 h-28 rounded-full bg-white/40 blur-xl" />
          <div className="absolute bottom-8 right-12 w-40 h-40 rounded-full bg-[#c66f45]/10 blur-2xl" />

          <div className="relative rotate-[-2deg] max-w-lg mx-8">
            <img
              src="/positive_popcorn_logo.png"
              alt="Positive Popcorn Logo"
              className="w-full h-auto drop-shadow-xl"
            />
          </div>

          <Leaf className="absolute bottom-8 left-10 w-20 h-20 text-[#6d7b68]/35" />
        </div>
      </section>

      {/* LOCATION STRIP */}
      <section className="bg-[#5f6f5d] text-white">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm uppercase tracking-wide">
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5" />
            Darwin Based • Working Across the NT & Australia
          </div>

          <div className="flex items-center gap-6">
            <Mail className="w-5 h-5" />
            <Phone className="w-5 h-5" />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-[#fffaf4] py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="uppercase tracking-[0.35em] text-[#c66f45] text-xs font-bold mb-5">
              About
            </p>

            <h2 className="font-serif text-5xl leading-tight mb-7">
              Coastal calm, creative clarity and Territory soul.
            </h2>

            <p className="text-lg leading-8 text-[#3f3f3f] mb-5">
              Positive Popcorn helps small businesses and creative projects
              shape their online presence with thoughtful websites, simple brand
              direction and digital content that feels polished but human.
            </p>

            <p className="text-lg leading-8 text-[#3f3f3f]">
              The look is warm, earthy and Territory-inspired — drawing from
              Darwin sunsets, coastal textures, sage greens, soft sand tones and
              ideas that feel ready to be shared.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <BohoCard icon={<Sparkles />} title="Warm" />
            <BohoCard icon={<Leaf />} title="Natural" />
            <BohoCard icon={<Palette />} title="Creative" />
            <BohoCard icon={<Monitor />} title="Polished" />
          </div>
        </div>
      </section>

      {/* HOW I CAN HELP */}
      <section className="bg-[#f7efe5] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle title="How I Can Help" />

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8 text-center mt-12">
            <MiniService icon={<Monitor />} title="Website Design" />
            <MiniService icon={<PenTool />} title="Digital Logos" />
            <MiniService icon={<Palette />} title="Brand Look & Feel" />
            <MiniService icon={<Smartphone />} title="Social Graphics" />
            <MiniService icon={<FilePenLine />} title="Profile Banners" />
            <MiniService icon={<MessageCircle />} title="Content & Copy" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="bg-[#c66f45] text-white py-14">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-8">
          <p className="font-serif text-4xl lg:text-5xl">
            Let’s create something that pops.
          </p>

          <a
            href="mailto:hello@positivepopcorn.com.au"
            className="bg-[#fffaf4] text-[#5f6f5d] px-10 py-4 rounded-sm uppercase tracking-wide font-bold hover:bg-white"
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
      <div className="w-12 h-px bg-[#c66f45]" />
      <h2 className="uppercase tracking-[0.3em] text-sm font-bold">{title}</h2>
      <div className="w-12 h-px bg-[#c66f45]" />
    </div>
  );
}

function Service({ icon, title, text }) {
  return (
    <div className="px-6 md:border-r md:last:border-r-0 border-[#c66f45]/30">
      <div className="mx-auto mb-5 w-16 h-16 text-[#6d7b68] flex items-center justify-center">
        {icon}
      </div>

      <h3 className="font-serif text-2xl mb-3">{title}</h3>

      <p className="text-sm leading-7 text-[#333]">{text}</p>
    </div>
  );
}

function BohoCard({ icon, title }) {
  return (
    <div className="bg-white rounded-sm p-8 shadow-md border border-[#ead8c5] text-center">
      <div className="mx-auto mb-4 w-12 h-12 text-[#c66f45] flex items-center justify-center">
        {icon}
      </div>

      <h3 className="font-serif text-2xl">{title}</h3>
    </div>
  );
}

function MiniService({ icon, title }) {
  return (
    <div>
      <div className="mx-auto mb-4 w-20 h-20 rounded-full bg-[#f0dfd2] flex items-center justify-center text-[#6d7b68]">
        {icon}
      </div>

      <h3 className="font-serif text-xl mb-2">{title}</h3>

      <p className="text-sm leading-6 text-[#444]">
        Clear, creative support to help your brand shine online.
      </p>
    </div>
  );
}
