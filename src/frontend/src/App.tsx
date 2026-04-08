import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Anchor,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Facebook,
  Heart,
  Instagram,
  Mail,
  MapPin,
  Menu,
  Phone,
  Search,
  Shield,
  Twitter,
  X,
  Youtube,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useRef, useState } from "react";
import { useGetAllNews, useGetAllShips } from "./hooks/useQueries";

const MISSIONS = [
  {
    icon: <Shield size={36} />,
    title: "Maritime Security",
    desc: "Safeguarding India's vast coastline and Exclusive Economic Zone spanning 2.4 million sq. km against threats, piracy, and illegal activities.",
  },
  {
    icon: <Heart size={36} />,
    title: "Disaster Relief",
    desc: "Providing humanitarian assistance and disaster relief during national emergencies including floods, cyclones and tsunamis.",
  },
  {
    icon: <Anchor size={36} />,
    title: "Nation Building",
    desc: "Contributing to national development through ocean research, hydrographic surveys, international cooperation and training.",
  },
];

const STATIC_SHIPS = [
  {
    name: "INS Vikramaditya",
    shipType: "Aircraft Carrier",
    description:
      "India's pride and the Navy's flagship, capable of carrying over 30 aircraft including MiG-29K fighters.",
    imageUrl: "/assets/generated/navy-ship-3.dim_800x500.jpg",
  },
  {
    name: "INS Arihant",
    shipType: "Nuclear Submarine",
    description:
      "India's first nuclear-powered ballistic missile submarine, marking India's entry into an elite club of nations.",
    imageUrl: "/assets/generated/navy-ship-2.dim_800x500.jpg",
  },
  {
    name: "INS Chennai",
    shipType: "Destroyer",
    description:
      "A Project 15A guided missile destroyer, one of the most potent warships built in Indian shipyards.",
    imageUrl: "/assets/generated/navy-ship-1.dim_800x500.jpg",
  },
];

const STATIC_NEWS = [
  {
    title: "Indian Navy Conducts Large-Scale Humanitarian Relief Operation",
    date: BigInt(new Date("2026-03-15").getTime()),
    summary:
      "Navy ships and helicopters deployed to provide relief to cyclone-affected coastal communities in Odisha, rescuing over 2,000 people.",
    imageUrl: "/assets/generated/navy-news-1.dim_600x400.jpg",
  },
  {
    title: "Exercise TROPEX 2026: India's Largest Naval Exercise Concludes",
    date: BigInt(new Date("2026-02-28").getTime()),
    summary:
      "Theatre-Level Operational Readiness Exercise TROPEX 2026 concluded with over 70 ships, 60 aircraft, and 10,000 personnel participating.",
    imageUrl: "/assets/generated/navy-news-2.dim_600x400.jpg",
  },
  {
    title: "INS Tushil Commissioned: A New Milestone for Indian Navy",
    date: BigInt(new Date("2026-01-20").getTime()),
    summary:
      "The guided-missile frigate INS Tushil was formally commissioned into the Indian Navy, boosting the fleet's combat capability significantly.",
    imageUrl: "/assets/generated/navy-news-3.dim_600x400.jpg",
  },
];

const HISTORY_EVENTS = [
  { year: "1612", event: "East India Company's Marine established" },
  { year: "1830", event: "Became Her Majesty's Indian Navy" },
  {
    year: "1950",
    event: "Royal Indian Navy became Indian Navy post-independence",
  },
  { year: "1971", event: "Decisive role in Indo-Pakistan War" },
  {
    year: "Today",
    event: "One of the world's most powerful blue-water navies",
  },
];

const NAV_LINKS = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT US", href: "#missions" },
  { label: "FLEET", href: "#fleet" },
  { label: "CAREERS", href: "#careers" },
  { label: "NEWS & MEDIA", href: "#news" },
  { label: "HISTORY", href: "#history" },
  { label: "CONTACT US", href: "#contact" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "https://www.indiannavy.nic.in" },
  { label: "Terms of Use", href: "https://www.indiannavy.nic.in" },
  { label: "Disclaimer", href: "https://www.indiannavy.nic.in" },
  { label: "Sitemap", href: "https://www.indiannavy.nic.in" },
];

