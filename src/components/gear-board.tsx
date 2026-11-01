"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { QRCodeSVG } from "qrcode.react";
import { gear, site, venmoPayUrl, type GearItem, type GearStatus } from "@/data/site";
import { GearArt } from "@/components/gear-art";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

const badgeCopy: Record<GearStatus, (item: GearItem) => string> = {
  sponsored: (item) => item.sponsor ?? "Sponsored",
  "upgrade-needed": () => "Upgrade Needed",
  available: () => "Open Slot",
};

export function GearBoard() {
  const reduceMotion = useReducedMotion();
  const duration = reduceMotion ? 0 : 0.7;
  const venmoUrl = venmoPayUrl();

  return (
    <section
      id="gear"
      className="mx-auto w-full max-w-6xl scroll-mt-8 px-6 pb-20 lg:pb-28"
    >
      <div className="grid items-center gap-8 overflow-hidden rounded-2xl border border-sand/15 bg-white/5 p-6 md:grid-cols-[1.2fr_auto] md:p-8">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-clay">
            Sponsor her gear
          </p>
          <h2 className="mt-3 font-display text-4xl text-bone sm:text-5xl">
            Put your name on what Jade wears.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-sand/75">
            Your name or company stays on that card — like an ad on the ice —
            until she needs an upgrade. Then the badge comes down, “Upgrade
            Needed” goes up, and the next sponsor takes the slot.
          </p>
          <ol className="mt-5 space-y-3 text-sm leading-6 text-sand/80">
            <li>
              <span className="font-semibold text-clay">01</span> Choose an
              open slot or anything marked Upgrade Needed.
            </li>
            <li>
              <span className="font-semibold text-clay">02</span> Scan the
              Venmo code and send that item’s amount with the gear name in the
              note.
            </li>
            <li>
              <span className="font-semibold text-clay">03</span> We’ll put
              your name or company on the badge while Jade wears it.
            </li>
          </ol>
        </div>
        <a
          href={venmoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative mx-auto overflow-hidden rounded-2xl border border-sand/20 bg-rink px-5 pb-5 pt-6 text-center"
          aria-label="Open Venmo to sponsor Jade's gear"
        >
          <div className="kachina-stripe absolute inset-x-0 top-0 h-1.5" />
          <span className="mx-auto block w-fit overflow-hidden rounded-sm bg-bone p-2">
            <QRCodeSVG
              value={venmoUrl}
              size={168}
              bgColor="#f3ead6"
              fgColor="#050505"
              marginSize={4}
              level="M"
              title="Venmo QR for Jade's hockey gear"
            />
          </span>
          <span className="mt-3 block font-display text-xl text-clay">
            Venmo
          </span>
          <span className="mt-1 block text-xs text-sand/70">@{site.venmo}</span>
        </a>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {gear.map((item, index) => (
          <GearCard
            key={item.id}
            item={item}
            index={index}
            duration={duration}
            reduceMotion={Boolean(reduceMotion)}
          />
        ))}
      </div>
    </section>
  );
}

function GearCard({
  item,
  index,
  duration,
  reduceMotion,
}: {
  item: GearItem;
  index: number;
  duration: number;
  reduceMotion: boolean;
}) {
  const [thanksOpen, setThanksOpen] = useState(false);
  const hasThanks = item.status === "sponsored" && Boolean(item.thankYou);
  const thanksId = `gear-thanks-${item.id}`;

  const openThanks = () => setThanksOpen(true);
  const closeThanks = (event: { currentTarget: EventTarget | null }) => {
    const root = (event.currentTarget as HTMLElement | null)?.closest("article");
    const badge = root?.querySelector("button");
    if (badge && document.activeElement === badge) return;
    setThanksOpen(false);
  };

  return (
    <motion.article
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={fadeUp}
      transition={{ duration, delay: reduceMotion ? 0 : index * 0.04 }}
      className="flex flex-col"
    >
      <div
        className={`relative aspect-[5/4] overflow-hidden bg-sand/25 ${hasThanks ? "cursor-pointer" : ""}`}
        onMouseEnter={hasThanks ? openThanks : undefined}
        onMouseLeave={hasThanks ? closeThanks : undefined}
      >
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_42%,rgb(5_5_5_/_0.55)_78%,rgb(5_5_5_/_0.92)_100%)]"
          aria-hidden="true"
        />
        {item.photo ? (
          <Image
            src={item.photo}
            alt={item.name}
            fill
            className="object-contain p-3"
            sizes="(min-width: 1024px) 20rem, 90vw"
          />
        ) : (
          <div className="relative h-full w-full">
            <GearArt id={item.id} />
          </div>
        )}
        {hasThanks ? (
          <div
            id={thanksId}
            className={`pointer-events-none absolute inset-0 z-20 flex flex-col justify-end transition-opacity duration-300 motion-reduce:transition-none ${
              thanksOpen ? "opacity-100" : "invisible opacity-0"
            }`}
            aria-hidden={!thanksOpen}
          >
            <div className="absolute inset-0 bg-rink" aria-hidden="true" />
            <Image
              src="/jade_headshot_no_background.png"
              alt=""
              fill
              className="object-contain object-[center_12%] p-2"
              sizes="(min-width: 1024px) 20rem, 90vw"
            />
            <div className="relative z-10 bg-gradient-to-t from-rink via-rink/85 to-transparent px-4 pb-4 pt-16">
              <p className="text-[10px] uppercase tracking-[0.22em] text-clay">
                A note from Jade
              </p>
              <p className="mt-1.5 text-sm leading-5 text-bone">{item.thankYou}</p>
            </div>
          </div>
        ) : null}
      </div>

      <div className="rounded-2xl border border-sand/15 bg-white/5 p-5">
        <h3 className="font-display text-3xl text-bone">{item.name}</h3>
        <p className="mt-2 text-sm leading-6 text-sand/75">{item.description}</p>
        <div className="mt-3 flex items-center justify-between gap-3">
          <p className="font-display text-2xl text-clay">${item.amount}</p>
          {hasThanks ? (
            <button
              type="button"
              className={`shrink-0 rounded-sm px-3 py-1.5 text-xs font-semibold uppercase tracking-widest transition hover:brightness-110 ${badgeClass(item.status)}`}
              aria-expanded={thanksOpen}
              aria-controls={thanksId}
              onMouseEnter={openThanks}
              onMouseLeave={closeThanks}
              onFocus={() => setThanksOpen(true)}
              onBlur={() => setThanksOpen(false)}
            >
              {badgeCopy[item.status](item)}
            </button>
          ) : (
            <span
              className={`shrink-0 rounded-sm px-3 py-1.5 text-xs font-semibold uppercase tracking-widest ${badgeClass(item.status)}`}
            >
              {badgeCopy[item.status](item)}
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}

function badgeClass(status: GearStatus) {
  if (status === "sponsored") {
    return "bg-sand text-rink";
  }
  if (status === "upgrade-needed") {
    return "bg-clay text-bone";
  }
  return "border border-sand/40 bg-rink/70 text-sand";
}
