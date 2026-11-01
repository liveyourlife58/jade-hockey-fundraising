/**
 * Jade's fundraising page content.
 * Paste real shop URLs into each fundraiser `href` — the cards update automatically.
 * Add or remove items in the array to change the lists on the page.
 */

export const site = {
  player: "Jade",
  jerseyNumber: "16",
  season: "2026–2027",
  seasonCount: "year 7",
  team: "Kachina’s 14U Red",
  headline: "Help Jade hit the ice this season",
  intro:
    "Hockey is Jade’s favorite thing in the world — early practices, new skates, private coaching, tournament travel, and all the little costs that add up fast. There are three ways to help: sponsor her gear, shop a fundraiser, or support her hockey club. Every bit helps cover her season, including the extra coaching that keeps her growing on the ice.",
  thankYou:
    "Thank you for supporting Jade. It means the world to our family, and it keeps her on the ice.",
  /**
   * Venmo handle without the @. Shown under the QR code.
   * `venmoUrl` is the scan/pay link encoded in the QR.
   */
  venmo: "Brandie-Sager",
  venmoUrl:
    "https://venmo.com/code?user_id=2735823569027072424&created=1793559674",
};

/**
 * Jade’s goals. Add or edit items here — the section updates automatically.
 */
export type Goal = {
  id: string;
  tag: string;
  title: string;
  description: string;
};

export const goals: Goal[] = [
  {
    id: "14u-green",
    tag: "2027–2028",
    title: "Make Kachina’s 14U Green",
    description:
      "Earn a roster spot on Kachina’s 14U Green for the 2027–2028 season.",
  },
  {
    id: "ncaa-d1",
    tag: "College",
    title: "Play D1 NCAA hockey",
    description:
      "Get selected to play Division I collegiate hockey. Right now, Minnesota is the dream.",
  },
];

export type Fundraiser = {
  id: string;
  title: string;
  window: string;
  description: string;
  href: string;
};

export type HelpWay = {
  id: string;
  number: string;
  title: string;
  description?: string;
  href?: string;
  cta?: string;
  tag: string;
  shops?: boolean;
  openGear?: boolean;
  clubSupport?: boolean;
};

export const helpWays: HelpWay[] = [
  {
    id: "sponsor-gear",
    number: "01",
    title: "Sponsor Her Gear",
    description:
      "Put your name on a helmet, stick, or pair of skates. Your support stays on that card until she needs an upgrade.",
    href: "#gear",
    cta: "See the gear board",
    tag: "Venmo",
    openGear: true,
  },
  {
    id: "fundraiser",
    number: "02",
    title: "Purchase from a Fundraiser",
    tag: "Shop",
    shops: true,
  },
  {
    id: "hockey-club",
    number: "03",
    title: "Support Kachina’s Girls Hockey Club",
    description:
      "Help the Kachinas keep Jade on the ice — donate, or put your name on team gear around the rink.",
    tag: "Club",
    clubSupport: true,
  },
];

export type ClubOption = {
  id: string;
  title: string;
  description: string;
  href?: string;
};

export const clubOptions: ClubOption[] = [
  {
    id: "donate",
    title: "Donate to the Kachinas Organization",
    description:
      "Direct support for ice time, coaching, travel, and the day-to-day costs of running Jade’s club.",
  },
  {
    id: "practice-jersey",
    title: "Purchase a Practice Jersey Advertisement",
    description:
      "Put your name or business on the jerseys the team wears at every practice.",
  },
  {
    id: "rink-board",
    title: "Purchase an Ice Rink Board Advertisement",
    description:
      "Your name or company on the boards around the rink — seen at every game and skate.",
  },
];

