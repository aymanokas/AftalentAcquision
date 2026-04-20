import { motion } from "framer-motion";
import { Zap, Award, Globe, BrainCircuit } from "lucide-react";
import { useLang } from "../i18n/LangContext";
import { translations } from "../i18n/translations";

const icons = [Zap, Award, Globe, BrainCircuit];

export default function WhyUs() {
  const { lang } = useLang();
  const t = translations.whyUs;

  return (
    <section
      id="why-us"
      className="relative bg-gray-50 py-24 dark:bg-gray-900/50 sm:py-32"
    >
      {/* Subtle decoration */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-primary-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400">
            {t.title[lang]}
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            {t.subtitle[lang]}
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {t.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex gap-5 rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:shadow-lg hover:-translate-y-0.5 dark:border-gray-800 dark:bg-gray-900"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 text-white shadow-lg shadow-primary-600/20">
                  <Icon size={26} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {item.title[lang]}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    {item.description[lang]}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
