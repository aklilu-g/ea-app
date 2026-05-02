'use client'

import { useState } from "react";
import {
  Phone,
  Menu,
  X,
  Truck,
  Wrench,
  Zap,
  CircleDot,
  KeyRound,
  Siren,
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import EAWheelLift from "./EA_wheel_lift.png";

/* ------------------------------------------------------------------ */
/*  Shared style tokens                                                */
/* ------------------------------------------------------------------ */
const COLORS = {
  bg: "#bc8613",
  ink: "#1c1b1b",
  navy: "#001c3a",
  orange: "#ff8c00",
  onOrange: "#623200",
  muted: "#564334",
  mutedLight: "#afc8f0",
  surfaceWarm: "#FAAC82",
};

const hazardStyle = {
  background: `repeating-linear-gradient(45deg, ${COLORS.orange}, ${COLORS.orange} 10px, ${COLORS.ink} 10px, ${COLORS.ink} 20px)`,
};

const PHONE_DISPLAY = "647 772 2895";
const PHONE_HREF = "tel:+16477722895";

/* ------------------------------------------------------------------ */
/*  Header / Navigation                                                */
/* ------------------------------------------------------------------ */
function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Home", href: "#home", active: false },
    { label: "Service", href: "#services", active: false },
    { label: "About Us", href: "#about", active: false },
    { label: "Contact", href: "#contact", active: false },
  ];

  return (
    <header
      className="fixed top-0 w-full border-b-4 border-slate-900 z-50"
      style={{
        backgroundColor: COLORS.surfaceWarm,
        boxShadow: `4px 4px 0px 0px ${COLORS.orange}`,
      }}
    >
      <nav className="flex justify-between items-center h-20 px-8 w-full max-w-[1400px] mx-auto">
        <div className="text-2xl font-black text-slate-900 italic uppercase tracking-tighter">
          EA towing
        </div>

        <div className="hidden md:flex gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={
                l.active
                  ? "font-black uppercase tracking-tighter text-orange-600 border-b-2 border-orange-600"
                  : "font-black uppercase tracking-tighter text-slate-900 hover:text-orange-500 transition-all"
              }
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href={PHONE_HREF}
            className="hidden sm:flex items-center gap-2 px-6 py-3 font-black uppercase tracking-tighter bg-[#ff8c00] text-[#623200] hover:text-orange-500 hover:bg-slate-900 active:translate-y-1 active:shadow-none transition-all"
            aria-label={`Call ${PHONE_DISPLAY}`}
            style={{
              boxShadow: `2px 2px 0px 0px ${COLORS.ink}`,
            }}
          >
            <Phone size={14} />
            CALL NOW: {PHONE_DISPLAY}
          </a>
          <button
            className="md:hidden text-slate-900"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {open && (
        <div
          className="md:hidden border-t-2 border-slate-900 px-8 py-4 flex flex-col gap-4"
          style={{ backgroundColor: COLORS.surfaceWarm }}
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-black uppercase tracking-tighter text-slate-900"
            >
              {l.label}
            </a>
          ))}
          <a
            href={PHONE_HREF}
            className="sm:hidden flex items-center gap-2 px-6 py-3 font-black uppercase tracking-tighter w-fit"
            style={{
              backgroundColor: COLORS.orange,
              color: COLORS.onOrange,
              boxShadow: `2px 2px 0px 0px ${COLORS.ink}`,
            }}
          >
            <Phone size={18} />
            {PHONE_DISPLAY}
          </a>
        </div>
      )}
    </header>
  );
}

