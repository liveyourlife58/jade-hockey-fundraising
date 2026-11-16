"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { QRCodeSVG } from "qrcode.react";
import {
  gear,
  site,
  teamFees,
  venmoPayUrl,
  type GearItem,
  type GearStatus,
} from "@/data/site";
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

function formatDollars(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function GearBoard() {
  const reduceMotion = useReducedMotion();
  const duration = reduceMotion ? 0 : 0.7;
  const venmoUrl = venmoPayUrl();
  const progress = Math.min(
    100,
    Math.round((teamFees.raised / teamFees.goal) * 100),
  );
  const remaining = Math.max(0, teamFees.goal - teamFees.raised);

  return (
    <section
      id="gear"
      className="mx-auto w-full max-w-6xl scroll-mt-8 px-6 pb-20 lg:pb-28"
    >
      <div
        id="fees"
        className="scroll-mt-8 overflow-hidden rounded-2xl border border-sand/15 bg-white/5"
      >
        <div className="kachina-stripe h-1.5" />
        <div className="grid gap-8 p-6 md:grid-cols-3 md:items-center md:p-8">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-clay">
              {teamFees.seasonLabel}
            </p>
            <h2 className="mt-3 font-display text-4xl text-bone sm:text-5xl">
              Help Jade stay on the ice
            </h2>
            <p className="mt-3 text-sm leading-6 text-sand/75">
              Ice time, coaching, tournaments, and travel for Kachina’s 14U Red.
            </p>
            <h3 className="mt-6 font-display text-3xl text-bone">
              {formatDollars(teamFees.goal)} goal
            </h3>
            <div className="mt-4 flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="font-display text-3xl text-clay">
                  {formatDollars(teamFees.raised)}
                </p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-sand/60">
                  raised
                </p>
              </div>
              <div className="text-right">
                <p className="font-display text-2xl text-bone">
                  {formatDollars(remaining)}
                </p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-sand/60">
                  to go
                </p>
              </div>
            </div>
            <div
              className="relative mt-6 py-5"
              role="progressbar"
              aria-valuenow={progress}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={`${progress}% of team fees raised`}
            >
              <div className="h-2.5 overflow-hidden rounded-sm bg-rink/80">
                <motion.div
                  className="kachina-stripe h-full"
                  initial={reduceMotion ? false : { width: 0 }}
                  whileInView={{ width: `${progress}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: duration || 1.1, ease: "easeOut" }}
                  style={{ width: `${progress}%` }}
                />
              </div>
              <motion.div
                className="pointer-events-none absolute top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
                initial={reduceMotion ? false : { left: "0%" }}
                whileInView={{ left: `${progress}%` }}
                viewport={{ once: true }}
                transition={{ duration: duration || 1.1, ease: "easeOut" }}
                style={{ left: `${progress}%` }}
              >
                <Image
                  src="/fs-arizona-coyotes-primary-on-black-2022-750x487.png"
                  alt=""
                  width={72}
                  height={47}
                  className="h-12 w-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]"
                />
              </motion.div>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-clay">
              Gear board
            </p>
            <h3 className="mt-2 font-display text-4xl text-bone sm:text-5xl">
              Put your name on what she wears
            </h3>
            <p className="mt-3 text-sm leading-6 text-sand/75">
              Sponsored slots stay on the board until she needs an upgrade. Then
              the badge comes down and the next sponsor takes the slot.
            </p>
            <ol className="mt-4 space-y-2 text-sm leading-6 text-sand/80">
              <li>
                <span className="font-semibold text-clay">01</span> Pick an open
                slot or Upgrade Needed item below.
              </li>
              <li>
                <span className="font-semibold text-clay">02</span> Scan the code
                and send that amount with the gear name in the note.
              </li>
              <li>
                <span className="font-semibold text-clay">03</span> Your name goes
                on the badge while Jade wears it.
              </li>
            </ol>
          </div>

          <a
            href={venmoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative mx-auto h-fit w-full max-w-[14rem] overflow-hidden rounded-2xl border border-sand/20 bg-rink px-5 pb-5 pt-6 text-center md:mx-0 md:justify-self-end"
            aria-label="Open Venmo for Jade's team fees or gear"
          >
            <span className="mx-auto block w-fit overflow-hidden rounded-sm bg-bone p-2">
              <QRCodeSVG
                value={venmoUrl}
                size={168}
                bgColor="#f3ead6"
                fgColor="#050505"
                marginSize={4}
                level="M"
                title="Venmo QR for Jade's team fees and gear"
              />
            </span>
            <span className="mt-3 block font-display text-xl text-clay">
              Venmo
            </span>
            <span className="mt-1 block text-xs text-sand/70">@{site.venmo}</span>
          </a>
        </div>
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
          <p className="font-display text-2xl text-clay">
            ${item.amount}
            {item.quantity && item.quantity > 1 ? (
              <span className="ml-1.5 text-lg text-sand/70">× {item.quantity}</span>
            ) : null}
          </p>
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
