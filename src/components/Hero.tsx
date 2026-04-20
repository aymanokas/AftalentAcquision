import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { useLang } from "../i18n/LangContext";
import { translations } from "../i18n/translations";

export default function Hero() {
  const { lang } = useLang();
  const t = translations.hero;

  return (
    <section className="relative min-h-screen overflow-hidden bg-white pt-24 dark:bg-gray-950 sm:pt-32">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 right-0 h-[600px] w-[600px] rounded-full bg-primary-500/10 blur-3xl dark:bg-primary-500/5" />
        <div className="absolute -bottom-20 -left-20 h-[400px] w-[400px] rounded-full bg-accent-500/10 blur-3xl dark:bg-accent-500/5" />
        <div className="absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-400/5 blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,102,241,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700 dark:border-primary-800 dark:bg-primary-950 dark:text-primary-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-500" />
              </span>
              {t.badge[lang]}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-8 max-w-4xl text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {lang === "en" ? (
              <>
                Hire Top Talent{" "}
                <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
                  Faster
                </span>
              </>
            ) : (
              <>
                Recrutez les meilleurs talents{" "}
                <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
                  plus rapidement
                </span>
              </>
            )}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-400 sm:text-xl"
          >
            {t.subheadline[lang]}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
          >
            <a
              href="#cta"
              className="group inline-flex items-center gap-2 rounded-xl bg-primary-600 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary-600/25 transition-all hover:bg-primary-700 hover:shadow-xl hover:shadow-primary-600/30"
            >
              {t.cta[lang]}
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
            <a
              href="#how-it-works"
              className="group inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-3.5 text-base font-semibold text-gray-700 transition-all hover:border-gray-300 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:bg-gray-800"
            >
              <Play size={16} className="text-primary-600" />
              {t.ctaSecondary[lang]}
            </a>
          </motion.div>

          {/* Abstract visual */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative mt-16 w-full max-w-5xl sm:mt-20"
          >
            <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white shadow-2xl shadow-gray-300/40 dark:border-gray-800 dark:from-gray-900 dark:to-gray-950 dark:shadow-black/40">
              {/* Dashboard mockup */}
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-2 mb-6">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-yellow-400" />
                  <div className="h-3 w-3 rounded-full bg-green-400" />
                  <div className="ml-4 h-4 w-48 rounded bg-gray-200 dark:bg-gray-800" />
                </div>
                <div className="grid grid-cols-3 gap-4 sm:gap-6">
                  {[
                    { label: lang === "en" ? "Active Candidates" : "Candidats actifs", value: "2,847", color: "from-primary-500 to-primary-600" },
                    { label: lang === "en" ? "Positions Filled" : "Postes pourvus", value: "384", color: "from-accent-500 to-accent-600" },
                    { label: lang === "en" ? "Avg. Time to Hire" : "Délai moyen", value: "21d", color: "from-violet-500 to-purple-600" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-xl border border-gray-100 bg-white p-4 dark:border-gray-800 dark:bg-gray-900 sm:p-5"
                    >
                      <p className="text-xs font-medium text-gray-500 dark:text-gray-400 sm:text-sm">
                        {stat.label}
                      </p>
                      <p
                        className={`mt-1 bg-gradient-to-r ${stat.color} bg-clip-text text-2xl font-bold text-transparent sm:text-3xl`}
                      >
                        {stat.value}
                      </p>
                    </div>
                  ))}
                </div>
                {/* Progress bars */}
                <div className="mt-6 space-y-3">
                  {[85, 72, 93].map((w, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-primary-500" />
                      <div className="h-2 flex-1 rounded-full bg-gray-100 dark:bg-gray-800">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${w}%` }}
                          transition={{ duration: 1, delay: 0.6 + i * 0.15 }}
                          className="h-2 rounded-full bg-gradient-to-r from-primary-500 to-accent-500"
                        />
                      </div>
                      <span className="text-xs font-medium text-gray-400">
                        {w}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Glow behind the card */}
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-r from-primary-600/20 via-transparent to-accent-500/20 blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
