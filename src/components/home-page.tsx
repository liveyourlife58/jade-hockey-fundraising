"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fundraisers, site } from "@/data/site";
import { CoyotesMark, JadeAction, PuckMark } from "@/components/coyotes-mark";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export function HomePage() {
  const reduceMotion = useReducedMotion();
  const duration = reduceMotion ? 0 : 0.7;

  return (
    <div className="desert-night relative min-h-full overflow-x-hidden">
      <div className="kachina-grain pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <CoyotesMark className="absolute left-1/2 top-[6%] h-[78vmin] w-auto -translate-x-1/2 opacity-[0.08]" />
        <CoyotesMark className="absolute -right-[12%] top-[58%] h-[52vmin] w-auto opacity-[0.06]" />
      </div>

      <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <a href="#top" className="flex items-center gap-3">
          <CoyotesMark alt="" className="h-14 w-auto" />
          <span className="font-display text-xl tracking-wide text-sand sm:text-2xl">
            JADE'S HOCKEY FUNDRAISING
          </span>
        </a>
        <a
          href="#lists"
          className="rounded-sm border border-sand/30 bg-sand/10 px-4 py-2 text-sm font-medium text-sand transition hover:bg-clay hover:text-bone hover:border-clay"
        >
          Shop the lists
        </a>
      </header>

      <main id="top" className="relative z-10">
        <section className="mx-auto grid w-full max-w-6xl items-center gap-10 px-6 pb-20 pt-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:pb-28 lg:pt-10">
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              show: { transition: { staggerChildren: reduceMotion ? 0 : 0.12 } },
            }}
          >
            <motion.p
              variants={fadeUp}
              transition={{ duration }}
              className="mb-4 inline-flex rounded-sm border border-sand/25 bg-mesa/20 px-3 py-1 text-xs uppercase tracking-[0.22em] text-sand"
            >
              {site.season} season fundraiser
            </motion.p>
            <motion.h1
              variants={fadeUp}
              transition={{ duration }}
              className="font-display text-6xl leading-[0.9] text-bone sm:text-7xl lg:text-8xl"
            >
              {site.headline}
            </motion.h1>
            <motion.p
              variants={fadeUp}
              transition={{ duration }}
              className="mt-6 max-w-xl text-lg leading-8 text-sand/80"
            >
              {site.intro}
            </motion.p>
            <motion.div
              variants={fadeUp}
              transition={{ duration }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href="#lists"
                className="rounded-sm bg-clay px-6 py-3 text-sm font-semibold text-bone shadow-[0_12px_40px_rgba(196,92,56,0.35)] transition hover:bg-sand hover:text-rink"
              >
                Shop Jade’s lists
              </a>
              <a
                href="#how"
                className="rounded-sm border border-sand/25 px-6 py-3 text-sm font-semibold text-sand transition hover:border-kiva hover:text-bone"
              >
                How it helps
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.92, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: duration || 0.9, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-lg"
          >
            <div className="absolute inset-8 rounded-full bg-clay/25 blur-3xl" />
            <div className="relative mx-auto aspect-[3/4] w-full">
              <JadeAction
                priority
                className="h-full w-full object-cover object-[center_38%]"
              />
            </div>
            <FloatingPuck className="absolute -left-4 top-20 w-16" delay={0} />
            <FloatingPuck className="absolute -right-2 bottom-24 w-20" delay={1.2} />
            <FloatingPuck className="absolute left-10 -bottom-1 w-12" delay={2} />
          </motion.div>
        </section>

        <section
          id="lists"
          className="mx-auto w-full max-w-6xl scroll-mt-8 px-6 pb-20 lg:pb-28"
        >
          <SectionHeading
            eyebrow="Fundraising lists"
            title="Pick a list. Place an order. Help Jade stay on the ice."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {fundraisers.map((item, index) => (
              <motion.article
                key={item.id}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                transition={{ duration, delay: reduceMotion ? 0 : index * 0.08 }}
                whileHover={reduceMotion ? undefined : { y: -8 }}
                className="group relative overflow-hidden rounded-2xl border border-sand/15 bg-white/5 p-6"
              >
                <div className="kachina-stripe absolute inset-x-0 top-0 h-1.5" />
                <div className="flex items-start justify-between">
                  <p className="font-display text-4xl text-clay">{item.number}</p>
                  <span className="rounded-sm border border-sand/20 px-3 py-1 text-xs uppercase tracking-widest text-sand/70">
                    {item.tag}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-4xl text-bone">{item.title}</h3>
                <p className="mt-3 min-h-24 text-sm leading-6 text-sand/75">
                  {item.description}
                </p>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-sm bg-clay px-5 py-2.5 text-sm font-semibold text-bone transition group-hover:bg-sand group-hover:text-rink"
                >
                  {item.cta}
                  <span aria-hidden="true">→</span>
                </a>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="how" className="mx-auto w-full max-w-6xl scroll-mt-8 px-6 pb-20 lg:pb-28">
          <SectionHeading
            eyebrow="How it works"
            title="Three easy steps, and Jade gets closer to her season."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Choose a list",
                copy: "Pick gear, treats, or the gift catalog — whatever you’d actually love to order.",
                tone: "text-clay",
              },
              {
                step: "02",
                title: "Checkout as usual",
                copy: "Your order ships to you. A portion of the sale is credited to Jade’s hockey fundraising.",
                tone: "text-mesa",
              },
              {
                step: "03",
                title: "She hits the ice",
                copy: "Those funds help with ice time, gear, travel, and the rest of a hockey season.",
                tone: "text-kiva",
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.35 }}
                variants={fadeUp}
                transition={{ duration, delay: reduceMotion ? 0 : index * 0.08 }}
                className="rounded-2xl border border-sand/12 bg-rink-mid/80 p-6"
              >
                <p className={`font-display text-5xl ${item.tone}`}>{item.step}</p>
                <h3 className="mt-4 font-display text-3xl text-bone">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-sand/75">{item.copy}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-6 pb-24">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            transition={{ duration }}
            className="overflow-hidden rounded-2xl border border-sand/20 bg-gradient-to-br from-clay/20 via-mesa/15 to-kiva/10 px-8 py-12 text-center"
          >
            <p className="font-display text-5xl text-bone sm:text-6xl">
              {site.thankYou}
            </p>
            <a
              href="#lists"
              className="mt-8 inline-flex rounded-sm bg-clay px-6 py-3 text-sm font-semibold text-bone transition hover:bg-sand hover:text-rink"
            >
              Back to the lists
            </a>
          </motion.div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-sand/15 px-6 py-8 text-center text-sm text-sand/50">
        Made with love for {site.player} · {site.season} hockey season
      </footer>
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs uppercase tracking-[0.24em] text-clay">{eyebrow}</p>
      <h2 className="mt-3 font-display text-4xl text-bone sm:text-5xl">{title}</h2>
    </div>
  );
}

function FloatingPuck({
  className,
  delay,
}: {
  className: string;
  delay: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      animate={
        reduceMotion
          ? undefined
          : { y: [0, -12, 0], rotate: [0, 8, 0] }
      }
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      <PuckMark className="h-auto w-full" />
    </motion.div>
  );
}