/* ------------------------------------------------------------------ */
/*  Hero                                                               */
/* ------------------------------------------------------------------ */
function Hero() {
  return (
    <section id="home" className="relative pt-20 overflow-hidden scroll-mt-20">
      <div className="flex flex-col md:flex-row min-h-[700px]">
        {/* Content */}
        <div
          className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-16 py-16 text-white z-10 relative"
          style={{ backgroundColor: COLORS.navy }}
        >
          <div className="h-2 w-full absolute top-0 left-0" style={hazardStyle} />

          <div className="inline-flex items-center gap-2 mb-6">
            <span
              className="w-3 h-3 rounded-full animate-pulse"
              style={{ backgroundColor: COLORS.orange }}
            />
            <span
              className="text-sm font-bold uppercase tracking-widest"
              style={{ color: COLORS.orange }}
            >
              24/7 EMERGENCY RESPONSE — TORONTO &amp; GTA
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight uppercase mb-6">
            TORONTO'S MOST RELIABLE{" "}
            <span className="italic" style={{ color: COLORS.orange }}>
              24/7 TOWING
            </span>{" "}
            &amp; RECOVERY
          </h1>

          <p
            className="text-lg mb-8 max-w-lg"
            style={{ color: COLORS.mutedLight }}
          >
            Professional roadside assistance when you need it most. We're
            equipped for any situation with Toronto's most modern fleet.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={PHONE_HREF}
              className="text-center py-5 px-8 text-xl font-extrabold uppercase bg-[#ff8c00] text-[#623200] hover:text-orange-500 hover:bg-slate-900 hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
              aria-label={`Call ${PHONE_DISPLAY} for emergency assistance`}
              style={{
                boxShadow: `4px 4px 0px 0px ${COLORS.surfaceWarm}`,
              }}
            >
              CALL FOR EMERGENCY ASSISTANCE
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 relative min-h-[300px]">
          <img
            alt="Toronto Towing Emergency Service"
            className="w-full h-full object-cover absolute inset-0"
            src={EAWheelLift.src}
          />
          <div
            className="absolute inset-0 mix-blend-multiply"
            style={{ backgroundColor: "rgba(144, 77, 0, 0.2)" }}
          />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Services                                                           */
/* ------------------------------------------------------------------ */
function ServiceCard({ icon: Icon, title, description }) {
  return (
    <div
      className="p-8 border-2 flex flex-col h-full hover:-translate-y-1 transition-all"
      style={{
        backgroundColor: COLORS.surfaceWarm,
        borderColor: COLORS.navy,
        boxShadow: `6px 6px 0px 0px ${COLORS.orange}`,
      }}
    >
      <div
        className="w-16 h-16 flex items-center justify-center mb-6"
        style={{ backgroundColor: COLORS.navy, color: COLORS.orange }}
      >
        <Icon size={36} />
      </div>
      <h3 className="text-2xl font-bold mb-4 uppercase">{title}</h3>
      <p className="flex-grow mb-6" style={{ color: COLORS.muted }}>
        {description}
      </p>
    </div>
  );
}

function EmergencyCard() {
  return (
    <div
      className="p-8 border-2 flex flex-col h-full items-center justify-center text-center"
      style={{
        backgroundColor: COLORS.orange,
        borderColor: COLORS.navy,
        boxShadow: `6px 6px 0px 0px ${COLORS.ink}`,
      }}
    >
      <Siren size={64} className="mb-4" style={{ color: COLORS.onOrange }} />
      <h3
        className="text-2xl font-bold mb-4 uppercase"
        style={{ color: COLORS.onOrange }}
      >
        NEED HELP NOW?
      </h3>
      <p className="mb-6" style={{ color: COLORS.onOrange }}>
        Average response time under 60 minutes across the GTA.
      </p>
      <a
        href={PHONE_HREF}
        className="w-full py-4 text-xl font-extrabold uppercase bg-slate-900 text-white hover:text-orange-500 hover:bg-slate-950 active:translate-y-1 transition-all"
        aria-label={`Call ${PHONE_DISPLAY} dispatch`}
      >
        CALL DISPATCH
      </a>
    </div>
  );
}

function Services() {
  const services = [
    {
      icon: Truck,
      title: "Towing",
      description:
        "Safe transportation for luxury vehicles, low-clearance cars, and all-wheel drives using our modern flatbed and wheel-lift fleets.",
    },
    {
      icon: Wrench,
      title: "Roadside Assistance",
      description:
        "Comprehensive roadside help including fuel delivery, jump-starts, and mechanical diagnostics on-the-spot.",
    },
    {
      icon: Zap,
      title: "Battery Boost",
      description:
        "Fast professional battery boosting for all vehicle types. We also offer mobile battery testing and replacement.",
    },
    {
      icon: CircleDot,
      title: "Tire Change",
      description:
        "Stranded with a flat? We offer rapid tire changes and air-fills anywhere in the city, day or night.",
    },
    {
      icon: KeyRound,
      title: "Lockout Services",
      description:
        "Damage-free vehicle entry. Our technicians use professional locksmith tools to get you back inside quickly.",
    },
  ];

  return (
    <section
      id="services"
      className="py-20"
      style={{ backgroundColor: COLORS.bg }}
    >
      <div className="container mx-auto px-8 max-w-[1200px]">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2
            className="text-3xl font-bold uppercase mb-4 border-b-4 pb-2 inline-block"
            style={{ borderColor: COLORS.orange, color: COLORS.ink }}
          >
            OUR SPECIALIZED SERVICES
          </h2>
          <p
            className="text-lg max-w-2xl"
            style={{ color: COLORS.muted }}
          >
            Professional roadside support delivered with industrial precision
            and corporate reliability across the Greater Toronto Area.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
          <EmergencyCard />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  About                                                              */
/* ------------------------------------------------------------------ */
function StatBox({ value, label }) {
  return (
    <div
      className="p-8 text-center border-b-4"
      style={{ backgroundColor: "#1e293b", borderColor: COLORS.orange }}
    >
      <div
        className="text-4xl md:text-5xl font-extrabold"
        style={{ color: COLORS.orange }}
      >
        {value}
      </div>
      <div className="text-sm font-bold uppercase mt-2">{label}</div>
    </div>
  );
}

function About() {
  const stats = [
    { value: "10+", label: "Years Experience" },
    { value: "15k+", label: "Rescues Completed" },
    { value: "24/7", label: "Availability" },
    { value: "30m", label: "Avg Response" },
  ];

  return (
    <section
      id="about"
      className="py-20 text-white relative overflow-hidden"
      style={{ backgroundColor: COLORS.navy }}
    >
      <div
        className="absolute right-0 top-0 h-full w-1/3 opacity-10 pointer-events-none"
        style={hazardStyle}
      />

      <div className="container mx-auto px-8 max-w-[1200px] relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            <div
              className="inline-block px-4 py-1 text-sm font-bold uppercase mb-6"
              style={{ backgroundColor: COLORS.orange, color: COLORS.onOrange }}
            >
              ESTABLISHED IN TORONTO
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold uppercase mb-8 leading-tight">
              LOCAL EXPERIENCE,{" "}
              <span className="italic" style={{ color: COLORS.orange }}>
                FAMILY VALUES
              </span>
            </h2>
            <p className="text-lg mb-6" style={{ color: COLORS.mutedLight }}>
              EA Towing &amp; Recovery is a local, family-owned and operated
              business that has been serving the Greater Toronto Area for over
              10 years. We understand the stress of vehicle breakdowns, which is
              why we've built our reputation on transparency, speed, and
              unwavering professional reliability.
            </p>
            <p className="text-lg" style={{ color: COLORS.mutedLight }}>
              From the tight streets of the downtown core to the wide stretches
              of the highways, our operators know every corner of this city. We
              don't just tow vehicles; we provide peace of mind in high-stakes
              situations.
            </p>
          </div>

          <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <StatBox key={s.label} {...s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Contact / Emergency CTA                                            */
/* ------------------------------------------------------------------ */
function Contact() {
  return (
    <section
      id="contact"
      className="py-20"
      style={{ backgroundColor: COLORS.bg }}
    >
      <div className="container mx-auto px-8 max-w-[1200px]">
        <div
          className="border-4 p-8 md:p-16 flex flex-col md:flex-row justify-between items-center gap-12 relative"
          style={{
            borderColor: COLORS.navy,
            backgroundColor: COLORS.surfaceWarm,
          }}
        >
          <div
            className="absolute -top-4 -left-4 h-8 w-32"
            style={hazardStyle}
          />

          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold uppercase mb-4">
              IMMEDIATE{" "}
              <span style={{ color: COLORS.orange }}>DISPATCH</span>
            </h2>
            <p className="text-lg" style={{ color: COLORS.muted }}>
              Our operators are standing by right now to assist you anywhere in
              the GTA.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <a
              href={PHONE_HREF}
              className="font-black text-2xl sm:text-3xl md:text-5xl text-slate-900 mb-6 flex items-center justify-center gap-3 md:gap-4 whitespace-nowrap hover:text-orange-500 transition-colors"
              aria-label={`Call ${PHONE_DISPLAY}`}
            >
              <Phone className="shrink-0" size={38} />
              {PHONE_DISPLAY}
            </a>
            <div className="flex gap-6">
              <a
                href="#"
                className="p-3 text-white hover:bg-orange-500 transition-colors"
                style={{ backgroundColor: COLORS.navy }}
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="#"
                className="p-3 text-white hover:bg-orange-500 transition-colors"
                style={{ backgroundColor: COLORS.navy }}
                aria-label="Facebook"
              >
                <FaFacebookF size={24} />
              </a>
              <a
                href="#"
                className="p-3 text-white hover:bg-orange-500 transition-colors"
                style={{ backgroundColor: COLORS.navy }}
                aria-label="TikTok"
              >
                <FaTiktok size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Footer                                                             */
/* ------------------------------------------------------------------ */
function Footer() {
  const links = [
    "Towing Services",
    "Roadside Assistance",
    "Privacy Policy",
    "Contact Support",
  ];

  return (
    <footer className="w-full border-t-4 bg-slate-950 text-white" style={{ borderColor: COLORS.orange }}>
      <div className="flex flex-col md:flex-row justify-between items-center py-12 px-8 gap-6 max-w-[1400px] mx-auto">
        <div className="flex flex-col items-center md:items-start">
          <span
            className="font-black text-2xl uppercase tracking-tighter italic mb-2"
            style={{ color: COLORS.orange }}
          >
            EA TOWING
          </span>
          <span className="text-sm uppercase font-bold text-slate-400">
            © 2026 EA TOWING &amp; RECOVERY — 24/7 EMERGENCY RESPONSE GTA
          </span>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {links.map((l) => (
            <a
              key={l}
              href="#"
              className="text-sm uppercase font-bold text-slate-400 hover:text-orange-400 transition-colors"
            >
              {l}
            </a>
          ))}
        </div>
      </div>
      <div className="h-1 w-full opacity-30" style={hazardStyle} />
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/*  Root                                                               */
/* ------------------------------------------------------------------ */
export default function EATowing() {
  return (
    <div
      className="font-sans"
      style={{ backgroundColor: COLORS.bg, color: COLORS.ink, fontFamily: "'Work Sans', sans-serif" }}
    >
      <Header />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
