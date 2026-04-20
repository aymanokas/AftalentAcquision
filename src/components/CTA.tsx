import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import { useLang } from "../i18n/LangContext";
import { translations } from "../i18n/translations";

export default function CTA() {
  const { lang } = useLang();
  const t = translations.cta;

  return (
    <section id="cta" className="relative bg-gray-50 py-24 dark:bg-gray-900/50 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 p-8 text-center shadow-2xl shadow-primary-900/30 sm:p-16"
        >
          {/* Decorative circles */}
          <div className="pointer-events-none absolute -top-20 -right-20 h-60 w-60 rounded-full bg-white/10 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-accent-500/20 blur-2xl" />
          {/* Grid pattern */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {t.title[lang]}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-primary-100">
              {t.subtitle[lang]}
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="mailto:contact@talentacq.com"
                className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-base font-semibold text-primary-700 shadow-lg transition-all hover:bg-gray-50 hover:shadow-xl"
              >
                {t.button[lang]}
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </a>
              <a
                href="#testimonials"
                className="group inline-flex items-center gap-2 rounded-xl border border-white/30 px-6 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white/10"
              >
                <FileText size={16} />
                {t.buttonSecondary[lang]}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
