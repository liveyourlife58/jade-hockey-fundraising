"use client";

import { motion, useReducedMotion } from "framer-motion";
import { clubOptions, fundraisers, gear, goals, helpWays, site } from "@/data/site";
import { CoyotesMark, JadeAction, PuckMark } from "@/components/coyotes-mark";
import { GearBoard } from "@/components/gear-board";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export function HomePage() {
  const reduceMotion = useReducedMotion();
  const duration = reduceMotion ? 0 : 0.7;
  const openGear = gear.filter((item) => item.status !== "sponsored");

  return (
    <div className="desert-night relative min-h-full overflow-x-hidden">
      <div className="kachina-grain pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <CoyotesMark className="absolute left-1/2 top-[6%] h-[78vmin] w-auto -translate-x-1/2 opacity-[0.08]" />
        <CoyotesMark className="absolute -right-[12%] top-[58%] h-[52vmin] w-auto opacity-[0.06]" />
      </div>

      <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center px-6 py-6">
        <a href="#top" className="flex items-center gap-3">
          <CoyotesMark alt="" className="h-14 w-auto" />
          <span className="font-display text-xl tracking-wide text-sand sm:text-2xl">
            JADE'S HOCKEY FUNDRAISING
          </span>
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
              className="mb-4 inline-flex max-w-full flex-wrap items-center gap-x-2.5 gap-y-1 rounded-sm border border-sand/25 bg-mesa/20 px-3 py-1.5 text-[11px] uppercase leading-5 tracking-[0.16em] text-sand sm:text-xs"
            >
              <span>{site.team}</span>
              <span className="text-sand/40" aria-hidden="true">
                ·
              </span>
              <span>Fundraising {site.season}</span>
              <span className="text-sand/40" aria-hidden="true">
                ·
              </span>
              <span>{site.seasonCount}</span>
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
          id="goals"
          className="mx-auto w-full max-w-6xl scroll-mt-8 px-6 pb-20 lg:pb-28"
        >
          <SectionHeading eyebrow="Jade’s goals" title="What she’s skating toward" />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {goals.map((goal, index) => (
              <motion.article
                key={goal.id}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                transition={{ duration, delay: reduceMotion ? 0 : index * 0.08 }}
                className="relative overflow-hidden rounded-2xl border border-sand/15 bg-white/5 p-6"
              >
                <div className="kachina-stripe absolute inset-x-0 top-0 h-1.5" />
                <div className="flex items-start justify-between gap-4">
                  <p className="font-display text-4xl text-clay">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <span className="rounded-sm border border-sand/20 px-3 py-1 text-xs uppercase tracking-widest text-sand/70">
                    {goal.tag}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-4xl text-bone">{goal.title}</h3>
                <p className="mt-3 text-sm leading-6 text-sand/75">
                  {goal.description}
                </p>
              </motion.article>
            ))}
          </div>
        </section>

        <section
          id="help"
          className="mx-auto w-full max-w-6xl scroll-mt-8 px-6 pb-20 lg:pb-28"
        >
          <SectionHeading
            eyebrow="Get involved"
            title="3 Ways to help Jade play"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {helpWays.map((item, index) => (
              <motion.article
                key={item.id}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                transition={{ duration, delay: reduceMotion ? 0 : index * 0.08 }}
                whileHover={reduceMotion ? undefined : { y: -8 }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-sand/15 bg-white/5 p-6"
              >
                <div className="kachina-stripe absolute inset-x-0 top-0 h-1.5" />
                <div className="flex items-start justify-between">
                  <p className="font-display text-4xl text-clay">{item.number}</p>
                  <span className="rounded-sm border border-sand/20 px-3 py-1 text-xs uppercase tracking-widest text-sand/70">
                    {item.tag}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-4xl text-bone">{item.title}</h3>
                {item.description ? (
                  <p className="mt-3 flex-1 text-sm leading-6 text-sand/75">
                    {item.description}
                  </p>
                ) : null}
                {item.openGear ? (
                  openGear.length > 0 ? (
                    <ul className="mt-6 space-y-2">
                      {openGear.map((slot) => (
                        <li key={slot.id}>
                          <a
                            href="#gear"
                            className="group/slot flex items-baseline justify-between gap-3 text-sm"
                          >
                            <span className="text-sand/85 transition group-hover/slot:text-bone">
                              {slot.name}
                              {slot.status === "upgrade-needed" ? (
                                <span className="ml-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-clay">
                                  Upgrade
                                </span>
                              ) : null}
                            </span>
                            <span className="shrink-0 font-display text-lg text-clay transition group-hover/slot:text-sand">
                              ${slot.amount}
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-6 text-sm text-sand/70">
                      Every slot is sponsored right now.
                    </p>
                  )
                ) : item.clubSupport ? (
                  <ul className="mt-6 space-y-4">
                    {clubOptions.map((option) => (
                      <li key={option.id}>
                        {option.href ? (
                          <a
                            href={option.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/club block"
                          >
                            <span className="inline-flex items-center gap-2 text-sm font-semibold text-clay transition group-hover/club:text-sand">
                              {option.title}
                              <span aria-hidden="true">→</span>
                            </span>
                            <span className="mt-1 block text-sm leading-5 text-sand/75">
                              {option.description}
                            </span>
                          </a>
                        ) : (
                          <div>
                            <span className="block text-sm font-semibold leading-6 text-clay">
                              {option.title}
                            </span>
                            <span className="mt-1 block text-sm leading-5 text-sand/75">
                              {option.description}
                            </span>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                ) : item.shops ? (
                  <ul className="mt-6 space-y-4">
                    {fundraisers.map((shop) => (
                      <li key={shop.id}>
                        <a
                          href={shop.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/shop block"
                        >
                          <span className="inline-flex items-center gap-2 text-sm font-semibold text-clay transition group-hover/shop:text-sand">
                            {shop.title}
                            <span aria-hidden="true">→</span>
                          </span>
                          <span className="mt-1 block text-[11px] uppercase tracking-[0.16em] text-sand/60">
                            {shop.window}
                          </span>
                          <span className="mt-1 block text-sm leading-5 text-sand/75">
                            {shop.description}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <a
                    href={item.href}
                    target={item.href?.startsWith("#") ? undefined : "_blank"}
                    rel={
                      item.href?.startsWith("#")
                        ? undefined
                        : "noopener noreferrer"
                    }
                    className="mt-6 inline-flex w-fit items-center gap-2 rounded-sm bg-clay px-5 py-2.5 text-sm font-semibold text-bone transition group-hover:bg-sand group-hover:text-rink"
                  >
                    {item.cta}
                    <span aria-hidden="true">→</span>
                  </a>
                )}
              </motion.article>
            ))}
          </div>
        </section>

        <GearBoard />

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
