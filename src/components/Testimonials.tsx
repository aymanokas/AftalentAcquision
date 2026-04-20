import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useLang } from "../i18n/LangContext";
import { translations } from "../i18n/translations";

export default function Testimonials() {
  const { lang } = useLang();
  const t = translations.testimonials;

  return (
    <section
      id="testimonials"
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

        {/* Cards */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {t.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900 sm:p-8"
            >
              <Quote
                size={32}
                className="absolute top-6 right-6 text-primary-200 dark:text-primary-800"
              />
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    size={16}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400 sm:text-base">
                "{item.quote[lang]}"
              </p>
              <div className="mt-6 flex items-center gap-3">
                {/* Avatar placeholder */}
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-accent-500 text-sm font-bold text-white">
                  {item.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">
                    {item.name}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {item.role[lang]}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
