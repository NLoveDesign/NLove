import React from "react";

const SEO = {
  title: "NLove - Landing page",
  description:
    "NLove is an independent project inspired by Dutch design culture — architecture, urban life, objects and everyday beauty.",
  ogTitle: "NLove",
  ogDescription:
    "Inspired by the Dutch. Design, culture and everyday life.",
  ogType: "website",
  ogImage: "/og-nlove.jpg",
  ogUrl: "https://nlove.nl",
  ogSiteName: "NLove",
  ogLocale: "en_GB",
  ogLocaleAlt: "nl_NL"
};

const copy = {
  en: {
    badge: "Inspired by the Dutch.",
    title: "Design, culture and everyday life.",
    subtitle:
      "NLove is an independent project inspired by Dutch design culture — architecture, urban life, objects and everyday beauty.",
    ctaPrimary: "English",
    ctaSecondary: "Nederlands",
    cards: [
      ["Dutch influence", "From architecture to objects, the Netherlands offer a visual culture shaped by clarity, proportion and restraint."],
      ["Everyday culture", "NLove draws inspiration from bicycles, windows, streets, materials and the rhythms of ordinary life."],
      ["Objects and clothing", "Clothing is part of this landscape — not the whole story, but one of its expressions."]
    ],
    statusLabel: "status",
    status: "In development",
    statusPill: "carefully built",
    release: "Expected: September",
    sections: [
      {
        step: "01",
        title: "What is NLove",
        text: "NLove is an independent project inspired by Dutch design culture. It explores a visual language shaped by clarity, balance and everyday simplicity."
      },
      {
        step: "02",
        title: "The Dutch influence",
        text: "The Netherlands have developed a distinctive design culture where form and function belong naturally to daily life."
      },
      {
        step: "03",
        title: "Objects and clothing",
        text: "NLove approaches garments as everyday objects shaped by culture, proportion and use."
      }
    ],
    updatesTitle: "Contact",
    updatesText:
      "A temporary contact for the pre-launch phase. The site will evolve, but the point of view is already clear.",
    updatesNote: "areyou@nlove.nl",
  },
  nl: {
    badge: "Inspired by the Dutch.",
    title: "Design, cultuur en het alledaagse.",
    subtitle:
      "NLove is een onafhankelijk project, geïnspireerd door Nederlandse designcultuur — architectuur, stadsleven, objecten en alledaagse schoonheid.",
    ctaPrimary: "English",
    ctaSecondary: "Nederlands",
    cards: [
      ["Nederlandse invloed", "Van architectuur tot objecten: Nederland biedt een visuele cultuur, gevormd door helderheid, proportie en terughoudendheid."],
      ["Alledaagse cultuur", "NLove haalt inspiratie uit fietsen, ramen, straten, materialen en de ritmes van het gewone leven."],
      ["Objecten en kleding", "Kleding maakt deel uit van dit landschap — niet het hele verhaal, maar één van de uitdrukkingen ervan."]
    ],
    statusLabel: "status",
    status: "In ontwikkeling",
    statusPill: "zorgvuldig opgebouwd",
    release: "Verwacht: september",
    sections: [
      {
        step: "01",
        title: "Wat is NLove",
        text: "NLove is een onafhankelijk project, geïnspireerd door Nederlandse designcultuur. Het verkent een visuele taal van helderheid, balans en alledaagse eenvoud."
      },
      {
        step: "02",
        title: "Nederlandse invloed",
        text: "Nederland heeft een uitgesproken designcultuur ontwikkeld waarin vorm en functie vanzelfsprekend deel uitmaken van het dagelijks leven."
      },
      {
        step: "03",
        title: "Objecten en kleding",
        text: "NLove benadert kledingstukken als alledaagse objecten, gevormd door cultuur, proportie en gebruik."
      }
    ],
    updatesTitle: "Contact",
    updatesText:
      "Een tijdelijk contactadres voor de pre-launchfase. De site zal evolueren, maar het perspectief is nu al duidelijk.",
    updatesNote: "areyou@nlove.nl",
  }
};

