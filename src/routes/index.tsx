import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { z } from "zod";
import { Heart, MessageCircle, Coffee, Gem, Users, MapPin } from "lucide-react";
import ganesha from "@/assets/ganesha.png";
import templeDoor from "@/assets/temple-door.jpg";
import templeGate from "@/assets/clean_temple_gate.png";
import { Diya } from "@/components/Diya";
import { OrnateDivider } from "@/components/PageShell";
import { Section } from "@/components/Section";
import { SandeshPatr } from "@/components/SandeshPatr";
import { Phone, MessageSquare, Send } from "lucide-react";

import { Petals, GoldenParticles } from "@/components/Petals";
import { RitualCard } from "@/components/RitualCard";
import { WeddingBox } from "@/components/WeddingBox";

const WhatsAppIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={`${className} fill-current`}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.122 1.523 5.853L.057 23.617c-.073.27.162.519.432.459l6.014-1.387A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.892 0-3.659-.519-5.168-1.421l-.359-.215-3.724.857.902-3.607-.236-.371A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
  </svg>
);
import brideImg from "@/assets/bride.png";
import groomImg from "@/assets/groom.png";
import brideFatherImg from "@/assets/bride_father_new.png";
import brideMotherImg from "@/assets/bride_mother_new.png";
import groomFatherImg from "@/assets/groom_father.png";
import groomMotherImg from "@/assets/groom_mother.png";
import storyCollegeImg from "@/assets/story_college.png";
import storyLibraryImg from "@/assets/story_library.png";
import storyCoffeeImg from "@/assets/story_coffee.png";
import storyRestaurantImg from "@/assets/story_restaurant.png";
import storyFamilyHomeImg from "@/assets/story_family_home.png";
import ritualHaldi from "@/assets/ritual_haldi.png";
import ritualMehendi from "@/assets/ritual_mehendi.png";
import ritualSangeet from "@/assets/ritual_sangeet.png";
import ritualVivaah from "@/assets/ritual_vivaah.png";
import ritualReception from "@/assets/ritual_reception.png";

const welcomeSearchSchema = z.object({
  guest: z.string().optional(),
});

export const Route = createFileRoute("/")({
  validateSearch: (search) => welcomeSearchSchema.parse(search),
  head: () => ({
    meta: [
      { title: "Ravi weds Ranjana — A Royal Indian Wedding" },
      { name: "description", content: "A grand royal Indian wedding invitation. June 2026, Gorakhpur." },
    ],
  }),
  component: Welcome,
});

const SectionNavButtons = ({ nextId, backId, nextLabel = "NEXT", backLabel = "BACK" }: { nextId?: string, backId?: string, nextLabel?: string, backLabel?: string }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="mt-8 flex items-center justify-between gap-4 px-4 w-full max-w-4xl mx-auto">
      <div className="flex-1">
        {backId && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollTo(backId)}
            className="flex items-center gap-2 rounded-full border border-gold/40 bg-black/40 px-6 py-2 font-display text-[9px] tracking-[0.2em] text-gold transition hover:bg-gold hover:text-maroon-deep backdrop-blur-md shadow-lg"
          >
            ← {backLabel}
          </motion.button>
        )}
      </div>
      <div className="flex-1 flex justify-end">
        {nextId && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollTo(nextId)}
            className="flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-6 py-2 font-display text-[9px] tracking-[0.2em] text-gold transition hover:bg-gold hover:text-maroon-deep backdrop-blur-md shadow-[0_0_15px_rgba(255,215,0,0.2)]"
          >
            {nextLabel} →
          </motion.button>
        )}
      </div>
    </div>
  );
};

