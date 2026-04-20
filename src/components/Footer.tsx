import { Globe, Link2, Mail } from "lucide-react";
import { useLang } from "../i18n/LangContext";
import { translations } from "../i18n/translations";

const socialLinks = [
  { Icon: Globe, href: "#", label: "Website" },
  { Icon: Link2, href: "#", label: "LinkedIn" },
  { Icon: Mail, href: "#", label: "Email" },
];

export default function Footer() {
  const { lang, toggleLang } = useLang();
  const t = translations.footer;

  const columns = [
    {
      title: t.company[lang],
      links: [t.about[lang], t.careers[lang], t.blog[lang], t.press[lang]],
    },
    {
      title: t.servicesTitle[lang],
      links: [
        t.talentSourcing[lang],
        t.executiveSearch[lang],
        t.employerBranding[lang],
        t.screening[lang],
      ],
    },
    {
      title: t.legal[lang],
      links: [t.privacy[lang], t.terms[lang], t.cookies[lang]],
    },
  ];

  return (
    <footer className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-600 text-white font-bold text-lg">
                TA
              </div>
              <span className="text-lg font-bold text-gray-900 dark:text-white">
                TalentAcq
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              {t.description[lang]}
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-white/10 dark:hover:text-gray-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-600 transition-colors hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 sm:flex-row dark:border-gray-800">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} TalentAcq. {t.rights[lang]}
          </p>
          <button
            onClick={toggleLang}
            className="rounded-lg px-3 py-1.5 text-sm font-semibold text-gray-600 transition-colors hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-white/10"
          >
            {lang === "en" ? "Français" : "English"}
          </button>
        </div>
      </div>
    </footer>
  );
}