export const fundraisers: Fundraiser[] = [
  {
    id: "sees",
    title: "See’s Candies",
    window: "Today–December 4",
    description:
      "Chocolates, candy, and holiday gifts through See’s online Yum-Raising shop.",
    href: "https://www.yumraising.com/store/winter-2026-arizona-kachinas-14-red-26-27-c673/JadBir12199",
  },
  {
    id: "lynch-creek",
    title: "Lynch Creek Farm",
    window: "Today–December 13",
    description: "Fresh wreaths, greenery, and holiday decorations.",
    href: "https://lynchcreekwreaths.com/?campaign_id=7076381",
  },
  {
    id: "raiseright",
    title: "RaiseRight",
    window: "Shop anytime",
    description:
      "Online shopping, gift cards, travel bookings, dining, and more — with shopping bonuses available.",
    href: "https://www.raiseright.com/enroll/RR-DFYCR7YK2N?utm_source=desktop_invite&utm_campaign=p2p_invite&utm_medium=copy",
  },
];

/**
 * Jade's on-ice gear board.
 *
 * status:
 *  - "available" — open slot, QR is shown
 *  - "sponsored" — show the sponsor badge; hide the QR until an upgrade is needed
 *  - "upgrade-needed" — take the old name down and show "Upgrade Needed" with the QR
 *
 * After someone Venmos a slot, set status to "sponsored" and put their name
 * or company in `sponsor`. Add `thankYou` for the note Jade wrote them —
 * it appears over her photo when someone hovers the name badge.
 * When that piece is worn out or she sizes up, switch status to
 * "upgrade-needed" and clear `sponsor` and `thankYou`.
 *
 * Drop a photo in /public/gear and set `photo` to "/gear/helmet.jpg" to
 * replace the illustration.
 */
export type GearStatus = "available" | "sponsored" | "upgrade-needed";

export type GearItem = {
  id: string;
  name: string;
  description: string;
  amount: number;
  status: GearStatus;
  sponsor?: string;
  thankYou?: string;
  photo?: string;
};

export const gear: GearItem[] = [
  {
    id: "helmet",
    name: "Helmet",
    description: "The lid that keeps her safe at every practice and game.",
    amount: 150,
    status: "sponsored",
    sponsor: "Arlo Webb",
    thankYou:
      "My brain helps me make great decisions on the ice. Thank you for protecting it! Love you Great Grandpa!",
    photo: "/bauer-ims-5-helmet-no-cage.png",
  },
  {
    id: "shoulders",
    name: "Shoulder Pads",
    description: "Upper-body protection for battles in the corners.",
    amount: 200,
    status: "available",
    photo: "/ccm-jetspeed-ftw-shoulder-pads.png",
  },
  {
    id: "breezers",
    name: "Breezers / Pants",
    description: "Hockey pants with the padding she needs in her own end.",
    amount: 225,
    status: "available",
    photo: "/BauerProSeriesVelcroHockeyPants.png",
  },
  {
    id: "shins",
    name: "Shin Pads",
    description: "Blocked shots and slap passes start here.",
    amount: 80,
    status: "available",
    photo: "/BauerSupremeM5ProShinGuards.png",
  },
  {
    id: "elbows",
    name: "Elbow Pads",
    description: "Protection for every fall, bump, and board battle.",
    amount: 55,
    status: "available",
    photo: "/BauerSupremeM3ElbowPads.png",
  },
  {
    id: "skates",
    name: "Skates",
    description: "The most important pair of shoes she owns.",
    amount: 500,
    status: "available",
    photo: "/bauer-supreme-m40-skate-junior-pair.png",
  },
  {
    id: "stick",
    name: "Stick",
    description: "Her shot, her pass, her whole game in her hands.",
    amount: 300,
    status: "sponsored",
    sponsor: "Shannon Sager",
    thankYou:
      "I grin every time I tape this stick before a game. Thank you for helping me play the sport I love. Love you Grandpa!",
    photo: "/hyperlite_stick.png",
  },
  {
    id: "sharpening",
    name: "Skate Sharpening",
    description: "Edges wear down fast. This slot comes back around often.",
    amount: 15,
    status: "available",
    photo: "/SPARX-HOCKEY-SKATE-SHARPENER-3-V1-FOUR.png",
  },
  {
    id: "tape",
    name: "Tape Bag",
    description: "Stick tape, shin-pad tape, and the little stuff that disappears.",
    amount: 20,
    status: "available",
    photo: "/HockeyTapeBag.png",
  },
];

export function venmoPayUrl() {
  return site.venmoUrl;
}
