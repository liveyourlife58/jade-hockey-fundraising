import type { ReactNode } from "react";

const sand = "#e4d2a8";
const clay = "#c45c38";
const mesa = "#6e3b5c";
const kiva = "#2f6b4a";
const bone = "#f3ead6";
const ink = "#161210";

export function GearArt({ id }: { id: string }) {
  switch (id) {
    case "helmet":
      return <Helmet />;
    case "shoulders":
      return <Shoulders />;
    case "breezers":
      return <Breezers />;
    case "shins":
      return <Shins />;
    case "elbows":
      return <Elbows />;
    case "skates":
      return <Skates />;
    case "stick":
      return <Stick />;
    case "sharpening":
      return <Sharpening />;
    case "tape":
      return <TapeBag />;
    default:
      return <Stick />;
  }
}

function Frame({ children }: { children: ReactNode }) {
  return (
    <svg viewBox="0 0 200 160" className="h-full w-full" aria-hidden="true">
      {children}
    </svg>
  );
}

function Helmet() {
  return (
    <Frame>
      <ellipse cx="100" cy="88" rx="52" ry="42" fill={ink} />
      <path d="M48 86c4-38 28-58 52-58s48 20 52 58c-8 18-28 30-52 30S56 104 48 86z" fill={kiva} />
      <path d="M52 90c6-32 24-48 48-48s42 16 48 48" fill="none" stroke={sand} strokeWidth="4" />
      <rect x="70" y="92" width="60" height="22" rx="6" fill={ink} stroke={sand} strokeWidth="3" />
      <path d="M62 78h76" stroke={clay} strokeWidth="3" />
      <circle cx="100" cy="68" r="5" fill={mesa} />
    </Frame>
  );
}

function Shoulders() {
  return (
    <Frame>
      <path d="M38 78c0-18 14-30 32-30h60c18 0 32 12 32 30v28c0 10-8 18-18 18H56c-10 0-18-8-18-18z" fill={clay} />
      <path d="M70 52v72" stroke={sand} strokeWidth="3" />
      <path d="M130 52v72" stroke={sand} strokeWidth="3" />
      <ellipse cx="48" cy="70" rx="22" ry="16" fill={mesa} />
      <ellipse cx="152" cy="70" rx="22" ry="16" fill={mesa} />
      <rect x="86" y="60" width="28" height="36" rx="6" fill={kiva} />
    </Frame>
  );
}

function Breezers() {
  return (
    <Frame>
      <path d="M62 40h76l10 18v62H52V58z" fill={mesa} />
      <path d="M52 78h96" stroke={sand} strokeWidth="4" />
      <path d="M100 58v62" stroke={ink} strokeWidth="6" />
      <rect x="56" y="86" width="38" height="34" fill={kiva} />
      <rect x="106" y="86" width="38" height="34" fill={kiva} />
      <path d="M58 44h84" stroke={clay} strokeWidth="5" />
    </Frame>
  );
}

function Shins() {
  return (
    <Frame>
      <rect x="46" y="36" width="42" height="96" rx="14" fill={sand} />
      <rect x="112" y="36" width="42" height="96" rx="14" fill={sand} />
      <rect x="52" y="48" width="30" height="72" rx="8" fill={clay} />
      <rect x="118" y="48" width="30" height="72" rx="8" fill={clay} />
      <path d="M52 70h30M118 70h30M52 92h30M118 92h30" stroke={ink} strokeWidth="3" />
    </Frame>
  );
}

function Elbows() {
  return (
    <Frame>
      <ellipse cx="70" cy="80" rx="34" ry="28" fill={kiva} />
      <ellipse cx="130" cy="80" rx="34" ry="28" fill={kiva} />
      <ellipse cx="70" cy="80" rx="16" ry="14" fill={sand} />
      <ellipse cx="130" cy="80" rx="16" ry="14" fill={sand} />
      <path d="M48 68h44M108 68h44" stroke={clay} strokeWidth="4" />
    </Frame>
  );
}

function Skates() {
  return (
    <Frame>
      <path d="M54 70h70l18 8v22H48z" fill={ink} />
      <path d="M58 62h50c8 0 14 6 16 14H54c2-10 8-14 16-14z" fill={mesa} />
      <rect x="52" y="100" width="86" height="8" rx="2" fill={sand} />
      <path d="M56 108h78" stroke={bone} strokeWidth="3" />
      <path d="M64 108v10M78 108v10M96 108v10M114 108v10M128 108v10" stroke={sand} strokeWidth="3" />
      <circle cx="70" cy="78" r="4" fill={clay} />
      <circle cx="86" cy="76" r="4" fill={clay} />
    </Frame>
  );
}

function Stick() {
  return (
    <Frame>
      <path d="M48 128c18-6 38-8 52-4l8 8c-22 8-44 10-60 6z" fill={sand} />
      <path d="M96 124 156 42" stroke={clay} strokeWidth="10" strokeLinecap="round" />
      <path d="M96 124 156 42" stroke={sand} strokeWidth="4" strokeLinecap="round" />
      <path d="M132 58 148 46" stroke={mesa} strokeWidth="8" />
    </Frame>
  );
}

function Sharpening() {
  return (
    <Frame>
      <rect x="40" y="70" width="120" height="28" rx="6" fill={ink} stroke={sand} strokeWidth="3" />
      <rect x="52" y="62" width="96" height="12" rx="3" fill={clay} />
      <path d="M58 84h84" stroke={bone} strokeWidth="2" />
      <circle cx="100" cy="104" r="8" fill={mesa} />
      <path d="M70 54h60" stroke={kiva} strokeWidth="6" strokeLinecap="round" />
    </Frame>
  );
}

function TapeBag() {
  return (
    <Frame>
      <path d="M60 58h80l10 64H50z" fill={clay} />
      <path d="M70 58c0-16 12-26 30-26s30 10 30 26" fill="none" stroke={sand} strokeWidth="6" />
      <circle cx="86" cy="92" r="12" fill={sand} />
      <circle cx="114" cy="92" r="12" fill={kiva} />
      <circle cx="100" cy="112" r="10" fill={mesa} />
    </Frame>
  );
}
