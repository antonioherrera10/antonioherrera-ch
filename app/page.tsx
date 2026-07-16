import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { getAllProjects } from "@/lib/work";
import { CONTENT, GOOGLE_CALENDAR_LINK, SOCIAL_LINKS } from "@/lib/content";

export const metadata: Metadata = {
  title: "ANTONIO HERRERA | Designer & Performing Artist, Zurich",
  description: "Official website of Antonio Herrera, Strategic Designer and Performing Artist based in Zurich.",
};

export default async function HomePage() {
  const projects = await getAllProjects();

  return (
    <div className="w-full bg-black text-white selection:bg-ah-red selection:text-white">
      {/* 1. HERO SECTION */}
      <section id="hero" className="relative min-h-[90vh] flex flex-col justify-center items-center px-6 md:px-12 py-24 border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,51,51,0.05)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-5xl text-center space-y-8 z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-white/10 rounded-full bg-white/5">
            <span className="w-2 h-2 rounded-full bg-ah-red animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-ah-grey font-medium">Official Portal</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-extrabold uppercase tracking-tighter leading-none font-syne">
            {CONTENT.heroTitle}
          </h1>
          <p className="text-lg md:text-xl text-ah-grey max-w-2xl mx-auto leading-relaxed">
            {CONTENT.heroSub}
          </p>
          <div className="pt-6">
            <a
              href={GOOGLE_CALENDAR_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="ah-button ah-button-primary inline-flex items-center gap-3 hover:scale-105 active:scale-95 transition-transform"
            >
              <span>{CONTENT.heroCta}</span>
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* 2. TRUSTED BY SECTION */}
      <section id="trusted-by" className="py-16 border-b border-white/10 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-[10px] uppercase tracking-[0.4em] text-ah-grey/60 mb-10">
            {CONTENT.partnersTitle}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center opacity-60 hover:opacity-100 transition-opacity duration-300">
            {["Zurich Performance Hall", "HERR Design Collective", "Boutique Group", "Creative Europe", "Swiss Art Alliance"].map((partner, index) => (
              <span key={index} className="text-xs md:text-sm font-bold uppercase tracking-widest text-center text-white hover:text-ah-red transition-colors duration-200">
                {partner}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 3. STAKES SECTION */}
      <section id="stakes" className="py-24 md:py-32 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 flex flex-col justify-between border-l-2 border-ah-red pl-6 py-2">
            <div>
              <span className="text-[10px] uppercase tracking-[0.4em] text-ah-red font-bold">01. The Stakes</span>
              <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight mt-4 font-syne leading-tight">
                Performing but not participating.
              </h2>
            </div>
            <span className="text-5xl font-extrabold text-white/5 hidden lg:block select-none">STAKES</span>
          </div>
          <div className="lg:col-span-8 flex flex-col justify-center space-y-6 text-base md:text-lg text-ah-grey leading-relaxed">
            <p>
              {CONTENT.stopText1}
            </p>
            <p className="border-t border-white/10 pt-6">
              When professional roles define your personal worth, losing the role means losing yourself. Masterful decisions, rigorous discipline, and constant pressure shouldn't empty your life of its vitality. Standing still in routines that no longer fit is the real cost of safe choices.
            </p>
          </div>
        </div>
      </section>

      {/* 4. VALUE PROPOSITION SECTION */}
      <section id="value-proposition" className="py-24 md:py-32 border-b border-white/10 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 flex flex-col justify-between border-l-2 border-ah-orange pl-6 py-2">
            <div>
              <span className="text-[10px] uppercase tracking-[0.4em] text-ah-orange font-bold">02. Value Proposition</span>
              <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight mt-4 font-syne leading-tight">
                A new architecture of life.
              </h2>
            </div>
            <span className="text-5xl font-extrabold text-white/5 hidden lg:block select-none">PROPOSITION</span>
          </div>
          <div className="lg:col-span-8 flex flex-col justify-center space-y-6 text-base md:text-lg text-ah-grey leading-relaxed">
            <p>
              {CONTENT.banner1}
            </p>
            <p className="border-t border-white/10 pt-6">
              We merge strategic design principles with high-energy physical performing arts. By treating routines, environments, and acts with structural rigor, we create space for profound human connection and electric vitality.
            </p>
          </div>
        </div>
      </section>

      {/* 5. EMPATHY SECTION */}
      <section id="empathy" className="py-24 md:py-32 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 flex flex-col justify-between border-l-2 border-ah-rosa pl-6 py-2">
            <div>
              <span className="text-[10px] uppercase tracking-[0.4em] text-ah-rosa font-bold">03. Empathy</span>
              <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight mt-4 font-syne leading-tight">
                I know the frustration.
              </h2>
            </div>
            <span className="text-5xl font-extrabold text-white/5 hidden lg:block select-none">EMPATHY</span>
          </div>
          <div className="lg:col-span-8 flex flex-col justify-center space-y-6 text-base md:text-lg text-ah-grey leading-relaxed">
            <p>
              {CONTENT.expTitle}
            </p>
            <p className="border-t border-white/10 pt-6">
              I have spent years navigating the high-stakes pressure of strategic design and corporate expectations, and I learned that we cannot build a meaningful future on empty routines. I design environments and soundscapes to help ambitious minds reconnect with light, sound, and authentic life.
            </p>
          </div>
        </div>
      </section>

      {/* 6. GUIDE (DESIGNER / PERFORMING ARTIST) SECTION */}
      <section id="guide" className="py-24 md:py-32 border-b border-white/10 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-[10px] uppercase tracking-[0.4em] text-ah-grey">04. The Guide</span>
            <h2 className="text-3xl md:text-6xl font-extrabold uppercase tracking-tight mt-4 font-syne">
              Antonio Herrera
            </h2>
            <p className="text-sm uppercase tracking-widest text-ah-grey/80 mt-2">
              Designer | Performing Artist
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
            {/* The Strategic Designer */}
            <div className="p-8 md:p-12 border border-white/10 bg-black rounded-2xl hover:border-ah-lightblue/30 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-ah-lightblue font-bold">Pillar One</span>
                <h3 className="text-2xl md:text-4xl font-extrabold uppercase tracking-tight mt-4 mb-6 font-syne group-hover:text-ah-lightblue transition-colors">
                  The Strategic Designer
                </h3>
                <p className="text-ah-grey leading-relaxed mb-8">
                  Redesigning physical environments, product systems, and brand identities. We craft premium spatial architectures that align your outer workspace with your inner trajectory.
                </p>
              </div>
              <div className="border-t border-white/10 pt-6 flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-white font-bold">Spatial Design</span>
                <Link href="/design" className="text-xs uppercase tracking-widest text-ah-lightblue hover:underline">
                  Explore spaces &rarr;
                </Link>
              </div>
            </div>

            {/* The Performing Artist */}
            <div className="p-8 md:p-12 border border-white/10 bg-black rounded-2xl hover:border-ah-red/30 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-ah-red font-bold">Pillar Two</span>
                <h3 className="text-2xl md:text-4xl font-extrabold uppercase tracking-tight mt-4 mb-6 font-syne group-hover:text-ah-red transition-colors">
                  The Performing Artist
                </h3>
                <p className="text-ah-grey leading-relaxed mb-8">
                  Curating immersive stage acts, vocal sets, and bodily resonance. Creating electric, zero-judgment spaces where high-pressure leaders can fully participate in the music.
                </p>
              </div>
              <div className="border-t border-white/10 pt-6 flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-white font-bold">Live Acoustics</span>
                <Link href="/music" className="text-xs uppercase tracking-widest text-ah-red hover:underline">
                  Listen &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS SECTION */}
      <section id="testimonials" className="py-24 md:py-32 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-[10px] uppercase tracking-[0.4em] text-ah-grey">05. Resonance</span>
            <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight mt-4 font-syne">
              {CONTENT.testimonialsTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: CONTENT.test1Name, role: CONTENT.test1Role, quote: CONTENT.test1Quote, border: "hover:border-ah-red/40" },
              { name: CONTENT.test2Name, role: CONTENT.test2Role, quote: CONTENT.test2Quote, border: "hover:border-ah-orange/40" },
              { name: CONTENT.test3Name, role: CONTENT.test3Role, quote: CONTENT.test3Quote, border: "hover:border-ah-rosa/40" },
              { name: CONTENT.test4Name, role: CONTENT.test4Role, quote: CONTENT.test4Quote, border: "hover:border-ah-lightblue/40" },
              { name: CONTENT.test5Name, role: CONTENT.test5Role, quote: CONTENT.test5Quote, border: "hover:border-ah-blue/40" },
              { name: CONTENT.test9Name, role: CONTENT.test9Role, quote: CONTENT.test9Quote, border: "hover:border-ah-red/40" }
            ].map((t, idx) => (
              <div key={idx} className={`p-8 border border-white/10 bg-white/[0.01] rounded-2xl transition-all duration-300 flex flex-col justify-between ${t.border}`}>
                <p className="text-sm text-ah-grey italic leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="border-t border-white/10 pt-4 flex justify-between items-center">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-white">{t.name}</h4>
                    <p className="text-[10px] text-ah-grey tracking-wider mt-1">{t.role}</p>
                  </div>
                  <span className="text-[10px] uppercase text-white/20 select-none">#AH</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. SERVICE METRICS SECTION */}
      <section id="metrics" className="py-20 border-b border-white/10 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8 border border-white/5 rounded-2xl bg-black">
              <span className="text-5xl md:text-7xl font-extrabold text-ah-red font-syne tracking-tight">10+</span>
              <h4 className="text-[10px] uppercase tracking-[0.3em] text-ah-grey mt-4 font-bold">Years Experience</h4>
              <p className="text-xs text-ah-grey/60 mt-1">{CONTENT.exp1}</p>
            </div>
            <div className="p-8 border border-white/5 rounded-2xl bg-black">
              <span className="text-5xl md:text-7xl font-extrabold text-ah-orange font-syne tracking-tight">50+</span>
              <h4 className="text-[10px] uppercase tracking-[0.3em] text-ah-grey mt-4 font-bold">Live Engagements</h4>
              <p className="text-xs text-ah-grey/60 mt-1">{CONTENT.exp2}</p>
            </div>
            <div className="p-8 border border-white/5 rounded-2xl bg-black">
              <span className="text-5xl md:text-7xl font-extrabold text-ah-rosa font-syne tracking-tight">20+</span>
              <h4 className="text-[10px] uppercase tracking-[0.3em] text-ah-grey mt-4 font-bold">Countries Visited</h4>
              <p className="text-xs text-ah-grey/60 mt-1">{CONTENT.exp3}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. SERVICES SECTION */}
      <section id="services" className="py-24 md:py-32 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-[10px] uppercase tracking-[0.4em] text-ah-grey">06. Offerings</span>
            <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight mt-4 font-syne">
              Consultancy & Artistry
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-white/10 rounded-2xl flex flex-col justify-between hover:border-ah-red/30 transition-all duration-300">
              <div>
                <span className="text-3xl font-extrabold font-syne text-ah-red">01</span>
                <h3 className="text-xl font-extrabold uppercase tracking-tight mt-4 mb-4 font-syne">Spatial Systems</h3>
                <p className="text-xs text-ah-grey leading-relaxed">
                  Deep design advisory focused on personal spatial harmony, creative workplace restructuring, and premium identity systems.
                </p>
              </div>
              <div className="pt-6">
                <Link href="/design" className="text-xs uppercase tracking-widest text-ah-red hover:underline">
                  Strategic Advisory &rarr;
                </Link>
              </div>
            </div>

            <div className="p-8 border border-white/10 rounded-2xl flex flex-col justify-between hover:border-ah-orange/30 transition-all duration-300">
              <div>
                <span className="text-3xl font-extrabold font-syne text-ah-orange">02</span>
                <h3 className="text-xl font-extrabold uppercase tracking-tight mt-4 mb-4 font-syne">Live Resonance</h3>
                <p className="text-xs text-ah-grey leading-relaxed">
                  Immersive acoustics, live vocal performance curation, high-energy gatherings, and shared body resonance sessions.
                </p>
              </div>
              <div className="pt-6">
                <Link href="/music" className="text-xs uppercase tracking-widest text-ah-orange hover:underline">
                  Stage Curations &rarr;
                </Link>
              </div>
            </div>

            <div className="p-8 border border-white/10 rounded-2xl flex flex-col justify-between hover:border-ah-rosa/30 transition-all duration-300">
              <div>
                <span className="text-3xl font-extrabold font-syne text-ah-rosa">03</span>
                <h3 className="text-xl font-extrabold uppercase tracking-tight mt-4 mb-4 font-syne">Boutique Collections</h3>
                <p className="text-xs text-ah-grey leading-relaxed">
                  Artist collections including premium textile design, custom artist bedding, and bespoke art objects carrying pure emotion.
                </p>
              </div>
              <div className="pt-6">
                <a href={SOCIAL_LINKS.boutique} target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-widest text-ah-rosa hover:underline">
                  Boutique Shop &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. SELECTED WORK SECTION */}
      <section id="selected-work" className="py-24 md:py-32 border-b border-white/10 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-[10px] uppercase tracking-[0.4em] text-ah-grey">07. Portfolios</span>
              <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight mt-4 font-syne">
                Selected Work
              </h2>
            </div>
            <Link href="/work" className="text-xs uppercase tracking-widest text-ah-red hover:underline font-bold">
              View All Work &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.slice(0, 2).map((p) => (
              <Link href={`/work/${p.slug}`} key={p.slug} className="group block border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition-all duration-300">
                <div className="aspect-[16/10] bg-zinc-900 relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />
                  <div className="absolute inset-0 flex flex-col justify-end p-8 z-20">
                    <span className="text-[10px] uppercase tracking-widest text-ah-grey bg-white/5 px-2 py-1 rounded self-start border border-white/10">
                      {p.discipline}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight mt-3 text-white group-hover:text-ah-red transition-colors font-syne">
                      {p.title}
                    </h3>
                    <p className="text-xs text-ah-grey mt-2 line-clamp-1">{p.summary}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 11. PLAN SECTION */}
      <section id="plan" className="py-24 md:py-32 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-[10px] uppercase tracking-[0.4em] text-ah-grey">08. Framework</span>
            <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight mt-4 font-syne">
              {CONTENT.howTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-white/5 rounded-2xl bg-white/[0.01] text-center space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-ah-red">Step 01</span>
              <h3 className="text-xl font-extrabold uppercase font-syne">{CONTENT.howStep1}</h3>
              <p className="text-xs text-ah-grey leading-relaxed">
                Connect and register through our contact channels. Set your intent and primary aspirations.
              </p>
            </div>
            <div className="p-8 border border-white/5 rounded-2xl bg-white/[0.01] text-center space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-ah-orange">Step 02</span>
              <h3 className="text-xl font-extrabold uppercase font-syne">{CONTENT.howStep2}</h3>
              <p className="text-xs text-ah-grey leading-relaxed">
                Fill out the discovery guidelines in your private portal so we can focus your path.
              </p>
            </div>
            <div className="p-8 border border-white/5 rounded-2xl bg-white/[0.01] text-center space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-ah-rosa">Step 03</span>
              <h3 className="text-xl font-extrabold uppercase font-syne">{CONTENT.howStep3}</h3>
              <p className="text-xs text-ah-grey leading-relaxed">
                Get confirmed and enter a customized consultation to align your design and acoustics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 12. EXPLANATORY PARAGRAPH SECTION */}
      <section id="philosophy" className="py-24 md:py-32 border-b border-white/10 bg-white/[0.01]">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <span className="text-[10px] uppercase tracking-[0.4em] text-ah-grey">09. Philosophy</span>
          <p className="text-2xl md:text-4xl font-extrabold tracking-tight uppercase leading-relaxed font-syne text-white">
            &ldquo;{CONTENT.stopText2.split("\n\n")[1]?.replace("\n\n", " ") || CONTENT.stopText2}&rdquo;
          </p>
          <div className="pt-4">
            <span className="w-12 h-1 bg-ah-red inline-block mx-1"></span>
            <span className="w-12 h-1 bg-ah-orange inline-block mx-1"></span>
            <span className="w-12 h-1 bg-ah-rosa inline-block mx-1"></span>
          </div>
        </div>
      </section>

      {/* 13. FINAL CTA SECTION */}
      <section id="final-cta" className="bg-ah-red text-black py-24 md:py-32 border-b-4 border-white">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-4xl md:text-7xl font-extrabold uppercase tracking-tighter leading-none font-syne">
            {CONTENT.unlockTitle}
          </h2>
          <p className="text-base md:text-xl text-black/80 max-w-2xl mx-auto leading-relaxed font-medium">
            {CONTENT.promoSub}
          </p>
          <div className="pt-6">
            <a
              href={GOOGLE_CALENDAR_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-black text-white text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-white hover:text-black transition-all duration-300 inline-flex items-center gap-3"
            >
              <span>{CONTENT.promoCta}</span>
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