function Welcome() {
  const [opened, setOpened] = useState(false);
  const [revealed, setRevealed] = useState(false);

  const [boxOpened, setBoxOpened] = useState(false);
  const { guest } = Route.useSearch();
  const guestName = guest || "Rohit Sharma";

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#1a0505]">

      <GoldenParticles count={30} />
      
      {!boxOpened && (
        <WeddingBox 
          guestName={guestName} 
          onOpen={() => setBoxOpened(true)} 
        />
      )}





      {/* Door overlay */}
      <AnimatePresence>
        {boxOpened && !opened && (
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden">
            {/* Left Door */}
            <motion.div
              key="left"
              initial={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 2.2, ease: [0.7, 0, 0.3, 1] }}
              onClick={() => setOpened(true)}
              className="relative h-full w-1/2 cursor-pointer border-r border-gold/30"
              style={{
                backgroundImage: `url(${templeGate})`,
                backgroundSize: "cover",
                backgroundPosition: "right",
              }}
            >
              <div className="absolute inset-0 bg-maroon-deep/20 shadow-[inset_-20px_0_60px_rgba(0,0,0,0.5)]" />
              {/* Ornate Handle Left */}
              <div className="absolute top-1/2 right-4 -translate-y-1/2 h-20 w-8 bg-gradient-to-r from-gold/80 to-gold rounded-l-full border border-gold/40 shadow-xl" />
            </motion.div>

            {/* Right Door */}
            <motion.div
              key="right"
              initial={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 2.2, ease: [0.7, 0, 0.3, 1] }}
              onClick={() => setOpened(true)}
              className="relative h-full w-1/2 cursor-pointer border-l border-gold/30"
              style={{
                backgroundImage: `url(${templeGate})`,
                backgroundSize: "cover",
                backgroundPosition: "left",
                transform: "scaleX(-1)",
              }}
            >
              <div className="absolute inset-0 bg-maroon-deep/20 shadow-[inset_-20px_0_60px_rgba(0,0,0,0.5)]" />
              {/* Ornate Handle Right */}
              <div className="absolute top-1/2 left-4 -translate-y-1/2 h-20 w-8 bg-gradient-to-r from-gold/80 to-gold rounded-l-full border border-gold/40 shadow-xl" />
            </motion.div>

            <div className="pointer-events-none fixed inset-0 z-[60] flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 1 }}
                className="text-center bg-maroon-deep/40 backdrop-blur-sm p-8 rounded-full border border-gold/20"
              >
                <p className="font-script text-3xl text-gold-gradient md:text-5xl">Tap to Open the Doors</p>
                <p className="mt-2 font-display text-[10px] tracking-[0.5em] text-ivory/80">WELCOME TO THE SACRED UNION</p>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>

      {/* All sections */}
      {opened && (
        <div className="flex flex-col">
          <Petals count={25} />
          <HomeSection guestName={guestName} revealed={revealed} setRevealed={setRevealed} />
          
          <AnimatePresence>
            {revealed && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <StorySection />
                <RitualsHub guestName={guestName} />
                <VenueSection />
                <FamilySection guestName={guestName} />
                <WishingAndWellwingsSection guestName={guestName} />
                <AcceptInvitationSection guestName={guestName} />
                <CountdownSection />
                <GetInTouchSection />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}

/* ======================== HOME ======================== */
function HomeSection({ guestName, revealed, setRevealed }: { guestName: string, revealed: boolean, setRevealed: (v: boolean) => void }) {
  return (
    <Section id="home" accent="oklch(0.34 0.13 18)" className="min-h-screen flex items-center justify-center">
      <div className="mx-auto flex max-w-md flex-col items-center text-center px-6">
        {/* Golden Om Symbol */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="mb-2"
        >
          <span className="font-deva text-7xl md:text-8xl text-gold-gradient drop-shadow-[0_0_15px_rgba(255,215,0,0.4)]">
            ॐ
          </span>
        </motion.div>

        {/* Shubh Vivah Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="mb-4 font-deva text-5xl text-gold-gradient drop-shadow-md md:text-6xl"
        >
          शुभ विवाह
        </motion.h2>

        <div className="flex w-full max-w-lg items-end justify-center gap-6 md:gap-12">
          {/* Left Pillar */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
            style={{ transformOrigin: "bottom" }}
            className="flex flex-col items-center justify-end h-44 w-8 md:h-56 md:w-10"
          >
            {/* Capital */}
            <div className="w-full h-3 rounded-t-sm bg-gradient-to-r from-amber-700 via-yellow-300 to-amber-800 shadow-md border-b border-amber-900/40" />
            <div className="w-3/4 h-2 bg-gradient-to-r from-amber-600 via-yellow-200 to-amber-700 shadow-sm border-b border-amber-900/40" />
            {/* Shaft */}
            <div className="w-1/2 flex-1 bg-gradient-to-r from-amber-600 via-yellow-300 to-amber-700 shadow-[inset_0_0_8px_rgba(0,0,0,0.4)] flex flex-col justify-evenly items-center">
               <div className="w-full h-px bg-amber-900/40" />
               <div className="w-full h-px bg-amber-900/40" />
               <div className="w-full h-px bg-amber-900/40" />
               <div className="w-full h-px bg-amber-900/40" />
            </div>
            {/* Base */}
            <div className="w-3/4 h-3 bg-gradient-to-r from-amber-700 via-yellow-300 to-amber-800 shadow-md border-t border-amber-900/40" />
            <div className="w-full h-4 rounded-b-sm bg-gradient-to-r from-amber-600 via-yellow-200 to-amber-700 shadow-md" />
          </motion.div>

          <motion.img
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, delay: 0.4 }}
            src={ganesha}
            alt="Lord Ganesha"
            className="animate-pulse-glow z-10 h-[180px] w-auto md:h-[220px]"
          />

          {/* Right Pillar */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
            style={{ transformOrigin: "bottom" }}
            className="flex flex-col items-center justify-end h-44 w-8 md:h-56 md:w-10"
          >
            {/* Capital */}
            <div className="w-full h-3 rounded-t-sm bg-gradient-to-r from-amber-700 via-yellow-300 to-amber-800 shadow-md border-b border-amber-900/40" />
            <div className="w-3/4 h-2 bg-gradient-to-r from-amber-600 via-yellow-200 to-amber-700 shadow-sm border-b border-amber-900/40" />
            {/* Shaft */}
            <div className="w-1/2 flex-1 bg-gradient-to-r from-amber-600 via-yellow-300 to-amber-700 shadow-[inset_0_0_8px_rgba(0,0,0,0.4)] flex flex-col justify-evenly items-center">
               <div className="w-full h-px bg-amber-900/40" />
               <div className="w-full h-px bg-amber-900/40" />
               <div className="w-full h-px bg-amber-900/40" />
               <div className="w-full h-px bg-amber-900/40" />
            </div>
            {/* Base */}
            <div className="w-3/4 h-3 bg-gradient-to-r from-amber-700 via-yellow-300 to-amber-800 shadow-md border-t border-amber-900/40" />
            <div className="w-full h-4 rounded-b-sm bg-gradient-to-r from-amber-600 via-yellow-200 to-amber-700 shadow-md" />
          </motion.div>
        </div>
        <p className="mt-6 max-w-2xl font-deva text-lg leading-relaxed text-gold-gradient md:text-2xl">
          वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ ।<br />
          निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥
        </p>
        <p className="mt-8 font-display text-xs tracking-[0.5em] text-ivory/70">WITH THE BLESSINGS OF FAMILIES</p>

        {/* Couple Name — Moved below blessings */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.3, type: "spring", bounce: 0.4 }}
          className="mt-6 flex items-center justify-center gap-4"
        >
          <motion.span
            animate={{ filter: ["drop-shadow(0 0 10px rgba(255,210,0,0.4))", "drop-shadow(0 0 28px rgba(255,210,0,0.85))", "drop-shadow(0 0 10px rgba(255,210,0,0.4))"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="font-script text-5xl md:text-7xl"
            style={{ background: "linear-gradient(135deg, #ffd700, #ffe066, #b8860b, #ffd700)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
          >
            Ravi
          </motion.span>
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8, type: "spring" }}
            className="font-display text-2xl md:text-4xl text-gold/70"
          >
            &amp;
          </motion.span>
          <motion.span
            animate={{ filter: ["drop-shadow(0 0 10px rgba(255,210,0,0.4))", "drop-shadow(0 0 28px rgba(255,210,0,0.85))", "drop-shadow(0 0 10px rgba(255,210,0,0.4))"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="font-script text-5xl md:text-7xl"
            style={{ background: "linear-gradient(135deg, #ffd700, #ffe066, #b8860b, #ffd700)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
          >
            Ranjana
          </motion.span>
        </motion.div>

        {/* Personalized Welcome */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1 }}
          className="mt-6 flex flex-col items-center"
        >
          <p className="font-serif italic text-gold/80 text-lg">We cordially invite</p>
          <h2 className="mt-2 font-script text-4xl text-maroon-deep bg-gradient-to-r from-gold via-yellow-200 to-gold bg-clip-text text-transparent px-4 py-1">
            {guestName}
          </h2>
          <p className="mt-2 font-serif italic text-gold/80 text-lg">to grace our special day</p>
        </motion.div>



        <OrnateDivider />

        {/* You are cordially invited */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1.8 }}
          className="mt-8 mb-6 text-center"
        >
          <p className="font-serif italic text-gold/90 text-xl md:text-2xl">
            You are cordially invited to the wedding of
          </p>
        </motion.div>
        <OrnateDivider />
        <p className="font-display text-sm tracking-[0.4em] text-ivory/85 md:text-base">14 · JUNE · 2026</p>
        <p className="mt-1 font-serif italic text-ivory/70">Gorakhpur, Uttar Pradesh</p>

        <div className="mt-10 flex items-end gap-10">
          <Diya size={60} />
          <Diya size={80} />
          <Diya size={60} />
        </div>

        {!revealed ? (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5, type: "spring" }}
            onClick={() => setRevealed(true)}
            className="mt-12 inline-flex items-center gap-3 rounded-full border border-gold/60 bg-gradient-to-r from-gold/10 via-gold/20 to-gold/10 px-8 py-3 shadow-[0_0_30px_rgba(255,215,0,0.25)] backdrop-blur-sm hover:scale-105 transition-transform cursor-pointer"
          >
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-xl"
            >✦</motion.span>
            <span className="font-display text-xs tracking-[0.5em] text-gold uppercase">Invitation is Open</span>
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="text-xl"
            >✦</motion.span>
          </motion.button>
        ) : (
          <div className="flex flex-col items-center gap-4">
            <button
              onClick={() => document.getElementById("story")?.scrollIntoView({ behavior: "smooth" })}
              className="mt-12 rounded-full border border-gold bg-gradient-to-r from-[oklch(0.78_0.14_80)] to-[oklch(0.65_0.13_60)] px-10 py-3 font-display text-sm tracking-[0.3em] text-maroon-deep shadow-[0_10px_40px_-10px_oklch(0.78_0.14_80)] transition hover:scale-105"
            >
              BEGIN OUR STORY ↓
            </button>
            <SectionNavButtons nextId="story" />
          </div>
        )}
      </div>
    </Section>
  );
}

const moments = [
  { icon: Heart, title: "First Meet", date: "College Days", img: storyCollegeImg, text: "A vibrant day at college where our eyes met across the lecture hall, and a simple hello changed everything." },
  { icon: MessageCircle, title: "First Conversation", date: "The Library", img: storyLibraryImg, text: "Amidst the scent of old books and quiet whispers, we spent hours talking about our dreams and favorite authors." },
  { icon: Coffee, title: "First Date", date: "Coffee Shop", img: storyCoffeeImg, text: "Over lattes and shared smiles at our favorite cafe, we realized that one date would never be enough." },
  { icon: Gem, title: "The Proposal", date: "The Restaurant", img: storyRestaurantImg, text: "Under the soft glow of candlelight and a heartfelt promise, he asked, and she said yes to forever." },
  { icon: Users, title: "Family Meeting", date: "At Home", img: storyFamilyHomeImg, text: "A joyful day where two families sat together, sharing laughter and sweets, becoming one large, happy family." },
];

function StorySection() {
  return (
    <Section id="story" accent="oklch(0.30 0.13 18)">
      <div className="mx-auto max-w-4xl">

        <h2 className="mt-2 text-center font-script text-6xl text-gold-gradient md:text-7xl">Journey of Love</h2>
        <OrnateDivider />
        <div className="relative mt-12">
          <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-gold via-gold/40 to-transparent md:left-1/2" />
          {moments.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.05 }}
              className={`relative mb-12 flex flex-col gap-6 md:flex-row md:items-center ${i % 2 ? "md:flex-row-reverse" : ""}`}
            >
              <div className="absolute left-6 z-10 -translate-x-1/2 md:left-1/2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold bg-maroon-deep text-gold glow-gold">
                  <m.icon className="h-5 w-5" />
                </div>
              </div>
              <div className="ml-16 w-full md:ml-0 md:w-1/2 md:px-10" id={`moment-${i}`}>
                <div className="group overflow-hidden rounded-2xl border border-gold/40 bg-maroon-deep/60 backdrop-blur-sm transition-all hover:border-gold hover:shadow-[0_0_30px_rgba(255,215,0,0.2)]">
                  {m.img && (
                    <div className="h-48 w-full overflow-hidden border-b border-gold/20">
                      <motion.img 
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                        src={m.img} 
                        alt={m.title} 
                        className="h-full w-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal hover:opacity-100" 
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <p className="font-display text-xs tracking-[0.3em] text-gold/80">{m.date}</p>
                    <h3 className="mt-2 font-script text-3xl text-ivory">{m.title}</h3>
                    <p className="mt-3 font-serif text-ivory/85 leading-relaxed">{m.text}</p>
                    
                    {/* Inner moment navigation */}
                    <div className="mt-6 flex justify-between gap-4">
                      {i > 0 && (
                        <button onClick={() => document.getElementById(`moment-${i-1}`)?.scrollIntoView({ behavior: "smooth" })} className="text-gold/60 text-[8px] hover:text-gold uppercase tracking-widest">← Previous</button>
                      )}
                      {i < moments.length - 1 ? (
                        <button onClick={() => document.getElementById(`moment-${i+1}`)?.scrollIntoView({ behavior: "smooth" })} className="text-gold/60 text-[8px] hover:text-gold uppercase tracking-widest ml-auto">Next Moment →</button>
                      ) : (
                        <button onClick={() => document.getElementById("rituals")?.scrollIntoView({ behavior: "smooth" })} className="text-gold/60 text-[8px] hover:text-gold uppercase tracking-widest ml-auto">To Rituals ↓</button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>
        <SectionNavButtons backId="home" nextId="rituals" />
      </div>
    </Section>
  );
}



/* ======================== FAMILY ======================== */
const families = [
  { title: "BRIDE'S FAMILY", name: "The Sharmas", members: [
    { role: "Father", name: "Shri Rajesh Sharma", img: brideFatherImg },
    { role: "Mother", name: "Smt. Meera Sharma", img: brideMotherImg },
  ]},
  { title: "GROOM'S FAMILY", name: "The Mishras", members: [
    { role: "Father", name: "Shri Vikram Mishra", img: groomFatherImg },
    { role: "Mother", name: "Smt. Sunita Mishra", img: groomMotherImg },
  ]},
];

function FamilySection({ guestName }: { guestName: string }) {
  return (
    <Section id="family" accent="oklch(0.30 0.12 25)" className="overflow-hidden">
      <div className="relative">
        {/* Decorative Curtains Reveal */}
        <div className="pointer-events-none absolute inset-x-0 -inset-y-32 z-40 flex overflow-hidden">
          {/* Left Curtain Panel */}
          <motion.div
            initial={{ x: 0 }}
            whileInView={{ 
              x: ["0%", "-5%", "2%", "-15%", "5%", "-100%"],
              rotate: [0, -1, 1, -1, 1, 0],
              skewX: [0, -2, 2, -2, 2, 0]
            }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 6, ease: "easeInOut", delay: 0.5 }}
            className="relative h-full w-1/2 bg-[#050505] border-r-[3px] border-gold shadow-[20px_0_80px_rgba(0,0,0,0.9)]"
            style={{
              backgroundImage: `
                linear-gradient(90deg, rgba(0,0,0,0.4) 0%, transparent 20%, transparent 80%, rgba(0,0,0,0.4) 100%),
                repeating-linear-gradient(90deg, transparent 0%, rgba(255,215,0,0.02) 2%, transparent 4%)
              `,
            }}
          >
            {/* Tassel/Handle Left */}
            <div className="absolute top-1/2 right-8 -translate-y-1/2 flex flex-col items-center">
              <div className="h-48 w-0.5 bg-gradient-to-b from-transparent via-gold/50 to-transparent" />
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="h-6 w-6 rounded-full bg-gold shadow-[0_0_20px_rgba(255,215,0,0.6)] border border-maroon-deep/30 flex items-center justify-center"
              >
                <div className="h-2 w-2 rounded-full bg-maroon-deep" />
              </motion.div>
              <div className="h-48 w-0.5 bg-gradient-to-b from-transparent via-gold/50 to-transparent" />
            </div>
            
            {/* Silk Texture Folds */}
            <div className="absolute inset-0 opacity-20" style={{ background: "linear-gradient(90deg, transparent 0%, #1a1a1a 10%, transparent 20%, #1a1a1a 30%, transparent 40%, #1a1a1a 50%, transparent 60%, #1a1a1a 70%, transparent 80%, #1a1a1a 90%, transparent 100%)" }} />
          </motion.div>

          {/* Right Curtain Panel */}
          <motion.div
            initial={{ x: 0 }}
            whileInView={{ 
              x: ["0%", "5%", "-2%", "15%", "-5%", "100%"],
              rotate: [0, 1, -1, 1, -1, 0],
              skewX: [0, 2, -2, 2, -2, 0]
            }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 6, ease: "easeInOut", delay: 0.5 }}
            className="relative h-full w-1/2 bg-[#050505] border-l-[3px] border-gold shadow-[-20px_0_80px_rgba(0,0,0,0.9)]"
            style={{
              backgroundImage: `
                linear-gradient(90deg, rgba(0,0,0,0.4) 0%, transparent 20%, transparent 80%, rgba(0,0,0,0.4) 100%),
                repeating-linear-gradient(90deg, transparent 0%, rgba(255,215,0,0.02) 2%, transparent 4%)
              `,
            }}
          >
            {/* Tassel/Handle Right */}
            <div className="absolute top-1/2 left-8 -translate-y-1/2 flex flex-col items-center">
              <div className="h-48 w-0.5 bg-gradient-to-b from-transparent via-gold/50 to-transparent" />
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="h-6 w-6 rounded-full bg-gold shadow-[0_0_20px_rgba(255,215,0,0.6)] border border-maroon-deep/30 flex items-center justify-center"
              >
                <div className="h-2 w-2 rounded-full bg-maroon-deep" />
              </motion.div>
              <div className="h-48 w-0.5 bg-gradient-to-b from-transparent via-gold/50 to-transparent" />
            </div>

            {/* Silk Texture Folds */}
            <div className="absolute inset-0 opacity-20" style={{ background: "linear-gradient(90deg, transparent 0%, #1a1a1a 10%, transparent 20%, #1a1a1a 30%, transparent 40%, #1a1a1a 50%, transparent 60%, #1a1a1a 70%, transparent 80%, #1a1a1a 90%, transparent 100%)" }} />
          </motion.div>
        </div>

        <div className="mx-auto max-w-5xl">
          <h2 className="mt-2 text-center font-script text-6xl text-gold-gradient md:text-7xl">Our Families</h2>
          <OrnateDivider />
          <p className="mx-auto mt-2 max-w-xl text-center font-serif italic text-ivory/80">Two families, joined by love, blessed by tradition.</p>
          
          <SandeshPatr guestName={guestName} className="mt-12">
            <div className="grid gap-10 md:grid-cols-2">
              {families.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.15 }}
                  className="rounded-xl border border-gold/40 bg-black/40 p-5 backdrop-blur-md shadow-sm transition-all hover:border-gold hover:shadow-[0_0_20px_rgba(255,215,0,0.2)]"
                >
                  <p className="font-display text-xs tracking-[0.4em] text-gold/80">{f.title}</p>
                  <h3 className="mt-2 font-script text-4xl text-ivory">{f.name}</h3>
                  <div className="mt-6 space-y-4">
                    {f.members.map((m) => (
                      <div key={m.name} className="flex items-center gap-4 rounded-lg border border-gold/20 bg-black/30 p-3 transition-all hover:border-gold/50">
                        <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-full border-2 border-gold/40 shadow-md">
                          <img src={m.img} alt={m.name} className="h-full w-full object-cover" />
                        </div>
                        <div>
                          <p className="font-display text-[9px] tracking-[0.3em] text-gold/60 uppercase">{m.role}</p>
                          <p className="font-serif text-lg leading-tight text-ivory/90">{m.name}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </SandeshPatr>
        </div>
        <SectionNavButtons backId="venue" nextId="wishes" />
      </div>
    </Section>
  );
}

/* ======================== WISHING & WELLWINGS ======================== */
function WishingAndWellwingsSection({ guestName }: { guestName: string }) {
  const [message, setMessage] = useState("");
  const [name, setName] = useState(guestName);
  const [sent, setSent] = useState(false);
  const [blessings, setBlessings] = useState([
    { name: "Amit & Suman", text: "Wishing you both a lifetime of love and happiness! May your journey together be as beautiful as this invitation." },
    { name: "Priya Sharma", text: "Congratulations Ravi and Ranjana! Can't wait to celebrate your special day in Gorakhpur." },
    { name: "Vikram & Meera", text: "Two beautiful souls, one grand celebration. Our best wishes are with you forever." },
    { name: "Karan & Sneha", text: "May your love for each other grow stronger with every passing day. Cheers to a new beginning!" },
    { name: "Auntie Shanti", text: "God bless you both. May your home be filled with laughter and joy." },
    { name: "Rohan Mishra", text: "A royal wedding for a royal couple! Wishing you all the best for your bright future." },
    { name: "Ananya Gupta", text: "So happy for you two! Looking forward to the Sangeet dance performances!" },
    { name: "Sanjay Uncle", text: "May the blessings of Lord Ganesha always be with you. Congratulations!" },
    { name: "Megha & Rahul", text: "Truly a match made in heaven. May your life be filled with wonderful memories." },
    { name: "The Verma Family", text: "Heartiest congratulations to the Mishra and Sharma families. Best wishes to the couple!" },
    { name: "Abhishek Singh", text: "Wishing you a wedding day that's as grand and special as you both are." },
    { name: "Divya & Sameer", text: "To a lifetime of adventure, love, and togetherness. Happy Wedding!" },
    { name: "Grandpa & Grandma", text: "Our prayers and blessings are always with our dear grandchildren." },
    { name: "Neha Saxena", text: "Such a beautiful invitation! Can't wait to see you both in your wedding attire." },
    { name: "Rajesh & Kavita", text: "Wishing you a blissful married life. Stay happy always!" },
    { name: "Simran Kaur", text: "May your love shine brighter than any diamond. Congratulations!" },
    { name: "Arjun Malhotra", text: "Cheers to the groom and bride! Let the celebrations begin!" },
    { name: "Preeti & Vikas", text: "Two hearts, one soul. Wishing you endless joy and prosperity." },
    { name: "Manoj & Swati", text: "A beautiful start to a beautiful story. Our warmest wishes to you both." },
    { name: "Deepak & Ritu", text: "May your union be blessed with peace and harmony. Congratulations!" },
  ]);

  const handleSend = () => {
    if (message.trim()) {
      const newBlessing = { name: name || "Anonymous Guest", text: message.trim() };
      setBlessings([newBlessing, ...blessings]);
      setSent(true);
    }
  };

  return (
    <Section id="wishes" accent="oklch(0.95 0.05 340)">
      <div className="mx-auto max-w-4xl text-center">
        <p className="font-display text-xl tracking-[0.3em] text-gold uppercase drop-shadow-sm">Share Your Love</p>
        <h2 className="mt-2 font-script text-5xl text-maroon-deep md:text-6xl">Wishing & Wellwings</h2>
        <OrnateDivider />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.5fr]">
          {/* Form Side */}
          <div className="h-fit">
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="thanks"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full"
                >
                  <div className="rounded-xl border border-gold/40 bg-black/40 p-5 text-center backdrop-blur-md">
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", damping: 12 }}
                      className="text-4xl mb-4"
                    >
                      🙏
                    </motion.div>
                    <h3 className="font-script text-3xl text-ivory mb-2">Thank You, {name || "Guest"}!</h3>
                    <p className="font-serif italic text-ivory/70 text-sm mb-6">
                      Your heartfelt wishes mean the world to Ravi & Ranjana.
                    </p>
                    <button
                      onClick={() => { setSent(false); setMessage(""); }}
                      className="rounded-full border border-gold/40 bg-gold/10 px-8 py-2 font-display text-[10px] tracking-[0.2em] text-gold hover:bg-gold/20 transition-all uppercase"
                    >
                      Send Another ✦
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="rounded-xl border border-gold/40 bg-black/40 p-5 backdrop-blur-md shadow-sm text-left transition-all hover:border-gold hover:shadow-[0_0_20px_rgba(255,215,0,0.2)]"
                >
                  <div className="space-y-4">
                    <label className="block">
                      <span className="font-display text-[9px] tracking-[0.2em] text-gold/80 uppercase">Your Name</span>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                        className="mt-1.5 w-full rounded-lg border border-gold/30 bg-black/20 p-3 font-serif text-ivory placeholder:text-ivory/40 focus:border-gold/60 focus:outline-none text-sm"
                      />
                    </label>

                    <label className="block">
                      <span className="font-display text-[9px] tracking-[0.2em] text-gold/80 uppercase">Your Message</span>
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={4}
                        maxLength={500}
                        placeholder="Share your heartfelt wishes..."
                        className="mt-1.5 w-full resize-none rounded-lg border border-gold/30 bg-black/20 p-3 font-serif text-ivory placeholder:text-ivory/40 focus:border-gold/60 focus:outline-none text-sm"
                      />
                      <p className="mt-1 text-right font-display text-[8px] text-ivory/50">{message.length}/500</p>
                    </label>

                    <div className="flex flex-col gap-3">
                      <button
                        onClick={handleSend}
                        disabled={!message.trim()}
                        className="flex items-center justify-center gap-2 w-full rounded-full border border-gold/40 bg-gold/10 py-2.5 font-display text-[10px] tracking-[0.2em] text-gold shadow-sm hover:bg-gold/20 active:scale-95 transition disabled:opacity-40 uppercase font-bold"
                      >
                        <Send className="h-3 w-3" /> Share Message
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Display Side */}
          <div className="relative">
            <div className="max-h-[500px] space-y-4 overflow-y-auto pr-4 custom-scrollbar scroll-smooth">
              <AnimatePresence initial={false}>
                {blessings.map((b, i) => (
                  <motion.div
                    key={`${b.name}-${i}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    className="relative rounded-lg border border-gold/30 bg-black/30 p-3 backdrop-blur-md text-left group hover:border-gold/50 transition-all"
                  >
                    <p className="font-script text-xl text-ivory mb-2 opacity-90">"{b.text}"</p>
                    <div className="flex items-center gap-2">
                      <div className="h-px w-6 bg-gold/40" />
                      <p className="font-display text-[9px] tracking-[0.2em] text-gold/80 uppercase font-semibold">{b.name}</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            
            {/* Gradient Mask for scroll */}
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#fdf2f8] to-transparent" />
          </div>
        </div>
        <SectionNavButtons backId="family" nextId="accept" />
      </div>
    </Section>
  );
}


/* ======================== RITUALS HUB ======================== */
function RitualsHub({ guestName }: { guestName: string }) {
  return (
    <Section id="rituals" accent="oklch(0.28 0.10 18)">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">

          <h2 className="mt-2 font-script text-6xl text-gold-gradient md:text-7xl">Ritual Ceremonies</h2>
          <OrnateDivider />
          <p className="mx-auto mt-4 max-w-xl font-serif italic text-ivory/80">
            Five sacred celebrations — each a chapter of love, tradition &amp; joy.
          </p>
          <p className="mt-2 font-display text-[10px] tracking-[0.5em] text-pink-300/60 uppercase">
            ★ Scratch each card to reveal the ceremony ★
          </p>
        </div>

        {/* Uniform 5-card grid — all same fixed height */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {rituals.map((r, i) => (
            <div key={r.id} id={`ritual-sec-${i}`}>
              <RitualCard ritual={r} index={i} />
              <div className="mt-4 flex justify-between px-2">
                {i > 0 && (
                  <button onClick={() => document.getElementById(`ritual-sec-${i-1}`)?.scrollIntoView({ behavior: "smooth" })} className="text-gold/50 text-[7px] tracking-[0.2em] hover:text-gold uppercase">← Prev Ritual</button>
                )}
                {i < rituals.length - 1 ? (
                  <button onClick={() => document.getElementById(`ritual-sec-${i+1}`)?.scrollIntoView({ behavior: "smooth" })} className="text-gold/50 text-[7px] tracking-[0.2em] hover:text-gold uppercase ml-auto">Next Ritual →</button>
                ) : (
                  <button onClick={() => document.getElementById("venue")?.scrollIntoView({ behavior: "smooth" })} className="text-gold/50 text-[7px] tracking-[0.2em] hover:text-gold uppercase ml-auto">To Venue ↓</button>
                )}
              </div>
            </div>
          ))}
        </div>
        <SectionNavButtons backId="story" nextId="venue" />
      </div>
    </Section>
  );
}

const rituals = [
  { 
    id: "haldi", 
    chapter: "RITUAL · ONE", 
    title: "Haldi", 
    subtitle: "A blessing of golden turmeric", 
    emoji: "🌼", 
    accent: "oklch(0.65 0.18 340)", 
    date: "11 June 2026", 
    time: "11:00 AM", 
    venue: "Home Residence", 
    description: "The auspicious haldi paste — turmeric, sandalwood, rosewater — applied by loved ones to bless the bride and groom with a glowing radiance.", 
    momentImg: ritualHaldi,
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Home+Residence"
  },
  { 
    id: "mehendi", 
    chapter: "RITUAL · TWO", 
    title: "Mehendi", 
    subtitle: "Henna, music & laughter", 
    emoji: "🌿", 
    accent: "oklch(0.60 0.15 340)", 
    date: "12 June 2026", 
    time: "4:00 PM", 
    venue: "Home Residence", 
    description: "Intricate henna patterns adorned on the bride's hands and feet, hiding within them the groom's name.", 
    momentImg: ritualMehendi,
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Home+Residence"
  },
  { id: "sangeet", chapter: "RITUAL · THREE", title: "Sangeet", subtitle: "A night of song & dance", emoji: "🎶", accent: "oklch(0.55 0.18 340)", date: "13 June 2026", time: "7:00 PM", venue: "Radisson Blu Ballroom", description: "An evening of dhol beats, choreographed performances, and surprise dances from both families.", momentImg: ritualSangeet, mapUrl: "https://www.google.com/maps/search/?api=1&query=Radisson+Blu+Ballroom+Gorakhpur" },
  { id: "wedding", chapter: "THE GRAND DAY", title: "Vivaah", subtitle: "Seven vows, one eternity", emoji: "🔱", accent: "oklch(0.50 0.20 340)", date: "14 June 2026", time: "8:30 PM", venue: "Radisson Blu, Gorakhpur", description: "Ravi and Ranjana will take their seven pheras — promising love, loyalty, and a lifetime walked together.", momentImg: ritualVivaah, mapUrl: "https://www.google.com/maps/search/?api=1&query=Radisson+Blu+Gorakhpur" },
  { id: "reception", chapter: "RITUAL · FIVE", title: "Reception", subtitle: "A royal evening of celebration", emoji: "✨", accent: "oklch(0.45 0.18 340)", date: "15 June 2026", time: "7:30 PM", venue: "Radisson Blu Grand Hall", description: "A regal evening of fine dining, blessings, and toasts.", momentImg: ritualReception, mapUrl: "https://www.google.com/maps/search/?api=1&query=Radisson+Blu+Grand+Hall+Gorakhpur" },
];

function Detail({ label, value, color = "gold" }: { label: string; value: string; color?: "gold" | "maroon" }) {
  const labelColor = color === "gold" ? "text-gold/70" : "text-maroon/70";
  const valueColor = color === "gold" ? "text-ivory" : "text-maroon-deep";
  const borderColor = color === "gold" ? "border-gold/20" : "border-maroon/20";

  return (
    <div className={`rounded-lg border ${borderColor} p-3`}>
      <p className={`font-display text-[10px] tracking-[0.3em] ${labelColor}`}>{label}</p>
      <p className={`mt-1 font-serif ${valueColor}`}>{value}</p>
    </div>
  );
}

/* ======================== VENUE ======================== */
function VenueSection() {
  const [showMap, setShowMap] = useState(false);
  const address = "Radisson Blu Gorakhpur, Airport Road, Mohaddipur, Gorakhpur, Uttar Pradesh 273008";
  const mapsQuery = encodeURIComponent(address);
  return (
    <Section id="venue" accent="oklch(0.28 0.10 250)">
      <div className="mx-auto max-w-4xl text-center">

        <h2 className="mt-2 font-script text-6xl text-gold-gradient md:text-7xl">The Venue</h2>
        <OrnateDivider />
        <div className="mt-6 rounded-2xl border border-gold/40 bg-black/40 p-8 backdrop-blur-md">
          <div className="flex items-center justify-center gap-2 text-gold">
            <MapPin className="h-5 w-5" />
            <p className="font-display tracking-widest text-lg md:text-xl">RADISSON BLU GORAKHPUR</p>
          </div>
          <p className="mt-3 font-serif italic text-ivory/85 text-base md:text-lg">Airport Road, Mohaddipur, Gorakhpur, Uttar Pradesh 273008</p>
          
          <motion.div
            animate={{ height: showMap ? "auto" : 0, opacity: showMap ? 1 : 0 }}
            className="overflow-hidden"
          >
            <div className="ornate-frame mt-8 overflow-hidden rounded-lg shadow-2xl">
              <iframe title="Venue map" src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`} width="100%" height="380" style={{ border: 0, display: "block" }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </motion.div>

          <div className="mt-8 flex flex-col items-center gap-4 md:flex-row md:justify-center">
            <button 
              onClick={() => setShowMap(!showMap)}
              className="w-full rounded-full border border-gold bg-transparent px-8 py-3 font-display text-sm tracking-[0.3em] text-gold hover:bg-gold hover:text-maroon-deep transition md:w-auto"
            >
              {showMap ? "HIDE MAP ↑" : "VIEW LOCATION ON MAP ↓"}
            </button>

          </div>
        </div>
        <SectionNavButtons backId="rituals" nextId="family" />
      </div>
    </Section>
  );
}

/* ======================== COUNTDOWN ======================== */
const TARGET = new Date("2026-06-14T20:30:00+05:30").getTime();
function CountdownSection() {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, TARGET - now);
  const cells = [
    { v: Math.floor(diff / 86400000), l: "Days" },
    { v: Math.floor((diff / 3600000) % 24), l: "Hours" },
    { v: Math.floor((diff / 60000) % 60), l: "Minutes" },
    { v: Math.floor((diff / 1000) % 60), l: "Seconds" },
  ];
  return (
    <Section id="countdown" accent="oklch(0.34 0.13 18)">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-display text-xs tracking-[0.5em] text-gold/80">UNTIL FOREVER</p>
        <h2 className="mt-2 font-script text-6xl text-gold-gradient md:text-7xl">The Countdown</h2>
        <OrnateDivider />
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {cells.map((c) => (
            <div key={c.l} className="ornate-frame rounded-2xl bg-maroon-deep/80 p-6 backdrop-blur">
              <div className="font-display text-5xl text-gold-gradient md:text-7xl tabular-nums">{String(c.v).padStart(2, "0")}</div>
              <p className="mt-2 font-display text-[10px] tracking-[0.4em] text-ivory/70">{c.l.toUpperCase()}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 font-serif italic text-ivory/85">Counting every breath until 14 · June · 2026</p>
        <SectionNavButtons backId="accept" nextId="contact" />
      </div>
    </Section>
  );
}


/* ======================== ACCEPT INVITATION ======================== */
type Particle = { id: number; tx: number; ty: number; color: string; w: number; h: number; delay: number; rotate: number };

function AcceptInvitationSection({ guestName }: { guestName: string }) {
  const [accepted, setAccepted] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const colors = ["#FFD700","#FF69B4","#FF4500","#00CED1","#9370DB","#32CD32","#FF1493","#FFB347","#87CEEB","#FFA500"];

  function handleAccept() {
    const ps: Particle[] = Array.from({ length: 72 }, (_, i) => {
      const angle = (i / 72) * 360 + Math.random() * 15;
      const dist = 130 + Math.random() * 260;
      return {
        id: i,
        tx: Math.cos((angle * Math.PI) / 180) * dist,
        ty: Math.sin((angle * Math.PI) / 180) * dist,
        color: colors[i % colors.length],
        w: 8 + Math.floor(Math.random() * 10),
        h: 4 + Math.floor(Math.random() * 6),
        delay: Math.random() * 0.4,
        rotate: Math.random() * 720,
      };
    });
    setParticles(ps);
    setAccepted(true);
  }

  return (
    <>
      <AnimatePresence>
        {accepted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center"
            style={{ background: "rgba(0,0,0,0.88)" }}
            onClick={() => setAccepted(false)}
          >
            {/* Confetti burst */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
              {particles.map((p) => (
                <motion.div
                  key={p.id}
                  initial={{ x: 0, y: 0, scale: 0, rotate: 0, opacity: 1 }}
                  animate={{ x: p.tx, y: p.ty, scale: [0, 1.4, 0.6, 0], rotate: p.rotate, opacity: [1, 1, 0.6, 0] }}
                  transition={{ duration: 2.2, ease: "easeOut", delay: p.delay }}
                  className="absolute rounded-sm"
                  style={{ width: p.w, height: p.h, backgroundColor: p.color, boxShadow: `0 0 ${p.w}px ${p.color}` }}
                />
              ))}
            </div>

            {/* Celebration card */}
            <motion.div
              initial={{ scale: 0, rotate: -12, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", duration: 0.8, bounce: 0.45, delay: 0.15 }}
              className="relative z-10 mx-4 w-full max-w-md rounded-3xl border-2 border-gold p-10 text-center shadow-[0_0_100px_rgba(255,215,0,0.45)]"
              style={{ background: "linear-gradient(135deg,oklch(0.18 0.10 18),oklch(0.28 0.13 18))" }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div animate={{ rotate: [0,-12,12,-6,6,0] }} transition={{ delay: 0.5, duration: 0.9 }} className="text-7xl">🎊</motion.div>
              <motion.div initial={{ opacity:0,y:25 }} animate={{ opacity:1,y:0 }} transition={{ delay:0.4 }}>
                <motion.h2 
                  animate={{ scale: [1, 1.05, 1], filter: ["drop-shadow(0 0 10px rgba(255,215,0,0.2))", "drop-shadow(0 0 25px rgba(255,215,0,0.6))", "drop-shadow(0 0 10px rgba(255,215,0,0.2))"] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  className="mt-5 font-script text-5xl text-gold-gradient"
                >
                  Thank You, {guestName}!
                </motion.h2>
              </motion.div>
              <motion.p initial={{ opacity:0,y:18 }} animate={{ opacity:1,y:0 }} transition={{ delay:0.6 }} className="mt-2 font-serif italic text-2xl text-ivory/80">Your presence means the world to us.</motion.p>
              <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.85 }}>
                <p className="mt-6 font-serif text-lg leading-relaxed text-ivory/95">
                  Ravi &amp; Ranjana are overjoyed to celebrate this special day with you. We can't wait! 🌸
                </p>
                <div className="mt-6 flex justify-center gap-3">
                  <Diya size={35} /><Diya size={50} /><Diya size={35} />
                </div>
                <button onClick={() => setAccepted(false)} className="mt-6 rounded-full border border-gold/50 bg-gold/10 px-8 py-2.5 font-display text-xs tracking-[0.3em] text-gold hover:bg-gold hover:text-maroon-deep transition">
                  CLOSE ✕
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Section id="accept" accent="oklch(0.30 0.13 18)">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-display text-xs tracking-[0.5em] text-gold/80">YOU ARE INVITED</p>
          <h2 className="mt-2 font-script text-6xl text-gold-gradient md:text-7xl">Join Us</h2>
          <OrnateDivider />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-8 rounded-xl border border-gold/40 bg-black/40 p-6 backdrop-blur-md shadow-2xl transition-all hover:border-gold hover:shadow-[0_0_20px_rgba(255,215,0,0.2)]"
          >
            <p className="font-script text-3xl text-gold/90">Dear {guestName},</p>
            <p className="mt-5 font-serif text-xl leading-relaxed text-ivory/90 md:text-2xl">
              Will you join us on our <span className="text-gold font-semibold">special day</span>?
            </p>
            <p className="mt-3 font-serif italic text-ivory/60 text-sm">Your presence would make this celebration truly complete.</p>
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              onClick={handleAccept}
              className="mt-10 inline-flex items-center gap-3 rounded-full border border-gold bg-gradient-to-r from-[oklch(0.78_0.14_80)] to-[oklch(0.65_0.13_60)] px-10 py-4 font-display text-sm tracking-[0.3em] text-maroon-deep shadow-[0_10px_50px_-10px_oklch(0.78_0.14_80)] transition"
            >
              <span>🎉</span> ACCEPT INVITATION <span>🎉</span>
            </motion.button>
          </motion.div>
        </div>
        <SectionNavButtons backId="wishes" nextId="countdown" />
    </Section>
    </>
  );
}





/* ======================== GET IN TOUCH ======================== */
function GetInTouchSection() {
  const contacts = [
    { name: "Rajesh Sharma", role: "Bride's Father", phone: "+91 98765 43210" },
    { name: "Vikram Mishra", role: "Groom's Father", phone: "+91 91234 56789" },
  ];

  return (
    <Section id="contact" accent="oklch(0.95 0.05 340)">
      <div className="mx-auto max-w-4xl text-center">
        <p className="font-display text-[10px] tracking-[0.5em] text-maroon/60 uppercase">GET IN TOUCH</p>
        <h3 className="mt-2 font-script text-6xl text-maroon-deep md:text-7xl">Contact Us</h3>
        <OrnateDivider />
        <div className="mt-10 grid gap-6 md:grid-cols-2 md:px-20 text-center">
        {contacts.map((c) => (
          <div key={c.name} className="flex flex-col items-center rounded-xl border border-gold/40 bg-black/40 p-5 backdrop-blur-md shadow-sm transition-all hover:border-gold hover:shadow-[0_0_20px_rgba(255,215,0,0.2)]">
            <p className="font-display text-[9px] tracking-[0.3em] text-gold/80 uppercase">{c.role}</p>
            <p className="mt-1 font-serif text-xl text-ivory">{c.name}</p>
            <div className="mt-4 flex flex-col md:flex-row items-center gap-3">
              <a 
                href={`tel:${c.phone.replace(/\D/g, "")}`} 
                className="flex items-center justify-center w-full md:w-auto gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-gold hover:bg-gold/20 transition-all shadow-sm"
              >
                <Phone className="h-4 w-4" />
                <span className="font-display tracking-[0.1em] text-[10px] uppercase font-semibold">{c.phone}</span>
              </a>
              <a 
                href={`https://wa.me/${c.phone.replace(/\D/g, "")}`} 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full md:w-auto gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-green-500 hover:bg-green-500/20 transition-all shadow-sm"
              >
                <WhatsAppIcon className="h-4 w-4 fill-green-500" />
                <span className="font-display tracking-[0.1em] text-[10px] uppercase font-semibold">WhatsApp</span>
              </a>
            </div>
          </div>
        ))}
      </div>
        <SectionNavButtons backId="countdown" />
      </div>
    </Section>
  );
}

