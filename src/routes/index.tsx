import { createFileRoute } from "@tanstack/react-router";
import logoAsset from "@/assets/tsi-logo.png.asset.json";
import heroDesk from "@/assets/hero-desk.jpg";
import countersOffice from "@/assets/counters-office.jpg";
import cityBali from "@/assets/city-bali.jpg";
import cityBandung from "@/assets/city-bandung.jpg";
import cityJakarta from "@/assets/city-jakarta.jpg";
import cityIndonesia from "@/assets/city-indonesia.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PT Teropong Sukses Investama — Company Profile" },
      {
        name: "description",
        content:
          "Company profile PT Teropong Sukses Investama — virtual office, property investment, dan layanan pendukung bisnis di Bali, Bandung, dan Jakarta.",
      },
      { property: "og:title", content: "PT Teropong Sukses Investama — Company Profile" },
      {
        property: "og:description",
        content:
          "Virtual office, property investment, dan layanan pendukung bisnis di Bali, Bandung, dan Jakarta.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV = [
  { label: "Home", href: "#home", active: true },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Locations", href: "#presence" },
  { label: "Trust", href: "#trust" },
  { label: "Contact", href: "#contact" },
];

function Wordmark({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <span className={`inline-flex items-center ${tone === "light" ? "rounded-sm bg-background px-2 py-1" : ""}`}>
      <img src={logoAsset.url} alt="PT Teropong Sukses Investama" className="h-12 w-auto" />
    </span>
  );
}

function SectionHead({
  kicker,
  children,
}: {
  kicker: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto mb-16 max-w-3xl text-center">
      <p className="text-sm font-medium uppercase tracking-[0.08em] text-teal">{kicker}</p>
      <h2 className="mt-4 text-4xl font-bold uppercase tracking-tight sm:text-5xl">{children}</h2>
      <span className="mx-auto mt-6 block h-[3px] w-16 bg-teal" />
    </div>
  );
}

