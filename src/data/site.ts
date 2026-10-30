/**
 * Jade's fundraising page content.
 * Paste real shop URLs into each fundraiser `href` — the cards update automatically.
 * Add or remove items in the array to change the lists on the page.
 */

export const site = {
  player: "Jade",
  jerseyNumber: "16",
  season: "2026–2027",
  headline: "Help Jade hit the ice this season",
  intro:
    "Hockey is Jade’s favorite thing in the world — early practices, new skates, private coaching, tournament travel, and all the little costs that add up fast. Shop one of her fundraising lists below. Every purchase helps cover her season, including the extra coaching that keeps her growing on the ice.",
  thankYou:
    "Thank you for supporting Jade. It means the world to our family, and it keeps her on the ice.",
};

export type Fundraiser = {
  id: string;
  number: string;
  title: string;
  description: string;
  href: string;
  cta: string;
  tag: string;
};

export const fundraisers: Fundraiser[] = [
  {
    id: "gear",
    number: "01",
    title: "Team Gear",
    description:
      "Hoodies, tees, and rink-side merch. A portion of every order goes toward Jade’s hockey costs.",
    href: "https://example.com/jade-team-gear",
    cta: "Shop team gear",
    tag: "Apparel",
  },
  {
    id: "treats",
    number: "02",
    title: "Treats & Kits",
    description:
      "Cookies, chocolate, and snack kits that friends and family actually want. Easy to order, ships to you.",
    href: "https://example.com/jade-treats",
    cta: "Order treats",
    tag: "Snacks",
  },
  {
    id: "gifts",
    number: "03",
    title: "Gift List",
    description:
      "Browse Jade’s fundraising catalog for gifts, household goods, and seasonal favorites.",
    href: "https://example.com/jade-gift-list",
    cta: "Browse the list",
    tag: "Catalog",
  },
];
