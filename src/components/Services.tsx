import { motion } from "framer-motion";
import { Search, ShieldCheck, UserCog, Megaphone } from "lucide-react";
import { useLang } from "../i18n/LangContext";
import { translations } from "../i18n/translations";

const icons = [Search, ShieldCheck, UserCog, Megaphone];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Services() {
  const { lang } = useLang();
  const t = translations.services;

  return (
    <section
      id="services"
      className="relative bg-gray-50 py-24 dark:bg-gray-900/50 sm:py-32"
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

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {t.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                variants={cardVariants}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1 dark:border-gray-800 dark:bg-gray-900"
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/5 to-accent-500/5 opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-600 transition-colors group-hover:bg-primary-600 group-hover:text-white dark:bg-primary-900/50 dark:text-primary-400 dark:group-hover:bg-primary-600 dark:group-hover:text-white">
                    <Icon size={24} />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                    {item.title[lang]}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    {item.description[lang]}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
