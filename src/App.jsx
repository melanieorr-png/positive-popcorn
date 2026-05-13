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
} from "lucide-react";

export default function App() {
  return (
    <div className="bg-[#f8f4ee] text-[#2d2d2d] overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center px-6 lg:px-20 py-20">
        
        {/* BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000&auto=format&fit=crop')",
          }}
        />

        {/* SOFT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#f6f1e7f2] via-[#f6f1e7de] to-[#f6f1e770]" />

        {/* CONTENT */}
        <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center w-full">
          
          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-md px-5 py-3 rounded-full shadow-md mb-8">
              <Sparkles className="w-4 h-4 text-[#d17b52]" />
              <span className="text-sm tracking-wide text-[#54624f]">
                Northern Territory Creative Studio
              </span>
            </div>

            <h1 className="text-6xl lg:text-8xl font-black leading-[0.95] text-[#1f2a37]">
              Websites with
              <span className="block text-[#d17b52]">
                personality.
              </span>
            </h1>

            <p className="mt-8 text-xl leading-relaxed text-[#4b5563] max-w-xl">
              Positive Popcorn creates warm, coastal-inspired digital
              experiences for Territory businesses, creatives and community
              projects.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <button className="bg-[#d17b52] hover:bg-[#bf6b45] transition-all text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-xl flex items-center gap-3">
                View Services
                <ArrowRight size={20} />
              </button>

              <button className="bg-white/80 backdrop-blur-md hover:bg-white transition-all px-8 py-4 rounded-2xl text-lg font-semibold shadow-lg">
                Let’s Create
              </button>
            </div>

            {/* MINI INFO */}
            <div className="flex gap-8 mt-14 flex-wrap text-[#54624f]">
              <div className="flex items-center gap-2">
                <Leaf size={18} />
                Coastal Inspired
              </div>

              <div className="flex items-center gap-2">
                <MapPin size={18} />
                Darwin, NT
              </div>

              <div className="flex items-center gap-2">
                <Sparkles size={18} />
                Boutique Creative Studio
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center items-center">
            
            {/* GLOW */}
            <div className="absolute w-[550px] h-[550px] bg-[#f0d7c7] rounded-full blur-3xl opacity-40" />

            {/* LOGO */}
            <div className="relative max-w-2xl opacity-95">
              <img
                src="/positive_popcorn_logo.png"
                alt="Positive Popcorn Logo"
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 px-6 lg:px-20 bg-[#f8f4ee]">
        <div className="text-center mb-20">
          <p className="uppercase tracking-[0.3em] text-[#d17b52] text-sm mb-4">
            What We Create
          </p>

          <h2 className="text-5xl font-bold text-[#1f2937]">
            Creative solutions with Territory soul.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* CARD 1 */}
          <div className="bg-white/70 backdrop-blur-md rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition-all">
            <Monitor className="w-10 h-10 text-[#d17b52] mb-6" />

            <h3 className="text-2xl font-bold mb-4">
              Website Design
            </h3>

            <p className="text-[#4b5563] leading-relaxed">
              Beautiful, responsive websites inspired by NT coastlines,
              creativity and community.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-white/70 backdrop-blur-md rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition-all">
            <Palette className="w-10 h-10 text-[#d17b52] mb-6" />

            <h3 className="text-2xl font-bold mb-4">
              Branding & Logos
            </h3>

            <p className="text-[#4b5563] leading-relaxed">
              Branding that feels warm, earthy, memorable and uniquely
              Northern Territory.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-white/70 backdrop-blur-md rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition-all">
            <PenTool className="w-10 h-10 text-[#d17b52] mb-6" />

            <h3 className="text-2xl font-bold mb-4">
              Creative Content
            </h3>

            <p className="text-[#4b5563] leading-relaxed">
              Social graphics, digital campaigns and storytelling that
              captures attention naturally.
            </p>
          </div>

          {/* CARD 4 */}
          <div className="bg-white/70 backdrop-blur-md rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition-all">
            <MessageCircle className="w-10 h-10 text-[#d17b52] mb-6" />

            <h3 className="text-2xl font-bold mb-4">
              Digital Support
            </h3>

            <p className="text-[#4b5563] leading-relaxed">
              Helping Territory businesses bring ideas to life online with
              practical, creative support.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURE STRIP */}
      <section className="bg-[#54624f] text-white py-6 px-6 lg:px-20">
        <div className="flex flex-wrap justify-between items-center gap-6">
          
          <div className="flex items-center gap-3 text-lg">
            <Leaf size={20} />
            Darwin Based · Working Across Australia
          </div>

          <div className="flex gap-6">
            <Mail className="hover:text-[#f0d7c7] cursor-pointer transition-all" />
            <Phone className="hover:text-[#f0d7c7] cursor-pointer transition-all" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6 lg:px-20 text-center relative overflow-hidden">
        
        <div className="absolute inset-0 bg-gradient-to-r from-[#d17b52] to-[#c48a6a]" />

        <div className="relative z-10">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8">
            Let’s create something that pops.
          </h2>

          <p className="text-white/90 text-xl max-w-2xl mx-auto mb-10">
            Websites, branding and creative ideas inspired by the Territory,
            designed to feel warm, human and memorable.
          </p>

          <button className="bg-white text-[#54624f] hover:bg-[#f8f4ee] transition-all px-10 py-5 rounded-2xl text-lg font-bold shadow-2xl">
            Start Your Project
          </button>
        </div>
      </section>
    </div>
  );
}
