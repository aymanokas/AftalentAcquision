import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useLang } from "../i18n/LangContext";
import { useTheme } from "../context/ThemeContext";
import { translations } from "../i18n/translations";

const navLinks = [
  { key: "services" as const, href: "#services" },
  { key: "howItWorks" as const, href: "#how-it-works" },
  { key: "whyUs" as const, href: "#why-us" },
  { key: "testimonials" as const, href: "#testimonials" },
  { key: "contact" as const, href: "#cta" },
];

export default function Navbar() {
  const { lang, toggleLang } = useLang();
  const { dark, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = translations.nav;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl shadow-lg shadow-black/[0.03] dark:shadow-black/[0.2]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between sm:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-600 text-white font-bold text-lg">
              TA
            </div>
            <span className="text-lg font-bold text-gray-900 dark:text-white">
              TalentAcq
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-white/10 dark:hover:text-white"
              >
                {t[link.key][lang]}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden items-center gap-2 md:flex">
            <button
              onClick={toggleTheme}
              className="rounded-lg p-2 text-gray-500 transition-colors hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-white/10"
              aria-label="Toggle theme"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={toggleLang}
              className="rounded-lg px-3 py-1.5 text-sm font-semibold text-gray-600 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/10"
            >
              {lang === "en" ? "FR" : "EN"}
            </button>
            <a
              href="#cta"
              className="rounded-lg bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-primary-600/25 transition-all hover:bg-primary-700 hover:shadow-lg hover:shadow-primary-600/30"
            >
              {t.getStarted[lang]}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="rounded-lg p-2 text-gray-500 dark:text-gray-400"
              aria-label="Toggle theme"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="rounded-lg p-2 text-gray-500 dark:text-gray-400"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950 md:hidden"
          >
            <div className="space-y-1 px-4 pb-4 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/10"
                >
                  {t[link.key][lang]}
                </a>
              ))}
              <div className="flex items-center gap-3 pt-3">
                <button
                  onClick={toggleLang}
                  className="rounded-lg px-3 py-1.5 text-sm font-semibold text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/10"
                >
                  {lang === "en" ? "FR" : "EN"}
                </button>
                <a
                  href="#cta"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg bg-primary-600 px-4 py-2 text-sm font-semibold text-white"
                >
                  {t.getStarted[lang]}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