function Index() {
  return (
    <div className="font-sans text-[15px] leading-relaxed text-foreground">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-20 border-b border-border bg-background">
        <div className="mx-auto flex h-20 w-[min(1180px,calc(100%-40px))] items-center justify-between">
          <a href="#home" aria-label="PT Teropong Sukses Investama">
            <Wordmark />
          </a>
          <nav className="hidden items-center gap-2 md:flex">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`px-4 py-3 text-xs font-medium uppercase tracking-[0.12em] transition-colors ${
                  item.active
                    ? "border border-teal text-foreground"
                    : "text-muted-foreground hover:text-teal"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="pt-20">
        {/* Hero */}
        <section id="home" className="relative isolate overflow-hidden">
          <img
            src={heroDesk}
            alt=""
            width={1920}
            height={1200}
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-ink/70" />
          <div className="mx-auto w-[min(1180px,calc(100%-40px))] py-40 text-center">
            <p className="text-base uppercase tracking-[0.06em] text-ink-foreground/80 sm:text-xl">
              Strategic Business Partner
            </p>
            <h1 className="mt-4 text-5xl font-light uppercase leading-[1.05] tracking-tight text-ink-foreground sm:text-7xl">
              Building <span className="font-extrabold">opportunities</span>
              <br />
              with a clearer view
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-ink-foreground/80">
              PT Teropong Sukses Investama menghadirkan layanan yang mendukung kebutuhan bisnis
              melalui solusi virtual office, investasi properti, dan layanan pendukung usaha.
            </p>
            <a
              href="#about"
              className="mt-10 inline-block bg-teal px-9 py-4 text-sm font-medium uppercase tracking-[0.12em] text-teal-foreground transition-opacity hover:opacity-90"
            >
              Learn More
            </a>
          </div>
        </section>

        {/* About + services icons */}
        <section id="about" className="py-28">
          <div className="mx-auto w-[min(1180px,calc(100%-40px))]">
            <SectionHead kicker="Something more about us">We are TSI</SectionHead>
            <div className="mx-auto max-w-3xl text-center text-muted-foreground">
              <p>
                PT Teropong Sukses Investama (TSI) merupakan perusahaan yang memiliki fokus pada
                layanan pendukung bisnis, termasuk virtual office, investasi properti, serta layanan
                konsultasi dan kebutuhan usaha terkait.
              </p>
              <p className="mt-5">
                Perusahaan berdiri di Bali pada 2021 dan kemudian memperluas keberadaan bisnis ke
                Bandung dan Jakarta. Website ini dirancang sebagai pusat informasi perusahaan yang
                ringkas, profesional, dan mudah dipahami.
              </p>
            </div>

            <div id="services" className="mt-20 grid gap-14 md:grid-cols-3">
              {[
                {
                  title: "Virtual Office",
                  body: "Solusi alamat dan kebutuhan kantor virtual untuk mendukung kehadiran bisnis secara lebih profesional di kota-kota strategis.",
                  icon: (
                    <path d="M3 21h18M5 21V7l7-4 7 4v14M8 10h8M8 14h8M8 18h4" />
                  ),
                },
                {
                  title: "Property Investment",
                  body: "Peluang dan layanan terkait properti yang dapat mendukung kebutuhan investasi maupun ekspansi bisnis.",
                  icon: <path d="M4 20V9l8-5 8 5v11M7 20v-6h10v6M3 20h18" />,
                },
                {
                  title: "Business & Legal Support",
                  body: "Layanan konsultasi dan pendampingan yang membantu kebutuhan administratif serta aspek pendukung dalam menjalankan bisnis.",
                  icon: <path d="M7 3h10v18H7zM9 7h6M9 11h6M9 15h4" />,
                },
              ].map((s) => (
                <div key={s.title} className="text-center">
                  <span className="mx-auto flex h-32 w-32 items-center justify-center border border-border">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.4}
                      className="h-12 w-12"
                      aria-hidden="true"
                    >
                      {s.icon}
                    </svg>
                  </span>
                  <h3 className="mt-7 text-lg font-bold uppercase tracking-[0.04em]">{s.title}</h3>
                  <p className="mt-4 text-muted-foreground">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Grey call-out strip */}
        <section className="bg-surface">
          <div className="mx-auto flex w-[min(1180px,calc(100%-40px))] flex-col items-center justify-between gap-6 py-8 text-center md:flex-row md:text-left">
            <p className="text-xl sm:text-2xl">
              Company profile this clear{" "}
              <span className="font-bold">makes your business easier to trust.</span>
            </p>
            <button
              type="button"
              onClick={() => window.print()}
              className="shrink-0 bg-teal px-8 py-4 text-sm font-medium uppercase tracking-[0.12em] text-teal-foreground transition-opacity hover:opacity-90"
            >
              Download PDF
            </button>
          </div>
        </section>

        {/* Counters over photo */}
        <section className="relative isolate overflow-hidden">
          <img
            src={countersOffice}
            alt=""
            loading="lazy"
            width={1920}
            height={912}
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-ink/75" />
          <div className="mx-auto grid w-[min(1180px,calc(100%-40px))] gap-12 py-28 text-center text-ink-foreground md:grid-cols-3">
            {[
              { value: "2021", label: "Established in Bali" },
              { value: "3", label: "Key city presence" },
              { value: "30+", label: "Years business experience" },
            ].map((c) => (
              <div key={c.label}>
                <h3 className="text-3xl font-bold uppercase tracking-tight sm:text-4xl">
                  {c.label}
                </h3>
                <span className="mx-auto mt-5 block h-[3px] w-16 bg-teal" />
                <p className="mt-5 text-3xl font-light">{c.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Presence cards */}
        <section id="presence" className="py-28">
          <div className="mx-auto w-[min(1180px,calc(100%-40px))]">
            <SectionHead kicker="Our presence">Connected across key cities</SectionHead>
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  img: cityBali,
                  title: "Bali",
                  body: "Starting point of TSI and home to its early virtual office business.",
                  href: "https://www.google.com/maps/search/?api=1&query=PT+Teropong+Sukses+Investama+Bali",
                },
                {
                  img: cityBandung,
                  title: "Bandung",
                  body: "Expanding business presence and supporting clients in West Java.",
                  href: "https://www.google.com/maps/search/?api=1&query=PT+Teropong+Sukses+Investama+Bandung",
                },
                {
                  img: cityJakarta,
                  title: "Jakarta",
                  body: "A strategic business market for professional services and corporate needs.",
                  href: "https://www.google.com/maps/search/?api=1&query=PT+Teropong+Sukses+Investama+Jakarta",
                },
                {
                  img: cityIndonesia,
                  title: "Indonesia",
                  body: "Building a broader network through practical and accessible business solutions.",
                  href: "#contact",
                },
              ].map((card) => (
                <article key={card.title}>
                  <img
                    src={card.img}
                    alt={card.title}
                    loading="lazy"
                    width={1200}
                    height={912}
                    className="h-56 w-full object-cover"
                  />
                  <h3 className="mt-6 text-xl font-bold uppercase tracking-[0.04em]">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-muted-foreground">{card.body}</p>
                  <a
                    href={card.href}
                    target={card.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener"
                    className="mt-4 inline-block border-b-2 border-teal pb-1 text-xs font-bold uppercase tracking-[0.12em]"
                  >
                    View location
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Teal tagline band */}
        <section className="bg-teal py-32 text-center text-teal-foreground">
          <div className="mx-auto w-[min(1180px,calc(100%-40px))]">
            <p className="text-4xl font-light uppercase tracking-[0.12em] sm:text-6xl">
              Teropong Sukses Investama
            </p>
            <p className="mt-6 text-base uppercase tracking-[0.06em] sm:text-2xl">
              See the opportunity
            </p>
            <p className="mt-2 text-4xl font-light uppercase sm:text-6xl">
              Move with <span className="font-extrabold">confidence</span>
            </p>
          </div>
        </section>

        {/* Values — two column icon list */}
        <section id="values" className="bg-surface py-28">
          <div className="mx-auto grid w-[min(1180px,calc(100%-40px))] gap-x-16 gap-y-14 md:grid-cols-2">
            {[
              {
                title: "Professional",
                body: "Visual identity and information architecture that communicates business credibility.",
                icon: <path d="M4 7h16v12H4zM9 7V5h6v2" />,
              },
              {
                title: "Accessible",
                body: "Information is presented clearly so visitors can understand the company quickly.",
                icon: <path d="M12 5c-5 0-9 7-9 7s4 7 9 7 9-7 9-7-4-7-9-7zM12 9a3 3 0 100 6 3 3 0 000-6z" />,
              },
              {
                title: "Connected",
                body: "Presence across Bali, Bandung, Jakarta and a wider Indonesian business network.",
                icon: <path d="M12 3a9 9 0 100 18 9 9 0 000-18zM3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />,
              },
              {
                title: "Practical",
                body: "Services are explained around real business needs rather than unnecessary complexity.",
                icon: <path d="M4 6h16M4 12h16M4 18h10" />,
              },
            ].map((v) => (
              <div key={v.title} className="flex gap-6">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.4}
                  className="mt-1 h-10 w-10 shrink-0"
                  aria-hidden="true"
                >
                  {v.icon}
                </svg>
                <div>
                  <h3 className="text-lg font-bold uppercase tracking-[0.04em] text-teal">
                    {v.title}
                  </h3>
                  <p className="mt-3 max-w-sm text-muted-foreground">{v.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Trust */}
        <section id="trust" className="py-28">
          <div className="mx-auto w-[min(1180px,calc(100%-40px))]">
            <SectionHead kicker="Corporate trust">Essential information</SectionHead>
            <div className="grid gap-10 md:grid-cols-2">
              <div className="border border-border p-10">
                <h3 className="text-lg font-bold uppercase tracking-[0.04em]">Leadership</h3>
                <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center">
                  <span className="flex h-28 w-28 shrink-0 items-center justify-center border border-border bg-surface text-2xl font-extrabold text-teal">
                    TSI
                  </span>
                  <div>
                    <h4 className="text-xl font-bold">Tero Erik Johansson</h4>
                    <p className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-teal">
                      Founder &amp; Investor
                    </p>
                    <p className="mt-3 text-muted-foreground">
                      Business experience since 1991, with a focus on building practical business
                      opportunities and services.
                    </p>
                  </div>
                </div>
              </div>
              <div className="border border-border p-10">
                <h3 className="text-lg font-bold uppercase tracking-[0.04em]">Company Facts</h3>
                <dl className="mt-6">
                  {[
                    ["Company", "PT Teropong Sukses Investama"],
                    ["Established", "2021 · Bali"],
                    ["Presence", "Bali · Bandung · Jakarta"],
                    ["Core Areas", "Virtual Office · Property · Business Support"],
                  ].map(([k, v]) => (
                    <div key={k} className="border-t border-border py-4">
                      <dt className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                        {k}
                      </dt>
                      <dd className="font-medium">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-ink py-28 text-center text-ink-foreground">
          <div className="mx-auto w-[min(1180px,calc(100%-40px))]">
            <p className="text-sm font-medium uppercase tracking-[0.08em] text-teal">Get in touch</p>
            <h2 className="mt-4 text-4xl font-light uppercase sm:text-5xl">
              Let’s talk about your <span className="font-extrabold">business needs</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-ink-foreground/75">
              Hubungi PT Teropong Sukses Investama untuk informasi layanan dan kebutuhan bisnis
              Anda.
            </p>
            <a
              href="https://wa.me/6281138110810"
              target="_blank"
              rel="noopener"
              className="mt-10 inline-block bg-teal px-9 py-4 text-sm font-medium uppercase tracking-[0.12em] text-teal-foreground transition-opacity hover:opacity-90"
            >
              WhatsApp TSI
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-ink text-ink-foreground/70">
        <div className="mx-auto w-[min(1180px,calc(100%-40px))] pb-10 pt-20">
          <div className="grid gap-14 md:grid-cols-2">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-ink-foreground">
                About Us
              </h3>
              <p className="mt-6 max-w-md">
                PT Teropong Sukses Investama fokus pada layanan pendukung bisnis: virtual office,
                investasi properti, serta konsultasi dan pendampingan usaha di Bali, Bandung, dan
                Jakarta.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-ink-foreground">
                Navigation
              </h3>
              <div className="mt-6 flex flex-wrap gap-x-10 gap-y-3">
                {NAV.filter((n) => !n.active).map((item) => (
                  <a key={item.label} href={item.href} className="hover:text-teal">
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-ink-foreground/15 pt-8 text-xs sm:flex-row sm:items-center">
            <Wordmark tone="light" />
            <span>Company Profile · © 2026 PT Teropong Sukses Investama. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