export default function NLoveLandingPage() {
  React.useEffect(() => {
    document.title = SEO.title;

    const ensureMeta = (selector, attrs) => {
      let el = document.head.querySelector(selector);
      if (!el) {
        el = document.createElement("meta");
        Object.entries(attrs).forEach(([key, value]) => el.setAttribute(key, value));
        document.head.appendChild(el);
      }
      return el;
    };

    const setMetaContent = (selector, attrs, content) => {
      const el = ensureMeta(selector, attrs);
      el.setAttribute("content", content);
    };

    setMetaContent('meta[name="description"]', { name: 'description' }, SEO.description);
    setMetaContent('meta[property="og:title"]', { property: 'og:title' }, SEO.ogTitle);
    setMetaContent('meta[property="og:description"]', { property: 'og:description' }, SEO.ogDescription);
    setMetaContent('meta[property="og:type"]', { property: 'og:type' }, SEO.ogType);
    setMetaContent('meta[property="og:image"]', { property: 'og:image' }, SEO.ogImage);
    setMetaContent('meta[property="og:url"]', { property: 'og:url' }, SEO.ogUrl);
    setMetaContent('meta[property="og:site_name"]', { property: 'og:site_name' }, SEO.ogSiteName);
    setMetaContent('meta[property="og:locale"]', { property: 'og:locale' }, SEO.ogLocale);
    setMetaContent('meta[property="og:locale:alternate"]', { property: 'og:locale:alternate' }, SEO.ogLocaleAlt);
    setMetaContent('meta[name="twitter:card"]', { name: 'twitter:card' }, 'summary_large_image');
    setMetaContent('meta[name="twitter:title"]', { name: 'twitter:title' }, SEO.ogTitle);
    setMetaContent('meta[name="twitter:description"]', { name: 'twitter:description' }, SEO.ogDescription);
    setMetaContent('meta[name="twitter:image"]', { name: 'twitter:image' }, SEO.ogImage);
  }, []);
  const [lang, setLang] = React.useState("en");
  const t = copy[lang];

  return (
    <main className="min-h-screen bg-[#21468B] text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.10),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.06),transparent_30%)]" />

      <section className="relative mx-auto flex min-h-screen w-full max-w-7xl items-center px-6 py-16 sm:px-10 lg:px-12">
        <div className="grid w-full gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-white/85" />
              {t.badge}
            </div>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
              {t.title}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl">
              {t.subtitle}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button
                onClick={() => setLang("en")}
                className={`inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-medium transition ${
                  lang === "en"
                    ? "bg-white text-[#21468B]"
                    : "border border-white/15 bg-white/5 text-white/85 hover:bg-white/10"
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLang("nl")}
                className={`inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-medium transition ${
                  lang === "nl"
                    ? "bg-white text-[#21468B]"
                    : "border border-white/15 bg-white/5 text-white/85 hover:bg-white/10"
                }`}
              >
                Nederlands
              </button>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {t.cards.map(([title, text]) => (
                <div key={title} className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                  <h2 className="text-sm font-semibold tracking-wide text-white">{title}</h2>
                  <p className="mt-2 text-sm leading-6 text-white/70">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:pl-8">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-8">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-sm uppercase tracking-[0.22em] text-white/50">{t.statusLabel}</p>
                  <p className="mt-2 text-2xl font-semibold text-white">{t.status}</p>
                  <p className="mt-1 text-sm text-white/70">{t.release}</p>
                </div>
                <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                  {t.statusPill}
                </div>
              </div>

              <div className="mt-6 space-y-5">
                {t.sections.map((item) => (
                  <div key={item.step} className="rounded-2xl border border-white/10 bg-[#1b3d79]/45 p-5">
                    <div className="flex items-start gap-4">
                      <div className="min-w-11 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-white/80">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-white">{item.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-white/70">{item.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <p className="text-sm font-medium text-white">{t.updatesTitle}</p>
                <p className="mt-2 text-sm leading-6 text-white/65">
                  {t.updatesText}
                </p>
                <div className="mt-4 flex items-center gap-3 text-sm text-white/75">
                  <div className="h-2 w-2 rounded-full bg-white/60" />
                  <a href="mailto:areyou@nlove.nl" className="underline underline-offset-4">
                    {t.updatesNote}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
