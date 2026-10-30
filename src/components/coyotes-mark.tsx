import Image from "next/image";

const logoSrc = "/fs-arizona-coyotes-primary-on-black-2022-750x487.png";

export function CoyotesMark({
  className = "",
  priority = false,
  alt = "Arizona Coyotes kachina logo",
}: {
  className?: string;
  priority?: boolean;
  alt?: string;
}) {
  return (
    <Image
      src={logoSrc}
      alt={alt}
      width={750}
      height={487}
      priority={priority}
      className={className}
    />
  );
}

export function JadeAction({
  className = "",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src="/jade_action1.png"
      alt="Jade skating in her hockey jersey"
      width={1079}
      height={2400}
      priority={priority}
      className={className}
    />
  );
}

export function PuckMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 28" className={className} aria-hidden="true">
      <ellipse cx="32" cy="16" rx="28" ry="10" fill="#0a0908" />
      <ellipse cx="32" cy="12" rx="28" ry="10" fill="#1c1612" />
      <ellipse cx="32" cy="11" rx="20" ry="6" fill="#c45c38" opacity="0.45" />
    </svg>
  );
}
