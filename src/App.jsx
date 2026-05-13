import {
  ArrowRight,
  Mail,
  Phone,
  Linkedin,
  Monitor,
  PenTool,
  Palette,
  MessageCircle,
  MapPin,
  Sparkles,
  Leaf,
} from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-[#f7efe5] text-[#1f1f1f]">
      {/* HERO */}
      <section
        id="home"
        className="relative min-h-[720px] bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(247,239,229,0.96) 0%, rgba(247,239,229,0.86) 38%, rgba(247,239,229,0.18) 100%), url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=80')",
        }}
      >
        <header className="max-w-7xl mx-auto px-6 py-8 flex items-start justify-between">
          <a href="#home" className="block">
            <img
              src="/positive_popcorn_logo.png"
              alt="Positive Popcorn Logo"
              className="w-56 h-auto"
            />
          </a>

          <nav className="hidden lg:flex items-center gap-8 text-xs font-bold tracking-wide uppercase">
            <a href="#home" className="border-b-2 border-[#6d7b68] pb-2">Home</a>
            <a href="#about" className="hover:text-[#c66f45]">About</a>
            <a href="#services" className="hover:text-[#c66f45]">Services</a>
            <a href="#popcorn" className="hover:text-[#c66f45]">Positive Popcorn</a>
            <a href="#contact" className="hover:text-[#c66f45]">Contact</a>
            <a
              href="#contact"
              className="bg-[#6d7b68] text-white px-5 py-3 rounded-sm hover:bg-[#556251]"
            >
              Let’s Work Together
            </a>
          </nav>
        </header>

        <div className="max-w-7xl mx-auto px-6 pt-16 lg:pt-24">
          <div className="max-w-xl">
            <p className="uppercase tracking-[0.45em] text-[#c66f45] text-xs font-bold mb-5">
              Websites • Branding • Digital
            </p>

            <h1 className="font-serif text-5xl lg:text-7xl leading-tight text-[#1f1f1f]">
              Territory inspired.
              <br />
              Digitally created.
            </h1>

            <div className="w-24 h-1 bg-[#c66f45] mt-8 mb-8 rounded-full" />

            <p className="text-lg leading-8 text-[#263029] max-w-lg">
              Coastal boho websites, logos and digital design for businesses
              ready to look polished, warm and memorable online.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-3 mt-10 bg-[#6d7b68] text-white px-8 py-4 rounded-sm text-sm font-bold uppercase tracking-wide hover:bg-[#556251]"
            >
              Start Your Project <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* WHAT I DO */}
      <section id="services" className="bg-[#fffaf4] py-18">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <SectionTitle title="What I Do" />

          <div className="grid md:grid-cols-4 gap-10 text-center mt-12">
            <Service icon={<Monitor />} title="Website Design" text="Beautiful responsive websites that are easy to use and built to grow with your business." />
            <Service icon={<Palette />} title="Digital Logos" text="Custom logo concepts that capture your brand and leave a lasting impression." />
            <Service icon={<PenTool />} title="Brand Look & Feel" text="Colour palettes, fonts and visual direction that bring your brand to life." />
            <Service icon={<MessageCircle />} title="Content Support" text="Simple, clear words and graphics that help your story connect." />
          </div>
        </div>
      </section>

      {/* FEATURE POSITIVE POPCORN */}
      <section id="popcorn" className="grid lg:grid-cols-2 bg-[#e8e0d3]">
        <div className="p-10 lg:p-20 flex items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-[#6d7b68] text-sm mb-5">
              Featured Creative Studio
            </p>

            <h2 className="font-serif text-5xl mb-6">Positive Popcorn</h2>

            <p className="text-xl leading-8 max-w-md mb-8">
              The creative studio for websites, digital logos and ideas that
              pop with personality, warmth and impact.
            </p>

            <a
              href="#services"
              className="inline-flex items-center gap-3 text-[#c66f45] uppercase tracking-wide font-bold"
            >
              Explore Services <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="relative min-h-[420px] bg-[#f5eadf] flex items-center justify-center p-10">
          <div className="absolute inset-0 opacity-50 bg-[radial-gradient(circle_at_top_left,_#ffffff,_transparent_45%)]" />
          <div className="relative bg-white/70 p-8 shadow-2xl rotate-[-2deg] max-w-lg">
            <img
              src="/positive_popcorn_logo.png"
              alt="Positive Popcorn Logo"
              className="w-full h-auto"
            />
          </div>
          <Leaf className="absolute bottom-8 right-10 w-20 h-20 text-[#6d7b68]/50" />
        </div>
      </section>

      {/* LOCATION STRIP */}
      <section className="bg-[#5f6f5d] text-white">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm uppercase tracking-wide">
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5" />
            Darwin based • Working across the NT & Australia
          </div>

          <div className="flex items-center gap-6">
            <Linkedin className="w-5 h-5" />
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
              Creative support with a calm coastal feel.
            </h2>

            <p className="text-lg leading-8 text-[#3f3f3f] mb-5">
              Positive Popcorn brings together design, structure and storytelling
              to help small businesses show up online with confidence.
            </p>

            <p className="text-lg leading-8 text-[#3f3f3f]">
              The look is warm, earthy and Territory-inspired — drawing from
              beach sunsets, native greens, soft sand tones and creative energy.
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
            <MiniService title="Website Design" />
            <MiniService title="Digital Logos" />
            <MiniService title="Brand Look & Feel" />
            <MiniService title="Social Graphics" />
            <MiniService title="LinkedIn Banners" />
            <MiniService title="Content & Copy" />
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

function MiniService({ title }) {
  return (
    <div>
      <div className="mx-auto mb-4 w-20 h-20 rounded-full bg-[#f0dfd2] flex items-center justify-center">
        <Sparkles className="w-8 h-8 text-[#6d7b68]" />
      </div>
      <h3 className="font-serif text-xl mb-2">{title}</h3>
      <p className="text-sm leading-6 text-[#444]">
        Clear, creative support to help your brand shine online.
      </p>
    </div>
  );
}