function formatDate(ts: bigint) {
  return new Date(Number(ts)).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [fleetIndex, setFleetIndex] = useState(0);
  const [activeNav, setActiveNav] = useState("#home");
  const searchRef = useRef<HTMLInputElement>(null);

  const { data: backendShips } = useGetAllShips();
  const { data: backendNews } = useGetAllNews();

  const ships =
    backendShips && backendShips.length > 0 ? backendShips : STATIC_SHIPS;
  const news =
    backendNews && backendNews.length > 0 ? backendNews : STATIC_NEWS;

  const visibleShips = ships.slice(fleetIndex, fleetIndex + 3);
  const canPrev = fleetIndex > 0;
  const canNext = fleetIndex + 3 < ships.length;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    const lower = searchQuery.toLowerCase();
    const sections = [
      "missions",
      "fleet",
      "careers",
      "news",
      "history",
      "contact",
    ];
    for (const s of sections) {
      if (s.includes(lower) || lower.includes(s)) {
        document.getElementById(s)?.scrollIntoView({ behavior: "smooth" });
        setSearchQuery("");
        return;
      }
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* ── TOP UTILITY HEADER ── */}
      <header
        className="sticky top-0 z-50"
        style={{
          background: "linear-gradient(90deg, #0B2E4D 0%, #123F66 100%)",
        }}
      >
        <div className="max-w-[1100px] mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border-2 border-[#F2C23A] flex-shrink-0">
              <span
                className="text-[#F2C23A] text-2xl"
                role="img"
                aria-label="Indian Navy Anchor"
              >
                ⚓
              </span>
            </div>
            <div>
              <p className="text-white font-bold text-sm tracking-widest uppercase leading-tight">
                Indian Navy
              </p>
              <p className="text-[#F2C23A] text-[10px] tracking-[0.2em] uppercase">
                Shano Varunah
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSearch}
            className="hidden md:flex items-center gap-2 flex-1 max-w-sm ml-auto"
          >
            <Input
              ref={searchRef}
              data-ocid="header.search_input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search sections..."
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-8 text-sm"
            />
            <Button
              type="submit"
              data-ocid="header.search_button"
              size="sm"
              className="bg-[#F2C23A] text-[#0B2E4D] hover:bg-[#e6b82e] font-bold h-8 px-3"
            >
              <Search size={14} />
            </Button>
          </form>

          <button
            type="button"
            data-ocid="nav.toggle"
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <nav
          className="border-t border-white/10 hidden md:block"
          style={{ background: "#0B2E4D" }}
        >
          <div className="max-w-[1100px] mx-auto px-4">
            <ul className="flex items-center gap-0">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    data-ocid={`nav.${link.label.toLowerCase().replace(/[^a-z0-9]/g, "")}.link`}
                    href={link.href}
                    onClick={() => setActiveNav(link.href)}
                    className={`block px-4 py-3 text-xs font-bold tracking-widest uppercase transition-all ${
                      activeNav === link.href
                        ? "text-[#F2C23A] border-b-2 border-[#F2C23A]"
                        : "text-white hover:text-[#F2C23A] border-b-2 border-transparent hover:border-[#F2C23A]"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden"
              style={{ background: "#0B2E4D" }}
            >
              <ul className="px-4 pb-4">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => {
                        setActiveNav(link.href);
                        setMobileMenuOpen(false);
                      }}
                      className="block py-2 text-sm font-bold tracking-wider uppercase text-white hover:text-[#F2C23A] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <main>
        {/* ── HERO ── */}
        <section
          id="home"
          className="relative min-h-[90vh] flex items-center"
          style={{
            backgroundImage:
              "url('https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/INS_Vikramaditya_%28R33%29_in_2013.jpg/1280px-INS_Vikramaditya_%28R33%29_in_2013.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(7,28,50,0.92) 0%, rgba(7,28,50,0.65) 55%, rgba(7,28,50,0.2) 100%)",
            }}
          />
          <div className="relative z-10 max-w-[1100px] mx-auto px-6 py-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-xl"
            >
              <p className="text-[#F2C23A] text-xs font-bold tracking-[0.3em] uppercase mb-4">
                Shano Varunah
              </p>
              <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-6 uppercase">
                The Guardians of Our Seas
              </h1>
              <p className="text-white/80 text-lg mb-8">
                Committed to Protecting India's Maritime Interests.
              </p>
              <a
                data-ocid="hero.primary_button"
                href="#fleet"
                className="inline-block bg-[#F2C23A] text-[#0B2E4D] font-bold uppercase tracking-widest px-8 py-3 text-sm hover:bg-[#e6b82e] transition-colors"
              >
                Explore Our Fleet
              </a>
            </motion.div>
          </div>
        </section>

        {/* ── KEY MISSIONS ── */}
        <section id="missions" className="py-20 bg-white">
          <div className="max-w-[1100px] mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center text-2xl md:text-3xl font-bold tracking-widest uppercase mb-4"
              style={{ color: "#102A3A" }}
            >
              Key Missions &amp; Overview
            </motion.h2>
            <div className="w-16 h-1 bg-[#F2C23A] mx-auto mb-12" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {MISSIONS.map((m, i) => (
                <motion.div
                  key={m.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  data-ocid={`missions.item.${i + 1}`}
                  className="text-center"
                >
                  <div
                    className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-5"
                    style={{ background: "#EFF2F5", color: "#0B2E4D" }}
                  >
                    {m.icon}
                  </div>
                  <h3
                    className="font-bold text-lg uppercase tracking-wider mb-3"
                    style={{ color: "#102A3A" }}
                  >
                    {m.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#6B7785" }}
                  >
                    {m.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FLEET ── */}
        <section id="fleet" className="py-20" style={{ background: "#EFF2F5" }}>
          <div className="max-w-[1100px] mx-auto px-6">
            <div className="flex items-end justify-between mb-10">
              <div>
                <h2
                  className="text-2xl md:text-3xl font-bold uppercase tracking-widest"
                  style={{ color: "#102A3A" }}
                >
                  Fleet &amp; Operational Strength
                </h2>
                <div className="w-16 h-1 bg-[#F2C23A] mt-3" />
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  data-ocid="fleet.pagination_prev"
                  disabled={!canPrev}
                  onClick={() => setFleetIndex(Math.max(0, fleetIndex - 1))}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all disabled:opacity-40"
                  style={{
                    background: canPrev ? "#F2C23A" : "#d1d5db",
                    color: "#0B2E4D",
                  }}
                  aria-label="Previous ships"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  type="button"
                  data-ocid="fleet.pagination_next"
                  disabled={!canNext}
                  onClick={() =>
                    setFleetIndex(Math.min(ships.length - 3, fleetIndex + 1))
                  }
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all disabled:opacity-40"
                  style={{
                    background: canNext ? "#F2C23A" : "#d1d5db",
                    color: "#0B2E4D",
                  }}
                  aria-label="Next ships"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {visibleShips.map((ship, i) => (
                <motion.div
                  key={ship.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  data-ocid={`fleet.item.${i + 1}`}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={ship.imageUrl}
                      alt={ship.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#F2C23A] bg-[#0B2E4D] px-2 py-1 rounded">
                      {ship.shipType}
                    </span>
                    <h3
                      className="font-bold text-lg mt-3 mb-2"
                      style={{ color: "#102A3A" }}
                    >
                      {ship.name}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "#6B7785" }}
                    >
                      {ship.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CAREERS ── */}
        <section id="careers" className="py-0">
          <div className="max-w-[1100px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div
                className="relative min-h-[400px] flex items-end"
                style={{ background: "#123F66" }}
              >
                <img
                  src="/assets/generated/navy-officer.dim_600x800.jpg"
                  alt="Indian Navy Officer"
                  className="w-full h-full object-cover object-top absolute inset-0"
                  loading="lazy"
                />
                <div
                  className="relative z-10 p-8"
                  style={{
                    background:
                      "linear-gradient(0deg, rgba(7,28,50,0.9) 0%, transparent 100%)",
                  }}
                >
                  <p className="text-white/80 text-sm mb-4">
                    Be part of something greater than yourself.
                  </p>
                  <a
                    data-ocid="careers.primary_button"
                    href="https://www.joinindiannavy.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#F2C23A] text-[#0B2E4D] font-bold uppercase tracking-widest px-6 py-3 text-sm hover:bg-[#e6b82e] transition-colors"
                  >
                    Join The Indian Navy
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
              <div className="p-10 md:p-14" style={{ background: "#0B2E4D" }}>
                <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-widest mb-2">
                  Careers &amp; Recruitment
                </h2>
                <div className="w-12 h-1 bg-[#F2C23A] mb-8" />
                <div className="space-y-6">
                  <div data-ocid="careers.item.1">
                    <h3 className="text-[#F2C23A] font-bold uppercase tracking-wider text-sm mb-3">
                      Officer Roles
                    </h3>
                    <ul className="space-y-2">
                      {[
                        "Executive Branch",
                        "Technical Branch (Engineering & Electrical)",
                        "Education Branch",
                        "Naval Architecture",
                      ].map((role) => (
                        <li
                          key={role}
                          className="text-white/80 text-sm flex items-start gap-2"
                        >
                          <span className="text-[#F2C23A] mt-1">▸</span> {role}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div data-ocid="careers.item.2">
                    <h3 className="text-[#F2C23A] font-bold uppercase tracking-wider text-sm mb-3">
                      Sailor Entries
                    </h3>
                    <ul className="space-y-2">
                      {[
                        "Artificer Apprentice (AA)",
                        "Senior Secondary Recruit (SSR)",
                        "Matric Recruit (MR)",
                      ].map((role) => (
                        <li
                          key={role}
                          className="text-white/80 text-sm flex items-start gap-2"
                        >
                          <span className="text-[#F2C23A] mt-1">▸</span> {role}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div data-ocid="careers.item.3">
                    <h3 className="text-[#F2C23A] font-bold uppercase tracking-wider text-sm mb-3">
                      Short Service Commission
                    </h3>
                    <ul className="space-y-2">
                      {[
                        "10+2 Cadet Entry Scheme",
                        "University Entry Scheme (UES)",
                        "JAG Entry (Law)",
                      ].map((role) => (
                        <li
                          key={role}
                          className="text-white/80 text-sm flex items-start gap-2"
                        >
                          <span className="text-[#F2C23A] mt-1">▸</span> {role}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── NEWS ── */}
        <section id="news" className="py-20 bg-white">
          <div className="max-w-[1100px] mx-auto px-6">
            <h2
              className="text-2xl md:text-3xl font-bold uppercase tracking-widest mb-3"
              style={{ color: "#102A3A" }}
            >
              Latest News &amp; Events
            </h2>
            <div className="w-16 h-1 bg-[#F2C23A] mb-12" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {news.slice(0, 3).map((article, i) => (
                <motion.article
                  key={article.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  data-ocid={`news.item.${i + 1}`}
                  className="group cursor-pointer"
                >
                  <div className="overflow-hidden rounded-lg mb-4 h-48">
                    <img
                      src={article.imageUrl}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-xs text-[#F2C23A] font-bold uppercase tracking-widest mb-2">
                    {formatDate(article.date)}
                  </p>
                  <h3
                    className="font-bold text-base leading-snug mb-2 group-hover:text-[#123F66] transition-colors"
                    style={{ color: "#102A3A" }}
                  >
                    {article.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#6B7785" }}
                  >
                    {article.summary}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* ── HISTORY BANNER ── */}
        <section
          id="history"
          className="py-20"
          style={{ background: "#0B2E4D" }}
        >
          <div className="max-w-[1100px] mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-widest mb-3">
                  Navy History &amp; Legacy
                </h2>
                <div className="w-12 h-1 bg-[#F2C23A] mb-6" />
                <p className="text-white/80 text-sm leading-relaxed mb-8">
                  With roots stretching back over four centuries, the Indian
                  Navy has evolved from a colonial coastal guard into one of the
                  world's foremost blue-water navies, guardian of 7,500 km of
                  coastline and India's maritime interests.
                </p>
                <div className="space-y-4 mb-8">
                  {HISTORY_EVENTS.map((ev, i) => (
                    <div
                      key={ev.year}
                      data-ocid={`history.item.${i + 1}`}
                      className="flex items-start gap-4"
                    >
                      <span className="text-[#F2C23A] font-bold text-xs tracking-wider min-w-[52px]">
                        {ev.year}
                      </span>
                      <div className="w-px bg-white/20 mt-1 mr-2 self-stretch" />
                      <span className="text-white/80 text-sm">{ev.event}</span>
                    </div>
                  ))}
                </div>
                <a
                  data-ocid="history.primary_button"
                  href="https://www.indiannavy.nic.in/content/historical-background"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#F2C23A] text-[#0B2E4D] font-bold uppercase tracking-widest px-6 py-3 text-sm hover:bg-[#e6b82e] transition-colors"
                >
                  Learn More
                  <ExternalLink size={14} />
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-lg overflow-hidden shadow-2xl"
              >
                <img
                  src="/assets/generated/navy-history.dim_800x500.jpg"
                  alt="Indian Naval History"
                  className="w-full h-72 md:h-96 object-cover"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section
          id="contact"
          className="py-20"
          style={{ background: "#EFF2F5" }}
        >
          <div className="max-w-[1100px] mx-auto px-6">
            <h2
              className="text-2xl md:text-3xl font-bold uppercase tracking-widest mb-3"
              style={{ color: "#102A3A" }}
            >
              Contact Us
            </h2>
            <div className="w-16 h-1 bg-[#F2C23A] mb-12" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div
                data-ocid="contact.item.1"
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-[#0B2E4D] flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-[#F2C23A]" />
                </div>
                <div>
                  <h3
                    className="font-bold uppercase tracking-wider text-sm mb-1"
                    style={{ color: "#102A3A" }}
                  >
                    Headquarters
                  </h3>
                  <p className="text-sm" style={{ color: "#6B7785" }}>
                    Integrated Headquarters,
                    <br />
                    Ministry of Defence (Navy),
                    <br />
                    New Delhi - 110011
                  </p>
                </div>
              </div>
              <div
                data-ocid="contact.item.2"
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-[#0B2E4D] flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-[#F2C23A]" />
                </div>
                <div>
                  <h3
                    className="font-bold uppercase tracking-wider text-sm mb-1"
                    style={{ color: "#102A3A" }}
                  >
                    Public Helpline
                  </h3>
                  <p className="text-sm" style={{ color: "#6B7785" }}>
                    1800-419-4144
                    <br />
                    Mon–Fri: 9:00 AM – 6:00 PM
                  </p>
                </div>
              </div>
              <div
                data-ocid="contact.item.3"
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-[#0B2E4D] flex items-center justify-center flex-shrink-0">
                  <Mail size={20} className="text-[#F2C23A]" />
                </div>
                <div>
                  <h3
                    className="font-bold uppercase tracking-wider text-sm mb-1"
                    style={{ color: "#102A3A" }}
                  >
                    Official Website
                  </h3>
                  <p className="text-sm" style={{ color: "#6B7785" }}>
                    indiannavy.nic.in
                    <br />
                    joinindiannavy.gov.in
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer style={{ background: "#072845" }}>
        <div className="max-w-[1100px] mx-auto px-6 py-14">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div className="md:col-span-1 flex flex-col items-start">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[#F2C23A] text-3xl">⚓</span>
                <div>
                  <p className="text-white font-bold text-sm tracking-widest uppercase">
                    Indian Navy
                  </p>
                  <p className="text-[#F2C23A] text-[10px] tracking-[0.2em] uppercase">
                    Shano Varunah
                  </p>
                </div>
              </div>
              <p className="text-white/60 text-xs leading-relaxed">
                Proud guardian of India's maritime boundaries and national
                security.
              </p>
            </div>

            <div>
              <h4 className="text-[#F2C23A] font-bold uppercase tracking-widest text-xs mb-5">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {NAV_LINKS.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="text-white/70 text-sm hover:text-[#F2C23A] transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[#F2C23A] font-bold uppercase tracking-widest text-xs mb-5">
                Resources
              </h4>
              <ul className="space-y-2">
                {[
                  ["Official Website", "https://www.indiannavy.nic.in"],
                  ["Join Indian Navy", "https://www.joinindiannavy.gov.in"],
                  ["Naval Dockyard", "https://www.indiannavy.nic.in"],
                  ["RTI Portal", "https://rtionline.gov.in"],
                  ["Press Releases", "https://www.indiannavy.nic.in"],
                ].map(([label, url]) => (
                  <li key={label}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/70 text-sm hover:text-[#F2C23A] transition-colors flex items-center gap-1"
                    >
                      {label} <ExternalLink size={10} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[#F2C23A] font-bold uppercase tracking-widest text-xs mb-5">
                Connect With Us
              </h4>
              <div className="flex gap-3 mb-6">
                {[
                  { icon: <Facebook size={16} />, label: "Facebook" },
                  { icon: <Twitter size={16} />, label: "Twitter" },
                  { icon: <Youtube size={16} />, label: "YouTube" },
                  { icon: <Instagram size={16} />, label: "Instagram" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href="https://www.indiannavy.nic.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-[#F2C23A] hover:text-[#0B2E4D] hover:border-[#F2C23A] transition-all"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
              <p className="text-white/60 text-xs">
                © {new Date().getFullYear()}. Built with{" "}
                <Heart size={10} className="inline text-[#F2C23A]" /> using{" "}
                <a
                  href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F2C23A] hover:underline"
                >
                  caffeine.ai
                </a>
              </p>
            </div>
          </div>
        </div>

        <div
          className="border-t"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          <div className="max-w-[1100px] mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-2">
            <p className="text-white/40 text-xs">
              © {new Date().getFullYear()} Indian Navy. All Rights Reserved.
              Government of India.
            </p>
            <div className="flex gap-4">
              {LEGAL_LINKS.map((t) => (
                <a
                  key={t.label}
                  href={t.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 text-xs hover:text-white/70 transition-colors"
                >
                  {t.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
