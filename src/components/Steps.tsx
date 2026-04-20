import { motion } from "framer-motion";
import { Phone, Map, Users, Rocket } from "lucide-react";
import { useLang } from "../i18n/LangContext";
import { translations } from "../i18n/translations";

const icons = [Phone, Map, Users, Rocket];

export default function Steps() {
  const { lang } = useLang();
  const t = translations.steps;

  return (
    <section
      id="how-it-works"
      className="relative bg-white py-24 dark:bg-gray-950 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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

        {/* Timeline */}
        <div className="relative mt-16">
          {/* Connecting line (desktop) */}
          <div className="absolute top-12 left-0 right-0 hidden h-0.5 bg-gradient-to-r from-primary-200 via-primary-400 to-accent-400 lg:block dark:from-primary-900 dark:via-primary-700 dark:to-accent-800" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {t.items.map((step, i) => {
              const Icon = icons[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative text-center"
                >
                  {/* Step number circle */}
                  <div className="relative mx-auto flex h-24 w-24 items-center justify-center">
                    <div className="absolute inset-0 rounded-full bg-primary-100 dark:bg-primary-900/30" />
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg shadow-primary-500/10 ring-2 ring-primary-200 dark:bg-gray-900 dark:ring-primary-700">
                      <Icon size={24} className="text-primary-600 dark:text-primary-400" />
                    </div>
                    <span className="absolute -top-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-primary-600 text-xs font-bold text-white shadow-md">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-gray-900 dark:text-white">
                    {step.title[lang]}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    {step.description[lang]}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
